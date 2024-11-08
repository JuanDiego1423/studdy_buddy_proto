import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Start learning!!!</Text>
      <View style={styles.box}>
        <Button title="Go" onPress={() => alert('Button pressed!')} color="#ffffff" />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  box: {
    backgroundColor: '#fcc566',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#1a1a1a',
    fontSize: 24,
    fontFamily: 'Comic Sans MS',
    marginBottom: 15,
  },
});

export default App;
