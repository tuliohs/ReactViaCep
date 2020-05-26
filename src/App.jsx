import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ConsultaCep from './components/ConsultaCep';
import Clock from './components/Clock';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Ir ao mercado', done: true },
    { id: 2, title: 'Ir a academia', done: false },
    { id: 3, title: 'sair de casa', done: true },
  ]);

  const [todo, setTodo] = useState();

  const FormSubmit = el => {
    el.preventDefault();
    setTodos([
      //os tres pontos desconstroem o objeto
      ...todos,
      todo
    ])
  }

  const InputChange = e => {
    console.log(e);
    setTodo({
      ...todo,
      id: todos.length + 1,
      title: e.target.value,
      done: false
    })
  }

  return (
    <div className="App">
      {
        todos.map(item => (
          <div key={item.id} >{item.title}</div>
        ))
      }
      <br /><hr /><br />
      <form onSubmit={FormSubmit}>
        <input placeholder="Nova Tarefa ..." onChange={InputChange} />
        <button > Enviar</button>
      </form>
      <br /><hr /><br />
      <ConsultaCep/>
      
      <br /><hr /><br />
      <Clock/>
    </div>
  );
}

export default App;
