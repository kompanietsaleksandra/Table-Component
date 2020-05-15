import React from 'react';
import Table from './Table';
import { dataHead, dataHeadRus } from '../../redux/state';

class DataLoader extends React.Component<any, any> {
    constructor(props: []) {
        super(props);
        this.state = {
            dataArr: []
        };
    }
    componentDidMount() {
        let promise = this.props;
        promise.data.then(
            (response: any) => this.setState({ dataArr: response}),
            (error: any) => alert(`Rejected: ${error}`)
        );
    }
    render() {
        return (
            <React.Fragment>
                <Table data={this.state.dataArr} dataHead={dataHead} />
                <Table data={this.state.dataArr} dataHead={dataHeadRus} />
            </React.Fragment>
            )
    }
}

export default DataLoader;