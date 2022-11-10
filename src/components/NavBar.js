import React, {Fragment} from 'react';
import {logout } from '../actions/auth';
import {connect} from 'react-redux';

const NavBar = ({logout, isAuthenticated}) => {
    const guestLinks = () => (
        <Fragment>
            <a class="nav-link" href="/login">Login</a>
            <a class="nav-link" href="/signup">Signup</a>
            <a class="nav-link" href="/create_student">CreateStudent</a>
            <a class="nav-link" href="/reset_password">Password Reset</a>
        </Fragment>

    );

    const authLinks = () => (
        <a class="nav-link" href="#!" onClick={logout}>Logout</a>
    );


    return (
        <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                    <a class="navbar-brand" href="#">DjangoReact</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>

                            { isAuthenticated ? authLinks() : guestLinks()}
                      </div>
                      </div>
              </div>
        </nav>
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStateToProps,{logout}) (NavBar);
