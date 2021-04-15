import React from 'react';
import TextField from '@material-ui/core/TextField';

export default {
  title: 'Atoms/TextField',
  component: TextField,
}

const Template = (args) => 
  <TextField {...args}></TextField>;

// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  label: '標準',
};

// filled
export const filled = Template.bind({});
filled.args = {
  label: 'filled',
  variant: 'filled',
};

// outlined
export const outlined = Template.bind({});
outlined.args = {
  label: 'outlined',
  variant: 'outlined',
};

// 必須
export const required = Template.bind({});
required.storyName = '必須';
required.args = {
  label: '必須',
  required: true,
};

// 無効
export const disabled = Template.bind({});
disabled.storyName = '無効';
disabled.args = {
  label: '無効',
  disabled: true,
};

// パスワード
export const password = Template.bind({});
password.storyName = 'パスワード';
password.args = {
  label: 'パスワード',
  type: 'password',
  autoComplete: 'current-password',
};

// 読み取り専用
export const readOnly = Template.bind({});
readOnly.storyName = '読み取り専用';
readOnly.args = {
  label: '読み取り専用',
  value: '読み取り専用',
  InputProps: {readOnly: true},
};

// エラー
export const error = Template.bind({});
error.storyName = 'エラー';
error.args = {
  label: 'エラー',
  value: 'エラー',
  error: true,
  helperText: '入力が間違っています。',
};

// アウトライン、横幅いっぱい
export const fullWidth = Template.bind({});
fullWidth.storyName = '横幅いっぱい';
fullWidth.args = {
  label: '横幅いっぱい',
  variant: 'outlined',
  fullWidth: true,
}