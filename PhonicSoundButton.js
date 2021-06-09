import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Audio} from 'expo-av'

export default class PhonicSoundButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonPressed :''
    }
  }
  playSound=async(soundChunk)=>{
    var soundLink = "https://s3-whitehatjrcontent.whjr.online/phones/"+ soundChunk +".mp3"

  await Audio.Sound.createAsync(
    {uri: soundLink},
    {shouldPlay: true}
  )

  }
  render(){
    return(
      <TouchableOpacity style ={this.state.buttonPressed === this.props.buttonIndex
      ? [styles.textButton, {backgroundColor: 'white'}]
      : [styles.textButton, {backgroundColor: 'red'}]}
      onPress = {()=>{
        this.setState({buttonPressed: this.props.buttonIndex});
        this.playSound(this.props.soundChunk);
       
      }}>
      <Text style ={styles.buttonText}
       >{this.props.wordChunk}</Text>
      </TouchableOpacity>
    )
  }
}



const styles = StyleSheet.create({ 
  textButton:{
    width:'38%',
    height:25,
    alignSelf:'center',
    padding:10,
    margin:10,
    backgroundColor:'red',
    textAlign:"center",
    borderRadius : '25%'
    },
  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color : 'black'
  },
  
});
