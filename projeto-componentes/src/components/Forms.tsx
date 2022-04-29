import { useState } from 'react';
import { toast } from 'react-toastify'
import Exibir from './Exibir'

export function Forms() {
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [fone, setFone] = useState("");
    const [clientes, setClientes] = useState([]) as any;

    const handleSubmit = (event) => {
      event.preventDefault();
      if(name === '')
        toast.error("Erro. Nome é um campo Obrigatório!")
      else{
        toast.success("Dados Cadastrados!")
        let novo={nome: name, telefone: fone}
        setClientes([...clientes, novo])
        //alert(`The name you entered was: ${clientes}`)
      }
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label> Nome:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder = "Seu nome..."
            />
          </label>
          <label> Endereço:
            <input 
              type="text" 
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              placeholder = "Endereço..."
            />
          </label>
          <label> Cidade:
            <input 
              type="text" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder = "Cidade..."
            />
          </label>
          <label> Estado:
            <input 
              type="text" 
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder = "UF..."
            />
          </label>
          <label> Telefone:
            <input 
              type="tel" 
              value={fone}
              onChange={(e) => setFone(e.target.value)}
              pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
              placeholder='(ddd) XXXXX-XXXX'
            />
          </label>
          <input type="submit" />
        </form>
        <Exibir conteudo = {clientes}/>
      </>
    )
  }