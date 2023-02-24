import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {UploadStackNavigatorParamList} from '../types/navigation'
import CameraScreen from '../screens/CameraScreen'
import CreatePostScreen from '../screens/CreatePostScreen'

const Stack = createNativeStackNavigator<UploadStackNavigatorParamList>();


const UploadStackNavigator = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Create" component={CreatePostScreen}/>
    </Stack.Navigator> 

  )
}

export default UploadStackNavigator