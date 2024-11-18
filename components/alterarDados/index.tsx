import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Layout from '@/components/layout'
import BotaoTitulo from '@/components/botaoTitulo'
import Botoes from '@/components/botaoHistorico'
import BotaoItens from '@/components/botaoItens'

export default function AlterarDados() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Botoes
          icon={'arrow-undo-outline'}
          title={'Dados da Conta'}
          subtitle={'Clique para voltar'}
        />
        <BotaoItens />

        <View style={styles.warning}>
          <Text style={styles.texto}>
            Clique sobre a opção para fazer a alteração
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'rgba(23, 27, 32, 0.8)',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '90%',
    padding: 16,
    paddingRight: 0,
  },
  texto: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 26,
  },
  warning: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 16,
  },
})
