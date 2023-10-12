import Container from "components/common/Container";
import * as S from "./style";
import TitleBox from "components/common/TitleBox";
import { useState, useEffect } from "react";
import Button from "components/common/Button";
import sendSvg from '../../assets/send.svg'
import TextareaAutosize from 'react-textarea-autosize';
import outSvg from "../../assets/out.svg"
import { useNavigate } from "react-router-dom";
import { ChatWrapper, BotChatWrapper } from "components/common/ChatItem";
import useFetch from "hooks/useFetch";

export default function ChatBox({ id, name, src }) {

    const { isLoading, fetch, data, isFail } = useFetch({
        method: 'post',
        url: `/chat/${id}`
    });
    useEffect(() => {
        if (!isLoading && !isFail && data) {
            setChatList([...chatList, {
                writer: name,
                value: data.response,
                date: ""
            }])
            if (isFail) {
                setChatList([...chatList, {
                    writer: "Error",
                    value: "다시 시도해 주세요.",
                    date: ""
                }])
            }
        }
    }, [isLoading, isFail])

    const [chatList, setChatList] = useState([]);
    const [chatInput, setchatInput] = useState('');
    const navigate = useNavigate();

    const sendMessage = () => {
        setChatList([...chatList, {
            writer: "user",
            value: chatInput,
            date: ""
        }])

        fetch({
            prompt: chatInput
        })
        setchatInput("")
    }

    const outPage = () => {
        navigate(`/avatar/${id}`);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            setchatInput(chatInput + '\n')
            console.log("Senter")

        } else if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Container>
            <S.ChatBoxWrapper>
                <TitleBox title="채팅" subTitle="" subTitleVisible={false} />
                <S.outButton onClick={outPage} ><img src={outSvg} /></S.outButton>
                <S.ChatListWrapper>
                    {
                        chatList && chatList.map((i) => (
                            i.writer === "user" ? <ChatWrapper value={i.value} /> : <BotChatWrapper value={i.value} name={name} src={src} />
                        ))
                    }
                </S.ChatListWrapper>
                <S.ChatInputWrapper>
                    <TextareaAutosize className="ChatInput" onKeyDown={handleKeyPress} maxRows={6} minRows={1} cacheMeasurements={true} value={chatInput} onChange={(e) => { setchatInput(e.target.value) }} />
                    <Button
                        width="40"
                        height="40"
                        backgroundColor="#272727"
                        borderRadius="3"
                        border="none"
                        color=""
                        fontWeight=""
                        onClick={sendMessage}
                    >
                        <img src={sendSvg} />
                    </Button>
                </S.ChatInputWrapper>
            </S.ChatBoxWrapper>
        </Container>
    )
}