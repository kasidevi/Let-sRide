import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import InputField from '../../../components/common/InputField/index'
import Button from '../../../components/common/Buttons/index'
import CounterPage from '../../../components/common/CounterPage/index'
import CheckBox from '../../../components/common/CheckBox/index'
import DateAndTimeCommonComponent from '../../../components/common/DateAndTimeCommonComponent'

import StringsData from '../../i18n/string.json'

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
from './stylings'

@inject('shareRideStore')
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
   @observable fromDateAndTime
   @observable toDateAndTime
   @observable isFromTimeChanged

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
      this.isSeatsCountZero = true
      this.isAssetsQuantityZero = true
      this.seatsCount = 0
      this.assetQuantity = 0
      this.isFromTimeChanged = false
   }

   onChecked = () => {
      this.isFlexibleTimings = !this.isFlexibleTimings
      if (this.isFlexibleTimings) {
         this.isTimeChanged = false
      }
      else {
         this.isFromTimeChanged = false
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

   noOfSeatsCount = count => {
      this.seatsCount = count
      if (this.seatsCount === 0) {
         this.isSeatsCountZero = false
      }
      else {
         this.isSeatsCountZero = true
      }
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
      if (this.seatsCount <= 0) {
         this.isSeatsCountZero = false
      }
      if (this.assetQuantity <= 0) {
         this.isAssetsQuantityZero = false
      }
      else if (
         this.from !== '' &&
         this.toData !== '' &&
         (this.date !== null || this.fromDateAndTime !== null) &&
         this.seatsCount > 0 &&
         this.assetQuantity > 0
      ) {
         this.shareRide(
            this.from,
            this.toData,
            this.date,
            this.fromDateAndTime,
            this.toDateAndTime,
            this.isFlexibleTimings,
            this.seatsCount,
            this.assetQuantity
         )
      }
   }

   async shareRide(
      from,
      toData,
      date,
      fromDateAndTime,
      toDateAndTime,
      isFlexibleTimings,
      seatsCount,
      assetsQuantity
   ) {
      const {
         shareRideStore: { userRequest }
      } = this.props
      await userRequest(
         from,
         toData,
         date,
         fromDateAndTime,
         toDateAndTime,
         isFlexibleTimings,
         seatsCount,
         assetsQuantity
      )
      const {
         shareRideStore: { access_token }
      } = this.props
      console.log(access_token)
      if (access_token) {
         console.log('shareRide integration')
         const { history } = this.props
         history.push('/home-screen')
      }
   }

   render() {
      return (
         <MainDiv>
            <ShareRideFrom>
               <Title>{StringsData.ShareRide}</Title>

               <ShareRideFromBody>
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
                     <FlexibleTimings>
                        {StringsData.flexibleTimings}
                     </FlexibleTimings>
                  </DivForFlexibleTimings>

                  <Div>
                     <NoOfSeats>
                        {StringsData.noOfSeats}
                        <Requried>*</Requried>
                     </NoOfSeats>
                     <CounterPage counterValue={this.noOfSeatsCount} />
                  </Div>
                  {this.isSeatsCountZero ? (
                     ''
                  ) : (
                     <RequriedText>Required</RequriedText>
                  )}

                  <Div>
                     <LauageQuantity>
                        {StringsData.assetsQuantity}
                        <Requried>*</Requried>
                     </LauageQuantity>
                     <CounterPage counterValue={this.assetQuantityCount} />
                  </Div>
                  {this.isAssetsQuantityZero ? (
                     ''
                  ) : (
                     <RequriedText>Required</RequriedText>
                  )}

                  <Button
                     onSubmitButton={this.onSubmitButton}
                     buttonName={StringsData.requestForButton}
                  />
               </ShareRideFromBody>
            </ShareRideFrom>
         </MainDiv>
      )
   }
}

export { ShareRide }
