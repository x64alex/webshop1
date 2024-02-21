import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Select, ListItemIcon, ListItemText } from '@mui/material';
import { ReactComponent as EnFlag } from './flags/en.svg'; // Import SVG for English flag
import { ReactComponent as RoFlag } from './flags/ro.svg'; // Import SVG for Romanian flag

function MyAppBar() {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    // You can implement logic here to change the language of your application
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">My Online Shop</Typography>
        <Select
          value={language}
          onChange={handleChangeLanguage}
          label="Language"
          style={{ color: 'white' }}
          IconComponent={() => null} // This removes the dropdown arrow
        >
          {/* MenuItem for English with flag */}
          <MenuItem value="en">
            <ListItemIcon>
              <EnFlag style={{ marginRight: 5 }} />
            </ListItemIcon>
            <ListItemText primary="English" />
          </MenuItem>
          {/* MenuItem for Romanian with flag */}
          <MenuItem value="ro">
            <ListItemIcon>
              <RoFlag style={{ marginRight: 5 }} />
            </ListItemIcon>
            <ListItemText primary="Română" />
          </MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
