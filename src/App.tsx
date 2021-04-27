import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/Button/Button"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled >我是一个按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >我是一个大按钮</Button>
        <Button onClick={(e) => {console.log(e)}} >我是一个按钮</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} >我是一个小按钮</Button>
        <Button btnType={ButtonType.Danger}>我是一个按钮</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="https://www.baidu.com">baiduLink</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">禁用的baiduLink</Button>
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
