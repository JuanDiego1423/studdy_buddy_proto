import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const FileUploader: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const navigation = useNavigation();
  const router = useRouter();

  const handleSave = () => {
    console.log("Contenido guardado:", content);
    router.push("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        placeholder="Add content or upload a pdf"
        placeholderTextColor="#aaa"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FileUploader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 250,
    backgroundColor: "#ffffff",
    borderColor: "#1a1a1a",
    borderRadius: 8,
    padding: 20,
  },
  textarea: {
    width: "100%",
    height: 150,
    backgroundColor: "#222",
    borderColor: "#fcc566",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    color: "#fff",
    textAlignVertical: "top",
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#fcc566",
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#1a1a1a",
    textAlign: "center",
  },
});
