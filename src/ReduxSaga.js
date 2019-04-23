import React,{ Component } from 'react';
import { 
    View, Text, Button, FlatList, Image, ActivityIndicator
 } from "react-native";
var jsonQuery = require('json-query')
 export default class ReduxSaga extends Component{
     constructor(props){
         super(props);
         
         this.state = { 
             countUser:20,
             movieName: '', releaseYear: '', items: [],
             name: '', gender: '', phoneNumber: '', image:'',
             
            };
            
     }

     componentDidMount() {
         
         return fetch('https://facebook.github.io/react-native/movies.json')
             .then((response) => response.json())
             .then((responseJson) => {

                 this.setState({
                     isLoading: false,
                     dataSource: responseJson.movies,
                 }, function () {

                 });

             })
             .catch((error) => {
                 console.error(error);
             });
     }

     render(){
         var data = this.props.data;
         if (this.props.isLoading) {
             return (
                 <View style={{ flex: 1, padding: 20 }}>
                     <ActivityIndicator />
                 </View>
             )
         }
         
         return(
            // <View>
            //     <View style={ {} }>
            //             <Text>Demo get data by redux saga</Text>
            //             <Button
            //             title=' Fetch Data '
            //             onPress = { () => {
            //                 this.props.onFetchData();
            //                 console.log(JSON.stringify(this.props.data));
            //                 // alert(JSON.stringify(this.props.data))


            //             } }/>
            //         </View>

            //     <View style={{  paddingTop: 20 }}>
            //         <FlatList
            //             data={this.state.dataSource}
            //             renderItem={({ item }) => <Text>{item.title}, {item.releaseYear}</Text>}
            //             keyExtractor={({ id }, index) => id}
            //         />
            //     </View>
            //  </View>
            
             <View>
                <View>
                    <Text>Demo get data by redux saga</Text>
                    <Button
                    title=' Fetch Data '
                    onPress = { () => {
                        this.props.onFetchData();
                        // console.log('json ne: '+(JSON.stringify(data)));
                       
                        // var getName = jsonQuery('name', { data: data }).value;
                        // var getFirstName = jsonQuery('first', { getFirstName:getName}).value;
                     

                    } }/>
                </View>

                
               
                
                 
                     <View style={{ paddingTop: 20 }}>
                    <FlatList
                        
                         data={this.props.data}
                         
                         renderItem={({ item }) => 
                         
                         <View style = {{flexDirection:'row'}}>
                            <View>
                                     <Image
                                        
                                         style={{ width: 50, height: 50 }}
                                         source={{uri:item.picture.thumbnail}  }
                                     />
                            </View>
                            
                            <View>
                                     <Text>{item.name.title} {item.name.last} {item.name.first}</Text>
                            </View> 
                         </View>
                        }

                        keyExtractor={({ id }, index) => id}
                    />
                </View>  

             </View>
         );
     }
 }