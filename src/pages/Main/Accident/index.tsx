import * as C from "@src/allFiles";
import * as S from "./style";

const Accident = () => {
    return (
        <S.AccidentArea>
            <S.AccidentWrap>
                <S.AccidentBoard>
                    <C.BoardTitle title="경소위키" description="사건/사고" />
                    <C.Classify description="사건/사고" />
                </S.AccidentBoard>
            </S.AccidentWrap>
        </S.AccidentArea>
    );
};

export default Accident;
