import React from "react";

export type ButtonProps = {
  children?: React.ReactNode,
  label?: string,
  txt_color?: string,
  background_color?: string,
  w_size: string,
  border?: string
} & React.ComponentProps<'button'>

export type InputFiledsProps = {
  labelText?: string,
} & React.ComponentProps<'input'> 