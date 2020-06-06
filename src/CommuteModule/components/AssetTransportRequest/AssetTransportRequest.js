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
   NoOfAssets,
   AssetType,
   AssetSensitivity,
   WhomToDeliver,
   Other
}
from './stylings'

@inject('assetTransportRequestStore')
@observer
class AssetTransportRequest extends React.Component {
   @observable isFlexibleTimings
   @observable date
   @observable from
   @observable toData
   @observable isFromFieldEmpty
   @observable isToFieldEmpty
   @observable counterValue
   @observable assetsCount
   @observable isAssetsCountZero
   @observable isDelivered
   @observable deliverdData
   @observable fromDateAndTime
   @observable toDateAndTime
   @observable isTimeChanged
   @observable isFromTimeChanged
   @observable assetSensitivityList
   @observable assetSenstiveType
   @observable assetTypeList
   @observable assetType
   @observable isAssetTypeEmpty
   @observable isAssetTypeOther
   @observable isOtherFieldEmpty
   @observable otherAsset

   constructor(props) {
      super(props)
      this.isFlexibleTimings = false
      this.date = null
      this.fromDateAndTime = null
      this.toDateAndTime = null
      this.from = ''
      this.toData = ''
      this.isFromFieldEmpty = false
      this.isToFieldEmpty = false
      this.isTimeChanged = false
      this.isAssetsCountZero = true
      this.assetsCount = 0
      this.isDelivered = false
      this.deliverdData = ''
      this.isFromTimeChanged = false
      this.assetSensitivityList = ['', 'Highly Sensitive', 'Sensitive', 'Normal']
      this.assetSenstiveType = ''
      this.assetTypeList = ['', 'Parcel', 'Bags', 'other']
      this.assetType = ''
      this.isAssetTypeEmpty = false
      this.isAssetTypeOther = false
      this.isOtherFieldEmpty = false
      this.otherAsset = null
   }

   onChecked = () => {
      this.isFlexibleTimings = !this.isFlexibleTimings
      if (this.isFlexibleTimings) {
         this.isTimeChanged = false
      }
      this.fromDateAndTime = null
      this.toDateAndTime = null
      this.date = null
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

   onChangeOther = event => {
      this.other = event.target.value.trim()
      if (this.other === '' || this.other === null) {
         this.isOtherFieldEmpty = true
      }
      else {
         this.isOtherFieldEmpty = false
      }
   }

   onChangeDateAndTime = event => {
      this.date = event.target.value
      this.isTimeChanged = false
      this.fromDateAndTime = null
      this.toDateAndTime = null
   }

   onChangeFromDateAndTime = fromDateAndTime => {
      this.fromDateAndTime = fromDateAndTime
      this.isFromTimeChanged = false
      this.date = null
   }

   onChangeToDateAndTime = toDateAndTime => {
      this.toDateAndTime = toDateAndTime
   }

   noOfassetsCount = count => {
      this.assetsCount = count
      if (this.assetsCount === 0) {
         this.isAssetsCountZero = false
      }
      else {
         this.isAssetsCountZero = true
      }
   }

   onChangeAssetType = event => {
      this.assetType = event
      this.other = null
      if (this.assetType === 'other') {
         this.isAssetTypeOther = true
         this.isAssetTypeEmpty = false
      }
      else if (this.assetType === '') {
         this.isAssetTypeEmpty = true
         this.isAssetTypeOther = false
      }
      else {
         this.isAssetTypeEmpty = false
         this.isAssetTypeOther = false
         this.isOtherFieldEmpty = false
      }
   }

   onChangeAssetSensitivity = event => {
      this.assetSenstiveType = event
   }

   whomToDeliver = event => {
      this.deliverdData = event.target.value
      if (this.deliverdData === '') {
         this.isDelivered = true
      }
      else {
         this.isDelivered = false
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
      if (this.assetsCount <= 0) {
         this.isAssetsCountZero = false
      }
      if (this.assetType === '') {
         this.isAssetTypeEmpty = true
      }
      if (this.other === '' || this.other === null) {
         this.isOtherFieldEmpty = true
      }
      if (this.deliverdData === '') {
         this.isDelivered = true
      }
      else if (
         this.from !== '' &&
         this.toData !== '' &&
         (this.date !== null || this.fromDateAndTime !== null) &&
         (this.other !== '' || this.other !== null) &&
         this.assetsCount !== 0 &&
         this.assetType !== '' &&
         this.deliverdData !== '' && this.assetSenstiveType !== ''
      ) {
         alert('AssetTransportRequest Created')
         this.assestTransportRequest(this.from, this.toData, this.date, this.fromDateAndTime,
            this.toDateAndTime, this.isFlexibleTimings, this.assetsCount, this.assetSenstiveType, this.deliverdData)
      }
   }
   async assestTransportRequest(from, toData, date, fromDateAndTime,
      toDateAndTime, isFlexibleTimings, assetsCount, assetSenstiveType, deliverdData) {
      const { assetTransportRequestStore: { userRequest } } = this.props
      await userRequest(from, toData, date, fromDateAndTime,
         toDateAndTime, isFlexibleTimings, assetsCount, assetSenstiveType, deliverdData)
   }

   render() {
      return (
         <MainDiv>
            <AssetTransportRequestForm>
               <Title>{StringsData.assetTransportRequest}</Title>

               <AssetTransportRequestFormBody>
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
                        placeholder='Ex.k.'
                        isFeildEmpty={this.isToFieldEmpty}
                     />
                     {this.isToFieldEmpty ? (
                        <RequriedText>Required</RequriedText>
                     ) : (
                        ''
                     )}
                  </DivWithFlexCol>

                  <DivWithFlexCol>
                     {this.isFlexibleTimings ? (
                        ''
                     ) : (
                        <DateAndTime>
                           {StringsData.dateAndTime}
                           <Requried>*</Requried>
                        </DateAndTime>
                     )}
                     {this.isFlexibleTimings ? (
                        <DateAndTimeCommonComponent
                           onChangeFromDateAndTime={
                              this.onChangeFromDateAndTime
                           }
                           onChangeToDateAndTime={this.onChangeToDateAndTime}
                        />
                     ) : (
                        <InputField
                           onChangeInputText={this.onChangeDateAndTime}
                           type='datetime-local'
                           placeholder='Date and Time'
                        />
                     )}
                  </DivWithFlexCol>
                  {this.isFlexibleTimings ? (
                     this.isFromTimeChanged ? (
                        <RequriedText>Required</RequriedText>
                     ) : (
                        ''
                     )
                  ) : this.isTimeChanged ? (
                     <RequriedText>Required</RequriedText>
                  ) : (
                     ''
                  )}

                  <DivForFlexibleTimings>
                     <CheckBox onChecked={this.onChecked} />
                     <FlexibleTimingsLabel>
                        {StringsData.flexibleTimings}
                     </FlexibleTimingsLabel>
                  </DivForFlexibleTimings>

                  <Div>
                     <NoOfAssets>
                        {StringsData.noOfAssets}
                        <Requried>*</Requried>
                     </NoOfAssets>
                     <CounterPage counterValue={this.noOfassetsCount} />
                  </Div>
                  {this.isAssetsCountZero ? (
                     ''
                  ) : (
                     <RequriedText>Required</RequriedText>
                  )}

                  <DivWithFlexCol>
                     <AssetType>
                        {StringsData.assetType}
                        <Requried>*</Requried>
                     </AssetType>
                     <SelectOptions
                        data={this.assetTypeList}
                        onChangeValue={this.onChangeAssetType}
                        isVaild={this.isAssetTypeEmpty}
                     />
                  </DivWithFlexCol>
                  {this.isAssetTypeEmpty ? (
                     <RequriedText>Required</RequriedText>
                  ) : (
                     ''
                  )}

                  <DivWithFlexCol>
                     {this.isAssetTypeOther ? (
                        <Other>{StringsData.other}</Other>
                     ) : (
                        ''
                     )}
                     {this.isAssetTypeOther ? (
                        <InputField
                           onChangeInputText={this.onChangeOther}
                           type='text'
                           placeholder='other.'
                           isFeildEmpty={this.isOtherFieldEmpty}
                        />
                     ) : (
                        ''
                     )}
                  </DivWithFlexCol>
                  {this.isOtherFieldEmpty && this.isAssetTypeOther ? (
                     <RequriedText>Required</RequriedText>
                  ) : (
                     ''
                  )}

                  <DivWithFlexCol>
                     <AssetSensitivity>
                        {StringsData.assetSensitivity}
                        <Requried>*</Requried>
                     </AssetSensitivity>
                     <SelectOptions
                        data={this.assetSensitivityList}
                        onChangeValue={this.onChangeAssetSensitivity}
                     />
                  </DivWithFlexCol>

                  <DivWithFlexCol>
                     <WhomToDeliver>
                        {StringsData.whomToDeliver}
                        <Requried>*</Requried>
                     </WhomToDeliver>
                     <InputField
                        onChangeInputText={this.whomToDeliver}
                        type='text'
                        placeholder='Name-mobile number'
                        isFeildEmpty={this.isDelivered}
                     />
                     {this.isDelivered ? (
                        <RequriedText>Requried</RequriedText>
                     ) : (
                        ''
                     )}
                  </DivWithFlexCol>

                  <Button
                     onSubmitButton={this.onSubmitButton}
                     buttonName={StringsData.requestForButton}
                  />
               </AssetTransportRequestFormBody>
            </AssetTransportRequestForm>
         </MainDiv>
      )
   }
}

export { AssetTransportRequest }
