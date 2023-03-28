import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import image from '../../assets/Fundao.jpg';
import Sound from 'react-native-sound';

const HomeScreen = () => {
  const sound = new Sound('', null, (error) => {
    if (error) {
      console.log('Erro ao carregar o som', error);
    }
  });
  const handlePlay = (link) => {
    sound.stop();
    sound.release();
    sound.initWithUrl(link);
    sound.play(); 
  };
  const imageURI = image;
 
  const musicas = [
    {
      nome: 'Música 1',
      artista: 'Artista 1',
      capa: 'https://picsum.photos/id/101/200/200',
      link: 'https://www.youtube.com/watch?v=lJFzYWhTW6Y',
    },
    {
      nome: 'Música 2',
      artista: 'Artista 2',
      capa: 'https://picsum.photos/id/102/200/200',
      link: 'https://example.com/musica2.mp3',
    },
    {
      nome: 'Música 3',
      artista: 'Artista 3',
      capa: 'https://picsum.photos/id/103/200/200',
      link: 'https://example.com/musica3.mp3',
    },
    {
      nome: 'Música 4',
      artista: 'Artista 4',
      capa: 'https://picsum.photos/id/104/200/200',
      link: 'https://example.com/musica4.mp3',
    },
    {
      nome: 'Música 5',
      artista: 'Artista 5',
      capa: 'https://picsum.photos/id/105/200/200',
      link: 'https://example.com/musica5.mp3',
    },
  ];



  return (
    <ImageBackground
      source={{ uri: imageURI }}
      style={styles.backgroundImage}
    >
<TouchableOpacity
key={index}
style={styles.musicCard}
onPress={() => handlePlay(musica.link)} 
>
  

      <View style={styles.container}>
        <Text style={styles.title}>WebRadio FM</Text>
        <ScrollView contentContainerStyle={styles.musicList}>
          {musicas.map((musica, index) => (
            <TouchableOpacity
              key={index}
              style={styles.musicCard}
              onPress={() => handlePlay(musica.link)}
            >
              <Image source={{ uri: musica.capa }} style={styles.musicImage} />
              <View style={styles.musicInfo}>
                <Text style={styles.musicName}>{musica.nome}</Text>
                <Text style={styles.musicArtist}>{musica.artista}</Text>
              </View>
            </TouchableOpacity>))}
        </ScrollView>
      </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 50,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Arial, sans-serif',
  },
  musicList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
})

export default HomeScreen;



