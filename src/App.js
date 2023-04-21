import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Navbar from './Navbar';
import FavoriteView from './FavoriteView';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />
          <Route path="/favoriteview" element={<FavoriteView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;