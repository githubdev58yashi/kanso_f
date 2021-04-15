import React from 'react';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
}

const Template = (args) => 
  <Typography {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur<br/>
    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam<br/>
    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  </Typography>;

// 標準
export const basic = Template.bind({});
basic.storyName = '標準';
basic.args = {
  variant: 'h1',
};

// h3
export const h3 = Template.bind({});
h3.storyName = 'h3';
h3.args = {
  variant: 'h3',
};

// h6
export const h6 = Template.bind({});
h6.storyName = 'h6';
h6.args = {
  variant: 'h6',
};

// ボディ1
export const body1 = Template.bind({});
body1.storyName = 'ボディ1';
body1.args = {
  variant: 'body1',
  gutterBottom: true,
};

// ボディ2
export const body2 = Template.bind({});
body2.storyName = 'ボディ2';
body2.args = {
  variant: 'body2',
  gutterBottom: true,
};

// h3、中央寄せ
export const h3AlignCenter = Template.bind({});
h3AlignCenter.storyName = 'h3、中央寄せ';
h3AlignCenter.args = {
  variant: 'h3',
  align: 'center',
};

// h6、中央寄せ
export const h6AlignCenter = Template.bind({});
h6AlignCenter.storyName = 'h6、中央寄せ';
h6AlignCenter.args = {
  variant: 'h6',
  align: 'center',
};

// body2、右寄せ
export const body2AlignRight = Template.bind({});
body2AlignRight.storyName = 'body2、右寄せ';
body2AlignRight.args = {
  variant: 'body2',
  align: 'right',
};