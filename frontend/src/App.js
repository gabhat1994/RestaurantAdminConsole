import React, { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage";
import AddRestaurant from "./Components/AddingRestaurant";
import EditRestaurant from "./Components/EditRestaurant";
import ViewMenu from "./Components/ViewMenu";
import { Layout } from "antd";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resturantList } from "../src/actions/restaurantActions";
function App() {
  const { Header, Footer, Content } = Layout;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("./data.json");
      dispatch(resturantList(data.products));
    };
    fetchData();
  }, []);

  return (
    <div>
      <Layout>
        <Header>
          <Link to={"/"}> Restaurant and Menu Managemet System</Link>
        </Header>
        <br />
        <Content>
          <Switch>
            <Route exact path="/" exact={true} component={LandingPage} />
            <Route exact path="/addRestaurant" component={AddRestaurant} />
            <Route
              exact
              path="/editRestaurant/:key"
              component={EditRestaurant}
            />
            <Route exact path="/viewresturant/:key" component={ViewMenu} />
          </Switch>
        </Content>
        <br />
        <Footer style={{ textAlign: "center" }}>All Rights Reseverd</Footer>
      </Layout>
    </div>
  );
}

export default App;
