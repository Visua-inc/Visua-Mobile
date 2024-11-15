import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Layout from '@/components/layout'

export default function Reproducao() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <View style={styles.container}>
      <Layout>
        <View style={styles.textContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              voluptatibus? Cum doloribus sapiente deleniti culpa rem molestias,
              provident iure quidem voluptatibus recusandae eligendi eaque
              repellendus nisi quod repellat exercitationem corporis corrupti
              expedita quam tenetur molestiae vel. Aut temporibus odio, ipsum
              voluptatibus sunt officiis delectus reprehenderit, sit laudantium
              quisquam necessitatibus ratione!
            </Text>
          </ScrollView>
        </View>
      </Layout>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#172F3B'
  },
  textContainer: {
    zIndex: 3,
    flex: 1,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    width: '100%',
    height: '50%',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'left',
  },
})
