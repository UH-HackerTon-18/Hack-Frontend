
import Container from 'components/common/Container';
import * as S from './style';
import TitleBox from 'components/common/TitleBox';
import Button from 'components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function IdChat() {
    const [avatarId, setAvatarId] = useState("");
    let navigate = useNavigate()
    return (
        <S.Container>
            <Container>
                <S.IdChatWrapper>
                    <TitleBox title="id로 채팅하기" subTitle="id를 통해 원하는 아바타와 이야기를 나눠보세요!" />
                    <S.IdInput placeholder='id를 입력해주세요...' value={avatarId} onChange={(e) => setAvatarId(e.target.value)} />
                    <S.InputWrapper>
                        <Button
                            width="300"
                            height="50"
                            fontSize="18"
                            fontWeight="800"
                            backgroundColor={avatarId.length <= 0 ? '#A9A9A9' : '#272727'}
                            color="#fff"
                            border='none'
                            borderRadius="5"
                            onClick={() => navigate(`/avatar/${avatarId}/chat`)}
                        >채팅 시작하기</Button>
                    </S.InputWrapper>
                </S.IdChatWrapper>
            </Container>
        </S.Container>
    );
}
