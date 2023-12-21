import React from "react";
import { Paper, List, Button, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <Paper className="Sidebar" elevation={3}>
      <Typography className={styles.title} variant="h6" gutterBottom>
        Menu Principal
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <Button component="a" href="#inicio">
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary="Início" />
          </ListItem>
        </Button>
        <Button component="a" href="#amigos">
          <ListItem>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText secondary="Amigos" />
          </ListItem>
        </Button>
        <Button component="a" href="#configuracoes">
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText secondary="Configurações" />
          </ListItem>
        </Button>
      </List>
    </Paper>
  );
};

export default Sidebar;
