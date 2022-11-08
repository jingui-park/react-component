import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Tag from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tag',
  component: Tag,
  // https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag />

export const Primary = Template.bind({});

// Primary.args = {
//   type: "primary",
//   children: "123",
// }

export const Demo = () => <>
  <Tag>123</Tag>
  <Tag closable>223</Tag>
  <Tag closable color="success">success</Tag>
</>

export const Close = () => {

  const onClose = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("prevent")
  }
  return <>
    <Tag closable color="success" onClose={onClose}>success</Tag>
  </>
}
