import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import data from './redux/state';

const App = ({}) => {
    return (
        <div className="App">
            <Table data={data}/>
        </div>
    );
};

export default App;
