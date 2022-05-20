import React, { useEffect } from 'react';
import ExpandPanel from './ExpandPanel';
import { useCookies } from 'react-cookie';

const FavoriteTable = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  if(!cookies['cookie-name']) return <></>;
  const cook:number[] = cookies['cookie-name']
  return (
    <>
      {cook.map((index: number) => {
        return <ExpandPanel songIndex={index}></ExpandPanel>;
      })}
    </>
  );
};

export default FavoriteTable;
