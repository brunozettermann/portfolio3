import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [number, onChangeText] = React.useState('');
  const [number2, onChangeText2] = React.useState('');
  const [resultado, setResultado] = React.useState('');

  const soma = function() {
    setResultado(Number(number) + Number(number2));
  };
  const subtracao = function() {
    setResultado(Number(number) - Number(number2));
  };
  const multiplicacao = function() {
    setResultado(Number(number) * Number(number2));
  };
  const divisao = function() {
    setResultado(Number(number) / Number(number2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder='Insira o primeiro número'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={number2}
        placeholder='Insira o segundo número'
        keyboardType='numeric'
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => soma()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => subtracao()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => multiplicacao()}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => divisao()}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
