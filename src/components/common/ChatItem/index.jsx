import * as S from "./style"

export function ChatWrapper({ value }) {
    return (
        <S.UserChatWrapper>
            <S.ChatWrapper escapeXml="false" backgroundColor="#272727" color="#fff" >{value}</S.ChatWrapper>
        </S.UserChatWrapper>
    )
}

export function BotChatWrapper({ name, value, src }) {
    return (
        <S.botChatBoxWrapper>
            <S.botImageWrapper>
                <img src={src} />
            </S.botImageWrapper>
            <S.ChatInformationWrapper>
                <S.BotName>{name}</S.BotName>
                <S.ChatWrapper color="#272727" fontSize="16px" >{value}</S.ChatWrapper>
            </S.ChatInformationWrapper>
        </S.botChatBoxWrapper>
    )
}

export function MyBotChatWrapper({ name, value, src }) {
    return (
        <S.myBotChatBoxWrapper>
            <S.botImageWrapper>
                <img src={src} />
            </S.botImageWrapper>
            <S.ChatInformationWrapper>
                <S.BotName>{name}</S.BotName>
                <S.ChatWrapper escapeXml="false" backgroundColor="#272727" color="#fff" >{value}</S.ChatWrapper>            </S.ChatInformationWrapper>
        </S.myBotChatBoxWrapper>
    )
}