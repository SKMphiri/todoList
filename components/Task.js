import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";


const Task = (props) => {
   return (
   <View style={styles.item}>
   <View style={styles.itemLeft}>
   

    <Text style={styles.itemLeft}>Expense Tracker {"\n"}Application</Text>
    
   </View>
   <Text style={styles.itemBottom}>Progress</Text>
   <View style={styles.progressBar}></View>                 
    </View>

   )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: `#483d8b`,
        height: 250,
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,

        

    },
    itemLeft: {
        marginTop: 15,
        flexWrap: 'wrap',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 40,
        

    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#558CF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
        },
    itemBottom:{
        color: '#a9a9a9',
        paddingRight: 179,
        marginTop: 30,
        


    }
 

});


export default Task;