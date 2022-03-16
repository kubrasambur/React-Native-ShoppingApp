import { View, Text } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const ErrorAnimation = () => {
  return (
    <AnimatedLottieView source={require('../../assets/error.json')} autoPlay resizeMode="cover" style={{width:"100%"}} />

  )
}

export default ErrorAnimation