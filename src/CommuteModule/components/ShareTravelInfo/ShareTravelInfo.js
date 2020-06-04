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
    ShareTravelInfoFrom,
    ShareTravelInfoFromBody,
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
    TravelMedium,
    AssetsQuantity
}
from './stylings';

@observer
class ShareTravelInfo extends React.Component {
    @observable isFlexibleTimings
    @observable date
    @observable from
    @observable isFromFieldEmpty
    @observable isToFieldEmpty
    @observable counterValue
    @observable isAssetsQuantityZero
    @observable assetQuantity
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
        this.isAssetsQuantityZero = true;
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
        if (this.assetQuantity === 0) {
            this.isAssetsQuantityZero = false;
        }
        else {
            alert('shareTravelInfo');
        }
    }

    render() {
        return (<MainDiv>
                <ShareTravelInfoFrom>
                        <Title>{StringsData.shareTravelInfo}</Title>
        
                        <ShareTravelInfoFromBody>
                        
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
                            placeholder="Ex.k"
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
                            placeholder="DateAndTime"
                            />}
                            {this.isTimeChanged?<RequriedText>Required</RequriedText>:''}
                        </DivWithFlexCol>
                        
                        <DivForFlexibleTimings>
                            <CheckBox onChecked={this.onChecked}/>
                            <FlexibleTimingsLabel>{StringsData.flexibleTimings}</FlexibleTimingsLabel>
                        </DivForFlexibleTimings>
                            
                        <DivWithFlexCol>
                            <TravelMedium>{StringsData.travelMedium}<Requried>*</Requried></TravelMedium>
                            <InputField type="text"/>
                        </DivWithFlexCol>
                        
                        <Div>
                            <AssetsQuantity>{StringsData.assetsQuantity}<Requried>*</Requried></AssetsQuantity>
                            <CounterPage counterValue={this.assetQuantityCount}/>
                        </Div>
                            {this.isAssetsQuantityZero?'':<RequriedText>Required</RequriedText>}
        
                            <Button onSubmitButton={this.onSubmitButton} buttonName={StringsData.shareForButton}/>
                        </ShareTravelInfoFromBody>
            </ShareTravelInfoFrom>
        </MainDiv>);
    }

}

export { ShareTravelInfo };
