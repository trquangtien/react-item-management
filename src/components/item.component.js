import React from 'react';

export default class Item extends React.Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Apple Watch 3</td>
        <td>
          <span className="badge badge-primary">Active</span>
        </td>
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
