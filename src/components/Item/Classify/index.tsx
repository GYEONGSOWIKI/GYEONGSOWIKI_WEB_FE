import * as S from "./style"

interface ClassifyProps {
    description: string;
}

const Classify = ({ description }: ClassifyProps) => {
    return (
        <S.ClassifyWrap>
            분류: <span>{description}</span>
        </S.ClassifyWrap>
    )
}
export default Classify