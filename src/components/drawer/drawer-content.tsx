import { View, Image } from 'react-native';
import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export default function DrawerContent( drawerProps: DrawerContentComponentProps) {
  return (
    <View className='flex-1 bg-gray-600 overflow-hidden'>
  <View>
        <Image source={require('../../assets/logo.png')} style={{ width: 100, height: 100 }} />
  </View>
    </View>
  );
}
