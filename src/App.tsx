import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Layout>
        <Table/>
      </Layout>
    </div>
  );
}

export default App;
