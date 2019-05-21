import React from 'react';
import Item from './item.component';

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtNameFilter: '',
      sltStatusFilter: -1
    };
  }

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.props.onFilterItem(
      name === 'txtNameFilter' ? value : this.state.txtNameFilter,
      name === 'sltStatusFilter' ? value : this.state.sltStatusFilter
    );

    this.setState({
      [name]: value
    });
  };

  render() {
    const { arrItem } = this.props;
    const itemListElm = arrItem.map((item, index) => {
      return (
        <Item
          key={item.id}
          index={index}
          item={item}
          onUpdateStatus={this.props.onUpdateStatus}
          onEditItem={this.props.onEditItem}
          onDeleteItem={this.props.onDeleteItem}
        />
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
              <input
                type="text"
                className="form-control"
                name="txtNameFilter"
                value={this.state.txtNameFilter}
                onChange={this.onHandleChange}
              />
            </td>
            <td>
              <select className="form-control" name="sltStatusFilter" value={this.state.sltStatusFilter} onChange={this.onHandleChange}>
                <option value="-1">All</option>
                <option value="1">Active</option>
                <option value="0">Hide</option>
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
