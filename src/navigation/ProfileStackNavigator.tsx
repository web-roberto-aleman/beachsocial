import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import {ProfileStackNavigatorParamList} from '../types/navigation'

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();


const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
    </Stack.Navigator> 

  )
}

export default ProfileStackNavigator