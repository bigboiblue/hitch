import React from "react";
import { Container, Title, InputBox } from "./styles/FormItemStyles";

interface Props {
    formItemData: FormItemData;
    handleOutput: (title: string, data: string | number) => void;
}

export default function FormItem(props: Props): React.ReactElement {
    let { title, default: defaultInput } = props.formItemData;

    if (defaultInput) props.handleOutput(title, defaultInput);
    return (
        <Container>
            <Title>{title}</Title>
            <InputBox type="text" placeholder={`Enter ${title} Here...`} defaultValue={defaultInput} onBlur={(e) => props.handleOutput(title, e.target.value)} />
        </Container>
    );
}
