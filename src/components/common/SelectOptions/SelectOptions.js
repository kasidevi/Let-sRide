import React from 'react'

import { Div, Select } from './stylings'

class SelectOptions extends React.Component {
   onChangeFunc = event => {
      this.props.onChangeValue(event.target.value)
   }

   render() {
      const { data } = this.props
      return (
         <Div>
            <Select onChange={this.onChangeFunc}>
               {data.map(list => (
                  <option key={list} value={list}>
                     {list}
                  </option>
               ))}
            </Select>
         </Div>
      )
   }
}

export { SelectOptions }
