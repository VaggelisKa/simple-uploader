import React from 'react';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Uploader from 'components/uploader.component';

function App() {
  return (
    <div className="App">
      <h3>This is a simple uploader</h3>
      <Uploader />
    </div>
  );
}

export default App;
