import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import InputField from '../../../components/common/InputField/index'
import Button from '../../../components/common/Buttons/index'
import CounterPage from '../../../components/common/CounterPage/index'
import CheckBox from '../../../components/common/CheckBox/index'
import DateAndTimeCommonComponent from '../../../components/common/DateAndTimeCommonComponent'
import SelectOptions from '../../../components/common/SelectOptions/index.js'

import StringsData from '../../i18n/string.json'

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
   AssetsQuantity,

}
from './stylings'
@inject('shareTravelInfoStore')
@observer
class ShareTravelInfo extends React.Component {
   @observable isFlexibleTimings
   @observable date
   @observable from
   @observable toData
   @observable isFromFieldEmpty
   @observable isToFieldEmpty
   @observable counterValue
   @observable isAssetsQuantityZero
   @observable assetQuantity
   @observable fromDateAndTime
   @observable toDateAndTime
   @observable isTimeChanged
   @observable isFromTimeChanged
   @observable selectMediumList
   @observable selectedMedium
   @observable isSelcetedMedium

   constructor(props) {
      super(props)
      this.isFlexibleTimings = false
      this.date = null
      this.fromDateAndTime = null;
      this.toDateAndTime = null;
      this.from = ''
      this.toData = ''
      this.isFromFieldEmpty = false
      this.isToFieldEmpty = false
      this.isTimeChanged = false
      this.isFromTimeChanged = false;
      this.isAssetsQuantityZero = true
      this.assetQuantity = 0
      this.selectedMedium = '';
      this.selectMediumList = ['Select medium', 'Bus', 'Car', 'Flight']
      this.isSelcetedMedium = false
   }

   onChecked = () => {
      this.isFlexibleTimings = !this.isFlexibleTimings
      if (this.isFlexibleTimings) {
         this.isTimeChanged = false;
      }
      this.fromDateAndTime = null;
      this.toDateAndTime = null;
      this.date = null;
   }

   onChangeFrom = event => {
      this.from = event.target.value.trim()
      if (this.from === '') {
         this.isFromFieldEmpty = true
      }
      else {
         this.isFromFieldEmpty = false
      }
   }

   onChangeTo = event => {
      this.toData = event.target.value.trim()
      if (this.toData === '') {
         this.isToFieldEmpty = true
      }
      else {
         this.isToFieldEmpty = false
      }
   }

   onChangeDateAndTime = event => {
      this.date = event.target.value
      this.isTimeChanged = false
      this.fromDateAndTime = null;
      this.toDateAndTime = null;
   }

   onChangeFromDateAndTime = (fromDateAndTime) => {
      this.fromDateAndTime = fromDateAndTime;
      this.isFromTimeChanged = false;
      this.date = null;
   }

   onChangeToDateAndTime = (toDateAndTime) => {
      this.toDateAndTime = toDateAndTime;
   }

   assetQuantityCount = count => {
      this.assetQuantity = count
      if (this.seatsCount === 0) {
         this.isAssetsQuantityZero = false
      }
      else {
         this.isAssetsQuantityZero = true
      }
   }

   onChangeMedium = (event) => {
      this.selectedMedium = event;
      if (this.selectedMedium === 'Select medium') {
         this.isSelcetedMedium = true;
      }
      else {
         this.isSelcetedMedium = false;
      }
   }

   onSubmitButton = () => {
      if (this.from === '') {
         this.isFromFieldEmpty = true
      }
      if (this.toData === '') {
         this.isToFieldEmpty = true
      }
      if (this.date === null) {
         this.isTimeChanged = true
      }
      if (this.fromDateAndTime === null) {
         this.isFromTimeChanged = true
      }
      if (this.selectedMedium === 'Select medium') {
         this.isSelcetedMedium = true
      }
      if (this.assetQuantity <= 0) {
         this.isAssetsQuantityZero = false
      }
      else if (this.from !== '' && this.toData !== '' && (this.date !== null || this.fromDateAndTime !== null) &&
         this.assetQuantity > 0 && this.selectedMedium !== 'Select medium') {
         alert('shareTravelInfo')
         console.log(this.assetQuantity, this.selectedMedium)
         this.shareTravelInfo(this.from, this.toData, this.date, this.fromDateAndTime,
            this.toDateAndTime, this.isFlexibleTimings, this.selectedMedium, this.assetQuantity)
      }
   }
   async shareTravelInfo(from, toData, date, fromDateAndTime, toDateAndTime, isFlexibleTimings, selectedMedium, assetQuantity) {
      const { shareTravelInfoStore: { userRequest } } = this.props;
      await userRequest(from, toData, date, fromDateAndTime, toDateAndTime, isFlexibleTimings, selectedMedium, assetQuantity);
   }

   render() {
      return (
         <MainDiv>
            <ShareTravelInfoFrom>
               <Title>{StringsData.shareTravelInfo}</Title>

               <ShareTravelInfoFromBody>
                  <DivWithFlexCol>
                     <From>
                        {StringsData.from}
                        <Requried>*</Requried>
                     </From>
                     <InputField
                        onChangeInputText={this.onChangeFrom}
                        type='text'
                        placeholder='Ex.k.'
                        isFeildEmpty={this.isFromFieldEmpty}
                     />
                     {this.isFromFieldEmpty ? (
                        <RequriedText>Required</RequriedText>
                     ) : (
                        ''
                     )}
                  </DivWithFlexCol>

                  <DivWithFlexCol>
                     <To>
                        {StringsData.to}
                        <Requried>*</Requried>
                     </To>
                     <InputField
                        onChangeInputText={this.onChangeTo}
                        type='text'
                        placeholder='Ex.k'
                        isFeildEmpty={this.isToFieldEmpty}
                     />
                     {this.isToFieldEmpty ? (
                        <RequriedText>Required</RequriedText>
                     ) : (
                        ''
                     )}
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
                        type="datetime-local" 
                        placeholder="Date and Time"
                        />}
                  </DivWithFlexCol>
                  {this.isFlexibleTimings?this.isFromTimeChanged?<RequriedText>Required</RequriedText>:'':
                  this.isTimeChanged?<RequriedText>Required</RequriedText>:''}
                                 
                  <DivForFlexibleTimings>
                     <CheckBox onChecked={this.onChecked} />
                     <FlexibleTimingsLabel>
                        {StringsData.flexibleTimings}
                     </FlexibleTimingsLabel>
                  </DivForFlexibleTimings>

                  <DivWithFlexCol>
                     <TravelMedium>
                        {StringsData.travelMedium}
                        <Requried>*</Requried>
                     </TravelMedium>
                     <SelectOptions 
                     data={this.selectMediumList}
                     onChangeValue={this.onChangeMedium}
                     isValid={this.isSelcetedMedium}
                     />
                     {this.isSelcetedMedium?<RequriedText>Required</RequriedText>:''}
                  </DivWithFlexCol>

                  <Div>
                     <AssetsQuantity>
                        {StringsData.assetsQuantity}
                        <Requried>*</Requried>
                     </AssetsQuantity>
                     <CounterPage counterValue={this.assetQuantityCount} />
                  </Div>
                  {this.isAssetsQuantityZero ? (
                     ''
                  ) : (
                     <RequriedText>Required</RequriedText>
                  )}

                  <Button
                     onSubmitButton={this.onSubmitButton}
                     buttonName={StringsData.shareForButton}
                  />
               </ShareTravelInfoFromBody>
            </ShareTravelInfoFrom>
         </MainDiv>
      )
   }
}

export { ShareTravelInfo }
