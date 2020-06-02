import React from 'react';

import { Div, List, OrderedList } from './stylings';

class DropDown extends React.Component {

    onChange = (list) => {
        return this.props.data.map((list) => <List key={list} onClick={this.props.onRequest} value={list}>{list}</List>);
    }

    render() {
        console.log(this.onChange());
        return (<Div>
    <OrderedList>{this.onChange()}</OrderedList>
    </Div>);
    }

}

export default DropDown;
