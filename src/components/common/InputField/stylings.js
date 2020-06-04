import styled from '@emotion/styled'

const Div = styled.div``
const InputTag = styled.input`
   width: 300px;
   height: 30px;
   border-radius: 2px;
   border: ${props =>
      props.isFeildEmpty ? 'solid 1px red' : 'solid 1px #7e858e'};
   background-color: ${props => (props.isFeildEmpty ? '#fed7d7' : '#ffffff')};
   display: flex;
   flex-grow: 1;
`

export { Div, InputTag }
