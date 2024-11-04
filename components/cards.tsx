import { Image, Text, View, StyleSheet, ImageSourcePropType } from "react-native";

export const Card = ({
  produto,
  preco,
}: {
  produto: string;
  preco: string;
}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.colorText}>{produto}</Text>
      <Text style={styles.colorText}>{preco}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFBEFFF",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2, 
  },
  colorText: {
    color: "#000000FF",
    fontSize: 20, 
    padding: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
});
