import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const CheckboxWrapper = styled.div`
 display: flex;
  flex-direction: column;
  gap: 4px;
`

export const CheckboxLabel = styled.div`
display: flex;
gap: 10px;
`

export const Label = styled.label`
font-size: 24px;
cursor: pointer;
`

export const CheckboxElement = styled.input`
width: 24px;
height: 24px;
margin: 3px 3px 3px 0;

`


export const ErrorMassege = styled.div`
height: 18px;
color: red;
font-size: 16px;
`