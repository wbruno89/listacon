import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Contato'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      nome: 'Maria Silva',
      email: 'maria.silva@email.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: 2,
      nome: 'Karla Nascimento',
      email: 'karla.n@creative.agency',
      telefone: '(21) 89876-5432'
    },
    {
      id: 3,
      nome: 'Gabriela Martins',
      email: 'gabi.martins@health.care',
      telefone: '(71) 93210-9876'
    },
    {
      id: 4,
      nome: 'Bruno Lima',
      email: 'bruno.lima@email.com',
      telefone: '(21) 99876-5432'
    },
    {
      id: 5,
      nome: 'Carla Souza',
      email: 'carla.souza@email.com',
      telefone: '(31) 97654-3210'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe um contato com esse nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
