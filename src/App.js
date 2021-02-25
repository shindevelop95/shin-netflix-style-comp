import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { IsUserRedirect,ProtectedRoute } from './helpers/routes';
import {Home,Browse, Signin,Signup} from './pages';
import {useAuthListener} from './hooks'

export default function App(){
  const user = useAuthListener();
  return (
    <Router>
     <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
     >
        <Signin/>
     </IsUserRedirect>
     <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact
     >
        <Signup/>
     </IsUserRedirect>
    <ProtectedRoute user={user} path={ROUTES.BROWSE}>
      <Browse/>
    </ProtectedRoute>
    <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
    >
      <Home/>
    </IsUserRedirect>
    </Router>
  )
}