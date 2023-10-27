import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const ListPage = React.lazy(() => import('./pages/ListPage/index'));
const ViewPage = React.lazy(() => import('./pages/ViewPage/index'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
