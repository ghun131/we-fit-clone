import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>This is Home Page </h1>
        <Link to="/jobs">Go to Jobs Page</Link>
    </div>
);

export default HomePage;