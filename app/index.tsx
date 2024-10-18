import { Link, router } from "expo-router";
import { useState } from "react";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [count, setCount] = useState(0);

  //   const onPress = () => setCount((prevCount) => prevCount + 1);

  const onPress = () => {
    router.push("/(tabs)");
  };

  console.log(email, pass);
  console.log(typeof email, typeof pass);

  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={pass}
          placeholder="Senha"
          keyboardType="numeric"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.bntText}>Press Here</Text>
        </TouchableOpacity>
        <View>
          <Link href={"/register"}>Cadastrar novo usuário</Link>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 5,
    borderColor: "#0F82C5FF",
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 10,
  },

  button: {
    backgroundColor: "#0f82c5ff",
  },

  bntText: {
    fontFamily: "Montserrat",
    color: "#ffffff",
  },
});
