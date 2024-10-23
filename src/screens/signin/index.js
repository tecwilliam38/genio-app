import { Image, ImageBackground, KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import { styles } from './style';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';

export default function SignInScreen(props) {
     const { container, containerLogo, logo, tileText } = styles;
     const { setUser } = useContext(AuthContext);
     const bg = require("../../assets/bgLogin.jpg")
     const logoLogin = require("../../assets/icon.png")

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");


     return (
          <>
               <StatusBar hidden={true} />
               <ImageBackground source={bg} style={container}>
                    <View style={container}>
                         <View style={containerLogo}>
                              <Image source={logoLogin} resizeMode='cover' style={logo} />
                         </View>
                              <Text  style={tileText}>Gênio do Corte</Text>
                         <View style={{flex:1, justifyContent:'space-around'}} >
                              <KeyboardAvoidingView>
                                   
                              </KeyboardAvoidingView>
                         </View>
                    </View>
               </ImageBackground>
          </>
     );
}