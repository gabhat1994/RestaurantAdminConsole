import React from "react";
import LandingPage from "./Components/LandingPage";
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
          </Switch>
        </Content>
        <br />
        <Footer style={{ textAlign: "center" }}>All Rights Reseverd</Footer>
      </Layout>
    </div>
  );
}

export default App;
