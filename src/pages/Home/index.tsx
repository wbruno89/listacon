import BotaoNovoContato from '../../components/BotaoFlutuante'
import BarraSuperior from '../../containers/BarraSuperior'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraSuperior />
    <ListaDeContatos />
    <BotaoNovoContato />
  </>
)

export default Home
