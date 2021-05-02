import { configure, addDecorator, addParameters } from '@storybook/react';
import React from 'react'
// import { withActions } from '@storybook/addon-actions';
import {withLinks} from '@storybook/addon-links';

import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
library.add(fas)
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h4>组件演示</h4>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addDecorator(withLinks)
// addDecorator(withActions)
addParameters({info: { inline: true, header: false}})
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


configure(loaderFn, module);
// configure(require.context("../src", true, /\.stories\.tsx$/), module);

