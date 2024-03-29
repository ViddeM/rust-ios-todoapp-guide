import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native';

export default function App() {
  const { SBridge } = NativeModules;
  const [number, setNumber] = useState(10);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Number: {number}</Text>
      <Button title={"Call Rust!"} onPress={() => {
        SBridge.getNumber(number, number => {
          setNumber(number)
        })
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
