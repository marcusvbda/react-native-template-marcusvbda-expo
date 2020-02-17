import React, { useEffect, useContext } from 'react'
import { Context } from '~/context'
import {
    Container,
    Text
} from "./styles"

export default function Main({ navigation }) {
    const user = useContext(Context).user

    useEffect(() => {
        function test() {
            return console.log(user)
        }
        test()
    }, [])

    return (
        <Container>
            <Text>Main Page</Text>
        </Container>
    )
}