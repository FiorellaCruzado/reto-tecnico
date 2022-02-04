import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

import Login from '../containers/LoginScreen';
import ArmaPlan from '../containers/ArmaPlan';
// import Gracias from '../containers/Gracias';
// import NotFound from '../containers/NotFound';

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/armatuplan" component={ArmaPlan} />
                {/* <Route exact path="/Gracias" component={Gracias} />*/}
                <Redirect to="/login"/>
            </Switch>
        </Layout>
    </BrowserRouter>
  );
}

export default App;