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
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
var defaultProps = {
    onClick: jest.fn()
};
var testProps = {
    btnType: "primary",
    size: "lg",
    className: "klass"
};
var disabledProps = {
    disabled: true,
    onClick: jest.fn()
};
describe('test Button component', function () {
    it('should render the correct default button', function () {
        var wrapper = render(React.createElement(Button, __assign({}, defaultProps), "Nice"));
        var element = wrapper.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeFalsy();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });
    it('should render the correct component based on different props', function () {
        var wrapper = render(React.createElement(Button, __assign({}, testProps), "Nice"));
        var element = wrapper.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual("BUTTON");
        expect(element).toHaveClass("btn-primary btn-lg klass");
    });
    it('should render a link when btnType equals link and href is provided', function () {
        var wrapper = render(React.createElement(Button, { btnType: "link", href: "https://www.baidu.com" }, "Link"));
        var element = wrapper.getByText("Link");
        expect(element.tagName).toEqual("A");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("btn-link");
    });
    it('should render disabled button when disabled set to true', function () {
        var wrapper = render(React.createElement(Button, __assign({}, disabledProps), "Nice"));
        var element = wrapper.getByText("Nice");
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
