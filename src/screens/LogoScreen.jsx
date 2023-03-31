import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const backgroundImage = require('../../assets/back.png');

const LogoScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/lolo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#1DB954" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
  },
  logo: {
    width: 500,
    height: 500,
    marginBottom: 20,
  },
});

export default LogoScreen;
