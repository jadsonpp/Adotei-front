import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {FiMenu, FiHome} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import "./styles.css";

//npm install @material-ui/core --save


export default function Cabecalho(){
    

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div className="cabecalho-container">


        
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
           <FiMenu size={40}/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        > 
          <MenuItem onClick={handleClose} component={Link} to="/profileuser">Perfil</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/adocao">Animais</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/">Sair</MenuItem>
        </Menu>
        <header>
          <button  className="button" type="button">
                      <FiHome size={20} color="#FFF"/>
          </button> 
        </header>
      </div>
    );
}