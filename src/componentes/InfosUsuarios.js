import React from "react";

export function InfosUsuarios(props) {
    return (
        <div className="user">
            <img src={props.fotoUsuario} />
            <span><h4>{props.usuario}</h4></span>
        </div>
    )
}