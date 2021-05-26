import React from 'react'
import {
    InputBox,
    PaperInput
} from './styles';
import {
    LIGHT_GRAY
} from '../../../utils/colors'

interface IInputProps {
    type: "email" | "password" | "name",
    secure: boolean,
    placeholder: string,
    value: string,
    isValid: boolean,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    toggleSecure: Function
}

export default function Input(props: IInputProps) {
    return (
        <InputBox>
            <PaperInput
                secureTextEntry={props.secure}
                autoCompleteType={props.type}
                label={props.placeholder}
                value={props.value}
                error={!props.isValid}
                selectionColor={LIGHT_GRAY}
                right={props.placeholder === 'Password' && <PaperInput.Icon onPress={() => props.toggleSecure()} name="eye" />}
                onChangeText={(text) => props.onChange(text)} />
        </InputBox>
    )
}
