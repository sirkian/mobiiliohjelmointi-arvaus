import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('Guess a number between 1-100');
  const [guessedNumber, setGuessedNumber] = useState();
  const [winningNumber, setWinningNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [numberOfGuesses, setNumberOfGuesses] = useState(1);


  const play = () => {
    if (guessedNumber == winningNumber) {
      Alert.alert('You guessed the number in ' + numberOfGuesses + ' guesses!');
      restart();
    } else if (guessedNumber > winningNumber) {
      setText('Your guess ' + guessedNumber + ' is too high');
      clear();
    } else {
      setText('Your guess ' + guessedNumber + ' is too low');
      clear();
    }
  }

  const restart = () => {
    setNumberOfGuesses(1);
    setWinningNumber(Math.floor(Math.random() * 100) + 1);
    setText('Guess a number between 1-100');
    setGuessedNumber();
  }

  const clear = () => {
    setNumberOfGuesses(numberOfGuesses + 1);
    setGuessedNumber();
  }

  // console.log(winningNumber);

  return (
    <View style={styles.container}>

      <Text>{text}</Text>

      <TextInput
        onChangeText={number => setGuessedNumber(number)}
        value={guessedNumber}
        keyboardType='numeric'
        autoFocus={true}
        />

      <Button
        title='MAKE GUESS'
        onPress={play}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
