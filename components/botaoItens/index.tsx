import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface OptionItemProps {
  title: string
  subtitle?: string
  onPress?: () => void
}

export default function BotaoItens({ title, subtitle }: OptionItemProps) {
  return (
    <View>
      <TouchableOpacity style={styles.optionItem}>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionSubtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  optionTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '600',
  },
  optionSubtitle: {
    color: '#A0B4C7',
    fontSize: 24,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 12,
  },
  options: {
    borderTopWidth: 1,
    borderTopColor: '#A0B4C7',
    paddingTop: 16,
  },
})
