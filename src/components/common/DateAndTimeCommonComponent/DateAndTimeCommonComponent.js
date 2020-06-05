import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { Div, From, To, Input, Requried } from './stylings'

@observer
class DateAndTimeCommonComponent extends React.Component {
   @observable fromDateAndTime
   @observable toDateAndTime

   constructor(props) {
      super(props)
      this.fromDateAndTime = new Date()
      this.toDateAndTime = new Date()
   }

   onChangeFromDateAndTime = event => {
      this.fromDateAndTime = event.target.value
      this.props.onChangeFromDateAndTime(this.fromDateAndTime)
   }

   onChangeToDateAndTime = event => {
      this.toDateAndTime = event.target.value
      this.props.onChangeToDateAndTime(this.toDateAndTime)
   }

   render() {
      return (
         <Div>
            <div>
               <From>
                  FROM<Requried>*</Requried>
               </From>
               <Input
                  onChange={this.onChangeFromDateAndTime}
                  type='datetime-local'
                  placeholder='Select'
               />
            </div>
            <div>
               <To>TO</To>
               <Input
                  onChange={this.onChangeToDateAndTime}
                  type='datetime-local'
                  placeholder='Select'
               />
            </div>
         </Div>
      )
   }
}

export { DateAndTimeCommonComponent }
