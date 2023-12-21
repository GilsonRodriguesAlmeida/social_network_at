import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CardPost from "./cardPost/CardPost";

const Post = ({ post }) => {
  const dados = [
    {
      nome: 'Gilson', infoText: "esse e o meu primeiro post", data:'20/12/2023', 
      imagemPerfil:'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_640.png', imagemPost: 'https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_640.jpg',
      title: "Meu Post", paragrafo: "Olá esse é o primeiro de muitos posts aqui!",
    },
    {
      nome: 'Gilson', infoText: "esse e o meu primeiro post", data:'20/12/2023', 
      imagemPerfil:'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_640.png', imagemPost: 'https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_640.jpg',
      title: "Meu Post", paragrafo: "Olá esse é o primeiro de muitos posts aqui!",
    },
  ]
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        {/* Mais detalhes da postagem usando os dados passados */}
        {dados.map((dado) => (
          <CardPost 
            nome={dado.nome} 
            infoText={dado.infoText} 
            data={dado.data} 
            imagemPerfil={dado.imagemPerfil}
            imagemPost={dado.imagemPost}
            title={dado.title}
            paragrafo={dado.paragrafo}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Post;
