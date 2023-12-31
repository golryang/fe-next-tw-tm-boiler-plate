// src/styles/GlobalStyles.tsx
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import '../app/globals.css'

const CustomStyles = createGlobalStyle({
  body: {},
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
