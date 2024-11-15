import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Layout from '@/components/layout'

interface OptionItemProps {
  icon: string
  title: string
  subtitle: string
}

export default function AlterarDados() {
  return (
    <Layout isCam={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.profile}>
            <OptionItem
                icon='person-circle-outline'
                title='Dados da conta'
                subtitle='Minhas informações da conta'
              />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Cleide</Text>
            </View>
          </View>

          <View style={styles.options}>
            <OptionItem 
              title='Nome:'
              subtitle='Eliana' icon={''}/>
            <OptionItem
              title='Email:'
              subtitle='Eliana@gmail.com' icon={''}/>
            <OptionItem
              title='Senha:'
              subtitle='***' icon={''}/>
          </View>
        </View>
      </View>
    </Layout>
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
    zIndex: 5,
  },
  card: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    width: '100%',
    height: '90%',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
