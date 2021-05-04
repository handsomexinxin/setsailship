import { FC, ReactElement } from "react";
import { InputProps } from '../Input/Inipt';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * autoComplete 自动输入框 通过鼠标或键盘输入内容，是通过Input的包装。
 * ~~~js
 * // 这样引用
 * import { AutoComplete } from 'setsailship'
~~~
 * 支持 HTMLInput 的所有基本属性
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
