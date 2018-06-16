import React, { Component } from 'react';
import {Card, Col, Row, Preloader} from 'react-materialize';
import SortBy from './sortBy';
import FilterName from './filterName';

import $ from 'jquery';

class Client extends Component {

  constructor() {
      super();
      this.state = {
          hotels: [], 
          searchName: ''
      }
  }

    apidata = () => {
        fetch('/api/travel')
        .then(res => res.json()
        .then(data => {
            const hotelData = data.Establishments;
            this.setState({
                ...this.state,
                hotels:hotelData
            });
        }));
    };

    componentDidMount() {
        this.apidata();
    }



    handleSort = (event) => {
        // this.setState({value: event.target.value});

        let newObj = [...this.state.hotels];
        console.log("...... ",newObj);
        console.log(event.target.value);

        switch(event.target.value) {
            case("1"):
                console.log("Distance - low to high");
                newObj.sort((a, b) => a.Distance - b.Distance);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("2"):
                console.log("Distance - high to low");
                newObj.sort((a, b) => b.Distance - a.Distance);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("3"):
                console.log("Stars - low to high");
                newObj.sort((a, b) => a.Stars - b.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
                
            case("4"):
                console.log("Stars - high to low");
                newObj.sort((a, b) => b.Stars - a.Stars);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            case("5"):
                console.log("Min cost - low to high");
                newObj.sort((a, b) => a.MinCost - b.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("6"):
                console.log("Min cost - high to low");
                newObj.sort((a, b) => b.MinCost - a.MinCost);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("7"):
                console.log("User rating - low to high");
                newObj.sort((a, b) => a.UserRating - b.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;

            case("8"):
                console.log("User rating - high to low");
                newObj.sort((a, b) => b.UserRating - a.UserRating);
                this.setState({
                    ...this.state,
                    hotels: newObj
                });
                break;
            
            default:
                console.log("default");
                this.apidata();
        }
    }

    handleFilterName = (event) => {

        let val = event.target.value.toLowerCase();

        this.setState({
            searchName: val
        });
                        
    };

    searchingName = (searchName) => {
        return function(x) {
            return x.Name.toLowerCase().includes(searchName) || !searchName;
        }
    };


  render() {

    if (this.state.hotels.length) {
        console.log("load");

        const {hotels, searchName} = this.state;

        return (
            <div className="client">
                <div className="container">
        
                    <Row>
                        <SortBy handleSort={this.handleSort.bind(this)} />
                    </Row>

                    <Row>
                        <FilterName handleFilterName={this.handleFilterName.bind(this)} />
                    </Row>

                    <Row>
                        
                        { hotels && hotels.filter(this.searchingName(searchName)).map(hotel =>
                        
                            <Col m={6} s={12} key={hotel.EstablishmentId}>
                                <Card>
                                    <div className="card-image">
                                        <img src={hotel.ImageUrl} alt="" />
                                        <span className="card-title">{hotel.Name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p><b>Type: </b>{hotel.EstablishmentType}</p>
                                        <p><b>Location: </b>{hotel.Location}</p>
                                        <p><b>Minimum cost: </b>£{hotel.MinCost}</p>
                                        <p><b>Stars: </b>{hotel.Stars}</p>
                                        <p><b>User rating: </b>{hotel.UserRating}</p>
                                        <p><b>User rating title: </b>{hotel.UserRatingTitle}</p>
                                        <p><b>User rating count: </b>{hotel.UserRatingCount}</p>
                                        <p><b>Distance: </b>{parseFloat(hotel.Distance).toFixed(2)}</p>
                                    </div>
                                </Card>
                            </Col>
        
                        )}
                
                    </Row>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <Row>
                    <Col s={12}>
                        <Preloader flashing size='big'/>
                    </Col>
                </Row>
            </div>
        );
    }

  }
}

export default Client;
