import React from 'react';
import Item from './item.component';

export default class ItemList extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" name="" placeholder="" />
            </td>
            <td>
              <select className="form-control" name="">
                <option value="true">All</option>
                <option value="true">Active</option>
                <option value="false">Hide</option>
              </select>
            </td>
            <td />
          </tr>
          <Item />
          <tr>
            <td>2</td>
            <td>Apple iPhone X</td>
            <td>
              <span className="badge badge-secondary">Hide</span>
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
        </tbody>
      </table>
    );
  }
}
