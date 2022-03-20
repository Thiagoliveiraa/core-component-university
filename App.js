import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [title, setTitle] = React.useState(null);
  const [titleDiplay, setTitleDisplay] = React.useState(null);

  const changeLocationTitle = () => {
    setTitleDisplay(title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={0.5}
        resizeMode="cover"
        source={{
          uri: "https://unsplash.com/photos/e-loWO1C3Lw",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.textPageTitle}>Core Components</Text>

        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          Faça uma aplicação com o Expo que tenha: - uma imagem de fundo - um
          input onde o usuário poderá digitar um nome e um botão para confirmar
          a digitação [Esse nome deverá aparecer como título da página - isto é,
          fonte grande no início da página] - uma imagem dentro de uma view
          (configure esta view para que ela vire um círculo) [assim, a imagem
          ficará como as fotos de perfil (circular)]
        </Text>

        <Image
          style={styles.image}
          borderRadius={500}
          source={{
            width: 200,
            height: 200,
            uri: "https://images.unsplash.com/photo-1539667547529-84c607280d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80",
          }}
        />

        <Text style={styles.textTitle}>{titleDiplay}</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Onde fica este lugar?"
          onChangeText={setTitle}
        />

        <Button title="Inserir nome" onPress={changeLocationTitle} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#057696",
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
  textPageTitle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
  },
  textInput: {
    marginTop: 50,
    alignSelf: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    color: "white",
  },
  textTitle: {
    alignSelf: "center",
    fontSize: 42,
    color: "#000000",
  },
});
