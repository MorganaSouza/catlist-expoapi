import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFonts, ComicNeue_400Regular } from '@expo-google-fonts/comic-neue';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CatBreeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({ ComicNeue_400Regular });

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await response.json();
        setBreeds(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar raças:', error);
        setLoading(false);
      }
    };

    fetchBreeds();
    loadFavorite(); // Carregar raça favorita salva
  }, []);

  const loadFavorite = async () => {
    try {
      const storedBreed = await AsyncStorage.getItem('@favorite_breed');
      if (storedBreed) {
        setSelectedBreed(JSON.parse(storedBreed));
      }
    } catch (e) {
      console.error('Erro ao carregar raça favorita:', e);
    }
  };

  const saveFavorite = async (breed) => {
    try {
      await AsyncStorage.setItem('@favorite_breed', JSON.stringify(breed));
      Alert.alert('Favorito salvo', `${breed.name} foi salva como favorita!`);
    } catch (e) {
      console.error('Erro ao salvar raça favorita:', e);
    }
  };

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.breedItem}
      onPress={() => setSelectedBreed(item)}
    >
      <Text style={styles.breedName}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🐾</Text>
      <Text style={styles.title}>Cat Breeds</Text>
      <Text style={styles.subtitle}>Meet these adorable felines!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search breed..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#aaa"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#DA70D6" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={filteredBreeds}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

      {selectedBreed && (
        <ScrollView
          style={styles.detailsContainer}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text style={styles.detailTitle}>{selectedBreed.name}</Text>

          <Image
            source={{
              uri:
                selectedBreed.image?.url ||
                `https://cdn2.thecatapi.com/images/${selectedBreed.reference_image_id}.jpg`,
            }}
            style={styles.selectedImage}
            resizeMode="cover"
          />

          <Text style={styles.detailText}>
            <Text style={styles.bold}>Origin:</Text> {selectedBreed.origin}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Temperament:</Text> {selectedBreed.temperament}
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Life Expectancy:</Text> {selectedBreed.life_span} years
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Weight:</Text> {selectedBreed.weight.metric} kg
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.bold}>Description:</Text> {selectedBreed.description}
          </Text>
          {selectedBreed.wikipedia_url && (
            <Text style={styles.detailText}>
              <Text style={styles.bold}>More information:</Text> {selectedBreed.wikipedia_url}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => saveFavorite(selectedBreed)}
            style={styles.saveButton}
            activeOpacity={0.7}
          >
            <Text style={styles.saveButtonText}>Salvar Raça</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Morgana Souza. All rights reserved. Licensed under the MIT License.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    padding: 16,
    paddingTop: 50,
  },
  icon: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontFamily: 'ComicNeue_400Regular',
    textAlign: 'center',
    color: '#C71585',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'ComicNeue_400Regular',
    color: '#8B008B',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    fontFamily: 'ComicNeue_400Regular',
  },
  breedItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  breedName: {
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
    backgroundColor: '#FFE4E1',
    borderRadius: 16,
    padding: 16,
  },
  detailTitle: {
    fontSize: 22,
    fontFamily: 'ComicNeue_400Regular',
    textAlign: 'center',
    color: '#C71585',
    marginBottom: 10,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 6,
  },
  bold: {
    fontWeight: 'bold',
    color: '#C71585',
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#C71585',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#C71585',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'ComicNeue_400Regular',
  },
  footer: {
    marginTop: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'ComicNeue_400Regular',
  },
});

export default CatBreeds;