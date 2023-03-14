import React, { useEffect } from 'react';
import { StyleSheet, View, Animated, Easing, Image } from 'react-native';
import logo from '../screens/assets/Logo.png';

const SplashScreen = () => {
  const logoScale = new Animated.Value(0);
  
  useEffect(() => {
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image 
        style={[styles.logo, { transform: [{ scale: logoScale }] }]} 
        source={logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default SplashScreen;

