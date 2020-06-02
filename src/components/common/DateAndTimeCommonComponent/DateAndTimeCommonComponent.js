import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
//import DatePicker from 'react-date-picker';

import { Div, From, To, Input, Requried } from './stylings';

@observer
class DateAndTimeCommonComponent extends React.Component {
    render() {
        return (<Div>
                    <div>
                       <From>FROM<Requried>*</Requried></From>
                       <Input type="date" placeholder="Select" />
                    </div>
                    <div>
                       <To>TO</To>
                       <Input type="date" placeholder="Select"/>
                    </div>
                </Div>);
    }

}

export { DateAndTimeCommonComponent };

/*
@observable date
    constructor(props) {
        super(props);
        this.date = new Date();
    }

    onChange = (event) => {
        this.date = event.target.value;
    }


<DatePicker
        onChange={this.onChange}
        value={this.date}
                        />
*/
