import React, { useState } from 'react'
import { useAppDispatch } from '../../../../hooks'
import * as actions from '../../../../store/actions'
import { IFormInputs, IButtonToProps } from '../../../../utils/interfaces'
import { validateEmail } from '../../../../utils/functions'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../navigation/Stack'
import {
    DARK_GRAY,
    CANE
} from '../../../../utils/colors'
import Layout from '../../../../components/UI/Layout';
import Form from '../../../../components/Form';
import Logo from '../../../../components/UI/Logo';
import Footer from '../../../../components/UI/Footer'

export default function ResetPassword() {
    const dispatch = useAppDispatch()
    const navigation = useNavigation() as StackNavigationProp<RootStackParamList, 'ResetPassword'>
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState({ email: true })
    const formInputs: Array<IFormInputs> = [
        {
            type: 'email',
            secure: false,
            placeholder: 'Email',
            value: email,
            onChange: setEmail,
            required: true,
            valid: isValid.email,
            touched: false
        },
    ]
    const formButton: IButtonToProps = {
        text: 'Send Link',
        onPress: () => handleSubmit(),
        direction: "arrowright",
        size: 28,
        color: CANE
    }
    const navButton: IButtonToProps = {
        text: 'Back',
        onPress: () => navigation.goBack(),
        direction: "arrowleft",
        size: 36,
        color: DARK_GRAY
    }

    const handleSubmit = () => {
        setIsValid(prev => { return { ...prev, email: validateEmail(email) } })

        dispatch(actions.resetPassword(navigation, email))
    }

    return (
        <Layout>
            <Logo />
            <Form
                title="Reset password"
                formInputs={formInputs}
                showSignUp
                formButton={formButton}
                navButton={navButton}
                toggleSecure={() => {}}
            />
            <Footer />
        </Layout>   
    )
}
