import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import SearchBar from './components/SearchBar';
export default function App() {
  return (
    <View style={styles.container}>

    

  
       <View style={styles.tasksWrapper}>

       <View style={styles.SearchBar}>
        <SearchBar/>
      </View>
    


      <Text style={styles.sectionTitle}> Projects</Text>

    

    <View style={styles.items}>
      <Task text={'Task 1'} />
      <Task text={'Task 2'} />
    </View>
     
    
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E8EAED',
   
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop: 30,
  },  
  SearchBar:{
    marginTop: 50,
   
    
  }
});
