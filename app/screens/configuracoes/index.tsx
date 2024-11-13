import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface OptionItemProps {
  icon: string
  title: string
  subtitle: string
}

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.profile}>
          <View style={styles.iconWrapper}>
            <Ionicons name='person-circle-outline' size={24} color='#ffffff' />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.profileName}>Odisseia</Text>
          </View>
        </View>

        <View style={styles.options}>
          <OptionItem
            icon='person-circle-outline'
            title='Dados da conta'
            subtitle='Minhas informações da conta'
          />
          <OptionItem
            icon='trash-outline'
            title='Limpar histórico'
            subtitle='Limpa seu histórico'
          />
          <OptionItem
            icon='close-circle-outline'
            title='Apagar conta'
            subtitle='Apagar sua conta do App'
          />
          <OptionItem
            icon='log-out-outline'
            title='Sair da conta'
            subtitle='Realizar logout da conta'
          />
        </View>
      </View>
    </View>
  )
}

const OptionItem = ({ icon, title, subtitle }: OptionItemProps) => (
  <TouchableOpacity style={styles.optionItem}>
    <Ionicons name={icon as any} size={30} color='#ffffff' />
    <View style={styles.optionText}>
      <Text style={styles.optionTitle}>{title}</Text>
      <Text style={styles.optionSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    width: '100%',
    height: '80%',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    backgroundColor: '#4b5563',
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
  options: {
    borderTopWidth: 1,
    borderTopColor: '#4b5563',
    paddingTop: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 12,
  },
  optionTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  optionSubtitle: {
    color: '#9ca3af',
    fontSize: 24,
  },
})
