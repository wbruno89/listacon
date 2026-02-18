import Contato from '../../components/Contato'
import { MainContainer } from '../../styles/index'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
