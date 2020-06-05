import styled from '@emotion/styled'

import {
   Typo12HKGroteskSemiBoldSteel,
   Typo20DarkBlueGreyHKGrotestBold
}
from '../../../styleGuide/Typos'

const MainDiv = styled.div `
   background-color: #d7dfe9;
   padding-top: 100px;
   padding-bottom: 100px;
   height: 100%;
`

const RideRequestFrom = styled.div `
   padding-top: 30px;
   padding-bottom: 30px;
   width: 400px;
   height: auto;
   border-radius: 6px;
   box-shadow: 0 4px 40px 0 rgba(23, 31, 70, 0.16);
   border: solid 1px #d7dfe9;
   background-color: white;
   display: flex;
   flex-direction: column;
   margin-left: auto;
   margin-right: auto;
`

const RideRequestFromBody = styled.div `
   margin-left: auto;
   margin-right: auto;
`

const DivForFlexibleTimings = styled.div `
   width: auto;
   display: flex;
   flex-direction: row;
`

const Div = styled.div `
   width: auto;
   display: flex;
   flex-direction: row;
   padding-bottom: 10px;
   padding-top: 10px;
   align-items: center;
`

const DivWithFlexCol = styled.div `
   padding-top: 10px;
   padding-bottom: 10px;
`

const FlexibleTimings = styled.label `
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: #7e858e;
   text-align: center;
`

const Requried = styled.span `
   color: red;
   padding-right: 10px;
`

const RequriedText = styled.p `
   color: red;
   font-size: 10px;
`

const Title = Typo20DarkBlueGreyHKGrotestBold
const From = Typo12HKGroteskSemiBoldSteel
const To = Typo12HKGroteskSemiBoldSteel
const DateAndTime = Typo12HKGroteskSemiBoldSteel
const NoOfSeats = Typo12HKGroteskSemiBoldSteel
const LauageQuantity = Typo12HKGroteskSemiBoldSteel

export {
   MainDiv,
   DivForFlexibleTimings,
   Div,
   From,
   To,
   DateAndTime,
   RideRequestFrom,
   Title,
   FlexibleTimings,
   NoOfSeats,
   LauageQuantity,
   RideRequestFromBody,
   Requried,
   RequriedText,
   DivWithFlexCol
}
