import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Bem-vindo à Rádio Web</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Radio')}>
        <Text style={styles.playButtonText}>Ouvir agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#f4511e',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;



