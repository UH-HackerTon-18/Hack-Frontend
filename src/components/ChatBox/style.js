import styled from 'styled-components';
import color from 'styles/color';
import TextareaAutosize from 'react-textarea-autosize';

export const ChatBoxTemplate = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const ChatBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

export const ChatInputWrapper = styled.div`
::-webkit-scrollbar {
    display: none;
}

/* Firefox */
::-moz-scrollbar {
    display: none;
}

/* Internet Explorer */
::-ms-scrollbar {
    display: none;
}

position: absolute;
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
.ChatInput{
    display: flex;
    justify-content: center;
    white-space: normal;
 width: 518px;
overflow-wrap: break-word;
border: none;
    resize: none;
    outline: none;
    font-size: 18px;
   padding-left: 30px;
   padding-top: 10px;
   padding-bottom: 10px;

}

`


export const outButton = styled.label`
position: relative;
z-index: 2;
top: -40px;
left:560px;
cursor: pointer;
`