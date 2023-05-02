import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import FavoriteView from './FavoriteView';
import { ListContext } from './ListContext';
import { useState, useMemo, useEffect } from 'react';
import { getFromFirebase } from './helpers/firebaseHelpers';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFromFirebase('favorites', 5);
      setList(result);
    };
    fetchData();
  },[]);

  const providerValue = useMemo(() => ({ list, setList }), [list, setList]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ListContext.Provider value={providerValue}>
          <Routes>
            <Route exact path="/" element={<BlogList />} />
            <Route path="/blogpost/:id" element={<BlogPost />} />
            <Route path="/favoriteview" element={<FavoriteView />} />
          </Routes>
        </ListContext.Provider>

      </div>
    </Router>
  );
}

export default App;