import * as C from "@src/allFiles";
import * as S from "./style";

const Student = () => {
    return (
        <S.StudentArea>
            <S.StudentWrap>
                <S.StudentBoard>
                    <C.BoardTitle title="경소위키" description="학생" />
                    <C.Classify description="학생" />
                </S.StudentBoard>
            </S.StudentWrap>
        </S.StudentArea>
    );
};

export default Student;
