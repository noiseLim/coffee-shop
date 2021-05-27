import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from '../../routes';
import { MAIN_ROUTE } from '../../utils/consts';

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default App;
