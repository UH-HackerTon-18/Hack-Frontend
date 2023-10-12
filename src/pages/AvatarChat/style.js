import color from 'styles/color';
import styled from 'styled-components';

export const AvatarChat = styled.div`

`
export const ChatListWrapper = styled.div`
    
    gap: 0.5rem;
    padding-top: 50px;
    width: 100%;
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

export const outButton = styled.label`
position: relative;
z-index: 2;
top: -40px;
left:560px;
cursor: pointer;
`

export const ChatInputWrapper = styled.div`
border-radius: 3px;
display: flex;
align-items: flex-end;
justify-content: center;
flex-direction:row;
padding-top: 4px;
padding-bottom: 4px;
width: 600px;
gap: 0.2rem;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`