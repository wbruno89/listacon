import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Contato'
import { BotaoSalvar, Botao } from '../../styles/index'

type Props = TarefaClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  const validarCampos = () => {
    if (!nome.trim()) return false
    if (!email.includes('@')) return false

    // Regex para telefone (00) 0 0000-0000
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/
    if (!telefoneRegex.test(telefone)) return false

    return true
  }

  const handleTelefoneChange = (evento: ChangeEvent<HTMLInputElement>) => {
    let valor = evento.target.value.replace(/\D/g, '') // remove tudo que não é número
    if (valor.length > 11) valor = valor.slice(0, 11) // limite de 11 dígitos

    // Aplica máscara (xx) x xxxx-xxxx
    valor = valor.replace(/^(\d{2})(\d)/, '($1) $2') // DDD + primeiro dígito
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2') // adiciona hífen antes dos últimos 4 dígitos

    setTelefone(valor)
  }

  return (
    <S.CardTarefa>
      <label htmlFor={nomeOriginal}>
        {estaEditando ? (
          <S.CardTarefaTitulo
            as="input"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(evento: ChangeEvent<HTMLInputElement>) =>
              setNome(evento.target.value)
            }
          />
        ) : (
          <S.CardTarefaTitulo>{nome}</S.CardTarefaTitulo>
        )}
      </label>
      <S.InputInformacoes
        disabled={!estaEditando}
        type="email"
        value={email}
        placeholder="Email"
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.InputInformacoes
        disabled={!estaEditando}
        type="tel"
        value={telefone}
        placeholder="Telefone"
        onChange={handleTelefoneChange}
      />
      <S.CardTarefaBarraDosBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                if (!validarCampos()) {
                  alert('Preencha todos os campos corretamente!')
                  return
                }
                dispatch(editar({ id, nome, email, telefone }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.CardTarefaBarraDosBotoes>
    </S.CardTarefa>
  )
}

export default Contato
