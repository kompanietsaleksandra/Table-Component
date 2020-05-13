import React from 'react';
import {dataHead, getData} from './redux/state';
import DataLoader from './components/Table/DataLoader';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <DataLoader data={getData()} dataHead={dataHead}/>
            </React.Fragment>
        );
    }
}

export default App;

