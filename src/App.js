
import './App.css';
import logo from './Imagem/logo.jpeg';
import ListaDeTarefas from './componentes/ListaDeTarefas';

function App() {

  return (
    <div className="aplicação-tarefas">
      <div className='conteinerLogo'>
      <img
      className='logo'
      src={logo}
      alt='logo'
       />
      </div>
      
      <div className='listaTarefasConteiner'>
        <h1>Minhas Tarefas</h1>
        <ListaDeTarefas />
      </div>
    </div>
  );
}

export default App;
