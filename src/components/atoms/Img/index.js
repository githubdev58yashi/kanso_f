import React from 'react';
// css
import useStyles from './useStyles';

const Img = (props) => {
  const classes = useStyles();

  return (
    <img className={classes.img} src={props.src}></img>
  );
}

export default Img;