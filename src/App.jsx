import './App.css'

import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"
import Feed from "./components/Feed";
import FriendsList from "./components/Friends/FriendsList";
import SuggestionsList from "./components/Suggestion/SuggestionsList";
import Comments from "./components/Comments/Comments"
import { Container, Grid } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Header title="Social Network AT" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feed />
        </Grid>
        <Grid item xs={12} md={3}>
          <FriendsList />
          <SuggestionsList />
        </Grid>
      </Grid>
      <Comments />
    </Container>
  )
}
