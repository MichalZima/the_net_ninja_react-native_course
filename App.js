import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from "./components/header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'programovanie', key: '1' },
    { text: 'obchod', key: '2' },
    { text: 'obed', key: '3' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem = {({item}) => (
              <Text>{item.text}</Text>
            )}
          
          />
        </View>

      </View>



    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40, 
  },
  list: {
    paddingTop: 20,
    marginTop: 30,
  },
});
