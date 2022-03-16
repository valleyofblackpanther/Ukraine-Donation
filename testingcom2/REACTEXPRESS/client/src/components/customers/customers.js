
import { Component } from 'react/cjs/react.production.min';
import './customers.css';

class Customers extends Component{
    constructor() {
        super();
        this.state = {
            customers: []
        } //initializing the state.
    }

    componentDidMount() {
        fetch('/api/customers')
           .then(res => res.json())
           .then(customers => this.setState({customers}, () => console.log('customer fetched.. ',
           customers)));
    }
    render() {
  return (
    <div>
        <h2>Customers</h2>
        <ul>
            {this.state.customers.map(customer =>
                <li key={customer.id}>{ customer.firstName } { customer.lastName }
                </li>)}
        </ul>
    </div>
  );
}
}


export default Customers;
