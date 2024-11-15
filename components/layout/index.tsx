import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { ReactNode, useState } from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isCam, setIsCam] = useState(true)
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.upContainerBlock}>
      <View style={styles.upContainer}>
        <Text style={styles.text}>
          {isCam
            ? 'DESCRITOR DE OBJETO. APONTE A CÂMERA A DOIS PALMOS DO OBJETO E SOARÁ UM BIP QUANDO ELE FOR LIDO.'
            : 'LEITOR DE CÓDIGO DE BARRAS. APONTE A CÂMERA A DOIS PALMOS DO CÓDIGO E SOARÁ UM BIP QUANDO ELE FOR LIDO.'}
        </Text>
      </View>
      </View>
      {children}
      <View style={styles.bottomContainer}>
        <View style={styles.buttons}>
          <Pressable onPress={() => router.push('/')}>
            <Ionicons name='list' size={65} color='white' />
          </Pressable>
          <Pressable
            onPress={() => {
              if (isCam) {
                setIsCam(false)
              }
            }}
          >
            <Ionicons name='barcode-sharp' size={65} color='white' />
          </Pressable>
          <Pressable
            onPress={() => {
              if (!isCam) {
                setIsCam(true)
              }
            }}
          >
            <Ionicons name='camera' size={65} color='white' />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'justify',
  },

upContainerBlock: {
  width: '100%',
  minHeight: '10%',
  zIndex: 2,  
  backgroundColor: 'red',
},

  upContainer: {
    width: '100%',
    minHeight: '15%',
    zIndex: 2,

    //padding: 12,//

    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    backgroundColor: '#1C7396',
  },

  bottomContainer: {
    width: '100%',
    minHeight: '15%',
    zIndex: 4,

    padding: 12,

    alignItems: 'center',
    justifyContent: 'center',

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    position: 'absolute',
    bottom: 0,

    backgroundColor: '#1C7396',
  },

  buttons: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  audio: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  image: {
    width: '68%',
    height: '68%',
  },
})
