import React from 'react';

import { Div, Option, Select } from './stylings';

class SelectCommute extends React.Component {
    onChange = () => {
        return this.props.options.map((list) => <Option value={list}>{list}</Option>);
    }
    render() {
        return (<Div>
    <Select >{this.onChange()}</Select>
    </Div>);
    }
}

export default SelectCommute;
