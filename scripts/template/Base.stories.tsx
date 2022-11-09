import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Base from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Base',
  component: Base,
  // https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base />

// export const Primary = Template.bind({});

// Primary.args = {
//   type: "primary",
//   children: "123",
// }

export const Demo = () => <>
  <Base />
</>
