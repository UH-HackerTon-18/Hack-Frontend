import * as S from './style'

export default function TitleBox ({ title,subTitle }){
    return(
        <S.TitleBoxWrapper>
            <S.TitleWrapper>{title}</S.TitleWrapper>
            <S.SubTitleWrapper>{subTitle}</S.SubTitleWrapper>
        </S.TitleBoxWrapper>
    )
}