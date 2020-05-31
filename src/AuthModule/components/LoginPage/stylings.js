import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {
   Typo32RubikRegular,
   Typo12HKGroteskSemiBoldSteel
}
from '../../../styleGuide/Typos/index';

const MainDiv = styled.div `background-color:#f1f7ff;
padding-top:100px;
padding-bottom:100px`;

const Div = styled.div `
   width: 536px;
   height:550px;
   border-radius: 8px;
   background-color: white;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin:auto;
`;

const Image = styled.img `
   width: 90px;
   height: 90px;
   object-fit: contain;
`;

const Header = Typo32RubikRegular;
const UserName = Typo12HKGroteskSemiBoldSteel;
const Password = Typo12HKGroteskSemiBoldSteel;
const ErrorMessage = styled.p `${tw`text-red-500 text-xs`}
 margin-left:-200px;
 `;

export {
   Header,
   UserName,
   Password,
   MainDiv,
   Div,
   Image,
   ErrorMessage
};
