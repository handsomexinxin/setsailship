import React from "react";
import reactDom from "react-dom"
import Message from "./MessageItm";
let wrap: HTMLElement;
// export MessageType
export enum MessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}
export interface createMessageProps {
  type?: MessageType;
  content: string;
  key?: string;
  duration?: number,
}
const createMessage = () => {
	return (props: createMessageProps) => {
		const { key } = props;
		if (typeof document === "undefined") {
			return;
		}
		if (!wrap) {
			//如果有的话，说明已经调用过这个函数了，这个空div就可以一直复用
			wrap = document.createElement("div");
			wrap.setAttribute("class", "setsail-message");
			wrap.style.cssText = `
        line-height:1.5;
        text-align:center;
        margin: 0;
        padding: 0;
        list-style: none;
        position: fixed;
        z-index: 100;
        top: 0;
				width: auto;
				left: 50%;
				transform: translateX(-50%);
      `;
			if (wrap) {
				document.body && document.body.appendChild(wrap); //挂body上
			}
		}else {
			if(key) {

				let children = wrap.children
				let leng = children.length
				for(let i = 0; i <leng; i++){
					let DOM = children.item(i) as HTMLElement
					if(key === DOM.getAttribute("key")) {
						return null;
					}
				}
			}
		}
		
		const divs = document.createElement("div");
    divs.setAttribute("class", "message-item");
		if(key) {
			divs.setAttribute("key", key);
		}
    divs.setAttribute("class", "message-item");
		wrap.appendChild(divs);
		reactDom.render(
			<Message rootDom={wrap} parentDom={divs} {...props} />,
			divs
		);
	};
};

export default createMessage()