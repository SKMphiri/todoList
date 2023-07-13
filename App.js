import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Task from './components/Task';
import SearchBar from './components/SearchBar';

const IMG_URI =
  "https://img.freepik.com/free-photo/medium-shot-teen-sitting-chair_23-2149604105.jpg?w=360&t=st=1689205964~exp=1689206564~hmac=ca11d5d03d286f152b6ba2eb5f8c97d899e1b426e3ac858a99162f39a404658d";


export default function App() {
  return (
    <View style={styles.container}>




<View style={styles.screen}>

      <Image style={styles.image} source={{ uri: IMG_URI }} /> 
      <Text style={styles.Heading}>Hello Stelso👋</Text>
      <Text style={styles.subHeading}>Morning, Stelso</Text>
    </View>



  
       <View style={styles.tasksWrapper}>
       

       <View style={styles.SearchBar}>
        <SearchBar/>
      </View>
    
<View style={styles.sectionProject}>

      <Text style={styles.sectionTitle}> Projects</Text>
      <Text style={styles.sectionSubTitle}>You have 4 projects</Text>
      <View style={styles.itemAdd}>
        <Text style={styles.textAdd}>Add</Text>
      </View>

</View>

    <View style={styles.items}>
      <Task />
      
     
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
  NavBar: {
    display: 'flex',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  items: {
    marginTop: 30,
  },  
  SearchBar:{
    marginTop: 30,
   },
   sectionSubTitle:{
    color: '#a9a9a9',
    marginTop: 2,
   },
   Heading:{
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 90,
    marginTop: -57,
   },
   screen: {
    marginTop: 65,
    marginLeft: 20,
    
   
  },
  // styling the image
  image: {
    marginTop: 10,
    width: 65,
    height: 65,
    borderRadius: 1000,
  },
  subHeading:{
    fontSize: 15,
    color: '#a9a9a9',
    paddingLeft: 90,
    marginTop: 10,
  },
  itemAdd: {
    backgroundColor: `#4169e1`,
    height: 43,
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 250,
    marginTop: -53
},
textAdd:{
  color: 'white',
  flexDirection: 'row',
  justifyContent: "flex-start",

}

});
