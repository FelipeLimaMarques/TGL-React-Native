import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import * as actions from '../../../../store/actions'
import { IFormInputs, IButtonToProps } from '../../../../utils/interfaces'
import { validateEmail, validatePassword } from '../../../../utils/functions'
import {
    DARK_GRAY,
    CANE
} from '../../../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../navigation/Stack'
import Layout from '../../../../components/UI/Layout';
import Form from '../../../../components/Form';
import Logo from '../../../../components/UI/Logo';
import Footer from '../../../../components/UI/Footer'
import Loading from '../../../../components/UI/Loading'

export default function LogIn() {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.auth.loading)
    const navigation = useNavigation() as StackNavigationProp<RootStackParamList, 'LogIn'>
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState({ email: true, password: true })
    const [isSecure, setIsSecure] = useState(true)
    const [password, setPassword] = useState('')
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
        {
            type: 'password',
            secure: isSecure,
            placeholder: 'Password',
            value: password,
            onChange: setPassword,
            required: true,
            valid: isValid.password,
            touched: false
        },
    ]
    const formButton: IButtonToProps = {
        text: 'Log In',
        onPress: () => handleSubmit(),
        direction: "arrowright",
        size: 28,
        color: CANE
    }
    const navButton: IButtonToProps = {
        text: 'Sign Up',
        onPress: () => navigation.navigate('Register'),
        direction: "arrowright",
        size: 36,
        color: DARK_GRAY
    }

    const handleSubmit = () => {
        setIsValid(prev => { return { ...prev, email: validateEmail(email) }})
        setIsValid(prev => { return { ...prev, password: validatePassword(password) }})
        
        dispatch(actions.login(email, password))
    }

    const toggleSecure = () => {
        setIsSecure(prev => !prev)
    }

    return (
        <Layout>
            {isLoading && <Loading transparent />}
            <Logo />
            <Form
                title="Authentication"
                formInputs={formInputs}
                showForgot
                formButton={formButton}
                navButton={navButton}
                toggleSecure={toggleSecure}
            />
            <Footer />
        </Layout>   
    )
}
