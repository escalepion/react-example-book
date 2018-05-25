import React, { Component } from 'react';

class StateChange extends Component {
    constructor() {
      super();
      this.state = {
        backgroundLight : true 
      }
    }
    handleClick() {
      this.setState({ backgroundLight : !this.state.backgroundLight });
    }
    render() {
      const { divLightStyle, divDarkStyle, containerDiv } = styles;
        return (
            <div className="row">
              <div className="col-sm-4">
                <button 
                onClick={this.handleClick.bind(this)}
                className="btn btn-block btn-primary"
                >Toggle Color</button>
              </div>
              <div className="col-sm-8">
                <div style={{...containerDiv, backgroundColor: this.state.backgroundLight ? 'yellow' : '#222' }}></div>
              </div>
            </div>
        );
    }
}

const styles = {
  containerDiv: {
    width: '100%',
    height: '30rem'
  }
}

export default StateChange;