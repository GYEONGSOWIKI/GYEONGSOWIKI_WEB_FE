import * as C from "@src/allFiles";
import * as S from "./style"

const Category = () => {
    return (
        <S.CategoryArea>
            <S.CategoryWrap>
                <S.CategoryBoard>
                    <C.BoardTitle title="경소위키" description="틀" />
                    <C.Classify description="틀" />
                </S.CategoryBoard>
            </S.CategoryWrap>
        </S.CategoryArea>
    )
}
export default Category