import * as C from "@src/allFiles";
import * as S from "./style";

const Teacher = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="선생님" />
                        <C.Classify description="선생님" />
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
            <C.Aside />
        </S.TopCont>
    );
};

export default Teacher;
