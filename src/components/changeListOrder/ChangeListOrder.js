import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FlipMove from 'react-flip-move';

import data from './data';
import './style.css';

class ChangeListOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  onUpButtonClick(index) {
    if(index>0) {
      const dataArray = this.state.data;
      const currenItem = dataArray[index];
      const previousItem = dataArray[index-1];
      dataArray[index] = previousItem;
      dataArray[index-1] = currenItem;
      this.setState({ data: dataArray });
    }
  }

  onDownButtonClick(index) {
    if(index < this.state.data.length - 1) {
      const dataArray = this.state.data;
      const currenItem = dataArray[index];
      const nextItem = dataArray[index+1];
      dataArray[index] = nextItem;
      dataArray[index+1] = currenItem;
      this.setState({ data: dataArray });
    }
  }

  onDeleteButtonClick(index) {
    const dataArray = this.state.data;
    const newArray = dataArray.filter((item, dataIndex) => index !== dataIndex);
    this.setState({ data: newArray });
  }

  listData() {
    return this.state.data.map((item, index) => {
      return <div key={item.id}>
        <ListGroupItem className="changeListOrder__list-item">
          {item.content}
          <div className="text-right">
            <i className="fa fa-long-arrow-up arrows" aria-hidden="true" onClick={() => this.onUpButtonClick(index)}></i>
            <i className="fa fa-long-arrow-down arrows" aria-hidden="true" onClick={() => this.onDownButtonClick(index)}></i>
            <i className="fa fa-trash arrows" aria-hidden="true" onClick={() => this.onDeleteButtonClick(index)}></i>
          </div>
        </ListGroupItem>
      </div>
    });
  }

  render() {
    return (
      <div className="changeListOrder">
        <ListGroup>
          <FlipMove>
            {this.listData()}
          </FlipMove>
        </ListGroup>
      </div>
    );
  }
}

export default ChangeListOrder;
