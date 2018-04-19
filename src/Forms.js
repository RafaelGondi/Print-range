import React, { Component } from 'react';

class Forms extends Component {

  state = {
    startingPages:'',
    endingPages:'',
    pages:''
  }

  calculateFrontPages(){
    let stPg = parseInt(this.state.startingPages, 10);
    let endPg = parseInt(this.state.endingPages, 10);
    let pages;
    this.state.startingPages == '' ? pages = '' : pages = this.state.startingPages + ', ';
    let aux = 0;

    if(stPg % 2 !== 0) {
      if(endPg % 2 === 0) {
        for(let i = stPg; i < Math.trunc(endPg / 2); i++){
            aux = 1 + (i * 2);

            i < Math.trunc(endPg / 2) - 1 ? pages = pages + aux.toString() + ', ' : pages = pages + aux.toString();
        }
      } else {
        for(let i = stPg; i <= Math.trunc(endPg / 2); i++){
            aux = 1 + (i * 2);

            i <= Math.trunc(endPg / 2) - 1 ? pages = pages + aux.toString() + ', ' : pages = pages + aux.toString();
        }
      }
    } else {
      if(endPg % 2 === 0) {
        for(let i = stPg + 2; i <= endPg; i = i + 2){

            i < endPg ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      } else {
        for(let i = stPg + 2; i < endPg; i = i + 2){

            i < endPg - 1 ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      }
    }

    this.setState({pages: pages});
  }

  updateStartingPages = (startingPages) => {
    this.setState({ startingPages: startingPages.trim()});
  }

  updateEndingPages = (endingPages) => {
    this.setState({ endingPages: endingPages.trim()});
  }

  calculateBackPages() {
    let stPg = parseInt(this.state.startingPages, 10);
    let endPg = parseInt(this.state.endingPages, 10);
    let pages = '';
    let aux = 0;

    if(stPg % 2 !== 0) {
      if(endPg % 2 === 0) {
        for(let i = endPg; i >= stPg; i = i - 2){

            i > stPg + 1 ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      } else {
        for(let i = endPg - 1; i >= stPg; i = i - 2){

            i > stPg + 1 ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      }
    } else {
      if(endPg % 2 === 0) {
        for(let i = endPg - 1; i >= stPg; i = i - 2){

            i > stPg + 1 ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      } else {
        for(let i = endPg; i >= stPg; i = i - 2){

            i > stPg + 1 ? pages = pages + i.toString() + ', ' : pages = pages + i.toString();
        }
      }
    }

    this.setState({pages: pages});
  }

  render () {
    return (
        <div>
          <input
          type='text'
          placeholder='Starting page:'
          className = 'forms-startingPage'
          value={this.state.startingPages}
          onChange={(event) => this.updateStartingPages(event.target.value)}/>

          <input
          type='text'
          placeholder='Ending page:'
          className = 'forms-endingPage'
          value={this.state.endingPages}
          onChange={(event) => this.updateEndingPages(event.target.value)}/>

          <input
          type='text'
          placeholder='Pages:'
          className = 'forms-pages'
          value={this.state.pages}
          readOnly/>

          <button className = 'button-front' onClick = {(event) => this.calculateFrontPages()}>Front</button>
          <button className = 'button-back' onClick = {(event) => this.calculateBackPages()}>Back</button>
        </div>

    )
  }
}



export default Forms
