import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('miko');
  const [age, setAge] = useState('18');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='napr. miko flosso'
        onChangeText = {(val) => setName(val)}/>

  <Text>name: {name}, age: {age}</Text>
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
  input: {
    borderWidth: 2,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
