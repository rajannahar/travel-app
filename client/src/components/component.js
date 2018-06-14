import React, { Component } from 'react';
import {Card, Col, Row} from 'react-materialize'
import Select from './select';

class Client extends Component {

  constructor() {
      super();
      this.state = {
          hotels: []
      }
  }

  componentDidMount() {
      
    fetch('/api/travel')
    .then(res => res.json()
    .then(data => {
        const hotelData = data.Establishments;
        this.setState({hotels:hotelData});
    }));

  }

    handleChange(event) {
        // this.setState({value: event.target.value});

        //let test = [...this.props.hotels];
        //console.log("...... ",test);

        console.log(event.target.value);

        switch(event.target.value) {
            case("1"):
                console.log("Distance - low to high");
                //newObj.sort((a, b) => a.Distance - b.Distance);
                break;
            
            case("2"):
                console.log("Distance - high to low");
                //newObj.sort((a, b) => b.Distance - a.Distance);
                break;
            
            case("3"):
                console.log("Stars - low to high");
                //newObj.sort((a, b) => a.Stars - b.Stars);
                break;
                
            case("4"):
                console.log("Stars - high to low");
                //newObj.sort((a, b) => b.Stars - a.Stars);
                break;
            
            case("5"):
                console.log("Min cost - low to high");
                //newObj.sort((a, b) => a.MinCost - b.MinCost);
                break;

            case("6"):
                console.log("Min cost - high to low");
                //newObj.sort((a, b) => b.MinCost - a.MinCost);
                break;

            case("7"):
                console.log("User rating - low to high");
                //newObj.sort((a, b) => a.UserRating - b.UserRating);
                break;

            case("8"):
                console.log("User rating - high to low");
                //newObj.sort((a, b) => b.UserRating - a.UserRating);
                break;
            
            default:
                console.log("default");

        }
    }


  render() {

    if (this.state.hotels.length) {
        //console.log(this.state.hotels);

        let obj1 = [...this.state.hotels]
        obj1.sort((a, b) => a.Stars - b.Stars);
        console.log("obj1 ", obj1);

        let obj2 = [...this.state.hotels]
        obj2.sort((a, b) => b.Stars - a.Stars);
        console.log("obj2 ", obj2);

    }

    if (this.state.hotels.length) {
        console.log("load");
        let newObj = [...this.state.hotels]
        return (
            <div className="client">
                <div className="container">
        
                    <Row>
                        <Select hotels={this.state.hotels} handleChange={this.handleChange} />
                    </Row>
                    <Row>
        
                        {/* {{this.state.hotels.filter(function(hotel) { return hotel.Stars === 1; })
                        .map(hotel =>} */}

                        {/* {{this.state.hotels && 
                        this.state.hotels.map(hotel =>} */}

                        {/* {{this.state.hotels &&
                        this.state.hotels.sort(function(hotel) { return hotel.Stars === 1; })
                        .map(hotel =>} */}

                        {/* {var obj = [...this.state.data];
                        obj.sort((a,b) => a.timeM - b.timeM);
                        obj.map((item, i) => (<div key={i}> {item.matchID}  
                                            {item.timeM} {item.description}</div>))} */}

                        
                        {
                        
                        newObj &&
                        newObj
                        .map(hotel =>
                        
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
                                        <p><b>Distance: </b>{hotel.Distance}</p>
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
            <p>Loading</p>
        );
    }

  }
}

export default Client;
