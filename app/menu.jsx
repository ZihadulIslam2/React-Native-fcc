import { Appearance, StyleSheet, Text, View,Image, Platform, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


export default function MenuScreen() {
    const colorSchema = Appearance.getColorScheme()

    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
    const styles = createStyles(theme, colorScheme)
    const Container = Platform.OS === 'web'? ScrollView : SafeAreaView

    return(
        <Container>
            <FlatList data={[]} renderItem={
                ({item})=>()
            }>

            </FlatList>
        </Container>
    )
}

function createStyles(theme, colorScheme) {
    return StyleSheet.create({

    })
}

const styles = StyleSheet.create({})