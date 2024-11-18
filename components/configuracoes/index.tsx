import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Botoes from '@/components/botaoHistorico'
import BotaoItens from '@/components/botaoItens'
import { Ionicons } from '@expo/vector-icons'

export default function Configuracoes() {
  return <View style={styles.container}></View>
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
  card2: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    height: '100%',
    padding: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    backgroundColor: '#172F3B',
    width: 40,
    paddingLeft: 8,
    padding: 8,
    borderRadius: 50,
  },
  profileText: {
    marginLeft: 12,
  },
  profileName: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },

  texto: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 26,
  },
})
