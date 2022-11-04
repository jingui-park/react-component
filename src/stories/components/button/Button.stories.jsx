import React from 'react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button1',
  component: Button,
};

export const Demo = () => <>
  <Button type="default">Default</Button>
  <Button type="primary">Primary</Button>
</>


export const ClassNameProps = () => <>
  <Button className="my-btn">ClassNameProps</Button>
</>
