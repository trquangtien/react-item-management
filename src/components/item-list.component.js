import React from 'react';
import Item from './item.component';

export default class ItemList extends React.Component {
  render() {
    const { arrItem } = this.props;
    const itemListElm = arrItem.map((item, index) => {
      return (
        <Item key={item.id} index={index} item={item} onUpdateStatus={this.props.onUpdateStatus} onDeleteItem={this.props.onDeleteItem} />
      );
    });

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

          {itemListElm}
        </tbody>
      </table>
    );
  }
}
