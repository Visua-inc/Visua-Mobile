import React, { ReactNode } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface LayoutProps {
  children: ReactNode
  upperContent: string
  lowerContent?: ReactNode
}

export default function Layout({
  children,
  upperContent,
  lowerContent,
}: LayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <Text style={styles.text}>{upperContent}</Text>
      </View>
      {children}
      <View style={styles.buttonContainer}>{lowerContent}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  upContainer: {
    width: '100%',
    minHeight: '15%',
    zIndex: 1,

    padding: 12,

    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    backgroundColor: '#1C7396',
  },
  buttonContainer: {
    width: '100%',
    minHeight: '15%',

    zIndex: 3,

    padding: 12,

    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    position: 'absolute',
    bottom: 0,

    backgroundColor: '#1C7396',
  },
})
