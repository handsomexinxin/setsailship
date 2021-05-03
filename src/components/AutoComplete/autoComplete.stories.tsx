import React from "react"
import { storiesOf } from "@storybook/react"
import AutoComplete, {DataSourceType} from "./AutoComplete"
import { action } from '@storybook/addon-actions';

interface LakerPlayerProps {
  value: string,
  number: number
}
const SimpleComplete = () => {
  const lakers = ["bradley", "pope", "caruso", "cook", "cousins", "james", "AD", "green", "howard", "kuzma", "McGee", "rando"]
  const lakersWithNumber = [
    {value: "bradley", number: 11},
    {value: "pope", number: 9},
    {value: "caruso", number: 1},
    {value: "cook", number: 2},
    {value: "cousins", number: 3},
    {value: "james", number: 5},
    {value: "green", number: 13},
    {value: "howard", number: 29},

  ]
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
  //   return (
  //     <>
  //       <p>name：{item.value}</p>
  //       <p>number: {item.number}</p>
  //     </>
  //   )
  // }
  const handleFetch = (query: string) => {
    // return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    return fetch(`https://api.github.com/search/users?q=${query}`)
            .then(res => res.json())
            .then(({items}) => {
              console.log(items);
              if(items.length > 0) {
                return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
              }else {
                return {}
              }
            })
  }
  return (
    <AutoComplete 
      fetchSuggestions={handleFetch}
      onSelect={(item) => {action("select")}}
      // renderOption={renderOption}
    />
  )
}

storiesOf("AutoComplete 组件", module)
.add("AutoComplete", SimpleComplete)
