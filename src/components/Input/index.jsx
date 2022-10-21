import { Controller } from "react-hook-form"

import {
    IconContainer,
    InputText,
    InputContainer,
    ErrorMessage
} from "./style";

const Input = ({lefticon, name, control, errortext, ...rest}) => {
    return (
        <>
        <InputContainer>
            {lefticon ? (<IconContainer>{lefticon}</IconContainer>) : null}
            <Controller 
                name={name}
                control={control}
                rules={{required: true}}
                render={({field}) => <InputText {...field}{...rest} />}
            />
            
            
        </InputContainer>

         {errortext ? <ErrorMessage>{errortext}</ErrorMessage> : null}

        </>
    )
}

export { Input };