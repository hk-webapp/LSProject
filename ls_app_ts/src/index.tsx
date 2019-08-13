import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';

import { FetchIntroPagesByApi } from './actions/IntroPagesAction';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { appStore } from './Store/store';

function initApp() {
  appStore.dispatch(FetchIntroPagesByApi());
}
const rootElement = document.getElementById('root');
initApp();
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement
);
registerServiceWorker();
