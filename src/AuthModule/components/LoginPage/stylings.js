import styled from '@emotion/styled';
import {
   Typo32RubikRegular,
   Typo12HKGroteskSemiBoldSteel
}
from '../../../styleGuide/Typos/index';

const Div = styled.div `
   width: 536px;
   height: 687px;
   border-radius: 8px;
   background-color: white;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin-left:auto;
   margin-right:auto;
`;

const Image = styled.img `
   width: 90px;
   height: 90px;
   object-fit: contain;
`;

const Header = Typo32RubikRegular;
const UserName = Typo12HKGroteskSemiBoldSteel;
const Password = Typo12HKGroteskSemiBoldSteel;

export {
   Header,
   UserName,
   Password,
   Div,
   Image
};
