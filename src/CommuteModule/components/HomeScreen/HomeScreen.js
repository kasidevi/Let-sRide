import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
   Div,
   Header,
   Image,
   HeaderLeftPart,
   UpArrow,
   DownArrow
}
from './stylings'

import DropDown from '../../../components/common/DropDown/index.js'
import RideRequest from '../RideRequest/index'

@observer
class HomeScreen extends React.Component {
   @observable renderPage
   @observable shareComponent
   @observable requestComponent
   @observable isRequest
   @observable isShare
   @observable requestOptions
   @observable shareOptions
   @observable request
   @observable share

   constructor(props) {
      super(props)
      this.request = 'Ride'
      this.share = 'Ride'
      this.component = 'RideRequest'
      this.isRequest = false
      this.isShare = false
      this.requestOptions = ['Ride', 'Asset Transport']
      this.shareOptions = ['Ride', 'Travel Info']
   }

   isRequestBooleanFunction = () => {
      this.isRequest = !this.isRequest
      this.isShare = false
   }

   isShareBooleanFunction = () => {
      this.isShare = !this.isShare
      this.isRequest = false
   }

   onChangeRequest = event => {
      this.request = event
      if (this.request === 'Ride') {
         this.component = 'RideRequest'
      }
      else if (this.request === 'Asset Transport') {
         this.component = 'AssetTransportRequest'
      }

   }

   onChangeShare = event => {
      this.share = event
      if (this.share === 'Ride') {
         this.component = 'ShareRide'
      }
      else if (this.share === 'Travel Info') {
         this.component = 'ShareTravelInfo'
      }
   }

   componentRender = (component) => {
      console.log('switch', component)

      switch (component) {

         case component === 'RideRequest':
            console.log('RideRequest')
            return <RideRequest />

         case component === 'AssetTransportRequest':
            console.log('AssetTransportRequest');
            <AssetTransportRequest />

         case component === 'ShareRide':
            console.log('ShareRide')
            return <ShareRide />

         case component === 'ShareTravelInfo':
            console.log('ShareTravelInfo')
            return <ShareTravelInfo />

         default:
            console.log('default')
            return <RideRequest />
      }
   }

   render() {
      return (
         <div>
            <Header>
               <Image
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4c19d175-fb00-4139-b427-5f8613891b3d.svg'
                  alt='logo'
               />

               <HeaderLeftPart>
                  <Div
                     onClick={this.isRequestBooleanFunction}
                     booleanValue={this.isRequest}
                  >
                     Request
                     {this.isRequest ? (
                        <UpArrow
                           src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a536824b-2c3c-4311-8f69-d3296db3ccfc.svg'
                           alt='UpArrow'
                        />
                     ) : (
                        <DownArrow
                           src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/655725ee-733a-4085-afcc-1c88795d2164.svg'
                           alt='DownArrow'
                        />
                     )}
                  </Div>

                  {this.isRequest ? (
                     <DropDown
                        data={this.requestOptions}
                        onRequest={this.onChangeRequest}
                     />
                  ) : (
                     ''
                  )}

                  <Div
                     onClick={this.isShareBooleanFunction}
                     booleanValue={this.isShare}
                  >
                     Share
                     {this.isShare ? (
                        <UpArrow
                           src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a536824b-2c3c-4311-8f69-d3296db3ccfc.svg'
                           alt='UpArrow'
                        />
                     ) : (
                        <DownArrow
                           src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/655725ee-733a-4085-afcc-1c88795d2164.svg'
                           alt='DownArrow'
                        />
                     )}
                  </Div>

                  {this.isShare ? (
                     <DropDown
                        data={this.shareOptions}
                        onRequest={this.onChangeShare}
                     />
                  ) : (
                     ''
                  )}
               </HeaderLeftPart>
            </Header>

            {this.componentRender(this.component)}
         </div>
      )
   }
}

export default HomeScreen
