import React, { Component } from "react";
import {
 StyleSheet,
 View,
 Text,
 TouchableOpacity,
} from 'react-native';
import axios from "axios";
import Postitem from './Postitem';
import DropdownMenu from 'react-native-dropdown-menu';

export default class App extends React.Component {
 
 
 
 
    state ={
   missingItem :[],
   city:"",
   cityChoose: false,
   type:'',
 }



 getData=(cat)=>{
   var selectedCity = this.state.city?this.state.city:'amman'
   let missingItem ={ cat:cat,
   city :selectedCity}
//    console.log('react',missingItem,`http://192.168.43.105:9000/Omaima/FILTER/${missingItem}`)
     axios
       .get(`http://10.60.236.124:9000/Omaima/FILTER/${missingItem.cat}/${missingItem.city}`)
       .then(res => {
         this.setState({ missingItem: res.data });
       //  console.log("data", this.state.missingItem);
         console.log("yasmin", res.data)
       })
       .catch(err => {
         console.log(err);
       });
   }





 render(){
   var data = [['عمان','مادبا','الزرقاء','السلط','جرش','العقبه','الكرك','معان','الطفيله','عجلون','اربد']];
   return (
 <View style={styles.container}>
  
       <DropdownMenu
         // style={{marginRight:200,}}
         bgColor={'#E91E63'}
         tintColor={'black'}
         activityTintColor={'green'}
         handler={(selection,row) => {this.setState({city: data[selection][row]})
        {console.log('selection',this.state.city,"/////",selection,data[0][0])}
       }
       }
         data={data}
       >
       </DropdownMenu>

   <View style={{flexDirection:"row"}} >
     <React.Fragment  >
                 <TouchableOpacity style={styles.addButton} onPress={this.getData.bind(this,"الحيوانات")} >
                     <Text style={styles.addButtonText} > الحيوانات</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.addButton}  onPress={this.getData.bind(this,"الالكترونيات")} >
                     <Text > الالكترونيات</Text>
                 </TouchableOpacity>

                 <TouchableOpacity  style={styles.addButton} onPress={this.getData.bind(this,"أشياء شخصية")}  >
                     <Text style={styles.addButtonText} > أشياء شخصية</Text>
                 </TouchableOpacity>

                 </React.Fragment>

                 </View>
               

                 <Postitem posts={this.state.missingItem} />



  </View>
 );
}}




const styles = StyleSheet.create({
 container:{
   flex:1,
   // padding:10
},
header:{
 // padding:100,
 // backgroundColor:'#E91e63',
 alignItems:'flex-end',
 borderBottomWidth:10,
 borderBottomColor:'#ddd',
},
 addButton:{
   zIndex:11,
   // right:30,
   bottom:10,
   backgroundColor: '#E91E63',
   width:90,
   height:90,
   borderRadius:50,
   alignItems:'center',
   justifyContent:'center',
   elevation:8,
 },
 addButtonText:{
   color:'#fff',
   // fontSize:24,
 }
});
