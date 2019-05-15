import React, { Component } from 'react'

export default class AddIssue extends Component {
    state = {
        formData: {}
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target)
        let formData = document.forms['add-issue-form'];
        // console.log(formData.completion_date.value)
        await this.setState({
            formData: {
                "owner": formData.owner.value,
                "effort": formData.effort.value,
                "completion_date": formData.completion_date.value,
                "title": formData.title.value
            }
        });
        await fetch('http://localhost:3000/api/issues', {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // DON'T FORGET THIS BECAUSE IT MAY LEAD TO EMPTY req.body in Express
            },
            body: JSON.stringify(this.state.formData) // AND THIS TOO
        }).then(res=>res.json()).then(data=>console.log(data));

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} name="add-issue-form" method="POST">
                    <input name="owner" type="text" placeholder="Owner" />
                    <input type="number" name="effort" placeholder="Effort" />
                    <input type="date" placeholder="Completion Date" name="completion_date" />
                    <input type="text" placeholder="title" name="title" />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
