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
    AssetTransportRequestForm,
    AssetTransportRequestFormBody,
    DivForFlexibleTimings,
    Div,
    DivWithFlexCol,
    FlexibleTimingsLabel,
    Requried,
    RequriedText,
    Title,
    From,
    To,
    DateAndTime,
    NoOfSeats,
    AssetType,
    AssetSensitivity,
    WhomToDeliver
}
from './stylings';

@observer
class AssetTransportRequest extends React.Component {
    @observable isFlexibleTimings
    @observable date
    @observable from
    @observable isFromFieldEmpty
    @observable isToFieldEmpty
    @observable counterValue
    @observable seatsCount
    @observable isSeatsCountZero
    @observable isDelivered
    @observable deliverdData
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
        this.seatsCount = 0;
        this.isDelivered = false;
        this.deliverdData = '';
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

    whomToDeliver = (event) => {
        this.deliverdData = event.target.value;
        if (this.deliverdData === '') {
            this.isDelivered = true;
        }
        else {
            this.isDelivered = false;
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
        if (this.deliverdData === '') {
            this.isDelivered = true;
        }
        else if (this.from !== '' && this.toData !== '' && this.initialTime !== this.date &&
            this.seatsCount !== 0 && this.deliverdData !== '') {
            alert('AssetTransportRequestForm');
        }
    }

    render() {
        return (<MainDiv>
                <AssetTransportRequestForm>
                    <Title>{StringsData.assetTransportRequest}</Title>
            
                         <AssetTransportRequestFormBody>
                         
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
                            <FlexibleTimingsLabel>{StringsData.flexibleTimings}</FlexibleTimingsLabel>
                        </DivForFlexibleTimings>
                            
                        <Div>
                            <NoOfSeats>{StringsData.noOfSeats}<Requried>*</Requried></NoOfSeats>
                            <CounterPage counterValue={this.noOfSeatsCount}/>
                        </Div>
                        {this.isSeatsCountZero?'':<RequriedText>Required</RequriedText>}

                        <DivWithFlexCol>
                            <AssetType>{StringsData.assetType}<Requried>*</Requried></AssetType>
                            <InputField type="text" placeholder="Asset type" />
                        </DivWithFlexCol>
                        
                        <DivWithFlexCol>
                            <AssetSensitivity>{StringsData.assetSensitivity}<Requried>*</Requried></AssetSensitivity>
                            <InputField type="text" placeholder="Select Sentivity" />
                        </DivWithFlexCol>
                        
                        <DivWithFlexCol>
                            <WhomToDeliver>{StringsData.whomToDeliver}<Requried>*</Requried></WhomToDeliver>
                            <InputField
                            onChangeInputText={this.whomToDeliver}
                            type="text" 
                            placeholder="Name-mobile number"
                            isFeildEmpty={this.isDelivered}
                            />
                            {this.isDelivered?<RequriedText>Requried</RequriedText>:''}
                        </DivWithFlexCol> 
                        
                            <Button onSubmitButton={this.onSubmitButton} buttonName={StringsData.requestForButton}/>
        
                        </AssetTransportRequestFormBody>
            
                </AssetTransportRequestForm>
    </MainDiv>);
    }
}

export { AssetTransportRequest };
