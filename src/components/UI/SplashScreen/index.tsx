import React, { useRef, useEffect, useState } from 'react'
import { Animated } from 'react-native'
import {
    Container,
    Splash
} from './styles'

export default function SplashScreen() {
    const scrollAnim = useRef(new Animated.Value(1000)).current;
    const [hide, setHide] = useState(false)

    const scrollToCenter = () => {
        Animated.timing(scrollAnim, {
            useNativeDriver: true,
            toValue: 0,
            duration: 1200
          }).start();
    }

    const scrollToTop = () => {
        Animated.timing(scrollAnim, {
            useNativeDriver: true,
          toValue: -1000,
          duration: 1200
          }).start();
    }

    useEffect(() => {
        scrollToCenter()
        setTimeout(() => {
            scrollToTop()
        }, 1800)
        setTimeout(() => {
            setHide(true)
        }, 3000)

    }, [scrollAnim])

    let content: JSX.Element | null = (
        <Container transparent>
            <Animated.View style={{
                transform: [{ translateY: scrollAnim }],
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center' }}>
                <Splash source={require('../../../../assets/splash.png')} />
            </Animated.View>
        </Container>
    )
    hide && (content = null)
    return (
        <>{content}</>
    )
}
