import React, { useState, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import * as actions from '../../../../store/actions'
import { IFormInputs, IButtonToProps } from '../../../../utils/interfaces'
import { validateName, validateEmail, validatePassword } from '../../../../utils/functions'
import {
    CANE
} from '../../../../utils/colors'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Layout from '../../../../components/UI/Layout';
import TabNavContainer from '../../../../components/UI/TabNavContainer'
import Form from '../../../../components/Form';
import Header from '../../../../components/Header'
import Loading from '../../../../components/UI/Loading'

export default function UpdateAccount() {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.updateUser.userData)
    const isLoading = useAppSelector(state => state.updateUser.loading)
    const navigation = useNavigation()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
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
        text: 'Update',
        onPress: () => handleSubmit(),
        direction: "arrowright",
        size: 28,
        color: CANE
    }

    const toggleSecure = () => {
        setIsSecure(prev => !prev)
    }

    const handleSubmit = () => {
        setIsValid(prev => { return { ...prev, name: validateName(name) }})
        setIsValid(prev => { return { ...prev, email: validateEmail(email) }})
        setIsValid(prev => { return { ...prev, password: validatePassword(password) }})

        dispatch(actions.updateAccount(navigation, name, email, password))
    }

    useFocusEffect(useCallback(() => {
        if (typeof user.name === 'undefined' || typeof user.email === 'undefined') {
            dispatch(actions.fetchUserData())
        }
        setName(user.name)
        setEmail(user.email)
        setPassword('')
        console.log('[user] ', user)
        return () => {}
    }, [user.name, user.email]))

    return (
        <Layout>
            {isLoading && <Loading transparent />}
            <Header />
            <TabNavContainer>
                <Form
                    title="Update Account"
                    formInputs={formInputs}
                    formButton={formButton}
                    toggleSecure={toggleSecure}
                />
            </TabNavContainer>
        </Layout>   
    )
}
