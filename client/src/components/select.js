import React, { Component } from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        
        
    }
    
    handleChange(event) {
        // this.setState({value: event.target.value});
        console.log(event.target.value);
    }


  render(props) {
      console.log("props ", this.props);

    return (
      
        <div className="input-field col s12 m6">
            <select className="select.browser-default" onChange={this.handleChange} >
                {/* {this.props.hotels.map(hotel =>
                    <option value={hotel.Stars}>{hotel.Stars}</option>
                )}  */}
                <option value="">Sort by:</option>
                <option value="1">Distance - low to high</option>
                <option value="2">Distance - high to low</option>
                <option value="3">Stars - low to high</option>
                <option value="4">Stars - high to low</option>
                <option value="5">Min Cost - low to high</option>
                <option value="6">Min Cost - high to low</option>
                <option value="7">User Rating - low to high</option>
                <option value="8">User Rating - high to low</option>

            </select>
        </div>
    );
  }
}

export default Select;
