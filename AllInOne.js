import React, { Component } from 'react'; 
import { StyleSheet,Text,View,FlatList,ScrollView,TouchableOpacity,Image,} from 'react-native';
import db from './config';

export default class AllInOne extends React.Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      dataSource: [],
      search: '',
      collection: '',
      sectionName:'',
    };
  }
  componentDidMount() {
    var token = this.props.navigation.getParam('aeroplane');
    
    this.storedata(token);
      
  }
  async storedata(bowl) {
    await this.setState({ collection: bowl });

    this.retrieveStories();
  }

  retrieveStories = () => {
    try {
      var allData = [];
      var stories = db
        .collection(this.state.collection)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            allData.push(doc.data());
          });
          this.setState({ allData });
          console.log(this.state.allData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
                  <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Screen2')}> 
            <Text style={{fontSize:30,fontWeight:'bold'}}>⬅Go Back</Text>
            
            </TouchableOpacity>
        <FlatList
          data={
            this.state.search === ''
              ? this.state.allData
              : this.state.dataSource
          }
          renderItem={({ item }) => (
            <View>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('ProductDescription',{airindia:item.ID,aeroPlane:this.state.collection})}
            style={styles.itemContainer}>
              <Text style={{ fontWeight: 'bold'}}>
                {' '}
                Product Name : {item.Productname}
              </Text> 
              <Text style={{ fontWeight: 'bold' }}> Brand: {item.Brand}</Text>
              <Text style={{ fontWeight: 'bold' }}> Size: {item.Size}</Text>
              <Text style={{ fontWeight: 'bold' }}> Price: {item.Price}</Text>
              <Image
                source={item.link}
                style={{ 
                  marginTop: -70,
                  width: 100,
                  height: 120, 
                  marginLeft: 200,
                }}
              /> 
              </TouchableOpacity>
            </View> 
          )} 
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#feeb75',
  },
  itemContainer: {
    height: 150,
    width: '100%',
    borderWidth: 4,
    borderColor: 'Black',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fcf4a3',
    marginTop: 10,
  },
});
