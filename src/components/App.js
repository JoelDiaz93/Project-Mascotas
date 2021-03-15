import { Layout } from "antd";
import "../styles/App.css";
import React from "react";
import MainLayout from "./MainLayout";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "../lib/auth";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../pages/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";
import TermCondPage from "../pages/TermCondPage";
import PetsPage from "../pages/PetsPage";

const { Header, Content, Footer } = Layout;

function App() {

  
  return (
    <>
    <AuthProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/termsconditions">
              <TermCondPage />
            </Route>
            <Route path="/pets">
              <PetsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
