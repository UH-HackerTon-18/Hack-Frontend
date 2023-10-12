import TitleBox from 'components/common/TitleBox';
import * as S from './style';
import Container from 'components/common/Container';
import { useParams, useNavigate } from 'react-router-dom';
import outSvg from '../../assets/out.svg';
import sendSvg from '../../assets/send.svg';
import { MyBotChatWrapper, BotChatWrapper } from 'components/common/ChatItem';
import { useState } from 'react';
import Button from 'components/common/Button';

export default function AvatarChat() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [chatList, setChatList] = useState([]);

  const sendMessage = () => {
    setChatList([
      ...chatList,
      {
        writer: 'user',
        value: '',
      },
    ]);
  };

  const outPage = () => {
    navigate(`/avatar/${id}`);
  };

  return (
    <>
      <Container>
        <TitleBox title='시뮬레이션' subTitleVisible={false} />
        <S.outButton onClick={outPage}>
          <img src={outSvg} />
        </S.outButton>
        <S.ChatListWrapper>
          {chatList &&
            chatList.map((i) =>
              i.writer === 'user' ? (
                <MyBotChatWrapper name='reere' value={i.value} />
              ) : (
                <BotChatWrapper value={i.value} name={'risa'} />
              ),
            )}
        </S.ChatListWrapper>
        <S.ChatInputWrapper>
          <Button
            width='40'
            height='40'
            backgroundColor='#272727'
            borderRadius='3'
            border='none'
            color=''
            fontWeight=''
            onClick={sendMessage}
          >
            <img src={sendSvg} />
          </Button>
        </S.ChatInputWrapper>
      </Container>
    </>
  );
}
