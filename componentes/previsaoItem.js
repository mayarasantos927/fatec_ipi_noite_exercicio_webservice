import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {
  return (
      <Cartao estilos={estilos.cartao}>
          <View style={estilos.tela}>
              <Image
                style={estilos.imagem}
                source={{ uri: `https://openweathermap.org/img/wn/${props.previsao.weather[0].icon}.png` }}
              />
              <View>
                  <View style={estilos.primeiraLinha}>
                    <Text>
                    <b>Nascer do sol:</b> {new Date(props.previsao.sys.sunrise * 1000).toLocaleTimeString()}
                      - <b>Pôr do sol:</b> {new Date(props.previsao.sys.sunset * 1000).toLocaleTimeString()} 
                    </Text>
                  </View>
                  <View style={estilos.segundaLinha}>
                      <Text style={estilos.valor}><b>Sensação Térmica:</b> {props.previsao.main.feels_like}º</Text>
                  </View>
                  <View style={estilos.terceiraLinha}>
                    <Text style={estilos.valorTempo}>Hoje o dia está {props.previsao.weather[0].description}</Text>
                  </View>
              </View>
          </View>
      </Cartao>
  )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5,
        marginTop: 30,
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },    
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    terceiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    },
    valorTempo: {
        fontWeight: 'bold'
    }
});

export default PrevisaoItem;