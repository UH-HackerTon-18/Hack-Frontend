import TitleBox from 'components/common/TitleBox';
import * as S from './style';
import Button from 'components/common/Button';
import { AvatarCategoryData } from 'assets/data/AvatarCategoryData';
import Container from 'components/common/Container';
import { useNavigate } from 'react-router-dom';

function Category({ title, data }) {
  return (
    <S.CategoryWrapper>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.CategoryData>{data}</S.CategoryData>
    </S.CategoryWrapper>
  );
}

export default function AvatarDetail({ data }) {
  const { id, relation, profile_image_url } = data;
  const navigate = useNavigate();

  return (
    <Container>
      <TitleBox title='아바타' subTitle='간단하게 아바타를 만들어보세요' />
      <S.imgboxWrapper>
        <S.imgWrapper>
          <img src={`${profile_image_url}`} alt='a' />
        </S.imgWrapper>
      </S.imgboxWrapper>
      <S.subTitle>아바타 소개</S.subTitle>
      <S.CategoryListWrapper>
        {AvatarCategoryData.map((item) => (
          <Category title={item.name} data={data[item.value]} key={item.name} />
        ))}
      </S.CategoryListWrapper>
      <S.ButtonListWrapper>
        <Button
          backgroundColor='#272727'
          color='#FFF'
          fontWeight='800'
          width='230'
          height='40'
          fontSize='18px'
          borderRadius='5'
          border='none'
          onClick={() => {
            navigate(`/avatar/${id}/chat`);
          }}
        >
          채팅하기
        </Button>
        <Button
          backgroundColor='#FFF'
          color='#272727'
          fontWeight='800'
          width='170'
          height='40'
          fontSize='18px'
          borderRadius='5'
          onClick={() => {}}
        >
          오픈API로 사용하기
        </Button>
        <Button
          backgroundColor='#FFF'
          color='#272727'
          fontWeight='800'
          width='100'
          height='40'
          fontSize='18px'
          borderRadius='5'
          onClick={() => {}}
        >
          돌아가기
        </Button>
      </S.ButtonListWrapper>
    </Container>
  );
}
