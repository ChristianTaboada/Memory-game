import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from './src/components/card'

const cards = [
   "😁",
   "👻",
   "🙈",
   "🐺",
   "💀",
   "❤️"
]

export default function App() {
  const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if(selectedCards.length < 2) return;
    if(board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    }else{
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId)
    }
  },[selectedCards]);

  const handleTapCard = index => {
    if(selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index])
    setScore(score + 1);
  };

  const didPlayerWin = () =>matchedCards.length === board.length;

  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{didPlayerWin() ? "🎉Congratulations🎉 " : "Memory Game"}</Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index)
          return(
            <Card 
            key={index}
            isTurnedOver={isTurnedOver}
            onPress={() => handleTapCard(index)}
            >{card}
            </Card>
            )
            })}
      </View>
      {didPlayerWin() && <Button onPress={resetGame} title='reset'/>}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071160',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:32,
    color:'#FFF'
  },
  board:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}