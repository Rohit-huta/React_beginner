import React, {Component} from 'react';

class Application extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    console.log("dfsd");
  }
  
  render(){
    let {count} = this.state;
    return (
      <div>
      <h1>You clicked the button {count} times</h1>
      <span>
        <button onClick={(e) => this.handleClick}>CLICK ME</button>
      </span>
      </div>
    );
  }
}

export default Application;