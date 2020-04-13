import React, { Component } from 'react';
import axios from 'axios';


export default class EditDocument extends Component {
  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeLink = this.onChangeLink.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      Title: '',
      Link: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/documents/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          link: response.data.link,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
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

    axios.post(process.ENV.BASE_URL + '/documents/update/' + this.props.match.params.id, document)
      .then(res => console.log(res.data))
      .then(() => window.location = '/');
  }

  render() {
    return (
    <div>
      <h3>Edit Document</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Title: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}>
          </input>
        </div>
        <div className="form-group"> 
          <label>Link: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Document" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}