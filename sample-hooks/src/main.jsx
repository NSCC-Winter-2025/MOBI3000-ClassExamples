import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import {Counter} from './Counter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter countBy={1} />
    <Counter countBy={2} />
    <Counter countBy={10} />
  </StrictMode>,
)
