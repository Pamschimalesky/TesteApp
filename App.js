import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Tarefa.js';

export default function App() {
  return (
    <View style={styles.container}>

      {/*Tarefas de hoje */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas da Rapulzel</Text>

        <View style={styles.itens}>
          {/*Local das tarefas*/}
          <Task text={'Pentear o cabelo'}/>
          <Task text={'Passar maquiagem'} />
          <Task text={'Fazer as unhas'}/>
          <Task text={'Falar com o princípe'}/>
          <Task text={'Reinar o reino'}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE82EE',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itens: {
    marginTop: 30,
    
  },
});