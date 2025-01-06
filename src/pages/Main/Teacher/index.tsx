import * as C from "@src/allFiles";
import * as S from "./style";

const Teacher = () => {
    return (
        <S.TeacherArea>
            <S.TeacherWrap>
                <S.TeacherBoard>
                    <C.BoardTitle title="경소위키" description="선생님" />
                    <C.Classify description="선생님" />
                </S.TeacherBoard>
            </S.TeacherWrap>
        </S.TeacherArea>
    );
};

export default Teacher;
