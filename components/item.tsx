import { StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image"

export const Item = ({nome, idade, data, imagem } : {nome: string, idade: string, data: string, imagem: string}) => {
    return(
        <>

            <View style={styles.itemList}>
                <Image source={imagem} style={styles.imageStyle}></Image>
                <Text>{nome}</Text>
                <Text>{idade}</Text>
                <Text>{data}</Text>
            </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    itemList:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1A7468FF",
        margin: 10,
        height: 80,
        paddingHorizontal: 10,
        fontSize: 10
        
    },
    
    imageStyle: {
        width: 30,
        height: 30
    }
})