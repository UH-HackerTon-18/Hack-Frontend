import Container from "components/common/Container";
import * as S from "./style";
import TitleBox from "components/common/TitleBox";
import { useState } from "react";
import Button from "components/common/Button";
import sendSvg from '../../assets/send.svg'
import { useRecoilState } from "recoil";
import { avatarState } from "store/atoms";
import TextareaAutosize from 'react-textarea-autosize';
import outSvg from "../../assets/out.svg"
import { useNavigate, useParams } from "react-router-dom";

function ChatWrapper({ value }) {
    return (
        <S.UserChatWrapper>
            <S.ChatWrapper escapeXml="false" backgroundColor="#272727" color="#fff" >{value}</S.ChatWrapper>
        </S.UserChatWrapper>
    )
}

function BotChatWrapper({ name, value }) {
    return (
        <S.botChatBoxWrapper>
            <S.botImageWrapper>
            </S.botImageWrapper>
            <S.ChatInformationWrapper>
                <S.BotName>{name}</S.BotName>
                <S.ChatWrapper color="#272727" fontSize="16px" >{value}</S.ChatWrapper>
            </S.ChatInformationWrapper>
        </S.botChatBoxWrapper>
    )
}

export default function ChatBox() {
    const [AiState, setAiState] = useRecoilState(avatarState);

    const [chatList, setChatList] = useState([]);
    const [chatInput, setchatInput] = useState('');
    const navigate = useNavigate();
    let { id } = useParams();

    const sendMessage = () => {
        const date = new Date();
        setChatList([...chatList, {
            writer: "user",
            value: chatInput,
            date: ""
        }])
        setchatInput("")
    }

    const outPage = () => {
        navigate(`/${id}/detail`);
    }

    return (
        <Container>
            <S.ChatBoxWrapper>
                <TitleBox title="채팅" subTitle="" subTitleVisible={false} />
                <S.outButton onClick={outPage} ><img src={outSvg} /></S.outButton>
                <S.ChatListWrapper>
                    {
                        chatList && chatList.map((i) => (
                            i.writer === "user" ? <ChatWrapper value={i.value} /> : <BotChatWrapper value={i.value} name={AiState.name} />
                        ))
                    }
                </S.ChatListWrapper>
                <S.ChatInputWrapper>
                    <TextareaAutosize className="ChatInput" maxRows={6} minRows={1} cacheMeasurements={true} value={chatInput} onChange={(e) => { setchatInput(e.target.value) }} />
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