import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtKeyword: ''
    };
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onSearchButton = () => {
    this.props.onSearch(this.state.txtKeyword);
  };

  onResetButton = () => {
    this.setState({ txtKeyword: '' });
    this.props.onSearch('');
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="txtKeyword"
          placeholder="Input keyword for searching..."
          value={this.state.txtKeyword}
          onChange={this.onChange}
        />
        <span className="input-group-btn button-inline">
          <button className="btn btn-success" type="button" onClick={this.onSearchButton}>
            Search
          </button>
          <button className="btn btn-info" type="button" onClick={this.onResetButton}>
            Reset
          </button>
        </span>
      </div>
    );
  }
}
