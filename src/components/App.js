import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

function App() {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className='eight column wide'>
          <SongList />
        </div>
        <div className='eight column wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
