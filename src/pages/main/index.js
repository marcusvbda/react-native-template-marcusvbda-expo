import React, { useContext } from 'react'
import { Text } from 'react-native'
import { Context } from '~/context'

export default function Main({ navigation }) {
    const user = useContext(Context).user

    function init() {
        return console.log(user)
    }
    init()

    return (
        <>
            <Text>Main Page</Text>
        </>
    )
}