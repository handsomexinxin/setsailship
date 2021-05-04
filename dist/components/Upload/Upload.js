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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import React, { useRef, useState } from "react";
import axios from "axios";
import UploadList from './UploadList';
import Dragger from './Dragger';
/**
 * Upload 文件上传
 * ~~~js
 * // 这样引用
 * import { Upload } from 'setsailship'
 * ~~~
 */
export var Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove, name = props.name, data = props.data, headers = props.headers, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag;
    var fileInput = useRef(null);
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var uploadFileList = function (uploadFile, upDataObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === uploadFile.uid) {
                    return __assign(__assign({}, file), upDataObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = "";
        }
    };
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) {
                return item.uid !== file.uid;
            });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + "upload-file",
            status: "ready",
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        };
        setFileList(function (prevList) {
            return __spreadArray([_file], prevList);
        });
        var formData = new FormData();
        formData.append(name || "file-name", file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { "content-Type": "multipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                // console.log(e);
                // console.log(percentage);
                if (percentage < 100) {
                    uploadFileList(_file, { percent: percentage, status: "uploading" });
                    if (onProgress) {
                        onProgress(percentage, _file);
                    }
                }
            }
        }).then(function (resp) {
            console.log("success", resp);
            uploadFileList(_file, { percent: 100, status: "success", response: resp.data });
            if (onSuccess) {
                onSuccess(resp.data, file);
            }
            if (onProgress) {
                onProgress(100, _file);
            }
            if (onChange) {
                onChange(file);
            }
        }).catch(function (err) {
            uploadFileList(_file, { status: "error", error: err });
            console.log("error", err);
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    console.log("fileList", fileList);
    return (React.createElement("div", { className: "setsail-upload-component" },
        React.createElement("div", { className: "setsail-upload-input", onClick: handleClick, style: { display: "inline-block" } },
            drag ? React.createElement(Dragger, { accept: accept, onFile: function (files) { uploadFiles(files); } }, "children") : children,
            React.createElement("input", { className: "setsail-file-input", type: "file", ref: fileInput, style: { display: "none" }, onChange: handleFileChange, accept: accept, multiple: multiple })),
        React.createElement(UploadList, { fileList: fileList, onRemove: handleRemove })));
};
Upload.defaultProps = {
    name: "file-name",
    withCredentials: false,
    drag: false
};
export default Upload;
