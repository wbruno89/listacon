import { CampoBusca } from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraBusca = () => {
  const dispatch = useDispatch()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <CampoBusca
      type="text"
      placeholder="Buscar"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    />
  )
}

export default BarraBusca
