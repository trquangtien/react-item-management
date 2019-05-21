import React from 'react';

export default class Item extends React.Component {
  onUpdateStatus = () => {
    const { id } = this.props.item;
    this.props.onUpdateStatus(id);
  };

  onEditItem = () => {
    const { id } = this.props.item;
    this.props.onEditItem(id);
  };

  onDeleteItem = () => {
    const { id } = this.props.item;
    this.props.onDeleteItem(id);
  };

  render() {
    const { item, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>
          {item.status ? (
            <span className="badge badge-success" onClick={this.onUpdateStatus}>
              Active
            </span>
          ) : (
            <span className="badge badge-secondary" onClick={this.onUpdateStatus}>
              Hide
            </span>
          )}
        </td>
        <td>
          <div className="button-inline">
            <button type="button" className="btn btn-primary" onClick={this.onEditItem}>
              Edit
            </button>
            <button type="button" className="btn btn-secondary" onClick={this.onDeleteItem}>
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
