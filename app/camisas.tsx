import { Card } from "@/components/cards";
import { FIREBASESTORE_DB } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface Camisa {
    id: string;
    produto: string;
    preco: string;
}

export default function PagInicial() {
    const [camisas, setCamisas] = useState<Camisa[]>([]); 

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(FIREBASESTORE_DB, "camisas"), (snapshot) => {
            const userList: Camisa[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Camisa[];
            setCamisas(userList);
        });

        return () => unsubscribe();
    }, []);

    const primeiraCamisa = camisas[0];

    return (
        <SafeAreaView style={styles.container}>
            {primeiraCamisa ? (
                <Card 
                    produto={primeiraCamisa.produto} 
                    preco={primeiraCamisa.preco} 
                />
            ) : (
                <Text>Carregando...</Text> // Mensagem de carregando
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000", 
    },
});
