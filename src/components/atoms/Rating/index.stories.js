import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default {
  title: 'Atoms/Rating',
  component: Rating,
}

const Template = (args) => 
  <Rating {...args}></Rating>;

// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  label: '標準',
};

// ReadOnly
export const readOnly = Template.bind({});
readOnly.storyName = '読み取り専用';
readOnly.args = {
  value: 3,
  readOnly: true,
}