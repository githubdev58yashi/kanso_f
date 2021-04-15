import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // appBar
  root: {
    // 下部に固定
    width: "100%",
    position: "fixed",
    bottom: "0",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    // [theme.breakpoints.ip("sm")]: {
    //   right: 
    // }
  },
  action: {
    color: "#fff",
  }
}));

export default useStyles;