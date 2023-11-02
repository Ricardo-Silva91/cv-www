'use client';

import { useMemo, useState } from 'react'
import styles from './written-text.module.scss'

const timeBetweenClicks  = 50;

export default function WrittenText({ lines }: { lines: { text: string, classes?: string}[] }) {
  let [numberOfChars, setNumberOfChars] = useState(0);
  let [currentLine, setCurrentLine] = useState(0);
  let [writeState, setWriteState] = useState<'wrong' | 'deleting' | 'right'>('wrong');

  const linesToShow = useMemo(() => {
    if (!lines) {
      return [];
    }

    return lines.slice(0, currentLine);
  }, [currentLine]);
  const fullWordToShow = useMemo(() => {
    return lines[currentLine].text;
  }, [currentLine]);
  const indexForError = useMemo(() => {
    if (currentLine < lines.length - 1) {
      return -1;
    }
    
    const fullWordToShowLength = fullWordToShow.length;
    return Math.floor(Math.random() * fullWordToShowLength);
  }, [currentLine]);
  const fullWordToShowWrong = useMemo(() => {
    if (currentLine < lines.length - 1) {
      return fullWordToShow;
    }

    const mistakeLetterIndex = Math.floor(Math.random() * 25);
    const mistakeLetter = String.fromCharCode(97 + mistakeLetterIndex);

    return `${fullWordToShow.slice(0, indexForError)}${mistakeLetter}${fullWordToShow.slice(indexForError + 1, fullWordToShow.length)}`;
  }, [currentLine]);

  const textToShow = useMemo(() => {
    if (!lines[currentLine]) {
      return '';
    }

    return fullWordToShowWrong.slice(0, numberOfChars);
  }, [numberOfChars]);
  
  setTimeout(() => {
    if (numberOfChars < lines[currentLine].text.length) {
      setNumberOfChars(numberOfChars + 1);
    } else if (currentLine < lines.length - 1) {
      setNumberOfChars(0);
      setCurrentLine(currentLine + 1);
    }
  }, timeBetweenClicks);
  

  return (
    <>
    {
      linesToShow.map((line, index) => 
      <div key={index}><span >{ line.text }</span></div>)
    }
    <span key={linesToShow.length}>{ textToShow }</span>
    </>
  )
}