import { Titulo, BotaoCadastrar, BotaoVoltar } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Container, Form } from './styles'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/tarefas'

const FormularioCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    // Expressões regulares para validação
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const telefoneValido = /^\(\d{2}\)\s\d{5}-\d{4}$/.test(telefone)
    const nomeValido = nome.trim().length > 0

    if (!nomeValido || !emailValido || !telefoneValido) {
      alert('Por favor, preencha todos os campos corretamente.')
      return
    }

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  const formatarTelefone = (valor: string) => {
    // Remove tudo que não for número
    let apenasNumeros = valor.replace(/\D/g, '')

    // Limita a 11 dígitos
    if (apenasNumeros.length > 11) {
      apenasNumeros = apenasNumeros.slice(0, 11)
    }

    // Aplica a máscara (00) 00000-0000
    return apenasNumeros
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }

  return (
    <Container>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Digite o nome completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="exemplo@email.com"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(formatarTelefone(target.value))}
          type="tel"
          placeholder="(00) 00000-0000"
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
      <BotaoVoltar onClick={() => navigate(-1)}>← Voltar</BotaoVoltar>
    </Container>
  )
}

export default FormularioCadastro
