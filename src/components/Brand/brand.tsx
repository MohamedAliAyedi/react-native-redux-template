import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { useTheme } from '@/hooks'

const Brand = ({ height, width, mode }) => {
  // @ts-expect-error TS2339
  const { Layout, Images } = useTheme();

  return (
    <View style={{height: 200, width: 200}}>
      <Image 
        style={Layout.fullSize} 
        source={Images.logo} 
        resizeMode={Images.logoStyle.mode}
      />
    </View>
  )
}

export default Brand