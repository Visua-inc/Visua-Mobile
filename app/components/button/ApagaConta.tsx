import { Text, StyleSheet, View,TouchableHighlight  } from 'react-native';



export default function App() {

  
  return (
    <View style={styles.container}>
      <View style={styles.quadradodentro}>
        <View style={styles.quadrado}>
        <Text style={styles.texto1}>Confirmação</Text>
          <Text style={styles.texto2}>Deseja apagar sua conta?</Text>
          <Text style={styles.texto2}>Ela não pode ser recuperada</Text>
          <Text style={styles.texto3}>Posteriormente</Text>
          
          <>
      <TouchableHighlight style={styles.Limpar}>
        <Text style={{ color: '#ECEFF4', fontSize: 22 }}>Apagar</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.sair}>
        <Text style={{ color: '#ECEFF4', fontSize: 22 }}>Cancelar</Text>
      </TouchableHighlight>
    </>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',  
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  quadradodentro: {
    flex: 1,
    backgroundColor: 'transparent',  
    marginTop: '50%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    alignItems: 'center',
  },

  quadrado: {
    backgroundColor: '#171B20',  
    width: '88%',
    borderRadius: 45,
    height: '65%',
    alignItems: 'center',
    
    
  },

  texto1: {
    fontSize: 20,
    color: '#ECEFF4',
    marginTop:'5%'
  },

  texto2: {
    fontSize: 20,
    color: '#ECEFF4',
    paddingTop: '2%',
  },

  texto3: {
    fontSize: 20,
    color: '#ECEFF4',
    paddingTop: '1%',
  },

  
  Limpar: {
    borderWidth: 2,
    backgroundColor:'#1C7396',
    borderRadius: 45,
    padding: '1%',
    alignItems: 'center',
    marginTop: '15%',
    width: '60%',
    justifyContent: 'center',
  } ,

  sair: {
    borderWidth: 2,
    borderColor: '#1C7396',
    borderRadius: 45,
    padding: '1%',
    alignItems: 'center',
    marginTop: '4%',
    width: '60%',
    justifyContent: 'center',
  } ,

});