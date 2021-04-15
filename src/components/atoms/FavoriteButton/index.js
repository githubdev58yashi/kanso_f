import React from 'react';
// material-ui components
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
// css
import useStyles from './useStyles';

// TODO: 単体ではクリック時に色が変わるが、他のコンポーネントと組み合わせた時に反応しなくなる
// impression impressionsPage
const FavoriteButton = (props) => {
  return (
    <FavoriteButtonContainer
      presenter={
        presenterProps =>
          <FavoriteButtonPresenter
            { ...presenterProps }
          />
      }
      favoriteCount={ props.favoriteCount }
      isFavorite={ props.isFavorite }
      { ...props }
    />
  );
}

// container
const FavoriteButtonContainer = ({
  presenter,
  favoriteCount,
  isFavorite,
  ...props
}) => {
  // データからお気に入り追加済みかどうか判定
  const [favorite, setFavorite] = React.useState(isFavorite);

  // ボタンクリック時
  const handleFavoriteButtonClick = () => {
    console.log("handleFavoriteButtonClick");
    console.log(favorite);
    if (favorite) {
      // APIに送信

      // state更新
      setFavorite(false);
    }
    else {
      // APIに送信

      // state更新
      setFavorite(true);
    }
  }

  return presenter({
    handleFavoriteButtonClick,
    favoriteCount,
    favorite,
    ...props,
  });
}

// presenter
const FavoriteButtonPresenter = ({
  handleFavoriteButtonClick,
  favoriteCount,
  favorite,
  ...props
}) => {
  const classes = useStyles();

  let favoriteIcon = null;

  // 状態に応じて表示を変更
  if (favorite) {
    favoriteIcon = <FavoriteIcon className={ classes.isFavorite } />;
  } else {
    favoriteIcon = <FavoriteIcon />;
  };

  return (
    <Box component="span" className={ classes.root }>
      <IconButton
        classes={{
          root: classes.iconButtonRoot
        }}
        onClick={ handleFavoriteButtonClick }
        >
          { favoriteIcon }
      </IconButton>
        <Typography
          className={ classes.count }
          variant="body2"
        >
          { favoriteCount }
        </Typography>
    </Box>
  );
}

export default FavoriteButton;