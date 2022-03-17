import { Component } from "react/cjs/react.production.min";
import "./create.css";
import axios from "axios";

class Creating extends Component {
  state = {
    name: "",
    city: "",
    donation: "",
    dropofflocation: "",
    phoneno: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    website: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
      city: event.target.value,
      donation: event.target.value,
      dropofflocation: event.target.value,
      phoneno: event.target.value,
      whatsapp: event.target.value,
      instagram: event.target.value,
      facebook: event.target.value,
      website: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      city: this.state.city,
      donation: this.state.donation,
      dropofflocation: this.state.dropofflocation,
      phoneno: this.state.phoneno,
      whatsapp: this.state.whatsapp,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      website: this.state.website,
    };
    axios
      .post("http://localhost:9000/api/v1/tasks", { user })
      .then((res) => console.log(res))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2>Listings</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              class="task-input"
              placeholder="type your name"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="city"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="donation"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="dropofflocation"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="phoneno"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="whatsapp"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="instagram"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="facebook"
              class="task-input"
              placeholder="type the city"
            />
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="website"
              class="task-input"
              placeholder="type the city"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Creating;
