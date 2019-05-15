import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class IssueList extends Component {
    state = {
        records: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/issues').then(res => res.json()).then(data => this.setState({ records: data.records }));
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Owner</th>
                            <th>Created Date</th>
                            <th>Effort</th>
                            <th>Completion Date</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.records.map((item,id) =>
                            (<tr key={id}>
                                <td>{item.id}</td>
                                <td>{item.status}</td>
                                <td>{item.owner}</td>
                                <td>{item.created}</td>
                                <td>{item.effort}</td>
                                <td>{item.completion_date}</td>
                                <td>{item.title}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                <Link to="/add-issue">Add New Issue</Link>
            </div>
        )
    }
}
