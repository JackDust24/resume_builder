import React from 'react';
import './App.css';
import './styles.css';
import { TemplateBuilder } from './templates/TemplateBuilder';
import AddCandidate from './candidates/AddCandidate';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container mx-auto justify-between'>
        <nav className='m-4'>
          <ul className='flex space-x-4 text-2xl'>
            <li>
              <Link to='/' className='text-blue-500 hover:text-blue-700'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/add-candidate'
                className='text-blue-500 hover:text-blue-700'
              >
                Add Candidate
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<TemplateBuilder />} />
          <Route path='/add-candidate' element={<AddCandidate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
