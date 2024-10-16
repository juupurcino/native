import { StyleSheet, Text } from "react-native"
import { View } from "react-native"

export const Item = ({nome, idade, data } : {nome: string, idade:string, data:string}) => {
    return(
        <>

            <View style={styles.itemList}>
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
        fontSize: 10,
        color: "#EBEBEBFF",
        
    }
})