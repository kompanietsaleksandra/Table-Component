import React from 'react';
import Table from './components/Table/Table';
import { getData } from './redux/state';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Table data={getData()}/>
            </React.Fragment>
        );
    }
}

export default App;

