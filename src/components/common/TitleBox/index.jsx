import * as S from './style'

export default function TitleBox({ title, subTitle, subTitleVisible = true }) {
    return (
        <S.TitleBoxWrapper>
            <S.TitleWrapper>{title}</S.TitleWrapper>
            {subTitleVisible ? <S.SubTitleWrapper>{subTitle}</S.SubTitleWrapper> : null}
        </S.TitleBoxWrapper>
    )
}