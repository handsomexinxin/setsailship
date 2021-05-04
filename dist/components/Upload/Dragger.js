import React, { useState } from "react";
import classNames from 'classnames';
import message from "../Message/Message";
export var Dragger = function (props) {
    var onFile = props.onFile, children = props.children, accept = props.accept;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var classes = classNames('setsail-uploader-dragger', {
        'is-dragover': dragOver
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        if (accept) {
            var suffix_1 = accept.substring(1);
            console.log(e.dataTransfer.files[0].type.includes(suffix_1));
            var newFiles = e.dataTransfer.files;
            var flag_1 = true;
            Array.prototype.forEach.call(newFiles, function (file) {
                if (!file.type.includes(suffix_1)) {
                    message({ content: file.name + "\u4E0D\u7B26\u5408\u7C7B\u578B\u8981\u6C42, \u8BF7\u91CD\u65B0\u9009\u62E9", type: "warning" });
                    flag_1 = false;
                }
            });
            if (flag_1) {
                onFile(newFiles);
            }
        }
        else {
            onFile(e.dataTransfer.files);
        }
    };
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (React.createElement("div", { className: classes, onDragOver: function (e) { handleDrag(e, true); }, onDragLeave: function (e) { handleDrag(e, false); }, onDrop: handleDrop }, children));
};
export default Dragger;
