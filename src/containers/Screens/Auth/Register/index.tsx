import React, { useState } from 'react'
import { useAppDispatch } from '../../../../hooks'
import * as actions from '../../../../store/actions'
import { IFormInputs, IButtonToProps } from '../../../../utils/interfaces'
import { validateName, validateEmail, validatePassword } from '../../../../utils/functions'
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

export default function Register() {
    const dispatch = useAppDispatch()
    const navigation = useNavigation() as StackNavigationProp<RootStackParamList, 'Register'>
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSecure, setIsSecure] = useState(true)
    const [isValid, setIsValid] = useState({ name: true, email: true, password: true })
    const formInputs: Array<IFormInputs> = [
        {
            type: 'name',
            secure: false,
            placeholder: 'Name',
            value: name,
            onChange: setName,
            required: true,
            valid: isValid.name,
            touched: false
        },
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
        text: 'Register',
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
        setIsValid(prev => { return { ...prev, name: validateName(name) }})
        setIsValid(prev => { return { ...prev, email: validateEmail(email) }})
        setIsValid(prev => { return { ...prev, password: validatePassword(password) }})

        dispatch(actions.register(navigation, name, email, password))
    }

    const toggleSecure = () => {
        setIsSecure(prev => !prev)
    }

    return (
        <Layout>
            <Logo />
            <Form
                title="Registration"
                formInputs={formInputs}
                formButton={formButton}
                navButton={navButton}
                toggleSecure={toggleSecure}
            />
            <Footer />
        </Layout>   
    )
}
