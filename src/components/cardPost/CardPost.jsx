import React from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

import "./CardPost.css";

export default function CardPost(props) {
  const [contador, setContador] = useState(0);
  
  return (
    <>
      <div className="f-card">
        <div className="header">
          <div className="options">
            <i className="fa fa-chevron-down"></i>
          </div>
          <img className="co-logo" src={props.imagemPerfil} />
          <div className="co-name">
            <a href="#">{props.nome}</a>
          </div>
          <div className="time">
            <a href="#">{props.data}</a> · <i className="fa fa-globe"></i>
          </div>
        </div>
        <div className="content">
          <p>
            {props.infoText}
          </p>
        </div>

        <div className="reference">
          <img className="reference-thumb" src={props.imagemPost} />
          <div className="reference-content">
            <div className="reference-title">
              {props.title}
            </div>
            <div className="reference-subtitle">
              {props.paragrafo}
            </div>
            <div className="reference-font"></div>
          </div>
        </div>
        <div className="social">
          <div className="social-content">Curtidas {contador}</div>
          <div  className="social-buttons">
            <span>
              <ThumbUpIcon/> 
              <button onClick={() => setContador(contador + 1)}><i className="fa fa-thumbs-up"></i>Curtir</button>
            </span>
            <span>
              <ModeCommentIcon /> 
              <button><i className="fa fa-comment"></i>Comentários</button>
            </span>
            <span>
              <ShareIcon /> 
              <i className="fa fa-share"></i>Compartilhar
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
