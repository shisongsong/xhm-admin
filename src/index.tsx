import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// [Using the non-null assertion operator](https://learntypescript.dev/07/l2-non-null-assertion-operator)
const root = createRoot(document.getElementById('root')!); // createRoot(container!) if you use TypeScript
root.render(<App />);
