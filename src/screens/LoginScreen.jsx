import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

const imageURI =
  "https://cdn.discordapp.com/attachments/1085610772014575756/1086347788264144906/Luizcbm_black_and_green_background_in_426x870_2b8c5382-f10b-41a3-82e0-343c439ebddd.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // implementar a lógica de autenticação aqui
  };

  const handleNavigateToCadScreen = () => {
    navigation.navigate("CadScreen");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageURI }}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <View>
            <img
              src="https://www.canva.com/design/DAFde9_TmLY/Py6axnS7j8Qh-MaHoDfmUQ/edit?utm_content=DAFde9_TmLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton.jpg"
              alt=""
            />
          </View>
          <View style={styles.fundo}>
            
             <div style={styles.Log} ><Text>Login</Text></div>
           
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleNavigateToCadScreen}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formContainer: {
    height: 450,
    marginTop: 40,
    marginBottom: 0,
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 400,
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 50,
  },
  button: {
    height: 40,
    borderRadius: 40,
    backgroundColor: "#38b6ff",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    marginLeft: 100,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  fundo: {
    flex: 1,
    width: "300px",
    height: "100px",
    paddingBottom: 10,
    backgroundColor: "#76bb39",
    borderRadius: "40px",
    marginLeft: 55,
    marginTop: 0,
  },
  Log: {
    flex: 1,
    width: "100px",
    marginLeft: 85,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 50,
  },

  Text: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 115,
  },
});

export default LoginScreen;
