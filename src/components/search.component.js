import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" name="name" placeholder="Input keyword for searching..." />
        <span className="input-group-btn">
          <button className="btn btn-info" type="button" aria-label="">
            Search
          </button>
        </span>
      </div>
    );
  }
}
