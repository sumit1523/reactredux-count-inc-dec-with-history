import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  // state = {
  //   age:21
  // }

  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age
  //   })
  // };

  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age
  //   })
  // };


  render() {

    return (
      <div className="App">
       <div className="age">Age: <span>{this.props.age}</span></div>
       <button className="ageUp" onClick= {this.props.onAgeUp}>AgeUp</button>
       <button className="ageDown" onClick= {this.props.onAgeDown}>AgeDown</button>
       <hr/>
       <div>History</div>
       <div>
         <ul>
           {
             this.props.history.map(el => (
               <li className = 'historyItem' key = {el.id} onClick={() => this.props.onDeleteItem(el.id)}>
                 {el.age}
               </li>
             ))
           }
         </ul>
       </div>
      </div>
    );
  
};
}

const mapStateToPorps = (state) => {
  return{
    age: state.age,
    history: state.history
  }
}
const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({type:'AGE_UP', value:1}),
    onAgeDown: () => dispach({type: 'AGE_DOWN', value:1}),
    onDeleteItem: (id) => dispach({type: 'DEL_ITEM', key:id})
  }
}

export default connect(mapStateToPorps, mapDispachToProps)(App);
