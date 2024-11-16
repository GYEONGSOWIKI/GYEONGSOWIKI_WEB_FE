import * as C from "@src/allFiles";
import * as S from "./style"

const Category = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="틀" />
                        <C.Classify description="틀" />
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
        </S.TopCont>
    )
}
export default Category