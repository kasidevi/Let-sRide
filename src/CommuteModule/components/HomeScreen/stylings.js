import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header = styled.div `${tw`flex justify-between bg-white`}`;

const Image = styled.img `
  width: 71px;
  height: 71px;
  object-fit: contain;
`;

const HeaderLeftPart = styled.div ``;

export { Header, Image, HeaderLeftPart };
