import * as S from "./style"

import React from "react";

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
}
const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => {
    return (
        <S.InputWrap>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </S.InputWrap>
    )
}
export default InputField