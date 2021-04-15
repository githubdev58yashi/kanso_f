import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom'
// material-ui components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
// my components
import Img from '../../atoms/Img';
import Account from '../Account';
import FavoriteButton from '../../atoms/FavoriteButton';
// css
import useStyles from './useStyles';

const Impression = (props) => {
  const classes = useStyles();
  // console.log("impression");
  // console.log(props);
  return (
    <Paper
      className={ classes.root }
      { ...props }
    >
      <Link
      to={`/impression/${ props.impression.impressionId }`}
      className={ classes.link }
      >
        {/* 感想タイトル */}
        <Typography
          variant="h6"
        >
          { props.impression.title }
        </Typography>

        {/* ユーザー */}
        <Account
          user={ props.impression.user }
        />

        <Box componet="div" className={ classes.ratingAndUpdateDate }>
          {/* レーティング */}
          <Rating
            readOnly
            value={ props.impression.ratioValue }
          ></Rating>

          {/* 更新日 */}
          <Typography
            className={ classes.fontColorGray }
            variant="body2"
          >
            { props.impression.updateDate }
          </Typography>
        </Box>

        <Box componet="div" className={ classes.info }>
          {/* 書籍画像 */}
          <Img
            src={ props.impression.book.image }
          />

          <Box component="div">
            {/* 書籍タイトル  */}
            <Typography
              className={ classes.bookTitle }
              variant="h6"
            >
              { props.impression.book.title.slice(0, 52) }
            </Typography>

            {/* 感想本文 */}
            <Typography
              className={ classes.text }
              variant="body2"
            >
              { props.impression.text.slice(0, 84) }
            </Typography>
          </Box>

          
        </Box>
      </Link>

      <Box componet="div" className={ classes.otherButton }>
        {/* お気に入り */}
        <FavoriteButton
          favoriteCount={ props.impression.favoriteCount }
          favorite={ props.impression.isFavorite }
        />
        {/* 共有 */}
        <IconButton
          color='inherit'
          aria-label='menu'
          onClick={() => {console.log('menuButtonClick')}}
        >
          <ShareIcon />
        </IconButton>
      </Box>

    </Paper>
  );
};

export default Impression;