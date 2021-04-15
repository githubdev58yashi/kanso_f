import React from 'react';
import Img from './index';

export default {
  title: 'Atoms/Img',
  component: Img,
}

const Template = (args) => 
<Img
  {...args}
>
</Img>
;

// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  src: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5266/9784844365266.jpg?_ex=120x120',
};