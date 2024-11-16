import * as C from "@src/allFiles";
import * as S from "./style";

const Accident = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="사건/사고" />
                        <C.Classify description="사건/사고" />
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
            <C.Aside />
        </S.TopCont>
    );
};

export default Accident;
