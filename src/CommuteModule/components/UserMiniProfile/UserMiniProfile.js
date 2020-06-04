import React from 'react'

import {
   MainDiv,
   Card,
   MiniProfile,
   Ride,
   Profile,
   HS,
   Name,
   Mobile,
   TransportDetails,
   FromAdresstoTOAddress,
   ParaTag,
   Button,
   Image,
   Span
} from './stylings'

class UserMiniProfile extends React.Component {
   render() {
      return (
         <MainDiv>
            <Card>
               <MiniProfile>
                  <Ride>RIDE</Ride>

                  <Profile>
                     <HS>HS</HS>
                     <Name>Ashoka Tano</Name>
                     <Mobile>1234567890</Mobile>
                  </Profile>

                  <TransportDetails>
                     <FromAdresstoTOAddress>
                        <Span>Kurnool</Span>
                        <Span>&#8594;</Span>
                        <Span>Hyderabad</Span>
                     </FromAdresstoTOAddress>
                     <ParaTag>Date & Time:01/06/2020</ParaTag>
                     <ParaTag>No.of Seats:2</ParaTag>
                     <ParaTag>Luggage Quantity:2</ParaTag>
                  </TransportDetails>

                  <Button>Add</Button>
               </MiniProfile>
            </Card>
         </MainDiv>
      )
   }
}
export { UserMiniProfile }
