import * as S from "./style"

interface BoardPropsType {
    title: string;
    description: string;
}

const BoardTitle: React.FC<BoardPropsType> = ({ title, description }) => {
    return (
        <S.TitleWrap>
            <div>
                <h1><span>{title}</span>: {description}</h1>
            </div>
        </S.TitleWrap>
    )
}
export default BoardTitle