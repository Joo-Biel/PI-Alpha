import { View, Text, TextInput, TouchableOpacity, Linking, Image } from 'react-native';
import React, { useState } from 'react';
import facebookLogo from '../../assets/facebook_logo.png';
import twitterLogo from '../../assets/twitter_logo.png';
import instagramLogo from '../../assets/instagram_logo.png';
import backgroundImage from '../../assets/back.png';

const ContatoScreen = () => {
  const [mensagem, setMensagem] = useState('');

  const handleEnviarMensagem = () => {
    // Lógica para enviar a mensagem
    console.log(`Mensagem enviada: ${mensagem}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONTATOS</Text>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => Linking.openURL('https://www.facebook.com/')}
      >
        <Image source={facebookLogo} style={styles.logo} />
        <Text style={styles.socialButtonText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => Linking.openURL('https://www.twitter.com/')}
      >
        <Image source={twitterLogo} style={styles.logo} />
        <Text style={styles.socialButtonText}>Twitter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => Linking.openURL('https://www.instagram.com/')}
      >
        <Image source={instagramLogo} style={styles.logo} />
        <Text style={styles.socialButtonText}>Instagram</Text>
      </TouchableOpacity>

      <View style={styles.caixa1}>
        <Text style={styles.caixa1}>Mande sua mensagem</Text>
        <TextInput 
          style={styles.caixa2}
          value={mensagem}
          onChangeText={setMensagem}
          multiline={true}
          placeholder="Mensagem"
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleEnviarMensagem}
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundImage: `url(${backgroundImage})`,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#76BB39',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  caixa1: {
    backgroundColor: '#76BB39',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'marginLeft',
  },
  caixa2: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: '#Afa6A6A6',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'marginLeft',
    
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'marginLeft',
    
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#76BB39',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default ContatoScreen;
