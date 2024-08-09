import React from 'react';
import './App.css';
import EditableTable from './EditableTable';
import EditableTableAGG from './EditableTableAGG';
import CodeBlockTan from './CodeBlockTan';
function App() {
  return (
    <div className="App">
      <h1>Editable Table (Tan Stack)</h1>
      <code >JS</code>
      <EditableTable />
      <h1>Editable Table (AG Grid)</h1>
      <EditableTableAGG />
      <CodeBlockTan /> 
      

    </div>
  );
}

export default App;
