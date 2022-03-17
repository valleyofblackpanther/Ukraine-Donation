import React, { Component } from 'react';
import { axios } from 'axios';

class City extends Component {
    state = {
        query: '',
        data: [],
    }

    handleChange = () => {
        this.setState({
            query: this.search.value
        })
        this.filterArray();
    }

    handleSubmit = (event) => {
      event.preventDefault();
  
      const city = {
        query: this.state.query
      }
    
       axios
        .post('http://localhost:9000/api/v1/task', { city })
        .then(response => response.json())
        .then(responseData =>
            this.setState({
                data:responseData
            })
        )
    }

    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.data
        if(searchString.length > 0){
            // console.log(responseData[i].name);
            responseData = responseData.filter(l => {
                console.log( l.name.toLowerCase().match(searchString));
            })
        }
    }

 
    render() {
        return (
            <div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
                    <button type="submit" onSubmit={this.handleSubmit}>Submit</button> 
                </form>
                <div>
                    {
                        this.state.data.map((i) =>
                            <p>{i.query}</p>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default City;