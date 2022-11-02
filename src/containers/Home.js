import React from 'react';
import {Link } from 'react-router-dom';

const Home = (props) => (
    <div class="container">
        <div class="jumbotron py-5">
        <h1 class="display-5 fw-bold">Welcome to our Page!!! </h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <Link class="btn btn-primary btn-lg" to="/login">Login</Link>
      </div>
    </div>
);

export default Home;