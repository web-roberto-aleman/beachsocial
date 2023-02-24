import { View, Text, StyleSheet,Pressable } from 'react-native'
import React, {useState} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';



interface IVideoPlayer {
    uri:string;
    paused:boolean
}

const VideoPlayer = ({uri,paused}:IVideoPlayer) => {
    const [muted, setMuted] = useState(true)
  return (
    <View>
        <Video source={{uri}} style={styles.video} resizeMode="cover" repeat muted={muted} paused={paused}/>
        <Pressable style={styles.muteButton} onPress={()=>setMuted(v=>!v)}>
            <Ionicons name={muted ? "volume-mute":"volume-medium"} size={14} color="white"/>
        </Pressable>
    </View>
  ) 
}
const styles = StyleSheet.create({
    video:{
        width:'100%',
        aspectRatio:1,
    },
    muteButton:{
        backgroundColor:colors.black,
        padding:5,
        position:'absolute',
        bottom:10,
        right:10,
        borderRadius:25
    }
})

export default VideoPlayer;