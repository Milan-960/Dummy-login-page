import React, { useContext } from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../Store/AuthContext";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Bete Moj Karadi ‼ </h1>
      <Button onClick={authCtx.onLogout}> LOGOUT</Button>
    </Card>
  );
};

export default Home;
