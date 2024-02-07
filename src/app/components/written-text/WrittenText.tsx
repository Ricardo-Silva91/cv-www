'use client';

import { useMemo, useState } from 'react'

export interface WrittenTextProps {
  lines: {
    text: string,
    classes?: string
  }[]
}

export default function WrittenText({ lines }: WrittenTextProps) {
  let [numberOfChars, setNumberOfChars] = useState(0);
  let [currentLine, setCurrentLine] = useState(0);
  let [tickTime, setTickTime] = useState(40);
  let [writeState, setWriteState] = useState<'wrong' | 'deleting' | 'right'>(lines.length === 1 ? 'wrong' : 'right');

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
    return Math.floor(Math.random() * (fullWordToShowLength * 0.4)) || 1;
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

    switch (writeState) {
      case 'right':
        return fullWordToShow.slice(0, numberOfChars);
      case 'wrong':
        return fullWordToShowWrong.slice(0, numberOfChars);
      case 'deleting':
        return fullWordToShowWrong.slice(0, numberOfChars);
      default:
        break;
    }
  }, [numberOfChars]);

  const runTick = () => {
    switch (writeState) {
      case 'right':
      case 'wrong':
        if (numberOfChars < fullWordToShow.length) {
          setNumberOfChars(numberOfChars + 1);
        } else if (writeState === 'wrong') {
          setWriteState('deleting');
          setTickTime(25);
        } else if (writeState === 'right' && currentLine < lines.length - 1) {
          if (currentLine === lines.length - 2) {
            setWriteState('wrong');
          }
          setCurrentLine(currentLine + 1);
          setNumberOfChars(0);
        }
        break;
      
      case 'deleting':
        if (numberOfChars > indexForError) {
          setNumberOfChars(numberOfChars - 1);
        } else {
          setWriteState('right');
        }
        break;
    
      default:
        break;
    }
  };
  
  
  setTimeout(() => {
    runTick();
  }, tickTime);

  return (
    <>
    {
      linesToShow.map((line, index) => 
      line.text === '\n' ? <br key={index}/> : <span key={index} className={line.classes}>{ line.text }</span>)
    }
    <span key={linesToShow.length} className={lines[currentLine].classes}>{ textToShow }</span>
    </>
  )
}