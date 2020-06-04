import styled from '@emotion/styled'

const MainDiv = styled.div`
   padding-top: 50px;
   padding-bottom: 50px;
   background-color: #fbfbfb;
`

const Card = styled.div`
   width: 368px;
   height: auto;
   border-radius: 4px;
   border: solid 1px #d7dfe9;
   background-color: white;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-direction: column;
`

const MiniProfile = styled.div`
   margin-left: auto;
   margin-right: auto;
   padding: 10px;
`

const Profile = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   flex-grow: 1;
`

const HS = styled.button`
   width: 80px;
   height: 80px;
   font-family: Rubik;
   font-size: 24px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1;
   letter-spacing: normal;
   color: #00b2ca;
   border-radius: 100px;
   background-color: #b3f4e1;
   margin-top: -15px;
`

const Name = styled.p`
   font-family: HKGrotesk;
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   letter-spacing: normal;
   color: #171f46;
   padding-top: 20px;
`

const Mobile = styled.p`
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: #7e858e;
   padding-bottom: 20px;
`

const TransportDetails = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   padding-top: 10px;
   padding-bottom: 10px;
`

const FromAdresstoTOAddress = styled.div`
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: #171f46;
   display: flex;
   flex-direction: row;
`

const ParaTag = styled.p`
   font-family: HKGrotesk;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
`

const Button = styled.button`
   width: 296px;
   height: 40px;
   border-radius: 4px;
   border: solid 1px #d7dfe9;
   background-color: #ffffff;
   margin-top: 20px;
   margin-bottom: 20px;
`

const Ride = styled.button`
   width: 43px;
   height: 24px;
   font-family: Rubik;
   font-size: 12px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: #0b69ff;
   border-radius: 2px;
   background-color: rgba(11, 105, 255, 0.1);
   margin-left: -15px;
`

const Image = styled.img`
   width: 16px;
   height: 16px;
   padding-right: 10px;
   padding-left: 10px;
`
const Span = styled.span``

export {
   MainDiv,
   Card,
   MiniProfile,
   Profile,
   HS,
   Name,
   Mobile,
   TransportDetails,
   ParaTag,
   FromAdresstoTOAddress,
   Button,
   Ride,
   Image,
   Span
}
