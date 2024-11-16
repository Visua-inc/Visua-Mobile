import Layout from '@/components/layout'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
      <Layout>
        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Para acessar o histórico, é necessário estar logado. Por favor, faça login em sua conta.
          </Text>

          <Text style={styles.title}>Login</Text>

          <View style={styles.inputContainer}>
            <Ionicons name='mail-outline' size={25} color='#5E6D7D' />
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor='#5E6D7D'
              keyboardType='email-address'
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name='lock-closed-outline' size={25} color='#5E6D7D' />
            <TextInput
              style={styles.input}
              placeholder='Senha'
              placeholderTextColor='#5E6D7D'
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name='logo-google' size={25} color='#DFE2E7' />
            <Text style={styles.buttonText}> Entrar com Google</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#172F3B',
    alignItems: 'center',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1A222A',
    width: '100%',
    height: '89%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    zIndex: 3,
  },
  instructionText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#DFE2E7',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#DFE2E7',
    marginHorizontal: 22,
    marginBottom: 15,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(94, 109, 125, 0.1)',
    borderColor: '#1C7396',
    borderWidth: 2,
    borderRadius: 50,
    width: '87%',
    height: '10%',
    paddingHorizontal: 15,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#DFE2E7',
    marginLeft: 10,
  },
  createAccountButton: {
    width: 158,
    height: 40,
    backgroundColor: '#1C7396',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  googleButton: {
    flexDirection: 'row',

    width: 280,
    height: 50,
    backgroundColor: '#1C7396',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#DFE2E7',
  },
})
