import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface Props {
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAppBar: React.FC<Props> = ({ setSearchPhrase }) => {
  const isFavoritePage: boolean = useLocation().pathname === '/favorites';
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
            <Link to="/songs" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                Spiewnik
            </Link>
            <Link to="/favorites" style={{ color: 'inherit', textDecoration: 'inherit', marginInline: 20 }} >
                <FavoriteIcon fontSize='large' />
            </Link>
            {!isFavoritePage && <Search onChange={(e) => setTimeout(() => {
                setSearchPhrase((e.target as HTMLTextAreaElement).value)
              }, 450) }>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Szukaj…' />
          </Search>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SearchAppBar;