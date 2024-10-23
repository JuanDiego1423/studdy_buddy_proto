import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';


const Primera = () => {
    const navigation = useNavigation();
    const router = useRouter()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Título de la Aplicación</Text>
            <Button
                title="Ir a la Segunda Pantalla"
                onPress={() => router.navigate("/(tabs)/Segunda")}
            />
        </View>
    );
};



export default Primera;