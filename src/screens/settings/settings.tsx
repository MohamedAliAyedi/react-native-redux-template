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

const Settings = () => {
  const { t, i18n } = useTranslation()
  // @ts-expect-error TS2339
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: { theme?: any; darkMode: boolean }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const onChangeLanguage = ({ lang }: { lang: string }) => {
    i18n.changeLanguage(lang)
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}></Text>

      <View style={Layout.row}>
        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.smallBMargin]}
          onPress={() => onChangeTheme({ darkMode: true })}
        >
          <Text style={Fonts.textSmall}>{t('general.dark')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.smallBMargin]}
          onPress={() => onChangeTheme({ darkMode: false })}
        >
          <Text style={Fonts.textSmall}>{t('general.light')}</Text>
        </TouchableOpacity>
      </View>
      <View style={Layout.row}>
        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.smallBMargin]}
          onPress={() => onChangeLanguage({ lang: 'ar' })}
        >
          <Text style={Fonts.textSmall}>{t('general.arabic')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[Common.button.outlineRounded, Gutters.smallBMargin]}
          onPress={() => onChangeLanguage({ lang: 'en' })}
        >
          <Text style={Fonts.textSmall}>{t('general.english')}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Settings
