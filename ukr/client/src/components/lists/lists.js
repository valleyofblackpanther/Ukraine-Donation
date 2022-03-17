import { Component } from "react/cjs/react.production.min";
import "./lists.css";
import axios from "axios";

class Listings extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/v1/tasks")
      .then((res) => this.setState({listings:res.data.lists}))
      .catch((err) => console.log(err));
    // fetch('')
    //    .then(res => res.json())
    //    .catch(err=>console.log(err))
    //    .then(listings => this.setState({listings: listings}, () => console.log('listings fetched...',
    //    listings))).catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        <h2>Listings</h2>
        <ul>
          {this.state.listings.map((listing) => (
            <li key={listing.id}>
              {listing.name} {listing.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Listings;
