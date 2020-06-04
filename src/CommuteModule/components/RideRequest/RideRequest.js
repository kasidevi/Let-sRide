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
    @observable counterValue
    @observable seatsCount
    @observable laguageQuantity
    @observable isSeatsCountZero
    @observable isLaguageQuantityZero
    @observable fromDateAndTime
    @observable toDateAndTime
    @observable isTimeChanged
    @observable isFromTimeChanged
    initialTime
    fromIntialTime
    constructor(props) {
        super(props);
        this.isFlexibleTimings = false;
        this.date = new Date();
        this.fromDateAndTime = new Date();
        this.toDateAndTime = new Date();
        this.initialTime = this.date;
        this.fromIntialTime = this.fromDateAndTime;
        this.from = '';
        this.toData = '';
        this.isFromFieldEmpty = false;
        this.isToFieldEmpty = false;
        this.isTimeChanged = false;
        this.isSeatsCountZero = true;
        this.isLaguageQuantityZero = true;
        this.seatsCount = 0;
        this.laguageQuantity = 0;
        this.isFromTimeChanged = false;
    }

    onChecked = () => {
        this.isFlexibleTimings = !this.isFlexibleTimings;
        if (this.isFlexibleTimings) {
            this.isTimeChanged = false;
        }
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
        this.isTimeChanged = false;
    }

    onChangeFromDateAndTime = (fromDateAndTime) => {
        this.fromDateAndTime = fromDateAndTime;
        this.isFromTimeChanged = false;
    }

    onChangeToDateAndTime = (toDateAndTime) => {
        this.toDateAndTime = toDateAndTime;
    }

    noOfSeatsCount = (count) => {
        this.seatsCount = count;
        if (this.seatsCount <= 0) {
            this.isSeatsCountZero = false;
        }
        else {
            this.isSeatsCountZero = true;
        }
    }

    laguageQuantityCount = (count) => {
        this.laguageQuantity = count;
        if (this.laguageQuantity <= 0) {
            this.isLaguageQuantityZero = false;
        }
        else {
            this.isLaguageQuantityZero = true;
        }
    }

    onSubmitButton = () => {
        if (this.from === '') {
            this.isFromFieldEmpty = true;
        }
        if (this.toData === '') {
            this.isToFieldEmpty = true;
        }
        if (this.initialTime === this.date) {
            this.isTimeChanged = true;
        }
        if (this.fromIntialTime === this.fromDateAndTime) {
            this.isFromTimeChanged = true;
        }
        if (this.seatsCount <= 0) {
            this.isSeatsCountZero = false;
        }
        if (this.laguageQuantity <= 0) {
            this.isLaguageQuantityZero = false;
        }
        else if (this.from !== '' && this.toData !== '' && (this.initialTime !== this.date || this.fromIntialTime !== this.fromDateAndTime) &&
            this.seatsCount > 0 && this.laguageQuantity > 0) {
            alert('rideRequest');
            console.log('date', this.date, 'from', this.fromDateAndTime, 'to', this.toDateAndTime);
        }
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
                                    <DateAndTimeCommonComponent 
                                    onChangeFromDateAndTime={this.onChangeFromDateAndTime}
                                    onChangeToDateAndTime={this.onChangeToDateAndTime}
                                    />:
                                    <InputField 
                                    onChangeInputText={this.onChangeDateAndTime}
                                    type="date" 
                                    placeholder="Date and Time"
                                    />}
                                </DivWithFlexCol>
                                {this.isFlexibleTimings?this.isFromTimeChanged?<RequriedText>Required</RequriedText>:'':
                                 this.isTimeChanged?<RequriedText>Required</RequriedText>:''}
                                
                                <DivForFlexibleTimings>
                                    <CheckBox onChecked={this.onChecked}/>
                                    <FlexibleTimings>{StringsData.flexibleTimings}</FlexibleTimings>
                                </DivForFlexibleTimings>

                            <Div>
                                <NoOfSeats>{StringsData.noOfSeats}<Requried>*</Requried></NoOfSeats>
                                <CounterPage counterValue={this.noOfSeatsCount}/>
                            </Div>
                            {this.isSeatsCountZero?'':<RequriedText>Required</RequriedText>}
                            
                            <Div>
                                <LauageQuantity>{StringsData.laguageQuantity}<Requried>*</Requried></LauageQuantity>
                                <CounterPage counterValue={this.laguageQuantityCount}/>
                            </Div>
                            {this.isLaguageQuantityZero?'':<RequriedText>Required</RequriedText>}
                            
                            <Button onSubmitButton={this.onSubmitButton} buttonName={StringsData.requestForButton}/>
                            
                        </RideRequestFromBody>
                        
            </RideRequestFrom>
        </MainDiv>);
    }

}

export { RideRequest };
