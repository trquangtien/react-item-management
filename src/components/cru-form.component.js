import React from 'react';

export default class CRUForm extends React.Component {
  onClickClose = () => {
    this.props.onCloseForm();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Add new item
          <i className="fa fa-times-circle text-right" onClick={this.onClickClose} />
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="" className="form-control" placeholder="" />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select className="form-control" name="">
                <option value="true">Active</option>
                <option value="false">Hide</option>
              </select>
            </div>
            <div className="button-inline">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
