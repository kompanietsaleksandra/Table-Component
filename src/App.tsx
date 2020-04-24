import React from 'react';
import Table from './components/Table/Table';
import { data } from './redux/state';

const App = ({}) => {
    return (
        <React.Fragment>
            <Table data={data}/>
        </React.Fragment>
    );
};

export default App;
