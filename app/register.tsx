import { Link } from "expo-router";
import { Text, View} from "react-native";

export default function Register(){

    return(
        <>

        <Link href={"/"}>Voltar</Link>
        
        <View>
            <Text>Cadastro de usuário</Text>
        </View>
        
        </>
    )
}