import { ButtonContainer } from "./style"

const Button = ({title, variant="primary", onclick}) => {
    return (
        <ButtonContainer variant={variant} onClick={onclick}>
            {title}
        </ButtonContainer>
    )
}

export { Button }