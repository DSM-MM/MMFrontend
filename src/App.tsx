import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/global';

function App() {
  return (
   <>
    <Global styles={GlobalStyle} />
   </>
  );
}

export default App;