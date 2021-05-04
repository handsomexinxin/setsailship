import React from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
declare type AnimationName = {
    /** 动画方向 */
    animation?: 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right';
    /** 是否需要空的块级元素包括来保证transition */
    wrapper?: boolean;
} & CSSTransitionProps;
/**
 *
 * ~~~js
 * 引入
 * import Transition from './Transition';
 * ~~~
 *
 */
export declare const Transition: React.FC<AnimationName>;
export default Transition;
