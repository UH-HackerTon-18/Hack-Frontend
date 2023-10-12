import styled from 'styled-components';

export const botChatBoxWrapper = styled.div`
display: flex;
flex-direction: row;

`
export const myBotChatBoxWrapper = styled.div`
display: flex;
flex-direction: row-reverse;

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
      width:100%;
    height:100%;
    object-fit:cover;
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
export const ChatInformationWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
margin-right: 20px;
`
export const BotName = styled.div`
font-family: 400;
margin-bottom: 5px;
`
