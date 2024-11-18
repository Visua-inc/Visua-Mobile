import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
  contentText?: string
  buttonText?: string
}

export default function PopUp({ contentText, buttonText }: ButtonProps) {
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirmação</Text>
        <Text style={styles.content}>{contentText}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.bText}>{buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button1, styles.button2]}>
            <Text style={styles.bText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',

    position: 'absolute',

    zIndex: 5,
    backgroundColor: 'rgba(23, 27, 32, 0.8)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',

    padding: '3%',
    borderRadius: 45,

    height: '56%',
    width: '85%',

    gap: '5%',

    backgroundColor: '#171B20',
  },
  title: {
    color: '#ECEFF4',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    color: '#ECEFF4',
    fontSize: 22,
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'flex-end',

    gap: '12%',
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,

    width: 190,
    height: 50,

    backgroundColor: '#1C7396',
  },
  button2: {
    backgroundColor: '#171B20',
    borderWidth: 3,
    borderColor: '#1C7396',
  },
  bText: {
    flex: 1,

    color: '#ECEFF4',

    fontSize: 26,
    fontWeight: 'bold',

    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
