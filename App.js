import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'renko', id: '1' },
    { name: 'miko', id: '2' },
    { name: 'adamko', id: '3' },
    { name: 'marko', id: '4' },
    { name: 'semi', id: '5' },
    { name: 'siky', id: '6' },
    { name: 'ondek', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data = {people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    {/* <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
      ))}
    </ScrollView> */}

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
    fontSize: 25,
    marginHorizontal: 20,
  }
});
