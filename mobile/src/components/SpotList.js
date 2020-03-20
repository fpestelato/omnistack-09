import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import api from '../services/api';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function SpotList({tech}) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function getSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });

      setSpots(response.data);
    }

    getSpots();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.thumbnail_url.replace(/ /g, '%20')}}
              style={styles.thumbnail}
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}/dia`: `GRATUITO`}</Text>
            <TouchableOpacity onPress={()=>{}} style={styles.button}>
              <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  bold: {
    fontWeight: 'bold',
  },

  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    marginRight: 15,
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2,
  },

  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    color: '#999',
    fontWeight: 'bold',
  },

  button: {
    marginTop: 50,
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    borderRadius: 2,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF'
  },
});