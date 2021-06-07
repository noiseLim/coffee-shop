import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';

import { routes } from '../../routes';
import { MAIN_ROUTE } from '../../utils/consts';

const App = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 150px)' }}>
      <AppHeader />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
      <AppFooter />
    </div>
  );
};

export default App;
