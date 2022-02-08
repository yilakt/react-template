import React, { Component } from 'react';

class Error extends Component {
  constructor(props){
    super(props)
    this.state={
      todoInput:""
    }
  }

  render(){
    return (
       <div className="App" style={styles.container}>
        <h1>Whoops. Error. Error. No page exists here.</h1>
      </div>
    );
  }
}

const styles = {
}


export default Error;

