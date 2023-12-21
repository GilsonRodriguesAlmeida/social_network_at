import React from "react";
import { Paper, Typography } from "@mui/material";

import './SuggestionsList.css';

const SuggestionsList = () => {
  const suggestions = [
    {
      id: 1,
      nome: "Ana",
      foto: "https://cdn.pixabay.com/photo/2020/10/09/04/56/woman-5639513_640.jpg",
      amigoComun: "João",
    },
    {
      id: 2,
      nome: "Pedro",
      foto: "https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_640.jpg",
      amigoComun: "Maria",
    },
    // Adicione mais dados de sugestões aqui
  ];

  return (
    <Paper className="SuggestionsList">
      <Typography variant="h6">Sugestões de Amizade</Typography>
      <div className="SuggestionsList">
        {suggestions.map((suggestion) => (
          <div className="Suggestion" key={suggestion.id}>
            <img src={suggestion.foto} alt={suggestion.nome} />
            <div>
              <Typography variant="subtitle1">{suggestion.nome}</Typography>
              <Typography variant="body2">
                Amigo em comum: {suggestion.amigoComun}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default SuggestionsList;
