import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <Container>
    <Main />,
  </Container>,
  document.getElementById('root')
);

serviceWorker.unregister();
