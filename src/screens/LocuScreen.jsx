import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LocuScreen() {
  const navigation = useNavigation();

 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá seja bem vindo,</Text>
      <Text style={styles.title}>a tela de Locutores</Text>

      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  }
});



