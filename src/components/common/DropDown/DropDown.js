import React from 'react'

import { Div, List, OrderedList } from './stylings'

class DropDown extends React.Component {
   onChangeList = event => {
      this.props.onRequest(event.target.value)
   }

   onChange = list => {
      return this.props.data.map(list => (
         <List key={Math.random()} onClick={this.onChangeList} value={list}>
            {list}
         </List>
      ))
   }

   render() {
      return (
         <Div>
            <OrderedList>{this.onChange()}</OrderedList>
         </Div>
      )
   }
}

export default DropDown
