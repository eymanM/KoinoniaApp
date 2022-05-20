import React from 'react';
import ExpandPanel from './ExpandPanel';

interface Props {
  songsToRender: number[];
}

const SongsTable: React.FC<Props> = ({ songsToRender }) => {
const [loading, setloading] = React.useState(true);

  return (
    <>
      {songsToRender.map((number:number, index: number,) => {
        return <ExpandPanel key={index} songIndex={number}></ExpandPanel>;
      })}
    </>
  );
};

export default SongsTable;
