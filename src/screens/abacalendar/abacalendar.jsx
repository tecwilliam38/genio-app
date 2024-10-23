import { Alert, FlatList, View, Text } from "react-native";
import { styles } from "./abacalendar.style.js";

import Appointment from "../../components/appointment/appointment.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function AbaCalendar() {

    const [appointments, setAppointments] = useState([]);

    async function LoadData() {
        try {
            const response = await api.get("/agenda");

            if (response.data)
                setAppointments(response.data);

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
        }
    }

    async function deleteData(id_appointment) {
        try {
            const response = await api.delete("/agenda/" + id_appointment);
            if (response.data?.id_appointment)
                LoadData();
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error)
        }
    }

    useEffect(() => {
        LoadData();
    },)

    return (
        <View style={styles.container}>
            <FlatList data={appointments}
                // keyExtractor={(doc) => doc.id_barber} 
                keyExtractor={(doc) => doc.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Appointment service={item.service}
                        id_appointment={item.id_appointment}
                        barber={item.barber}
                        specialty={item.specialty}
                        bookingDate={item.booking_date}
                        bookingHour={item.booking_hour}
                        onPress={deleteData}
                    />
                }} />         
        </View>
    )
}

export default AbaCalendar;

