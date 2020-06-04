import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header = styled.div `
   ${tw`flex justify-between bg-white`}

   position:relative
`;

const Image = styled.img `
   width: 71px;
   height: 71px;
   object-fit: contain;
`;

const UpArrow = styled.img `
   object-fit: contain;
   width: 16px;
   height: 16px;
`;

const DownArrow = styled.img `
   object-fit: contain;
   width: 16px;
   height: 16px;
`;

const Div = styled.div `
   display: flex;
   color: ${props => (props.booleanValue ? '#0b69ff' : '#171f46')};
   align-items: center;
`;

const HeaderLeftPart = styled.div `
   display: flex;
   justify-content: space-between;
   width: 150px;
`;

export { Div, Header, Image, HeaderLeftPart, UpArrow, DownArrow };
