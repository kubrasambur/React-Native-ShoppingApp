import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: '#CCC7C5',
      margin:10,
      flexDirection:"row"
  },
  img: {
      width:100,
      height:100,
        resizeMode:"contain",
        backgroundColor:"white"
  },
  body_container: {
    flex:1,
    padding:3,
    justifyContent: 'space-between'
  },
  title: {
      flex:1,
      fontWeight:"bold",
      fontSize:18
  },
  price:{
      textAlign: "right",
      fontSize:16,
      fontStyle: "italic",
  }
});
