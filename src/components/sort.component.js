import React from 'react';

export default class Sort extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a className="dropdown-item" href="#">
            Name A-Z
          </a>
          <a className="dropdown-item" href="#">
            Name Z-A
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Active Status
          </a>
          <a className="dropdown-item" href="#">
            Hide Status
          </a>
        </div>
      </div>
    );
  }
}
