import { CardVideo } from './componentes/CardVideo';
import React from 'react';
import './styles.css';

function App() {
  return (
    <body>

    <div className="tela-inteira">
        
        <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            <section className="painel-de-videos">
                <CardVideo imagem={"https://picsum.photos/400/400?a=1 " }
                titulo={"Imagem Aleatória 1"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=2 "}
                titulo={"Imagem Aleatória 2"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=3 " }
                titulo={"Imagem Aleatória 3"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=4 "}
                titulo={"Imagem Aleatória 4"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=5 " }
                titulo={"Imagem Aleatória 5"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=6 "}
                titulo={"Imagem Aleatória 6"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=7 " }
                titulo={"Imagem Aleatória 7"}
                />
                <CardVideo imagem={"https://picsum.photos/400/400?a=8 "}
                titulo={"Imagem Aleatória 8"}
                />                               
            </section>
        </main>
        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
      </body>
  );
}

export default App;
