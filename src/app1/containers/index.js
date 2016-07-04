import React from 'react';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

require('../sass/main.scss');

const Main = () => {
    return (
        <div>
            <p>an app goes here</p>
            <Button>Really cool button</Button>
        </div>
    );
};

export default Main;
