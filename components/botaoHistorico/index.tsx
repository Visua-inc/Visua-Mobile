import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface OptionItemProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  onPress?: () => void
}

export default function Botoes({
  icon,
  title,
  subtitle,
  onPress,
}: OptionItemProps) {
  return (
    <View>
      <TouchableOpacity style={styles.optionItem} onPress={onPress}>
        <Ionicons name={icon as any} size={35} color='#ffffff' />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionSubtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#9ca3af',
    paddingBottom: 10,
  },
  optionText: {
    marginLeft: 20,
    borderBottomColor: '#fff',
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
