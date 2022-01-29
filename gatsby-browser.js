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
        background: #181818;
    }

    h1, h2, h3, h4, h5 {
        padding: .5rem;
        color: #FFF;
    }

    h3 {
        color: #d2fee9;
    }

    a {
        color: #d2fee9;
        text-decoration: none;
        font-family: 'IBM Plex Serif';

        &:hover {
            color: #20FC8F;
        }
    }

    button {
        height: 3rem;
        width: 8rem;
        background: #181818;
        border: 1px solid #20FC8F;
        color: #20FC8F;
        border-radius: 10px;
        font-family: 'IBM Plex Serif';
        font-weight: bold;
        font-size: 1.1rem;

        &:hover {
            background: #20FC8F;
            color: #181818;
            cursor: pointer;
        }
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)