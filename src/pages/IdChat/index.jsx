import Container from "components/common/Container"
import * as S from "./style"
import TitleBox from "components/common/TitleBox"
export default function IdChat() {
    return (
        <>
            <Container>
                <S.IdChatWrapper>
                    <TitleBox title="id로 채팅하기" subTitleVisible={false} />

                </S.IdChatWrapper>
            </Container>
        </>
    )
}