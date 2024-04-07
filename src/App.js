import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";



function App() {
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Las películas favoritas de Wil</h1>
      </header>
      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>                
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        {/* Aquí van el listado de las películas */}
        <Listado/>

      </section>
      {/* Barra lateral */}
      <aside className="lateral">
        
        <Buscador/>

        <Crear/>
      </aside>
      {/* Pie de página */}
      <footer className="footer">
        &copy; Máster en javascript 
      </footer>
    </div>
  );
}

export default App;
