import React from "react";
import { InfosUsuarios } from "./InfosUsuarios";
// import '../App.css';


export function CardVideo(props) {
    const nome = "Gafanhoto"
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
      }
    return (
        <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src={props.imagem} alt="" />
            <h4>{props.titulo}</h4>
            <InfosUsuarios usuario={nome}
            fotoUsuario={"https://picsum.photos/id/1/50/60 "}
            />
        </div>
   )

}