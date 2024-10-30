import { Link, router } from "expo-router";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const auth = FIREBASE_AUTH;

  const singIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        router.push('/(tabs)');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={styles.back} colors={["#ffffff", "#c8c8c8"]}>
        <Image
          style={styles.image}
          source={require("../assets/images/loja-de-roupas.png")} // Ajuste aqui para usar require
        />
      </LinearGradient>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextInput
        style={styles.input} // Adicione a cor de borda aqui também
        onChangeText={setPass}
        value={pass}
        placeholder="Senha"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={singIn}>
        <Text style={styles.bntText}>Entrar</Text>
      </TouchableOpacity>
      <View>
        <Link href={"/register"}>Cadastrar novo usuário</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 0, 
    borderRadius: 20,
    marginHorizontal: 10,
    width: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
  },

  button: {
    backgroundColor: "#0A7CDADA",
    margin: 10,
    padding: 6,
    borderRadius: 18,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  bntText: {
    fontFamily: "Montserrat",
    color: "#ffffff",
    fontWeight: "600",
  },

  back: {
    width: "100%",
    height: "auto",
    paddingVertical: 120,
    borderBottomStartRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },

  container: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Montserrat",
  },

  image: {
    width: 120,
    height: 120,
  },
});
