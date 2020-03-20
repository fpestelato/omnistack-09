import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, AsyncStorage, Text, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png'
import SpotList from '../components/SpotList';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storedTechs => {
      const techsArray = storedTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return <SafeAreaView style={styles.container}>
    <Image source={logo} style={styles.logo} />

    { techs.map(tech => <SpotList key={tech} tech={tech}/>) }
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingTop: 10,
  },

  button: {
    marginTop: 50,
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    borderRadius: 2,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
})