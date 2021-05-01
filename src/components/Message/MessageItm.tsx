import React, {useEffect, useMemo, useState} from "react";
import { unmountComponentAtNode } from "react-dom"
import classNames from "classnames";
import Transition from './../Transition/Transition';
import Icon from "../Icon/Icon"
export enum MessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}
export interface MessageProps {
  type?: MessageType;
  content: string;
  duration?: number,
}
export type MessagePropsBefore = {
	rootDom: HTMLElement; //这个用来干掉parentDom 这个可以常驻
	parentDom: Element | DocumentFragment; //这个是挂载点 要unmount卸载 完毕后卸载挂载点 注意！一共2步卸载，别漏了
};
type messageProps = MessagePropsBefore & MessageProps
const Message: React.FC<messageProps> = (props) => {
	const { rootDom, parentDom, content, duration, type } = props;
	const [timer, setTimer] = useState<any>(null)
	const [messageShow, setShow] = useState(false)
	const classes = classNames("setsail-message-context", {
		[`message-${type}`]: type
	})
	const iconClasses = classNames({
		[`message-icon-${type}`]: type
	})
	const unmount = useMemo(() => {
		if(timer) {
			clearTimeout(timer)
			setTimer(null)
		}
		return () => {
			setShow(false)
			setTimeout(() => {
				if (parentDom && rootDom && rootDom.contains(parentDom)) {
				unmountComponentAtNode(parentDom);
				rootDom.removeChild(parentDom);
			}
			}, 400);
		};
	}, [parentDom, rootDom]);
	useEffect(() => {
		setShow(true)
		setTimer(
			setTimeout(() => {
				unmount();
			}, duration)
		)
	}, [unmount, duration]);
	return(
		<Transition
		in={messageShow}
		timeout={300}
		animation="zoom-in-top"
	>
		<div className={classes} >
			{
				type === 'success'?
				<Icon className={iconClasses} icon="check-circle" ></Icon>
				:type === 'error'?
				<Icon className={iconClasses} icon="times-circle" ></Icon>
				:type === 'warning'?
				<Icon className={iconClasses} icon="exclamation-circle" ></Icon>
				:type === 'info'?
				<Icon className={iconClasses} icon="exclamation-circle" ></Icon>
				:null
			}
			<div className={classNames("message-context")}>{content}</div>
			<div className={classNames("message-close")} style={{zIndex: 102, cursor: "pointer"}} onClick={() => {unmount()}}>
				<Icon icon="times"></Icon>
			</div>
		</div>
	</Transition>
	);
}
Message.defaultProps = {
  type: MessageType.Success,
  duration: 1500
}

export default Message