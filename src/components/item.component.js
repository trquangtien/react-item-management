import React from 'react';

export default class Item extends React.Component {
  render() {
    const { item, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.status ? <span className="badge badge-primary">Active</span> : <span className="badge badge-secondary">Hide</span>}</td>
        <td>
          <div className="button-inline">
            <button type="button" className="btn btn-primary">
              Edit
            </button>
            <button type="button" className="btn btn-secondary">
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
