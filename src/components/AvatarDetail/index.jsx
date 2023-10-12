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

function RelationBotItem({ id, profile_image_url, name, explain }) {
    const navigate = useNavigate();
    return (
        <S.RelationBotItemWrapper onClick={() => navigate(`/avatar/${id}`)}>
            <S.RelationImgWrapper>
                <img src={profile_image_url} alt='실패' />
            </S.RelationImgWrapper>
            <S.RelationCategoryListWrapper>
                <S.CategoryWrapper>
                    <S.RelationCategoryTitle>이름</S.RelationCategoryTitle>
                    <S.RelationCategoryData>{name}</S.RelationCategoryData>
                </S.CategoryWrapper>
                <S.CategoryWrapper>
                    <S.RelationCategoryTitle>관계</S.RelationCategoryTitle>
                    <S.RelationCategoryData>{explain}</S.RelationCategoryData>
                </S.CategoryWrapper>
            </S.RelationCategoryListWrapper>
        </S.RelationBotItemWrapper>
    )
}

export default function AvatarDetail({ data }) {
    const { id, relation, profile_image_url } = data;
    const navigate = useNavigate();

    return (
        <S.ContainerWrapper>
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
                    <S.CategoryWrapper>
                        <S.CategoryTitle>관계</S.CategoryTitle>
                        <S.relationWrapper>
                            {relation.map((i) => (
                                <RelationBotItem
                                    id={i.id}
                                    profile_image_url={i.profile_image_url}
                                    name={i.name}
                                    explain={i.explain}
                                    navigate={navigate}
                                />
                            ))}
                        </S.relationWrapper>
                    </S.CategoryWrapper>
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
                        onClick={() => { }}
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
                        onClick={() => { }}
                    >
                        돌아가기
                    </Button>
                </S.ButtonListWrapper>
            </Container>
        </S.ContainerWrapper>
    );
}
