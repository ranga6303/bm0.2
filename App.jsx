import {View,Text,StyleSheet,FlatList,Image,Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import {useState,useEffect} from 'react';
const screenName="Profile"
const App=()=>{
  const [userdata,setUserdata]=useState({name:'Uzumaki Naruto',id:'1234567890'})
  const [darkMode,set_darkMode]=useState(false);
  console.log("hello")
  return(
    <View style={[styles.main_cntr,darkMode?{backgroundColor:'#000000ff'}:{backgroundColor:'#ffffffff'}]}>

      {/* header */}
      <View style={[{},styles.header,darkMode?styles.headerDM:styles.headerLM]}>
        {/* app logo */}
        <View style={[{flex:1,flexDirection:'row'}]}>
          <FontAwesome name="bluetooth" size={30} style={[darkMode?{color:'#95b7b5ff'}:{color:'#fff'}]}></FontAwesome>
          <Text style={[styles.headerT,darkMode?styles.DMT:styles.LMT]}>Mark</Text>
        </View>
       
      </View>

      {/* details cntr */}
      <View style={[userCntr.main_cntr]}>
        <Image source={require('./assets/user.png')} style={[userCntr.img]}></Image>

        {/* user dtails cntr */}
        <View style={[{alignItems:'center'}]}>
          <Text style={[darkMode?userCntr.usernameD:userCntr.usernameL,userCntr.username]}>{userdata.name}</Text>
          <Text style={[darkMode?userCntr.usernameD:userCntr.usernameL,userCntr.userid]}>{userdata.id}</Text>
        </View>
      </View>

      {/* mini nav bar */}    
        <View style={[userCntr.navcntr]}>
        {/* day wise */}
       <TouchableOpacity style={[userCntr.navbtns,darkMode?userCntr.navbtnsD:userCntr.navbtnsL]}>
           <View style={[{flexDirection:'row'}]}>
            <Text style={[userCntr.mininavbarbigtext,darkMode?styles.DMT:styles.LMT]}>100</Text>
           <Text style={[{paddingTop:15,},userCntr.mininavbarsmalltext,darkMode?styles.DMT:styles.LMT]}>%</Text>
           </View>
           <Text style={[darkMode?styles.DMT:styles.LMT]}>OVER-ALL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[userCntr.navbtns,darkMode?userCntr.navbtnsD:userCntr.navbtnsL]}>
           <View style={[{flexDirection:'row'}]}>
            <Text style={[userCntr.mininavbarbigtext,darkMode?styles.DMT:styles.LMT]}>100</Text>
           <Text style={[{paddingTop:15,},userCntr.mininavbarsmalltext,darkMode?styles.DMT:styles.LMT]}>%</Text>
           </View>
           <Text style={[darkMode?styles.DMT:styles.LMT]}>MONTH</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=>{set_darkMode(!darkMode)}} style={[userCntr.navbtns,darkMode?userCntr.navbtnsD:userCntr.navbtnsL]}>
           <View style={[{flexDirection:'row'}]}>
            <Text style={[userCntr.mininavbarbigtext,darkMode?styles.DMT:styles.LMT]}>100</Text>
           <Text style={[{paddingTop:15,},userCntr.mininavbarsmalltext,darkMode?styles.DMT:styles.LMT]}>%</Text>
           </View>
           <Text style={[darkMode?styles.DMT:styles.LMT]}>TODAY</Text>
          </TouchableOpacity>
      </View>

      {/* user progress icons like marks etc */}
         <View style={styles.user_related_icons_container}>

          <View >
            <TouchableOpacity>
              <MaterialIcons style={[darkMode?styles.icons_dark:styles.icons_light]} name="how-to-reg" size={30} color="green" />
          
            </TouchableOpacity>
              <Text style={[darkMode?styles.iconslabel_dark:styles.iconslabel_light]}>Mark Precence</Text>
          </View>
          
          <View>
            <TouchableOpacity>
            <Ionicons style={[darkMode?styles.icons_dark:styles.icons_light]} name="stats-chart-outline" size={30}  />
            <Text style={[darkMode?styles.iconslabel_dark:styles.iconslabel_light]}>Progress</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
            <Ionicons style={[darkMode?styles.icons_dark:styles.icons_light]} name="settings-outline" size={30}  />
            <Text style={[darkMode?styles.iconslabel_dark:styles.iconslabel_light]}>settings</Text>
            </TouchableOpacity>
          </View>

         

          

          

          
          
          
         </View>

    </View>
  )
}
export default App;



const userCntr=StyleSheet.create({
  main_cntr:{
    width:'90%',
    alignItems:'center'
  },
  img:{
    marginTop:60,
    borderRadius:65,
    height:130,
    width:130
  },
  username:{
    fontSize:25,
    fontWeight:'bold'
  },
  usernameD:{
    color:'#7c7878ff',
    
  },
  usernameL:{
    color:'#252323ff',
  },
  userid:{
    fontSize:15,
  },
  navcntr:{
    marginTop:16,
    gap:10,
    paddingVertical:10,
    flexDirection:'row',
    height:150,
    width:'90%',
    

  },
  navbtns:{
    justifyContent:'center',
    flex:1,
   
    borderRadius:20,
    alignItems:'center'
  },

  navbtnsL:{
     backgroundColor:'rgba(79, 47, 105, 0.2)',
  },
  navbtnsD:{
     backgroundColor:'rgba(79, 47, 105, 0.2)',
  },
  mininavbarbigtext:{fontSize:30,fontWeight:'bold'},
  mininavbarsmalltext:{fontSize:15,fontWeight:'bold'}

})

const styles=StyleSheet.create(
  {
    user_related_icons_container:{
    width:'90%',
    borderRadius:20,
    backgroundColor:'rgba(32, 31, 31, 0.2)',
    marginTop:16,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-evenly',
    
    gap:20
  }
  ,
  settings_container:{
    borderRadius:10,
    width:'95%',
    marginTop:16
  }
  ,
  user_image:{
    alignSelf:'flex-start',
    width:80,
    height:80,
    borderRadius:50,
    marginRight:12
    
  }
  ,
  user_form:{
    flex:1,
  }
  ,
  boldtext_light:{  
    fontWeight:'bold',
    fontSize:16,
    marginBottom:5
  }
  ,
  normaltext_light:{
    fontSize:14,
    marginBottom:3
  },
  icons_dark:{
    marginHorizontal:30,
    marginTop:15,
    color:'#4fbb83ff'
  },
  icons_light:{
    marginHorizontal:30,
    marginTop:15,
    color:'#001affff'
  },

  iconslabel_light:{
    color:'#060606ff',
    fontSize:14,
    marginBottom:15,
    textAlign:'center',
    fontWeight:'400'
  },
  iconslabel_dark:{
    color:'#ffffff',
    fontSize:14,
    marginBottom:15,
    textAlign:'center',
    fontWeight:'400'
  },
  settings_touchables_dark:{
    borderRadius:40,
    width:'100%',
    height:55,
    backgroundColor:'rgba(255,255,255,0.1)',
    marginTop:5,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:10
  },
  settings_touchables_light:{
    borderRadius:10,
    width:'100%',
    height:'13%',
    backgroundColor:'#ffffffff',
    marginTop:5,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingLeft:10
  },
  settings_lable_light:{
    color:'#000000ff',
    fontSize:16,
    fontWeight:'bold'
  },
  settings_lable_dark:{
    color:'#ffffffff',
    fontSize:16,
    fontWeight:'bold'
  },


    main_cntr:{
      flex:1,
      alignItems:'center',
    },
    header:{
      height:70,
      paddingTop:30,
      paddingLeft:20,
      flexDirection:'row',
      alignItems:'center',
      
    },
    headerDM:{
      backgroundColor:'#25272aff'
    },
    headerLM:{
      backgroundColor:'#a2bedbff'
    },
    headerT:{
      fontSize:25,
      fontWeight:'bold'
    },
    DMT:{
      color:'#fff'
    },
    LMT:{
      color:'#000000ff'
    },    
  }
);

