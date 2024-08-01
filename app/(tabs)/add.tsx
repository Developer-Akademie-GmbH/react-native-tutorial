import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Add = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if(name && phone && email) {
      const contact = {name, phone, email};
      const existingContactsString = await AsyncStorage.getItem('contacts');
      let contacts = [];
      if(existingContactsString) {
        contacts = JSON.parse(existingContactsString);
      }

      contacts.push(contact);
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));

      Alert.alert('Kontakt gespeichert',
        'Name: ' + name + '\nTelefon: ' + phone + '\nE-Mail ' + email 
      );
      setName('');
      setPhone('');
      setEmail('');
    } else {
      Alert.alert('Fehler', 'Bitte füllen Sie allle Felder aus.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Neuen Kontakt hinzufügen</Text>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>

      <Text>Telefonnummer:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone}></TextInput>

      <Text>E-Mail:</Text>
      <TextInput style={styles.input} value={email}  onChangeText={setEmail}></TextInput>

      <Button title="Kontakt speichern" onPress={handleSubmit}></Button>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
})