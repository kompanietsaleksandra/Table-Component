import React from 'react';
import Table from './Table';

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
        const tablesData = this.state.dataArr.map((el: any, i: number) =>
            <Table key={i} data={el} />
        );
        return (
            <React.Fragment>
                {tablesData}
            </React.Fragment>
            )
    }
}

export default DataLoader;