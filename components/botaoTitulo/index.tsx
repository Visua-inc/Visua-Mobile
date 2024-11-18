import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface OptionItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string
  subtitle?: string
}

export default function BotaoTitulo({
  icon,
  title,
  subtitle,
}: OptionItemProps) {
  return (
    <View style={styles.profile}>
      <OptionItem icon={icon} title={title} subtitle={subtitle} />
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
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
    borderTopColor: '#4b5563',
    paddingTop: 16,
  },
})
