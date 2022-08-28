import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, SafeAreaView } from 'react-native';

export default function App() {
  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [vastaus, setVastaus] = useState('')
  const tyhja = () => {
    setLuku1('');
    setLuku2('');
    setVastaus('');
  };
  const summa = () => {
    let num1 = Number.parseInt(luku1);
    let num2 = Number.parseInt(luku2);
    setVastaus(num1 + num2)
    setLuku1('');
    setLuku2('');
  };
    const jaa = () => {
    let num1 = Number.parseInt(luku1);
    let num2 = Number.parseInt(luku2);
    setVastaus(num1 - num2);
    setLuku1('');
    setLuku2('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.input, { backgroundColor: '#C0C0C0' }]}>{vastaus}</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setLuku1(text)} value={luku1}/>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={text => setLuku2(text)} value={luku2} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title='+' onPress={summa} />
        <Button title='-'onPress={jaa} color="#f194ff"/>
        <Button title='Tyhjää'onPress={tyhja} style={styles.button}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: 'grey',
    justifyContent: 'center',
    },
  input: {
    borderBottomColor: '#05C203',
    backgroundColor: 'white',
    borderRadius:5,
    borderBottomWidth: 1,
    width:'100%',
    height:50,
    marginBottom:10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 25,
    color: '#000000'
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
});
