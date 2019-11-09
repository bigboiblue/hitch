import React, { useRef } from "react";
import ReactDOM from "react-dom";
import FormItem from "./FormItem";

import {
    Wrapper, Container, Title, FormItemContainer, ButtonContainer, SubmitButton, CancelButton,
} from "./styles/PopupFormStyles";

interface Props {
    isVisible: boolean;
    handleVisibility: () => void;
    title: string;
    submitCallback: (value: any) => void;
    submitButtonTitle?: string;
    formData: FormItemData[];
}

export default function PopupForm(props: Props): React.ReactElement {
    /** The key is the title, while property value is the data */
    const formOutputData = useRef({});

    function addToOutputData(title: string, data: string | number): void {
        formOutputData.current[title] = data;
    }

    function formExit(): void {
        props.handleVisibility();
        formOutputData.current = {};
    }

    return (
        <div>
            {
                ReactDOM.createPortal(
                    // TODO BUGFIX: Recreate by dragging from inside form to outside. Form closes because of mouse event.
                    <Wrapper pose={props.isVisible ? "visible" : "hidden"} isVisible={props.isVisible} onClick={formExit}>
                        <Container pose={props.isVisible ? "visible" : "hidden"} onClick={(e) => { e.stopPropagation(); }}>
                            <Title>{props.title}</Title>
                            <FormItemContainer>
                                {props.formData.map((value) => <FormItem key={value.title} formItemData={value} handleOutput={addToOutputData} />)}
                            </FormItemContainer>
                            <ButtonContainer>
                                <CancelButton onClick={formExit}>Cancel</CancelButton>
                                <SubmitButton onClick={() => { props.submitCallback(formOutputData.current); formExit(); }}>Submit</SubmitButton>
                            </ButtonContainer>
                        </Container>
                    </Wrapper>,
                    document.getElementById("portal"),
                )
            }
        </div>
    );
}
