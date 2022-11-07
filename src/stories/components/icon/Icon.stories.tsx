import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Icon from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  // https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon  {...args} />

export const Copy = Template.bind({});

Copy.args = {
  type: "copy",
  size: 32
}

export const Demo = () => <>
  <Icon />
</>
