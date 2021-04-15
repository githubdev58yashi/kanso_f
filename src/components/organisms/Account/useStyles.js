import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

  },
  userName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: `${theme.spacing(1)}px`,
    color: "gray"
  },
  
  // ドロワー用
  drawerUserAvator: {
    marginTop: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(2)}px`,
  },
  drawerUserId: {
    marginBottom: `${theme.spacing(2)}px`,
  },
}));

export default useStyles;