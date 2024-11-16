import * as S from "./style"

import NavigationArrow from "@assets/svg/NavigationArrow"

const Aside = () => {
    return (
        <S.AsideWrap>
            <S.AsideInner>
                <S.HeaderInner>인기</S.HeaderInner>
                <S.ListInner></S.ListInner>
            </S.AsideInner>
            <S.MainWrap>
                <S.ArticleWrap>
                    <S.ArticleHeader>최근변경</S.ArticleHeader>
                    <S.ArticleContent></S.ArticleContent>
                </S.ArticleWrap>
                <S.FigureInner>
                    <S.FigureBtn>
                        <NavigationArrow direction={"previous"} />
                        이전
                    </S.FigureBtn>
                    <S.FigureBtn>
                        다음
                        <NavigationArrow direction={"next"} />
                    </S.FigureBtn>
                </S.FigureInner>
            </S.MainWrap>
        </S.AsideWrap>
    )
}
export default Aside