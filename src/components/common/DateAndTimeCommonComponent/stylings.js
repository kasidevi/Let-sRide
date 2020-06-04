import styled from '@emotion/styled'

import { Typo12HKGroteskSemiBoldSteel } from '../../../styleGuide/Typos'

const Div = styled.div`
   display: flex;
   justify-content: space-between;
`

const From = Typo12HKGroteskSemiBoldSteel
const To = Typo12HKGroteskSemiBoldSteel

const Input = styled.input`
   width: 150px;
   height: 30px;
   border-radius: 2px;
   border: solid 1px #7e858e;
   background-color: #ffffff;
   margin-bottom: 15px;
   display: flex;
   flex-grow: 1;
`

const Requried = styled.span`
   color: red;
`

export { Div, From, To, Input, Requried }
