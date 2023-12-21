import React from "react";
import { Paper, Typography } from "@mui/material";

import "./FriendsList.css"

const FriendsList = () => {
  const friends = [
    {
      id: 1,
      nome: "João",
      foto: "https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_640.jpg",
      amigosComum: 5,
    },
    {
      id: 2,
      nome: "Maria",
      foto: "https://cdn.pixabay.com/photo/2020/10/10/19/14/woman-5643994_640.jpg",
      amigosComum: 3,
    },
    // Adicione mais dados de amigos aqui
  ];

  return (
    <Paper className="FriendsList">
      <Typography variant="h6">Lista de Amigos</Typography>
      <div className="FriendList">
        {friends.map((friend) => (
          <div className="Friend" key={friend.id}>
            <img src={friend.foto} alt={friend.nome} />
            <div>
              <Typography variant="subtitle1">{friend.nome}</Typography>
              <Typography variant="body2">
                {friend.amigosComum} amigos em comum
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default FriendsList;
