import React from 'react';

export interface ISongTitle {
  songNumber: number;
  title: string;
  toSpirit: boolean;
}

export interface ISongText {
  lineId: number;
  songNumber: number
  text: string;
  copyr: string | null;
}