import React from 'react';
import './App.css';
import CRUForm from './components/cru-form.component';
import Search from './components/search.component';
import Sort from './components/sort.component';
import ItemList from './components/item-list.component';
import CommonService from './services/common.service';

export default class App extends React.Component {
  commonService;

  constructor(props) {
    super(props);
    this.state = {
      arrItem: [],
      isDisplayCRUForm: false
    };

    this.commonService = new CommonService();
  }

  componentWillMount() {
    console.log(`componentWillMount`);
    if (localStorage && localStorage.getItem('lsArrItem')) {
      const arrItem = JSON.parse(localStorage.getItem('lsArrItem'));
      this.setState({ arrItem: arrItem });
    }
  }

  handleGenerateData = () => {
    const arrItemSampleData = [
      {
        id: this.commonService.generateKey(),
        name: 'Apple iPhone X',
        status: true
      },
      {
        id: this.commonService.generateKey(),
        name: 'Apple Apple Watch 3',
        status: false
      },
      {
        id: this.commonService.generateKey(),
        name: 'Samsung Galaxy S10',
        status: true
      },
      {
        id: this.commonService.generateKey(),
        name: 'Huawei P30 Pro',
        status: false
      }
    ];

    this.setState({
      arrItem: arrItemSampleData
    });

    // Save data to local storage
    localStorage.setItem('lsArrItem', JSON.stringify(arrItemSampleData));
  };

  toggleNewItemForm = () => {
    this.setState({
      isDisplayCRUForm: !this.state.isDisplayCRUForm
    });
  };

  handleCloseCRUForm = () => {
    this.setState({
      isDisplayCRUForm: false
    });
  };

  handleSaveData = (data) => {
    const dataSubmit = {
      id: this.commonService.generateKey(),
      name: data.txtName,
      status: data.sltStatus === 'true' ? true : false
    };

    let newArrItem = Object.assign([], this.state.arrItem);
    newArrItem.push(dataSubmit);

    this.setState({ arrItem: newArrItem });

    localStorage.setItem('lsArrItem', JSON.stringify(newArrItem));
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Item Management</h1>
          <hr />
        </div>

        <div className="row">
          {this.state.isDisplayCRUForm ? (
            <div className="col-md-4">
              <CRUForm onSaveData={this.handleSaveData} onCloseForm={this.handleCloseCRUForm} />
            </div>
          ) : (
            ''
          )}

          <div className={this.state.isDisplayCRUForm ? 'col-md-8' : 'col-md-12'}>
            <button type="button" className="btn btn-primary" onClick={this.toggleNewItemForm}>
              Add new item
            </button>

            <button type="button" className="btn btn-info" style={{ marginLeft: 5 }} onClick={this.handleGenerateData}>
              Generate Data
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
                <ItemList arrItem={this.state.arrItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
