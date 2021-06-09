import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Div,
  Button,
  Input,
  Label,
  Image,
  ImageBackground,
} from 'react-native';
import { style } from 'glamor';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Subtitle,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import db from './localdb';
import PhonicSoundButton from './PhonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSound: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/ae/d9/8d/aed98d75872d05dd7fc602c723fbeec9.jpg',
          }}
          style={{
            position: 'relative', // because it's parent
            height: 550,
            top: 2,
            left: 2,
          }}>
          <Header hasTabs transparent style={styles.Header}>
            <Left>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  marginLeft: -55,
                  marginTop: -20,
                  color: 'rgba(0, 0, 0, 0.7)',
                  textShadow:
                    '0 0 10px #fff, 0 0 0px #fff, 0 0 30px #e60073, 0 0 0px #e60073, 0 0 0px #e60073, 0 0 0px #e60073, 0 0 0px #e60073',
                }}>
                ◔◡◔
              </Text>
            </Left>

            <Body>
              <Text style={styles.header1}>Monkey Chunky</Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  paddingLeft: 10,
                  color: 'rgba(255, 255, 255, 0.7)',
                  textShadow:
                    '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073',
                }}>
                Phonem Maker
              </Text>
            </Body>
          </Header>

          <TextInput
          placeholder = "Type Your Text Here"
          placeholderTextColor = "rgba(255, 255, 255, 0.7)"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({chunks : []});
              this.setState({ text: text });
            }}
            value={this.state.text}
          />

          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute', // child
              bottom: 0, // position where you want
              left: 0,
            }}>
            Hello World
          </Text>
          <TouchableOpacity 
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setState({phonicSound : db[this.state.text].phones})
              console.log(this.state.chunks);
            }}>
            <Image
              style={{ marginTop: 130, width: 220, height: 220 }}
              source={require('./monkeyicon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.displayText}>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSound[index]}
                  buttonIndex = {index} />
              );
            })}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 0,
    paddingLeft: 70,
  },
  header1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: -20,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    textShadow:
      '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073',
  },

  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
    backgroundImage: 'url(/Neon_Inner_Frame_Floral.jpg)',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
  },
  inputBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    width: '58%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    backgroundColor: 'none',
    color : 'white'
  },
  goButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    marginBottom: 100,
  },
  displayText: {
    paddingTop: 5,
    marginTop : 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 25,
    marginRight : 45,
    marginLeft : 45,
    marginBottom :40
  },
});
