import React from 'react';
import FavoriteButton from './index';

export default {
  title: 'Atoms/FavoriteButton',
  component: FavoriteButton,
}

const Template = (args) => 
  <FavoriteButton {...args}>Button</FavoriteButton>;
// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  "favoriteCount": "12345",
  "isFavorite" : true,
};
