// Neccessary React Imports
import React from 'react';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom';

export function RequireAuth({ component: Component, authenticated: Auth}, ...rest ) {
  return(

    <Route

      {...rest}

      render={ props =>
        Auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {from: props.location}
            }}
          />
        )

      }
    />

  );
}
