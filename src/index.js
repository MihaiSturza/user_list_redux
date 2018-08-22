import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';



import App from './App';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';


const store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/add-user" component={AddUser} />
                    <Route path="/user/:id/edit" component={EditUser} />
                    <Route path="/user/:id" component={ViewUser} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();


