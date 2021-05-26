import React from "react";

export interface IGame {
    id: number,
    type: string,
    description: string,
    range: number,
    price: number,
    'max-number': number,
    color: string,
    'min-cart-value': number  
}

export interface ITypes {
    types: Array<IGame>
}

export interface IUser {
    email: string
    password: string,
    name?: string,
}

export interface IBet {
    numbers: Array<number>,
    game_id: number
}

export interface IBetFormated {
    id: number,
    numbers: string,
    game_id: number,
    price: number,
    game: {
        type: string,
        color: string
    },
    created_at: string
}

export interface IRules {
    isValid: boolean,
    required: boolean,
    minLength: number,
    maxLength: number,
    isEmail: string,
}

export interface IAnyProperty {
    [key: string]: any
}

export interface IButtonToProps {
    onPress: Function,
    text: string,
    direction: "arrowright" | "arrowleft",
    size: number,
    color: string,
}

export interface IFormInputs {
    type: 'email' | 'password' | 'name',
    secure: boolean,
    placeholder: string,
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    required: boolean,
    valid: boolean,
    touched: boolean
}