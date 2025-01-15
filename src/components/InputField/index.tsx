import * as S from "./style"

import React from "react";

interface InputPropsType {
    label: string;
    type: string;
    placeholder: string;
}
const InputField: React.FC<InputPropsType> = ({ label, type, placeholder }) => {
    return (
        <S.InputWrap>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </S.InputWrap>
    )
}
export default InputField