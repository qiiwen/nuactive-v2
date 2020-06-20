import React, { Component } from "react";
// import axios from axios

// export const addToList = term => {
//   return axios
//       .post(
//           'api/task', {
//               title: term
//           }, {
//               headers: { "Content-type": "application/json" }
//           })
//       .then((res) => {
//           console.log(res)
//       })
// }

// class List extends Component {
//   constructor() {
//       super()
//       this.state = {
//           id: '',
//           term: '',
//           editDisabled: false,
//           items: []
//       }

//       this.onSubmit = this.onSubmit.bind(this)
//   }

//   onSubmit = e => {
//       e.preventDefault()
//       this.setState({ editDisabled: '' })
//       addToList(this.state.term).then(() => {
//           this.getAll()
//       })
//   }

// }

class Activities extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">ACTIVITIES</h1>
            {/* submit
            <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="input1">Task Name</label>
                    </div>
                    <button className="btn btn-success btn-block"
                        type="submit"
                        onClick={this.onSubmit.bind(this)}>
                        Submit
                    </button>
              </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
