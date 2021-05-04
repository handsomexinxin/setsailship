import React from 'react';
import message from './components/Message/Message';
import Button from "./components/Button/Button";
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Icon from "./components/Icon/Icon";
import { useState } from 'react';
import Transition from "./components/Transition/Transition";
import Input from "./components/Input/Inipt";
import Upload from "./components/Upload/Upload";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
function App() {
    var _a = useState(true), show = _a[0], setShow = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement(Upload, { action: "asdf" }),
        React.createElement("div", { style: { width: "300px", marginTop: "10px" } },
            React.createElement(Input, { placeholder: "placeholder", icon: "search" }),
            React.createElement(Input, { placeholder: "placeholder", size: "ls" }),
            React.createElement(Input, { placeholder: "placeholder", size: "sm" }),
            React.createElement(Input, { disabled: true, placeholder: "placeholder" }),
            React.createElement(Input, { placeholder: "placeholder", append: "@qq.com" }),
            React.createElement(Input, { placeholder: "placeholder", prepend: "https://" }),
            React.createElement(Input, { placeholder: "placeholder", prepend: "https://", append: "@qq.com" }),
            React.createElement(Input, { placeholder: "placeholder", prepend: "https://", append: React.createElement(Button, null, "Button") })),
        React.createElement("div", null,
            React.createElement(Icon, { icon: "align-right", theme: "primary", size: "7x" }),
            React.createElement(Icon, { icon: "address-card", theme: "danger", size: "7x" }),
            React.createElement(Icon, { icon: "address-card", theme: "dark", size: "7x" }),
            React.createElement(Icon, { icon: "address-card", theme: "info", size: "7x" }),
            React.createElement(Icon, { icon: "address-card", theme: "success", size: "7x" })),
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { defaultIndex: "0", onSelect: function (index) { console.log(index); } },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link 2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, "cool link 3")),
            React.createElement(Menu, { defaultIndex: "0", onSelect: function (index) { console.log(index); }, mode: "vertical", defaultOpenSunMenus: ["2"] },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link 2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown 1"),
                    React.createElement(MenuItem, null, "dropdown 2")),
                React.createElement(MenuItem, null, "cool link 3")),
            React.createElement(Button, { btnType: "primary", size: "lg", onClick: function (e) { message({ content: "successMessage被调用", type: "error", duration: 2000 }); } }, "\u6211\u662Fmessage\u6309\u94AE"),
            React.createElement(Button, { btnType: "default", onClick: function (e) { message({ content: "errorMessage被调用", type: "error", duration: 4000 }); } }, "\u6211\u662Fmessage\u6309\u94AE"),
            React.createElement(Button, { btnType: "default", onClick: function (e) { message({ content: "warningMessage被调用", type: "warning", duration: 3000 }); } }, "\u6211\u662Fmessage\u6309\u94AE"),
            React.createElement(Button, { btnType: "link", onClick: function (e) { message({ content: "infoMessage被调用", key: "123123", type: "info", duration: 5000 }); } }, "\u6211\u662Fmessage\u6309\u94AE"),
            React.createElement(Button, { btnType: "link", onClick: function (e) { message({ content: "infoMessage被调用", key: "123as123", type: "error", duration: 1500 }); } }, "\u6211\u662Fmessage\u6309\u94AE\u6211\u6709key"),
            React.createElement(Button, { btnType: "link", onClick: function (e) { message({ content: "infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用", key: "123as123qwe", type: "info", duration: 15000 }); } }, "\u6211\u662Fmessage\u6309\u94AE\u6211\u6709key"),
            React.createElement(Button, { onClick: function () { return setShow(!show); } }, "Toggle"),
            React.createElement(Transition, { timeout: 300, in: show, animation: "zoom-in-left" },
                React.createElement("div", null,
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."),
                    React.createElement("p", null,
                        "Edit ",
                        React.createElement("code", null, "src/App.tsx"),
                        " and save to reload."))),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            React.createElement(Transition, { in: show, timeout: 300, wrapper: true },
                React.createElement(Button, { size: "lg" }, "asdfasd")))));
}
export default App;
