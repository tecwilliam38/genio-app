import { Alert, FlatList, Text, View } from "react-native";
import { styles } from "./abahome.style.js";
import Barber from "../../components/barber/index.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js"

function AbaHome(props) {

    const [barbers, setBarbers] =  useState([]);

    function handleClick(id_barber, name, specialty, icon){
        props.navigation.navigate("Services", {
            id_barber,
            name,
            specialty,
            icon
        });
    }

    async function LoadBarbers() {
        try {
            const response = await api.get("/barbers");
            if (response.data) {
                setBarbers(response.data)
            }
        } catch (error) {
            if (error.response?.data.error)
                console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        LoadBarbers();
    }, [])

    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços médicos</Text>

        <FlatList data={barbers}
            keyExtractor={(doc) => doc.id_barber}            
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Barber name={item.name}
                    id_barber={item.id_barber}
                    icon={item.icon}
                    specialty={item.specialty}
                    onPress={handleClick}
                />
            }} />
    </View>
}

export default AbaHome;