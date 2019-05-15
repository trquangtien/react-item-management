import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Item Management</h1>
        <hr />
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Add new item</div>
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
        </div>

        <div className="col-md-8">
          <button type="button" className="btn btn-primary">
            Add new item
          </button>
          <div className="row mt-10">
            <div className="col-md-6">
              <div className="input-group">
                <input type="text" className="form-control" name="name" placeholder="Input keyword for searching..." />
                <span className="input-group-btn">
                  <button className="btn btn-info" type="button" aria-label="">
                    Search
                  </button>
                </span>
              </div>
            </div>
            <div className="col-md-6">
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
            </div>
          </div>

          <div className="row mt-10">
            <div className="col-md-12">
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
                  <tr>
                    <td>1</td>
                    <td>Apple Watch 3</td>
                    <td>
                      <span className="badge badge-primary">Active</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
