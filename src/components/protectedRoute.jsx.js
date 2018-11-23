import React from 'react';
import { Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, redirect: RedirectComponent, authenticated: authenticated, ...rest }) {
  return <Route {...rest} render={props => (authenticated ? <Component {...props} /> : <RedirectComponent {...props} />)} />;
}

export default ProtectedRoute;
