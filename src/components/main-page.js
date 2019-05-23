import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeMessage} from '../actions/actions.js'
import axios from 'axios'


class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {stateMessage:"message"}
  }

  getMessageFromServer() {
    axios.post('/user/ping').then((response) => {
      console.log(response)
      if(response.status !=200) {
        console.log("REJECTED")
      } else if(response.status== 200) {
         console.log("success!");
         console.log(response.data)
      }
    })

    return "HEAFEWE"
  }

  render() {
    return(
      <div>
        <h1> TODO App!!! </h1>
        <button onClick={() => {this.props.dispatch(changeMessage())}}>hello</button>
        <div>
          {this.props.message}
          <div>
          {this.getMessageFromServer()}
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(MainPage);
