import React from 'react';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

require('../sass/main.scss');

import Thing from '../../common/Thing';

export default class Main extends React.Component {
    static propTypes = {
        thing: React.PropTypes.any
    }

    render() {
        const { thing } = this.props;
        return (
            <div>
                <Button>beans</Button>
                <Thing id={thing} />
            </div>
        );
    }
}
