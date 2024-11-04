import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PagInicial() {

  

  return (
    <>



      <View style={styles.container}>

        <Text style={styles.text}>Conheça nossos produtos</Text>
        
        <View>

          <Link style={styles.bntText} href={"../camisas.tsx"}>Camisetas 👕</Link>
          <Link style={styles.bntText} href={"../calcas"}>Calças 👖</Link>
          <Link style={styles.bntText} href={"../jaquetas"}>Jaquetas 🧥</Link>

        </View>

      </View>


    </>
  );
}

const styles = StyleSheet.create({
  
  bntText : {

    backgroundColor: "#DC143C",
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
    margin: 10,
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontSize: 20

  },

  container: {

    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    alignItems: "center",
    
  },
  text: {

    fontWeight: "bold",
    color: "#0cc0df",
    fontSize: 25,
    display: "flex",
    

  }
});
