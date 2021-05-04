import React from 'react';
import message from './components/Message/Message';
import Button from "./components/Button/Button"
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import Icon from "./components/Icon/Icon";
import { useState } from 'react';
import Transition from "./components/Transition/Transition"
import Input from "./components/Input/Inipt"
import Upload from "./components/Upload/Upload"
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <Upload action="asdf"></Upload>
      <div style={{ width: "300px", marginTop: "10px" }}>
        <Input placeholder="placeholder" icon="search" />
        <Input placeholder="placeholder" size="ls" />
        <Input placeholder="placeholder" size="sm"/>
        <Input disabled placeholder="placeholder" />
        <Input placeholder="placeholder" append="@qq.com" />
        <Input placeholder="placeholder" prepend="https://" />
        <Input placeholder="placeholder" prepend="https://" append="@qq.com" />
        <Input placeholder="placeholder" prepend="https://" append={<Button>Button</Button>} />
      </div>
      <div>
        <Icon icon="align-right" theme="primary" size="7x" />
        <Icon icon="address-card" theme="danger" size="7x" />
        <Icon icon="address-card" theme="dark" size="7x" />
        <Icon icon="address-card" theme="info" size="7x" />
        <Icon icon="address-card" theme="success" size="7x" />

      </div>
      <header className="App-header">
        <Menu defaultIndex={"0"} onSelect={(index) => { console.log(index) }}>
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

        <Menu defaultIndex={"0"} onSelect={(index) => { console.log(index) }} mode="vertical" defaultOpenSunMenus={["2"]} >
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

        <Button btnType="primary" size="lg" onClick={(e) => { message({ content: "successMessage被调用", type: "error", duration: 2000 }) }} >我是message按钮</Button>
        <Button btnType="default" onClick={(e) => { message({ content: "errorMessage被调用", type: "error", duration: 4000 }) }} >我是message按钮</Button>
        <Button btnType="default" onClick={(e) => { message({ content: "warningMessage被调用", type: "warning", duration: 3000 }) }} >我是message按钮</Button>
        <Button btnType="link" onClick={(e) => { message({ content: "infoMessage被调用", key: "123123", type: "info", duration: 5000 }) }} >我是message按钮</Button>
        <Button btnType="link" onClick={(e) => { message({ content: "infoMessage被调用", key: "123as123", type: "error", duration: 1500 }) }} >我是message按钮我有key</Button>
        <Button btnType="link" onClick={(e) => { message({ content: "infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用infoMessage被调用", key: "123as123qwe", type: "info", duration: 15000 }) }} >我是message按钮我有key</Button>

        {/* <Alert content="asfd"></Alert> */}
        {/* <Button disabled >我是一个按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >我是一个大按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} >我是一个小按钮</Button>
        <Button btnType={ButtonType.Danger}>我是一个按钮</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="https://www.baidu.com">baiduLink</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">禁用的baiduLink</Button> */}
        <Button onClick={() => setShow(!show)} >Toggle</Button>
        <Transition
          timeout={300}
          in={show}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p><p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p><p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p><p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p><p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p><p>
              Edit <code>src/App.tsx</code> and save to reload.
        </p>
          </div>
        </Transition>
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
        <Transition
          in={show}
          timeout={300}
          wrapper={true}
        >
          <Button size="lg">asdfasd</Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
