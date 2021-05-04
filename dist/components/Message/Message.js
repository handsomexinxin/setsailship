var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import reactDom from "react-dom";
import Message from "./MessageItm";
var wrap;
var createMessage = function () {
    return function (props) {
        var key = props.key;
        if (typeof document === "undefined") {
            return;
        }
        if (!wrap) {
            //如果有的话，说明已经调用过这个函数了，这个空div就可以一直复用
            wrap = document.createElement("div");
            wrap.setAttribute("class", "setsail-message");
            wrap.style.cssText = "\n        line-height:1.5;\n        text-align:center;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        position: fixed;\n        z-index: 100;\n        top: 0;\n\t\t\t\twidth: auto;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translateX(-50%);\n      ";
            if (wrap) {
                document.body && document.body.appendChild(wrap); //挂body上
            }
        }
        else {
            if (key) {
                var children = wrap.children;
                var leng = children.length;
                for (var i = 0; i < leng; i++) {
                    var DOM = children.item(i);
                    if (key === DOM.getAttribute("key")) {
                        return null;
                    }
                }
            }
        }
        var divs = document.createElement("div");
        divs.setAttribute("class", "message-item");
        if (key) {
            divs.setAttribute("key", key);
        }
        divs.setAttribute("class", "message-item");
        wrap.appendChild(divs);
        reactDom.render(React.createElement(Message, __assign({ rootDom: wrap, parentDom: divs }, props)), divs);
    };
};
/**
 * message 全局轻提示
 * ~~~js
 * // 这样引用
 * import { message } from 'setsailship'
 * ~~~
 */
export var message = createMessage();
export default createMessage();
