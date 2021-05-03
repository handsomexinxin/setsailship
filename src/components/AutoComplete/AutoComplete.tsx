import React, { FC, useState, ChangeEvent, ReactElement, useEffect, KeyboardEvent, useRef } from "react"
import classNames from "classnames"
import Input, { InputProps } from '../Input/Inipt';
import Icon from "../Icon/Icon"
import useDebounce from "../../hooks/useDebounce"
import useClickOutside from "../../hooks/useClickOutside"
import { Transition } from './../Transition/Transition';

interface DataSourceObject {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement
}
/**
 * autoComplete 自动输入框 通过鼠标或键盘输入内容，是通过Input的包装。
 * ~~~js
 * // 这样引用
 * import { AutoComplete } from 'setsailship'
~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props


  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [ showDropdown, setShowDropdown] = useState(false)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)

  const debounceValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const result = fetchSuggestions(debounceValue)
      if (result instanceof Promise) {
        setLoading(true)
        console.log("result", result);
        result.then((data) => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(result)
        setShowDropdown(true)
        if (result.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      // setSuggestions([])
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debounceValue])

const highlight = (index: number) => {
  if(index < 0) index = 0
  if(index >= suggestions.length) {
    index = suggestions.length - 1
  }
  setHighlightIndex(index)
}
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

    switch (e.key) {
      case "ArrowDown":// 40
      highlight(highlightIndex + 1)
        break;
      case "ArrowUp": //38
      highlight(highlightIndex - 1)
        break;
      case "Escape": // 27
        // setSuggestions([])
        setShowDropdown(false)
        break;
      case "Enter": //13
      if(suggestions[highlightIndex]) {
        handleSelect(suggestions[highlightIndex])
      }
        break;
      default:
        break;
    }

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true

  }
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    // setSuggestions([])
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {
    return (
      <Transition
        timeout={300}
        in={showDropdown || loading}
        animation="zoom-in-top"
        onExited={() => {setSuggestions([])}}
      >
        <ul className="setsail-suggestion-list">
          {loading && <div className="suggstions-loading-icon"><Icon icon="spinner" spin /></div>}
          {suggestions.map((item, index) => {
            const classes = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={classes} onClick={() => handleSelect(item)} >{renderTemplate(item)}</li>
              )
            })}
        </ul>
      </Transition>
    )
  }
  return (
    <div className='setsail-auto-complete' ref={componentRef} >
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  )

}
export default AutoComplete;
