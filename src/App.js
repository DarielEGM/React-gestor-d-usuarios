import { useState } from 'react'
import Card from './components/Card'
import UserForm from'./components/UserForm'
import Container from './components/Container'

function App() {
  const [usuarios,setUsuarios]=useState([])

  const submit= (usuario)=>{
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }


  return (
    <div style={{marginTop:'10%'}}>
      <Container>
        <Card>
          <div style={{padding:20}}>
            <UserForm submit={submit}/>
          </div>
        </Card>
        <Card>
          <ul>
              {usuarios.map(usuario =>
                  <li key={usuario.email}>{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
                )}
            </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
