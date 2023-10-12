import * as S from "./style"

export default function container({ children }) {
    return (
        <S.Template>
            <S.containerWrapper>
                {children}
            </S.containerWrapper>
        </S.Template>
    )
}