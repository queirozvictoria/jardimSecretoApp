import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

export default function SplashScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

    
        <Text style={styles.title}>Jardim Secreto</Text>

        
      

    
        <View style={styles.logoContainer}>
          <Image
          source={require('../../assets/images/logo.jpeg')}
            style={styles.logo}
          />
        </View>

  <Text style={styles.tagline}>
          Onde a natureza guarda seus pequenos segredos
        </Text>
    
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    alignItems: 'center',
    width: '85%',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3E4E1C',
    marginBottom: 12,
  },

  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#6B705C',
    textAlign: 'center',
    marginBottom: 40,
  },

  logoContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#D4A017',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 40,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  button: {
    backgroundColor: '#4A5D23',
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});