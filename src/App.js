import React from 'react';
import './App.css';
import CRUForm from './components/cru-form.component';
import Search from './components/search.component';
import Sort from './components/sort.component';
import ItemList from './components/item-list.component';
import CommonService from './services/common.service';
import _ from 'lodash';

export default class App extends React.Component {
  commonService;

  constructor(props) {
    super(props);
    this.state = {
      arrItem: [],
      isDisplayCRUForm: false,
      editingItem: null,
      filters: {
        name: '',
        status: -1,
        keyword: ''
      },
      sort: {
        by: 'name',
        value: 1
      }
    };

    this.commonService = new CommonService();
  }

  componentWillMount() {
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
    if (this.state.editingItem) {
      this.setState({
        isDisplayCRUForm: true,
        editingItem: null
      });
    } else {
      this.setState({
        isDisplayCRUForm: !this.state.isDisplayCRUForm,
        editingItem: null
      });
    }
  };

  showForm() {
    this.setState({
      isDisplayCRUForm: true
    });
  }

  handleCloseCRUForm = () => {
    this.setState({
      isDisplayCRUForm: false
    });
  };

  handleSaveData = (data) => {
    let newArrItem = Object.assign([], this.state.arrItem);

    if (data.id) {
      newArrItem.forEach((item) => {
        if (item.id === data.id) {
          item.name = data.txtName;
          item.status = data.sltStatus === 'true' ? true : false;
        }
      });
    } else {
      const dataSubmit = {
        id: this.commonService.generateKey(),
        name: data.txtName,
        status: data.sltStatus === 'true' ? true : false
      };

      newArrItem.push(dataSubmit);
    }

    this.setState({ arrItem: newArrItem });
    localStorage.setItem('lsArrItem', JSON.stringify(newArrItem));
  };

  onUpdateStatus = (id) => {
    let { arrItem } = this.state;

    let updatedArrItem = Object.assign([], arrItem);
    updatedArrItem.forEach((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });

    this.setState({
      arrItem: updatedArrItem
    });

    localStorage.setItem('lsArrItem', JSON.stringify(updatedArrItem));
  };

  onEditItem = (id) => {
    let { arrItem } = this.state;
    const currentItem = arrItem.find((item) => item.id === id);
    this.setState({
      editingItem: currentItem
    });

    this.showForm();
  };

  onDeleteItem = (id) => {
    let { arrItem } = this.state;

    let updatedArrItem = Object.assign([], arrItem);
    arrItem.forEach((item, index) => {
      if (item.id === id) {
        updatedArrItem.splice(index, 1);
      }
    });

    this.setState({
      arrItem: updatedArrItem
    });

    localStorage.setItem('lsArrItem', JSON.stringify(updatedArrItem));
  };

  onFilterItem = (nameParam, statusParam) => {
    statusParam = parseInt(statusParam);
    this.setState({
      filters: {
        name: nameParam,
        status: statusParam
      }
    });
  };

  handleSearch = (keyword) => {
    this.setState({
      filters: {
        keyword: keyword
      }
    });
  };

  handleSort = (sortBy, sortValue) => {
    console.log(`handleSort`, sortBy, sortValue);
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    });
  };

  render() {
    let { arrItem, filters, sort } = this.state;

    // For keyword
    if (filters.keyword) {
      arrItem = arrItem.filter((item) => item.name.toLowerCase().indexOf(filters.keyword.toLowerCase()) !== -1);
    }

    // For filter name
    if (filters.name) {
      arrItem = arrItem.filter((item) => item.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1);
    }

    // For filter status
    if (filters.status && filters.status !== -1) {
      arrItem = arrItem.filter((item) => {
        const filterStatus = filters.status === 1 ? true : false;
        return item.status === filterStatus;
      });
    }

    // Sort by name
    if (sort.by === 'name') {
      arrItem = arrItem.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    }

    // Sort by status
    if (sort.by === 'status') {
      arrItem = arrItem.sort((a, b) => {
        if (a.status < b.status) return sort.value;
        else if (a.status > b.status) return -sort.value;
        else return 0;
      });
    }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Item Management</h1>
          <hr />
        </div>

        <div className="row">
          {this.state.isDisplayCRUForm ? (
            <div className="col-md-4">
              <CRUForm onSaveData={this.handleSaveData} onCloseForm={this.handleCloseCRUForm} item={this.state.editingItem} />
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
                <Search onSearch={this.handleSearch} />
              </div>
              <div className="col-md-6">
                <Sort onSort={this.handleSort} />
              </div>
            </div>

            <div className="row mt-10">
              <div className="col-md-12">
                <ItemList
                  arrItem={arrItem}
                  onUpdateStatus={this.onUpdateStatus}
                  onEditItem={this.onEditItem}
                  onDeleteItem={this.onDeleteItem}
                  onFilterItem={this.onFilterItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
