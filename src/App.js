import React from 'react';
import './App.css';
import CRUForm from './components/cru-form.component';
import Search from './components/search.component';
import Sort from './components/sort.component';
import ItemList from './components/item-list.component';

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Item Management</h1>
        <hr />
      </div>

      <div className="row">
        <div className="col-md-4">
          <CRUForm />
        </div>

        <div className="col-md-8">
          <button type="button" className="btn btn-primary">
            Add new item
          </button>

          <div className="row mt-10">
            <div className="col-md-6">
              <Search />
            </div>
            <div className="col-md-6">
              <Sort />
            </div>
          </div>

          <div className="row mt-10">
            <div className="col-md-12">
              <ItemList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
