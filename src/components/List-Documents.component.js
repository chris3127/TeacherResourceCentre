import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Document = props => (
    <tr>
      <td>{props.document.title}</td>
      <td>{props.document.link}</td>
      <td>
        <Link to={"/edit/" + props.document._id}>edit</Link>
      </td>
    </tr>
)

export default class DocumentList extends Component {
  constructor(props) {
    super(props);

    this.state = { documents: [] };
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_BASE_URL)
    axios.get(process.env.REACT_APP_BASE_URL + '/documents')
      .then(response => {
        this.setState({ documents: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  documentList() {
    return this.state.documents.map(currentdocument => {
      return <Document document={currentdocument} key={currentdocument._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>All documents</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {this.documentList()}
          </tbody>
        </table>
        <br /><p><Link to={"/create"}>Create new document</Link></p>
      </div>
    )
  }
}