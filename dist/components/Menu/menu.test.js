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
import { render, fireEvent, cleanup } from "@testing-library/react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
var testProps = {
    defaultIndex: "0",
    onSelect: jest.fn(),
    className: 'test'
};
var testVerProps = {
    defaultIndex: "0",
    onSelect: jest.fn(),
    mode: "vertical"
};
var generateMenu = function (props) {
    return (React.createElement(Menu, __assign({}, props),
        React.createElement(MenuItem, null, "active"),
        React.createElement(MenuItem, { disabled: true }, "disabled"),
        React.createElement(SubMenu, { title: "dropdown" },
            React.createElement(MenuItem, null, "dropdown 1"),
            React.createElement(MenuItem, null, "dropdown 2")),
        React.createElement(MenuItem, null, "xyz")));
};
var wrapper, menuElement, activeElement, disabledElement;
describe('test Menu and MenuItem component', function () {
    beforeEach(function () {
        wrapper = render(generateMenu(testProps));
        menuElement = wrapper.getByTestId("test-menu");
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    });
    it('should render correct Menu and MenuItem based on default props', function () {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('setsail-menu test');
        // expect(menuElement.getElementsByTagName("li").length).toEqual(3) //不分层级
        expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
        expect(activeElement).toHaveClass("menu-item is-active");
        expect(disabledElement).toHaveClass("menu-item is-disabled");
    });
    it('click item should change active and call the right callback', function () {
        var thirdItem = wrapper.getByText("xyz");
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass("is-active");
        expect(activeElement).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith('3');
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass("is-active");
        expect(testProps.onSelect).not.toHaveBeenLastCalledWith(1);
    });
    it('should render vertical mode when mode is set to vertical', function () {
        cleanup();
        var wrapper = render(generateMenu(testVerProps));
        var menuElement = wrapper.getByTestId("test-menu");
        expect(menuElement).toHaveClass('menu-vertical');
    });
});
