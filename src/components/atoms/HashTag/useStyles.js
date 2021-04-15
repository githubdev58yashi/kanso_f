import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tags: {
    display: "flex",
    "& > *": {
      marginLeft: theme.spacing(0.5),
    },
  },
  tag: {
    color: "#fff",
    backgroundColor: "#558B2F",
  },
}));

export default useStyles;