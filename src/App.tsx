import React from 'react';
import {createMessage, MessageType} from './components/Message/Message';
import Button, {ButtonType, ButtonSize} from "./components/Button/Button"
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={"0"} onSelect={(index) => {console.log(index)}}>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled >
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown" >
          <MenuItem >
            dropdown 1
          </MenuItem>
          <MenuItem >
            dropdown 2
          </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link 3
          </MenuItem>
        </Menu>

        <Menu defaultIndex={"0"} onSelect={(index) => {console.log(index)}} mode="vertical" defaultOpenSunMenus={["2"]} >
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled >
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown" >
          <MenuItem >
            dropdown 1
          </MenuItem>
          <MenuItem >
            dropdown 2
          </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link 3
          </MenuItem>
        </Menu>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => {createMessage()({content:"successMessage被调用", type:MessageType.Success, duration: 2000})}} >我是message按钮</Button>
        <Button btnType={ButtonType.Default} onClick={(e) => {createMessage()({content:"errorMessage被调用", type:MessageType.Error, duration: 4000})}} >我是message按钮</Button>
        <Button btnType={ButtonType.Default} onClick={(e) => {createMessage()({content:"warningMessage被调用", type:MessageType.Warning,duration: 3000})}} >我是message按钮</Button>
        <Button btnType={ButtonType.Link} onClick={(e) => {createMessage()({content:"infoMessage被调用",key: "123123", type:MessageType.Info, duration: 5000})}} >我是message按钮</Button>
        <Button btnType={ButtonType.Link} onClick={(e) => {createMessage()({content:"infoMessage被调用",key: "123123", type:MessageType.Error, duration: 1500})}} >我是message按钮我有key</Button>

        {/* <Alert content="asfd"></Alert> */}
        {/* <Button disabled >我是一个按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >我是一个大按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} >我是一个小按钮</Button>
        <Button btnType={ButtonType.Danger}>我是一个按钮</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="https://www.baidu.com">baiduLink</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">禁用的baiduLink</Button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
