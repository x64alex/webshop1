import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Select, ListItemIcon, IconButton } from '@mui/material';
import { ReactComponent as EnFlag } from './flags/en.svg';
import { ReactComponent as RoFlag } from './flags/ro.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function MyAppBar() {
  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    // You can implement logic here to change the language of your application
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Magazin</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select
            value={language}
            onChange={handleChangeLanguage}
            style={{ color: 'white' }}
            open={isOpen}
            IconComponent={() => null}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            renderValue={() => (
              <ListItemIcon>
                {language === 'en' ? <EnFlag style={{ marginRight: 5 }} /> : <RoFlag style={{ marginRight: 5 }} />}
              </ListItemIcon>
            )} 
          >
            <MenuItem value="en">
              <ListItemIcon>
                <EnFlag style={{ marginRight: 5 }} />
              </ListItemIcon>
              English
            </MenuItem>
            <MenuItem value="ro">
              <ListItemIcon>
                <RoFlag style={{ marginRight: 5 }} />
              </ListItemIcon>
              Română
            </MenuItem>
          </Select>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;

