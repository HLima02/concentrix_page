import React from "react";

export type ButtonProps = {
  children?: React.ReactNode,
  label?: string,
  txt_color?: string,
  background_color?: string,
  background_hover?: string,
  w_size: string,
  border?: string,
} & React.ComponentProps<'button'>

export type InputFiledsProps = {
  labelText?: string,
  mask?: "cpf" | "cnpj" | "date",
  onChangeValue: (value:string) => void
  valueTxt?: any,
  errorStyle?: boolean
} & React.ComponentProps<'input'> 

export type CardBenefitsProps = {
  label: string,
  cardImage: string,
  cardTitle: string
}

export type StepsCardComponentProps = {
  numberLabel: string 
  title:string ,
  text:string, 
  image:string
}

export type SectionTitleProps = {
  title: string, 
  subTitle: string
}

export type ArrowBottomBtnProps = {
  arrowLink: string,
}