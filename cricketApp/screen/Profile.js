import React from 'react'
import { Button, Text, View } from 'react-native'

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile123</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  )
}

export default Profile