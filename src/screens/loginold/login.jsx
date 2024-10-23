import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js"
import { AuthContext } from "../../context/auth.js";


function Login(props) {

    const { setUser } = useContext(AuthContext)
        // const [email, setEmail] = useState("williamfrs_33@hotmail.com");
        // const [password, setPassword] = useState("091@William");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function ClickSignUp() {
        props.navigation.navigate("SignUp")
    }

    async function handleSignin() {
        try {
            const response = await api.post("/users/login", {
                email,
                password
            });

            if (response.data) {                
                console.log(response.data.token);                
                api.defaults.headers.common['authorization'] = "Bearer " + response.data.token;                
                setUser(response.data)
            }
            else {
                Alert.alert(Token)
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
            <Button text="Acessar"
                onPress={handleSignin}
            />
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta. </Text>
            <TouchableOpacity onPress={ClickSignUp} >
                <Text style={styles.footerLink}
                >Criar conta agora.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Login;