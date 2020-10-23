const { pageTemplate } = require("../template/page.js");
const fs = require("fs");
const filename = process.argv.splice(2)[0] || "Page";

// 首字母大写
const firstWordUp = name => {
  return name[0].toUpperCase() + name.substr(1);
};

// 驼峰转下划线
const toLine = name => {
  name = name[0].toUpperCase() + name.substr(1);
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
    fs.mkdir(`src/view/${firstWordUp(filename)}`, err => {
      if (err) {
        console.log(`创建失败, ${err}`);
      }
      // 创建less文件
      fs.writeFile(
        `src/view/${firstWordUp(filename)}/index.module.less`,
        "",
        err => {
          if (err) {
            console.log(`创建失败, ${err}`);
          }
        }
      );

      // 创建interface文件
      fs.writeFile(
        `src/view/${firstWordUp(filename)}/index.interface.ts`,
        "export interface State { }",
        err => {
          if (err) {
            console.log(`创建失败, ${err}`);
          }
        }
      );

      // 创建index.tsx文件
      fs.writeFile(
        `src/view/${firstWordUp(filename)}/index.tsx`,
        pageTemplate(firstWordUp(filename)),
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
          `const ${firstWordUp(filename)} = lazy(() => import("./${firstWordUp(
            filename
          )}"));\n` +
          newData[0] +
          `<Route path="/${toLine(filename)}" component={${firstWordUp(
            filename
          )}} />\n`;

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
