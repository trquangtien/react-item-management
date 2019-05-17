import React from 'react';

export default class CRUForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      sltStatus: false
    };
  }

  closeForm = () => {
    this.props.onCloseForm();
  };

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  onHandleSave = (event) => {
    event.preventDefault();
    this.props.onSaveData(this.state);

    // Clear and Close form
    this.clearData();
    this.closeForm();
  };

  clearData = () => {
    this.setState({
      txtName: '',
      sltStatus: false
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add new item
          <i className="fa fa-times-circle text-right" onClick={this.closeForm} />
        </div>
        <div className="card-body">
          <form onSubmit={this.onHandleSave}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="txtName" className="form-control" value={this.state.txtName} onChange={this.onChange} />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select className="form-control" name="sltStatus" value={this.state.sltStatus} onChange={this.onChange}>
                <option value={true}>Active</option>
                <option value={false}>Hide</option>
              </select>
            </div>
            <div className="button-inline">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={this.clearData}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
