import React from 'react';
import Button from '@material-ui/core/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template = (args) => 
  <Button {...args}>Button</Button>;

// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  variant: 'contained',
};

// プライマリ
export const primary = Template.bind({});
primary.storyName = 'プライマリ';
primary.args = {
  variant: 'contained',
  color: 'primary',
};

// アウトライン
export const outline = Template.bind({});
outline.storyName = 'アウトライン';
outline.args = {
  variant: 'outlined',
};

// プライマリ、横幅いっぱい
export const primaryFullWidthButton = Template.bind({});
primaryFullWidthButton.storyName = 'プライマリ、横幅いっぱい';
primaryFullWidthButton.args = {
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
};

// アウトライン、横幅いっぱい
export const outlinedFullWidthButton = Template.bind({});
outlinedFullWidthButton.storyName = 'アウトライン、横幅いっぱい';
outlinedFullWidthButton.args = {
  variant: 'outlined',
  color: 'primary',
  fullWidth: true,
};