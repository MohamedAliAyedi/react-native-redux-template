import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/components'
import { useTheme } from '@/hooks'
import { useLazyFetchOneQuery } from '@/services/modules/users'
import { changeTheme } from '@/store/theme'

const ExampleContainer = () => {
  const { t, i18n } = useTranslation()
  // @ts-expect-error TS2339
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand height={undefined} width={undefined} mode={undefined} />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textSmall}>{`${error}`}</Text>
        ) : (
          <Text style={Fonts.textSmall}>
            {t('example.helloUser')}
          </Text>
        )}
      </View>
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}></Text>

    </ScrollView>
  )
}

export default ExampleContainer
