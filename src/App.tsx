import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SearchAppBar from './components/SearchAppBar';
import SongsTable from './components/SongsTable';
import { useCookies } from 'react-cookie';
import FavoriteTable from './components/FavoriteTable';
import { getIdsForSearchTitles } from './data/dataProvider';

function App() {
  const [searchPhrase, setSearchPhrase] = React.useState<string>('');
  return (
    <>
      <SearchAppBar  setSearchPhrase={setSearchPhrase}/>
      <Routes>
        <Route path='/' element={ <Navigate to="/songs" /> } />
        <Route path='/Songs' element={ <SongsTable songsToRender={ getIdsForSearchTitles(searchPhrase) }/> } />
        <Route path='/Favorites' element={<FavoriteTable />} />
      </Routes>
    </>
  );
}

export default App;
