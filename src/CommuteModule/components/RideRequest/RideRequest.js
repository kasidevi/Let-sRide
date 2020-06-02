import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import InputField from '../../../components/common/InputField/index';
import Button from '../../../components/common/Buttons/index';
import CounterPage from '../../../components/common/CounterPage/index';
import CheckBox from '../../../components/common/CheckBox/index';
import DateAndTimeCommonComponent from '../../../components/common/DateAndTimeCommonComponent';

import StringsData from '../../i18n/string.json';

import {
    MainDiv,
    From,
    To,
    DateAndTime,
    RideRequestFrom,
    Title,
    DivForFlexibleTimings,
    Div,
    FlexibleTimings,
    NoOfSeats,
    LauageQuantity,
    RideRequestFromBody,
    Requried,
    RequriedText,
    DivWithFlexCol
}
from './stylings';

@observer
class RideRequest extends React.Component {
    @observable isFlexibleTimings
    @observable date
    @observable from
    @observable isFromFieldEmpty
    @observable isToFieldEmpty

    constructor(props) {
        super(props);
        this.isFlexibleTimings = false;
        this.date = new Date();
        this.from = '';
        this.toData = '';
        this.isFromFieldEmpty = false;
        this.isToFieldEmpty = false;
    }

    onChecked = () => {
        this.isFlexibleTimings = !this.isFlexibleTimings;
    }

    onChangeFrom = (event) => {
        this.from = event.target.value.trim();
        if (this.from === '') {
            this.isFromFieldEmpty = true;
        }
        else {
            this.isFromFieldEmpty = false;
        }
    }

    onChangeTo = (event) => {
        this.toData = event.target.value.trim();
        if (this.toData === '') {
            this.isToFieldEmpty = true;
        }
        else {
            this.isToFieldEmpty = false;
        }
    }

    onChangeDateAndTime = (event) => {
        this.date = event.target.value;
    }

    render() {
        return (<MainDiv>
                <RideRequestFrom>
                        <Title>{StringsData.rideRequest}</Title>
        
                        <RideRequestFromBody>
                           
                            <DivWithFlexCol>                    
                            <From>{StringsData.from}<Requried>*</Requried></From>
                            <InputField 
                            onChangeInputText={this.onChangeFrom} 
                            type="text"
                            placeholder="Ex.k."
                            isFeildEmpty={this.isFromFieldEmpty} 
                            />
                            {this.isFromFieldEmpty?<RequriedText>Required</RequriedText>:''}
                            </DivWithFlexCol>
                            
                            <DivWithFlexCol>
                            <To>{StringsData.to}<Requried>*</Requried></To>
                            <InputField
                            onChangeInputText={this.onChangeTo}
                            type="text"
                            placeholder="Ex.k."
                            isFeildEmpty={this.isToFieldEmpty}
                            />
                            {this.isToFieldEmpty?<RequriedText>Required</RequriedText>:''}
                            </DivWithFlexCol> 
                            
                            <DivWithFlexCol>
                            {this.isFlexibleTimings?'':<DateAndTime>{StringsData.dateAndTime}<Requried>*</Requried></DateAndTime>}
                            {this.isFlexibleTimings?
                            <DateAndTimeCommonComponent/>:
                            <InputField 
                            onChangeInputText={this.onChangeDateAndTime}
                            type="date" 
                            placeholder="Date and Time"
                            />}
                            </DivWithFlexCol>
                            
                            <DivForFlexibleTimings>
                            <CheckBox onChecked={this.onChecked}/>
                            <FlexibleTimings>{StringsData.flexibleTimings}</FlexibleTimings>
                            </DivForFlexibleTimings>

                            <Div>
                            <NoOfSeats>{StringsData.noOfSeats}<Requried>*</Requried></NoOfSeats>
                            <CounterPage/>
                            </Div>
                            
                            <Div>
                            <LauageQuantity>{StringsData.laguageQuantity}<Requried>*</Requried></LauageQuantity>
                            <CounterPage/>
                            </Div>
                    
                            <Button buttonName={StringsData.requestForButton}/>
                        </RideRequestFromBody>
            </RideRequestFrom>
        </MainDiv>);
    }

}

export { RideRequest };
