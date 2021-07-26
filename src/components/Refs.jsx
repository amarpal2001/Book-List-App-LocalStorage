import React from 'react';

class Refs extends React.Component {
    constructor(){
     super();
     this.state = { sayings: ""};
     }
    update(e){
     this.setState({ sayings: e.target.value});
    }
    render(){
     return (
      <div>
       Mukul Says <input type="text" onChange = {this.update.bind(this)}/>
      <br/>
      <em>{this.state.sayings}</em>
     </div>
    );
   }
  }

export default Refs;

// class Refs extends React.Component {
//     constructor(){
//      super();
//      this.state = { sayings: ""};
//     }
//     update(e){
//      this.setState({ sayings: this.refs.anything.value});
//     }
//     render(){
//      return (
//       <div>
//        Mukul Says <input type="text" ref="anything"
//          onChange = {this.update.bind(this)}/>
//       <br/>
//       <em>{this.state.sayings}</em>
//      </div>
//      );
//     }
//    }
// export default Refs;