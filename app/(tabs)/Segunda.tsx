import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

const Segunda = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Segunda Pantalla</Text>
      <Button
        title="Volver a la Pantalla Principal"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Segunda;