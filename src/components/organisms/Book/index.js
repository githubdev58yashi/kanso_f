import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom'
// material-ui components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// my components
import Img from '../../atoms/Img';
// css
import useStyles from './useStyles';

const Book = (book, props) => {
  //console.log(book);
  const classes = useStyles();

  return (
    <Paper
      className={ classes.root }
      {...props}
    >
      <Box component="div" className={ classes.flex }>
        <Box component="div">
          {/* 書籍画像 */}
          <Img
            src={book.book.image}
          />
        </Box>

        <Box component="div" className={ classes.rightBox }>
          {/* 書籍タイトル */}
          <Typography
            variant="h6"
            className={ classes.bookTitle }
          >
            {book.book.title}
          </Typography>

          {/* 著者名 */}
          <Typography
            variant="body2"
            className={ classes.author }
          >
            {book.book.author}
          </Typography>

          <Box component="div" className={ classes.buyBox }>
            {/* 「楽天で購入する」ボタン */}
            <Button
              variant="contained"
              classes={{
                contained: classes.contained
              }}
              className={ classes.buy }
            >
              楽天で購入する
            </Button>
          </Box>

         
        </Box>
      </Box>
    </Paper>
  ); 
};

export default Book;