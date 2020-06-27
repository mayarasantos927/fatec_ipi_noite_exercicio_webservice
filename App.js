import React, { useState } from 'react';
import { StyleSheet,  View, TextInput, Button, FlatList, Text } from 'react-native';
import PrevisaoItem from './componentes/previsaoItem';

export default function App() {
  const endpoint = 'https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q=';// endereço que consome o WEBSERVICE.
  const apikey = 'YOUR_KEY';

  const obterPrevisoes = () => {
    setPrevicoes([])
    const target = endpoint + cidade + '&appid=' + apikey;
    fetch(target)
    .then(dados => dados.json())
    .then(dados => setPrevicoes([dados]));
  }

  const [ cidade, setCidade ] = useState('');
  const [ previsoes, setPrevicoes ] = useState([]);

  const capturarCidade = (cidade) => {
    setCidade(cidade)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Veja como está o clima na sua cidade!</Text>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
        />
        <Button
          title="Buscar"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList 
        data={previsoes}
        renderItem={
          previsao => <PrevisaoItem previsao={previsao.item}></PrevisaoItem>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    padding: 40,
    textAlign: 'center',
    color: '#1A237E'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    textAlign: 'left',
    color: '#000',
    marginBottom: 4,
    fontSize: 18,
    width: '300px'

  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  }
});