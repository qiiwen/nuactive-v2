import React, { Component } from "react";
<<<<<<< HEAD
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
=======
import { Box } from "grommet";
>>>>>>> c046ce492b8b92d9d821ecb7ce97ab1b6553c0ba

class Activities extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" style={jumbotronStyle}>
          <div className="col-sm-8 mx-auto">
<<<<<<< HEAD
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
=======
            <h1 className="text-center" style={h1Style}>
              ACTIVITIES
            </h1>
>>>>>>> c046ce492b8b92d9d821ecb7ce97ab1b6553c0ba
          </div>
        </div>
        <Box pad="large" background="#F2EEF9" style={boxStyle}>
          <p class="para" style={paraStyle}>
            classesssss
          </p>
        </Box>
      </div>
    );
  }
}

const jumbotronStyle = {
  background: "#410543",
};

const h1Style = {
  color: "white",
};

const boxStyle = {
  padding: "10px",
};

const paraStyle = {
  padding: "10px",
  margin: "10px 20px 10px 20px",
  fontSize: "17px",
  text: "align",
  textAlign: "justify",
};

export default Activities;
