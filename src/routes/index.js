import React, { Suspense, memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { lazy } from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import ErrorBoundary from "../components/ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import RoutesFile from "./Routes";
import {getToken} from "../utils/helper";
const Login = lazy(() => import("../components/Login"));

const Routes = memo(() => {

 
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<SkeletonLoader />}>
          <Switch>
              {/* {!getToken() ? <Route
                  key='Login'
                  exact={true}
                  path={'/login'}
                  name={'Login'}
                  component={Login}
                /> :  */}
            {RoutesFile.map((itm) =>
              itm.private ? (
                <PrivateRoute
                  key={itm.name}
                  exact={itm.exact}
                  path={itm.path}
                  name={itm.name}
                  component={itm.component}
                />
              ) : (
                <Route
                  key={itm.name}
                  exact={itm.exact}
                  path={itm.path}
                  name={itm.name}
                  component={itm.component}
                />
              )
            )}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
});

export default Routes;
