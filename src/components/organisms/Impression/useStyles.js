import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  ratingAndUpdateDate: {
    display: "flex",
    justifyContent:"space-between",
    marginTop: `${theme.spacing(1)}px`,
  },
  info: {
    display: "flex",
    marginTop: `${theme.spacing(2)}px`,
  },
  bookTitle: {
    marginLeft: `${theme.spacing(1)}px`,
  },
  text: {
    marginTop: `${theme.spacing(1)}px`,
    marginLeft: `${theme.spacing(1)}px`,
  },
  fontColorGray: {
    color: "gray",
  },
  otherButton: {
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  }
}));

export default useStyles;