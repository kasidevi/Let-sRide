import React from 'react';

import { Div, Select } from './stylings';

class SelectOptions extends React.Component {

    onChange = (event) => {
        this.props.onChangeValue(event.target.value)
    }

    render() {
        const { data } = this.props;
        return (<Div>
            <Select onChange={this.onChange}>
                { data.map(list=> 
                <option 
                key={Math.random()} 
                value={list}>
              
                {list}
               
                </option>)}
            </Select>
        </Div>);
    }
}

export { SelectOptions };
