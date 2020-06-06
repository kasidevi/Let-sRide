import styled from '@emotion/styled'

const Select = styled.select`
   display: flex;
   border-radius: 2px;
   width: 300px;
   height: 30px;
   color: #171f46;
   border: ${props => (props.isValid ? 'solid 1px red' : 'solid 1px #7e858e')};
   background-color: ${props => (props.isValid ? '#fed7d7' : '#ffffff')};
`

const Div = styled.div``

export { Div, Select }
