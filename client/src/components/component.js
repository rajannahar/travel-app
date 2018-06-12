import React, { Component } from 'react';
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


  render() {

    console.log(this.state.hotels);
    const { hotels } = this.state.hotels;
    console.log("111 ", hotels);


    return (
      <div className="client">

        <div className="container">

            <div className="row">
                <Select hotels={this.state.hotels} />
            </div>

            <div className="row">

                {this.state.hotels.map(hotel => 
                
                    <div className="col s12 m6" key={hotel.EstablishmentId}>
                    <div className="card">
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
                        </div>
                        {/* <div className="card-action">
                            <a href="/#">This is a link</a>
                        </div> */}
                    </div>
                    </div>

                )}
        
            </div>
        
        </div>

      </div>
    );
  }
}

export default Client;
