import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import React, { Component } from 'react'; 

export default class TextbookSection extends React.Component {
 
  render() {
    return (
    <View>
      <SectionList
        sections={[
            {title: 'Womens Wear', data: ['Lehangas','Saris','AnarkaliKurties','Skirts','Frocks','Jeans & Tops']}, 
        ]}
        renderItem={({item}) => 
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllInOne',
        {aeroplane:item,heli:'Clothing'})}>
          <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>} 
           renderSectionHeader={({section}) => 
           <Text style={styles.sectionHeader}>
            {section.title}
            </Text>}
            keyExtractor={(item, index) => index}

      
      /> 
    </View>
  );
}
}
 
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: "darkturquoise"  
    },  
    sectionHeader: {  
        paddingTop: 2,  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingBottom: 2,  
        fontSize: 22,  
        fontWeight: 'bold',  
        color: "#fff",  
        backgroundColor: 'navy',  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,
        fontWeight:'bold' 
    }  
})