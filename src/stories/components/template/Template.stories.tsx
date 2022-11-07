import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Temp from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Template',
  component: Temp,
  // https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Temp>;

const Template: ComponentStory<typeof Temp> = (args) => <Temp />

// export const Primary = Template.bind({});

// Primary.args = {
//   type: "primary",
//   children: "123",
// }

export const Demo = () => <>
  <Temp />
</>
