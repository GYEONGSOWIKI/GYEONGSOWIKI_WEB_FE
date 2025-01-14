import * as S from "./style"

interface TablePropsType {
    title: string;
    content: string;
}

const Table: React.FC<TablePropsType> = ({ title, content }) => {
    return (
        <S.TableWrap>
            <S.TableTitle>{title}</S.TableTitle>
            <S.TableContent>{content}</S.TableContent>
        </S.TableWrap>
    )
}
export default Table