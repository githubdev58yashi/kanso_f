import React from 'react';
// router-dom
import history from '../../../history/history.js';
// material-ui components
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
// css
import useStyles from './useStyles';

const HashTag = (tags) => {
  //console.log(tags);

  const handleClick = (tag) => {
    //console.log("handleClick");
    // console.log(tag);
    // 画面遷移
    history.push(`/impressions?tag=${tag}`);

  };


  const classes = useStyles();

  let tagList = [];
  //console.log(Object.keys(tags.tags).length)
  let atags = tags.tags;

  for(let tag of tags.tags) {
    tagList.push(
      <Chip
        key={ tag }
        className={ classes.tag }
        label={`${tag}`}
        onClick={() => {handleClick(`${tag}`)}}
      />
    );
  };

  return (
    <Box component="div" className={ classes.tags }>
      {tagList}
    </Box>
  );
};

export default HashTag;