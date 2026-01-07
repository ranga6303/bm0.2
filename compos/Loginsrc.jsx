import { StyleSheet,View, Text ,TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard,BackHandler} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import api from './api.js'



const Loginsrc= ({navigation,route}) => {
  const logindetails=route.params;
  console.log("recived from app.jsx:",logindetails)

const user_stu="Student";
const user_staff="Staff";
let [user_type,setUser_type] = useState(user_stu);
const highmargin='30%';
const lowmargin='5%';
let [togglemargin,setTogglemargin] = useState(highmargin);
let [togglestyle,setToggleStyle] = useState(style.textcntr1);
let textcntr2={fontSize:24,fontWeight:'bold',alignSelf:'flex-start'};
let url_login="http://10.246.95.231:3000/api/logindetails";//--->url for login api<---



let [userinputval,setUserinputval] = useState("");
let [passinputval,setPassinputval] = useState("");

let details_login={
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: userinputval,
    pass: passinputval,
    type: user_type
  })
};

useEffect(()=>{
  

  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    setTogglemargin(lowmargin);
    setToggleStyle(textcntr2);
  });
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setTogglemargin(highmargin);
      setToggleStyle(style.textcntr1);
    }
  );

  return () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
    
  }

},[]);


  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>

    <View style={[style.main]}>
     <Text style={style.logo}>BEACON MARK</Text>

     <View style={[style.form,{marginTop:togglemargin}]}>


      <Text style={[style.textcolorwhite,togglestyle]}>{user_type} login</Text>

     {/* form container  */}
     <View style={style.formcntr}>
        
      <TextInput
        style={style.formcntrinput}
        placeholder={user_type+" ID"} 
        onChangeText={(text)=>{setUserinputval(text)}}/>

      <TextInput
        style={style.formcntrinput}
        placeholder="Password"
        onChangeText={(text)=>{setPassinputval(text)}}/>

      {/* border less buttons container */}
      <View style={[style.smallbtncntr]}>

       <TouchableOpacity style={style.btn} onPress={()=>{user_type===user_staff?setUser_type(user_stu):setUser_type(user_staff)}}>
        <Text style={style.borderlessbtntext}>{user_type===user_stu?user_staff:user_stu}?</Text>
       </TouchableOpacity>

       <TouchableOpacity style={style.btn}>
        <Text style={style.borderlessbtntext}>Register?</Text>
       </TouchableOpacity>
       
      </View>

      {/* login button  */}
      <TouchableOpacity 
      onPress={()=>{api(url_login,details_login);
      navigation.replace('Profile',logindetails);  
      }}
       style={[style.submitbtn,{backgroundColor:'#ffffffff',justifyContent:'center',alignItems:'center',marginTop:'10%'}]}>
        <Text style={[style.textcolorblack,style.sub,{fontWeight:'bold',fontSize:18}]}>Login</Text>
      </TouchableOpacity>

      {/* borderless "Forgot Password?" button */}
      <TouchableOpacity style={style.borderlessbtntext}>
        <Text style={style.borderlessbtntext}>Forgot Password?</Text>
      </TouchableOpacity>

     
      </View>  
     </View>
    </View>
    </TouchableWithoutFeedback>
  )
}               

const style=StyleSheet.create({
main:{
  paddingTop:'15%',
  backgroundColor:'#13271fff',
  flexDirection:'row',
  flexWrap:'wrap',
  flex:1,
  justifyContent:'center',
  // alignItems:'stretch',
  paddingLeft:20,
  paddingRight:20
},

form:{width:'100%',justifyContent:'center',alignItems:'center'},

textcntr1:{
  fontSize:30,
  fontWeight:'bold',
  marginBottom:'5%',
},

formcntrinput:{
  fontSize:16,
  height:'14%',
  borderColor:'gray',
  borderWidth:1,
  width:'100%',
  marginTop:20,
  paddingLeft:20,
  borderRadius:50,
  backgroundColor:'rgba(255,255,255,0.15)'
},

formcntr:{
  width:'80%',
  marginTop:'0%',
  marginBottom:'5%'
},
borderlessbtntext:{
  color:'#bb9891ff',
  marginTop:10,
  textAlign:'center',
  fontSize:16,
  fontWeight:'bold'
},

textcolorwhite:{
  color:'white'
},

textcolorblack:{
  color:'black'
},


smallbtncntr:{
  marginTop:'5%',
  flexDirection:'row',
  justifyContent:'space-between'
},

submitbtn:{
  height:'14%',
  borderRadius:50,
  width:'100%',
  backgroundColor:'#ffffffff',
  
},

sub:{
  fontSize:16,
  fontWeight:'bold'   

},

logo:{
  fontSize:20,
  fontWeight:'bold',
  color:'#1d3e53ff',
  alignSelf:'flex-start',
  width:'100%',
  marginBottom:20

}
});

export default Loginsrc