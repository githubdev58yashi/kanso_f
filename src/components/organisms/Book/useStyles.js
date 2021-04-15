import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px`,
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  flex: {
    display: "flex",
  },
  rightBox: {
    width: "100%",
  },
  bookTitle: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  author: {
    marginTop: `${theme.spacing(1)}px`,
    marginLeft: `${theme.spacing(1)}px`,
  },
  buyBox: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: `${theme.spacing(1)}px`,
  },
  buy: {
    color: "#ffffff",
    backgroundColor: "#C1272D",
    "&:hover": {
      // ホバー時に色が変化しないようにする
      backgroundColor: "#C1272D",
    }
  },
}));

export default useStyles;