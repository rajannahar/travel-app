import React, { Component } from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
class FilterName extends Component {

    render(props) {

        let {handleFilterName, resetData} = this.props;

        return (
            <Row>
                
                <Input className="filterName" placeholder="Filter by name" s={6} onChange={handleFilterName} />                

                {/* <Button waves='light' type="submit" s={3} onClick={handleFilterName}>
                    <Icon left>cloud</Icon>Search
                </Button> */}

                <Button waves='light' type="submit" s={3} onClick={resetData}>Reset</Button>

            </Row>
        );
    }
}

export default FilterName;
