import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // appBar
  sectionMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  right: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default useStyles;