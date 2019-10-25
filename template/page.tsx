/*
 * @LastEditors: wjc
 * @Description: In User Settings Edit
 * @Author: wjc
 * @Date: 2019-08-05 14:11:18
 * @LastEditTime: 2019-08-05 17:16:53
 */

const pageTemplate = name => {
  const text = name.replace(name[0], name[0].toUpperCase());
  const templateStr = `
  import React from "react";
  import styles from "./index.module.less";
  
  class ${text} extends React.Component {
    constructor() {
      super();
      this.state = {
      };
    }
  
    componentDidMount() {
    }

    render() {
      return (
        <div className={styles.container}>
          
        </div>
      )
    }
  }
  
  export default ${text};
  `;
  return templateStr;
};

module.exports = {
  pageTemplate,
};
