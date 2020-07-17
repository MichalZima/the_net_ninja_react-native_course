import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'renko', key: '1' },
    { name: 'miko', key: '2' },
    { name: 'adamko', key: '3' },
    { name: 'marko', key: '4' },
    { name: 'semi', key: '5' },
    { name: 'siky', key: '6' },
    { name: 'ondek', key: '7' },
  ]);

  return (
    <View style={styles.container}>

    <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
      ))}
    </ScrollView>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 25
  }
});
