const fs = require("fs");
const { pageTemplate } = require("../template/page");
const filename = process.argv.splice(2)[0] || "Page";

// 驼峰转下划线
const toLine = name => {
  return name
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .slice(1);
};

// 读取文件目录
fs.readdir("src/view", (err, file) => {
  let isExist = false;

  file.forEach(item => {
    if (item.toLocaleLowerCase() === filename.toLocaleLowerCase()) {
      isExist = true;
      console.log(`${filename}已存在`);
    }
  });

  if (!isExist) {
    // 创建目录
    fs.mkdir(`src/view/${filename}`, err => {
      if (err) {
        console.log(`创建失败, ${err}`);
      }
      // 创建less文件
      fs.writeFile(`src/view/${filename}/index.module.less`, "", err => {
        if (err) {
          console.log(`创建失败, ${err}`);
        }
      });

      // 创建index.js文件
      fs.writeFile(
        `src/view/${filename}/index.tsx`,
        pageTemplate(filename),
        err => {
          if (err) {
            console.log(err);
          } else {
            console.log("创建成功");
          }
        }
      );
    });

    // 添加route
    fs.readFile("src/view/Routes.tsx", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let newData = data.split("</Switch>");
        newData[0] =
          `import ${filename} from "./${filename}";\n` +
          newData[0] +
          `<Route path="/${toLine(filename)}" component={${filename}} />\n`;

        // console.log(newData);
        fs.writeFile("src/view/Routes.tsx", newData.join("</Switch>"), err => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }
});
