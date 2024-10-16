import { Image, ImageSourcePropType, Text, View, StyleSheet} from "react-native"

export const Header = ({image} : {image: ImageSourcePropType}) => {
    return(
        <>
            <View style={styles.background}>
                <Text style={styles.colorText}>Header exemplo</Text>
                <Image source={image}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#332D2DFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    colorText: {
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 25    
    }

  });