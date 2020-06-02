import React from 'react';

import { Input } from './stylings';

class CheckBox extends React.Component {
    render() {
        return (<Input type="checkbox" onClick={this.props.onChecked}/>);
    }
}

export default CheckBox;
