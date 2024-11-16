import * as C from "@src/allFiles";
import * as S from "./style";

const Student = () => {
    return (
        <S.TopCont>
            <S.ContentArea>
                <S.MainWrap>
                    <S.Board>
                        <C.BoardTitle title="경소위키" description="학생" />
                        <C.Classify description="학생" />
                    </S.Board>
                </S.MainWrap>
            </S.ContentArea>
            <C.Aside />
        </S.TopCont>
    );
};

export default Student;
