import { format } from 'date-fns'
import { ToastAndroid } from 'react-native'

export const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randComplete = (arr: Array<any>, max: number, old: number, range: number) => {
    for (let i = 0; i < max - old; i++) {
        let rand = getRandomIntInclusive(1, range);
        if (arr.includes(rand)) {
            i--;
            continue;
        }
        arr = arr.concat(rand);
    }
    arr = arr.sort((a, b) => a - b);
    return arr;
}

export const formatToReal = (price: number) => {
    return `R$ ${price.toFixed(2)}`.replace('.', ',')
}

export const formatDate = (date: string | number) => {
    return typeof date === 'string'
        ? format(new Date(date.replace(' ', 'T')), 'dd/MM/yyyy')
        : format(new Date(date), 'dd/MM/yyyy')
}

export const validateName = (name: string) => {
    const namePattern: RegExp = /\D/

    if (!namePattern.test(name)) {
        ToastAndroid.show('Nome não pode conter números', ToastAndroid.SHORT)
        return false
    } else {
        return true
    }
}

export const validateEmail = (email: string) => {
    const pattern: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        
    if (!pattern.test(email)) {
        ToastAndroid.show('E-mail precisa estar no formato correto', ToastAndroid.SHORT)
        return false
    } else {
        return true
    }
}

export const validatePassword = (password: string) => {
    if (password.trim().length < 6) {
        ToastAndroid.show('Senha precisa ter no mínimo 6 caracteres', ToastAndroid.SHORT)
        return false
    } else {
        return true
    }
}