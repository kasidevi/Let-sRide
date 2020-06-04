import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Increment, Decrement, InputText } from './stylings';

@observer
class CounterPage extends React.Component {
    @observable count = 0;
    onIncrement = () => {
        if (this.count < 0) {
            this.count = 0;
        }
        this.count++;
        this.props.counterValue(this.count);
    }
    onDecrement = () => {
        if (this.count > 0) {
            this.count--;
        }
        else if (this.count < 0) {
            this.count = 0;
        }
        this.props.counterValue(this.count);
    }
    onChangeCount = (event) => {
        this.count = event.target.value;
        this.props.counterValue(this.count);
        return this.count;
    }
    render() {
        return (<div>
        <Decrement onClick={this.onDecrement}>-</Decrement>
        <InputText type='number' value={this.count} onChange={this.onChangeCount}/>
        <Increment onClick={this.onIncrement}>+</Increment>
        </div>);

    }
}

export default CounterPage;
