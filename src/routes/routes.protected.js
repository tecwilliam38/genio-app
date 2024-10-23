import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/main/main.jsx';
// import Service from '../components/service/service.jsx';
import Schedule from '../screens/schedule/schedule.jsx';
import Services from '../screens/services/services.jsx';
import { COLORS } from '../constants/theme.js';

const Stack = createNativeStackNavigator()

export default function ProtectedRoutes() {
     return (
          <Stack.Navigator >
               <Stack.Screen name="Main" component={Main} 
               options={{headerShown:false}}/>
               <Stack.Screen name="Services" component={Services}
               options={{                    
                    headerTitle:"Serviços" ,
                    headerTitleAlign:"center",
                    headerShadowVisible:false,
                    headerStyle:{
                         backgroundColor:COLORS.blue,
                    },
                    headerTintColor: COLORS.white,
               }}
               />
               <Stack.Screen name="Agenda" component={Schedule}
                options={{                    
                    headerTitle:"Fazer uma Reserva" ,
                    headerTitleAlign:"center",
                    headerShadowVisible:false,                    
                    headerTintColor: COLORS.blue,
               }}
               />
          </Stack.Navigator>
     );
}

