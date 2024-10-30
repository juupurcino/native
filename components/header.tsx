import { Image, ImageSourcePropType, Text, View, StyleSheet} from "react-native"

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.colorText}>Loja de Roupas</Text>
                <Image style={styles.image} source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#0cc0df",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 2
        
    
    },

    colorText: {
        color: "#000000FF",
        fontSize: 25,
        fontFamily: "inter",
        padding: 8   
    },
    fonte: {
        fontFamily: "Montserrat"
    },

    image: {

        width: 90,
        height: 90

    }

  });