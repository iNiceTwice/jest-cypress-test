import { render, screen, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from "react"
import App from './App';
import { Contador } from './App';


test("verifica que se muestre el div al tocar el boton", () => {
  render(<App/>)
  const button = screen.getByText("Mostrar")
  fireEvent.click(button)
  const element = screen.getByText("Soy visible!")
  expect(element).toBeInTheDocument()
})

describe("<Counter/>", ()=>{
  
  beforeEach(()=>{
    render(<Contador/>)
  })
  
  test('verifica que el contador sume', () => {
    const button = screen.getByText("+")
    fireEvent.click(button)
    const element = screen.getByText("1");
    expect(element).toBeInTheDocument();
  });
  
  test("si counter es > a 3 deberia ser rojo", () => {
    const button = screen.getByText("+")
    for(let i = 0 ; i < 4 ; i++){
      fireEvent.click(button)
    }
    const element = screen.getByText("4")
    expect(element).toHaveStyle("color:red")
  })
})
