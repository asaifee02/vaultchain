import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from "./components/Dashboard";
import Files from "./components/Files";
import { CallbackPage } from "./components/callback-page.js";
import { PageLoader } from "./components/page-loader.js";
import { ProtectedRoute } from "./components/protected-route";
import './App.css';

export default function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/myfiles" component={Files} />
      <Route path="/callback" component={CallbackPage} />
    </Switch>
  );
}
