import React, { Component } from 'react';
import axios from 'axios';

export default class CreateDocument extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            link: '',
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeLink(e) {
        this.setState({
            link: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const document = {
            title: this.state.title,
            link: this.state.link,
        }

        console.log(document);
        console.log(process.env.BASE_URL)
        axios.post(process.env.REACT_APP_BASE_URL + '/documents/add', document)
            .then(res => console.log(res.data))
            .then(() => window.location = '/');
    }

    render() {
        return (
            <div>
                <h3>Create New Document</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Link: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.link}
                            onChange={this.onChangeLink}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Document" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}