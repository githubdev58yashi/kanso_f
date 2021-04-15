import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  iconButtonRoot: {
    padding: "4px",
  },
  count: {
    marginLeft: `${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  isFavorite: {
    color: "rgb(217, 31, 45)",
  },
}));

export default useStyles;