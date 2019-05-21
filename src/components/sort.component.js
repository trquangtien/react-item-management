import React from 'react';

export default class Sort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    };
  }

  onMenuClick = (by, value) => {
    this.props.onSort(by, value);
    this.setState({
      sort: {
        by: by,
        value: value
      }
    });
  };

  render() {
    const { sort } = this.state;
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <i className="fa fa-sort" /> Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <span
            className={sort.by === 'name' && sort.value === 1 ? 'dropdown-item sort_selected' : 'dropdown-item'}
            onClick={() => this.onMenuClick('name', 1)}>
            <i className="fa fa-sort-alpha-down" /> Name A-Z
          </span>
          <span
            className={sort.by === 'name' && sort.value === -1 ? 'dropdown-item sort_selected' : 'dropdown-item'}
            onClick={() => this.onMenuClick('name', -1)}>
            <i className="fa fa-sort-alpha-up" /> Name Z-A
          </span>
          <div className="dropdown-divider" />
          <span
            className={sort.by === 'status' && sort.value === 1 ? 'dropdown-item sort_selected' : 'dropdown-item'}
            onClick={() => this.onMenuClick('status', 1)}>
            <i className="fa fa-eye" /> Active Status
          </span>
          <span
            className={sort.by === 'status' && sort.value === -1 ? 'dropdown-item sort_selected' : 'dropdown-item'}
            onClick={() => this.onMenuClick('status', -1)}>
            <i className="fa fa-eye-slash" /> Hide Status
          </span>
        </div>
      </div>
    );
  }
}
