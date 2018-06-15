import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
class FilterName extends Component {

    constructor(props) {
        super(props);    
    }

    componentDidMount() {
        console.log("FilterName mount");
    }

    render(props) {
        // if (this.props.hotels.length) {
        //     console.log("props ", this.props);
        // }

        return (
            <Row>
                
                <Input placeholder="Filter by name" s={6} onChange={this.props.handleFilterName} />
                
            </Row>
        );
    }
}

export default FilterName;
