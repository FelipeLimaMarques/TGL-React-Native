import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IFormInputs, IButtonToProps } from '../../utils/interfaces'
import { DARK_GRAY } from '../../utils/colors'
import {
    Container,
    FormBox,
    FormTitle,
    InputView,
    LinkBox,
    LinkText,
    LinkView
} from './styles';
import Input from './Input'
import ButtonTo from '../UI/ButtonTo'

interface IFormProps {
    title: string,
    formInputs: Array<IFormInputs>,
    showForgot?: boolean,
    showSignUp?: boolean,
    formButton: IButtonToProps,
    navButton?: IButtonToProps,
    toggleSecure: Function
}

export default function Form(props: IFormProps) {
    const navigation = useNavigation()
    let inputs: Array<JSX.Element> = props.formInputs.map((input) => (
        <Input
            key={input.type}
            type={input.type}
            secure={input.secure}
            toggleSecure={props.toggleSecure}
            placeholder={input.placeholder}
            value={input.value}
            isValid={input.valid}
            onChange={input.onChange}
        />
    ))

    return (
        <Container navButton={!!props.navButton}>
            <FormTitle>{props.title}</FormTitle>
            <FormBox>
                <InputView>
                    {inputs}
                </InputView>
                {props.showForgot &&
                    <LinkView>
                        <LinkBox onPress={() => navigation.navigate('ResetPassword')}><LinkText>I forgot my password</LinkText></LinkBox>
                    </LinkView>}
                <ButtonTo
                    onPress={props.formButton.onPress}
                    text={props.formButton.text}
                    direction={props.formButton.direction}
                    size={props.formButton.size}
                    color={props.formButton.color} />
            </FormBox>
            {props.navButton &&
                <ButtonTo
                onPress={props.navButton.onPress}
                text={props.navButton.text}
                direction={props.navButton.direction}
                size={props.navButton.size}
                color={props.navButton.color} />
            }
            {props.showSignUp &&
                <ButtonTo
                onPress={() => navigation.navigate('Register')}
                text="Sign Up"
                direction="arrowright"
                size={36}
                color={DARK_GRAY} />
            }
        </Container>
    )
}
