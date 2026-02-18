import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    background-color: #fff;
    padding: 32px 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`

export const MainContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  margin-top: 90px;
  padding: 0 32px;
`
export const Titulo = styled.h2`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-size: 32px;
  font-weight: bold;
`

export const Campo = styled.input`
  display: flex;
  padding: 8px;
  background-color: #f3f4f6;
  border-radius: 8px;
  border: 1px solid transparent;
  width: 100%;
  color: #000;
  font-size: 16px;
  padding: 16px 32px;
  outline: none;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: ${variaveis.azulPrimario};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${variaveis.azulSecundario};
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.azulPrimario};
  color: ${variaveis.azulSecundario};
`

export const BotaoCadastrar = styled(Botao)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  border: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 32px;
  color: ${variaveis.azulSecundario};
  background-color: ${variaveis.azulPrimario};
  transition: all 0.3s ease;
  margin-right: 0;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }
`

export const BotaoVoltar = styled(BotaoCadastrar)`
  margin-top: 8px;
  background-color: #f3f4f6;
  color: #374151;
  margin-right: 0;

  &:hover {
    background-color: #e5e7eb;

  &:active {
    background-color: #d1d5db;
  }
`

export default EstiloGlobal
