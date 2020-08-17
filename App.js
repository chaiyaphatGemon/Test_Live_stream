import React, {Component} from 'react';
import {Text, View,StyleSheet,Dimensions} from 'react-native';
import {LivePlayer} from 'react-native-live-stream';
const {height,width} = Dimensions.get("screen")

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <LivePlayer
          source={{uri: 'rtsp://admin:admin12345@icsco.ddns.net:554/Streaming/Unicast/channels/202'}}
          ref={(ref) => {
            this.player = ref;
          }}
          style={styles.video}
          paused={false}
          muted={false}
          bufferTime={300}
          maxBufferTime={1000}
          resizeMode={'contain'}
          onLoading={() => {}}
          onLoad={() => {}}
          onEnd={() => {}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  video:{
    width:400,
    height:400
  }
})