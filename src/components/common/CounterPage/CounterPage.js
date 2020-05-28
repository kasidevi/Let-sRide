import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Increment, Decrement, InputText } from './stylings';

@observer
class CounterPage extends React.Component {
    @observable count = 0;
    onIncrement = () => {
        this.count++;
    }
    onDecrement = () => {
        if (this.count > 0) {
            this.count--;
        }
    }
    onChangeCount = (event) => {
        this.count = event.target.value;
        return this.count;
    }
    render() {
        return (<div>
        <Increment onClick={this.onIncrement}>+</Increment>
        <InputText type='number' value={this.count} onChange={this.onChangeCount}/>
        <Decrement onClick={this.onDecrement}>-</Decrement>
        </div>);

    }
}

export default CounterPage;
