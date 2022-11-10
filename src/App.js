import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import { Provider } from 'react-redux';
import store from './store';
import CreateStudent from './containers/CreateStudent';

import Layout from './hocs/Layouts';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/reset_password' element={<ResetPassword />} />
                    <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                    <Route path='/create_student' element={<CreateStudent />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>

);


export default App;