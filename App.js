import React, { useState } from 'react'
import Routes from './src/routes'
import { ContextProvider } from '~/context'


export default function App() {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    )
}