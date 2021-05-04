import React from "react";
/**
 * Progress 进度条
 * ~~~js
 * // 这样引用
 * import { Progress } from 'setsailship'
 * ~~~
 */
export var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "setsail-progress-bar", style: styles },
        React.createElement("div", { className: "setsail-progress-bar-outer", style: { height: strokeHeight + "px" } },
            React.createElement("div", { className: "setsail-progress-bar-inner color-" + theme, style: { width: percent + "%" } }, showText && React.createElement("span", { className: "inner-text" }, percent + "%")))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary"
};
export default Progress;
