import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  children: "123",
}

export const Demo = () => <>
  <Button type="primary" style={{ marginRight: 5 }}>Primary Button</Button>
  <Button style={{ marginRight: 5 }}>Default Button</Button>
  <Button style={{ marginRight: 5 }} type="dashed">Dashed Button</Button>
  <br />
  <Button type="text" style={{ marginRight: 5 }}>Text Button</Button>
  <Button type="link" style={{ marginRight: 5 }}>Link Button</Button>
</>


export const ClassNameProps = () => <>
  <Button className="my-btn">ClassNameProps</Button>
</>
