import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";
import { useState } from "react";

function Account(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp() {
        try {
            const response = await api.post("/users/register", {
                name,
                email,
                password
            });
            if (response.data) {
                console.log(response.data);
            }
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);

        }
    }
    
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input}
                value={name}
                onChangeText={setName}
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input}
                value={email}
                onChangeText={setEmail}
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    />
            </View>
            <Button text="Criar Conta" onPress={handleSignUp} />
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Text style={styles.footerLink}>
                    Fazer login.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Account;