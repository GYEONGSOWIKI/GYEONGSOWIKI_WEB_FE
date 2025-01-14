import * as S from "./style"

interface ClassifyPropsType {
    description: string;
}

const Classify: React.FC<ClassifyPropsType> = ({ description }) => {
    return (
        <S.ClassifyWrap>
            분류: <span>{description}</span>
        </S.ClassifyWrap>
    )
}
export default Classify