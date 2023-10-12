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

export const botChatBoxWrapper = styled.div`
display: flex;
flex-direction: row;

`

export const botImageWrapper = styled.div`
width: 60px;
height: 60px;
background-color: aliceblue;

border-radius: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{

    }
`

export const ChatInformationWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`
export const BotName = styled.div`
font-family: 400;
margin-bottom: 5px;
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
 background-color: aliceblue;
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



export const UserChatWrapper = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: flex-start;

`

export const ChatWrapper = styled.div`
 box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 300px;
  white-space: pre-wrap; /* 줄 바꿈 유지 */
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-size: ${props => props.fontSize}px;
  font-weight: 400;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 10px;
`

export const outButton = styled.label`
position: relative;
z-index: 2;
top: -40px;
left:560px;
cursor: pointer;
`