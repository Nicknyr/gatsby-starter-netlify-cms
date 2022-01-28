import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)