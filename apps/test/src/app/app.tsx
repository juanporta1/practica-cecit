
import { useState } from "react";
import MyButton from "../components/button/button";

export function App() {
  const [contador, setContador] = useState<number>(0);
  return (
    <div>
      <MyButton contador={contador} setContador={setContador}></MyButton>
    </div>

  );
}

export default App;
