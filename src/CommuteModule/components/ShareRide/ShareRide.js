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
    ShareRideFrom,
    Title,
    DivForFlexibleTimings,
    Div,
    FlexibleTimings,
    NoOfSeats,
    LauageQuantity,
    ShareRideFromBody,
    Requried,
    RequriedText,
    DivWithFlexCol
}
from './stylings';

@observer
class ShareRide extends React.Component {
    @observable isFlexibleTimings
    @observable date
    @observable from
    @observable isFromFieldEmpty
    @observable isToFieldEmpty
    @observable counterValue
    @observable seatsCount
    @observable assetQuantity
    @observable isSeatsCountZero
    @observable isAssetsQuantityZero
    initialTime
    constructor(props) {
        super(props);
        this.isFlexibleTimings = false;
        this.date = new Date();
        this.initialTime = this.date;
        this.from = '';
        this.toData = '';
        this.isFromFieldEmpty = false;
        this.isToFieldEmpty = false;
        this.isTimeChanged = false;
        this.isSeatsCountZero = true;
        this.isAssetsQuantityZero = true;
        this.seatsCount = 0;
        this.assetQuantity = 0;
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
        this.isTimeChanged = false;
    }

    noOfSeatsCount = (count) => {

        this.seatsCount = count;
        if (this.seatsCount === 0) {
            this.isSeatsCountZero = false;
        }
        else {
            this.isSeatsCountZero = true;
        }
    }

    assetQuantityCount = (count) => {
        this.assetQuantity = count;
        if (this.seatsCount === 0) {
            this.isAssetsQuantityZero = false;
        }
        else {
            this.isAssetsQuantityZero = true;
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
        if (this.seatsCount === 0) {
            this.isSeatsCountZero = false;
        }
        if (this.assetQuantity === 0) {
            this.isAssetsQuantityZero = false;
        }
        else if (this.from !== '' && this.toData !== '' && this.initialTime !== this.date &&
            this.seatsCount > 0 && this.assetQuantity > 0) {
            alert('rideRequest');
            console.log('from', this.from, 'to', this.toData, 'seatsCount', this.seatsCount, 'assetQuantity', this.assetQuantity);
        }
    }

    render() {
        return (<MainDiv>
        <ShareRideFrom>
        <Title>{StringsData.ShareRide}</Title>
        
        <ShareRideFromBody>
        
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
        {this.isTimeChanged?<RequriedText>Required</RequriedText>:''}
                               
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
            <LauageQuantity>{StringsData.assetsQuantity}<Requried>*</Requried></LauageQuantity>
            <CounterPage counterValue = { this.assetQuantityCount }/>
        </Div>
        {this.isAssetsQuantityZero?'':<RequriedText>Required</RequriedText>}
                            
        <Button onSubmitButton={this.onSubmitButton} buttonName={StringsData.requestForButton}/>
        </ShareRideFromBody>
        
        </ShareRideFrom>
        </MainDiv>);
    }

}

export { ShareRide };
