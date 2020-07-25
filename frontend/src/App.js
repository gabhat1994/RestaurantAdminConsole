import React from "react";
import LandingPage from "./Components/LandingPage";
import AddRestaurant from "./Components/AddingRestaurant";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header style={{ color: "red", textAlign: "center" }}>
          Restaurant and Menu Managemet System
        </Header>
        <br />
        <Content>
          <Switch>
            <Route exact path="/" exact={true} component={LandingPage} />
            <Route exact path="/addRestaurant" component={AddRestaurant} />
          </Switch>
        </Content>
        <br />
        <Footer style={{ textAlign: "center" }}>All Rights Reseverd</Footer>
      </Layout>
    </div>
  );
}

export default App;
