import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Botoes from '@/components/botaoHistorico'
import BotaoItens from '@/components/botaoItens'
import { Ionicons } from '@expo/vector-icons'

interface AlterarDadosProps {
  del?: () => void
  clear?: () => void
  out?: () => void
}

export default function AlterarDados({ del, clear, out }: AlterarDadosProps) {
  const [alter, setAlter] = useState(false)

  return (
    <View style={styles.container}>
      {alter ? (
        <View style={styles.card}>
          <Botoes
            icon={'arrow-undo-outline'}
            title={'Dados da Conta'}
            subtitle={'Clique para voltar'}
            onPress={() => setAlter(false)}
          />
          <BotaoItens title='Nome:' subtitle='Eliana' />
          <BotaoItens title='Email:' subtitle='Eliana@gmail.com' />
          <BotaoItens title='Senha:' subtitle='***' />

          <View style={styles.warning}>
            <Text style={styles.texto}>
              Clique sobre a opção para fazer a alteração
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.card}>
          <View style={styles.profile}>
            <View style={styles.iconWrapper}>
              <Ionicons name='person-outline' size={35} color='#ffffff' />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Odisseia</Text>
            </View>
          </View>

          <Botoes
            icon={'document-text-outline'}
            title={'Dados da Conta'}
            subtitle={'Minhas informações'}
            onPress={() => setAlter(true)}
          />
          <Botoes
            icon={'trash-outline'}
            title={'Limpar histórico'}
            subtitle={'Limpa seu histórico'}
            onPress={clear}
          />
          <Botoes
            icon={'close-circle-outline'}
            title={'Apagar conta'}
            subtitle={'Apagar sua conta do App'}
            onPress={del}
          />
          <Botoes
            icon={'log-out-outline'}
            title={'Sair da conta'}
            subtitle={'Realizar logout da conta'}
            onPress={out}
          />
        </View>
      )}
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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: '100%',
    backgroundColor: '#172F3B',
  },
  profileText: {
    marginLeft: 12,
  },
  profileName: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
})
