import { useState } from 'react';
import styles from './button.module.css';
import { Button } from '@mantine/core';

interface props {
  contador: number;
  setContador: (contador: number) => void;
}

export function MyButton(props: props) {
  const [contInd, setContInd] = useState<number>(0);
  return (
    <Button onClick={() => {
      setContInd(contInd + 1);
      props.setContador(props.contador + 1);
    }}>
      Contador General: {props.contador}, Contador Individual: {contInd}
    </Button>
  );
}

export default MyButton;
