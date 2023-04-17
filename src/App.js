import '../src/scss/base/_common.scss';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../src/pages/HomePage';
import { TweetsPage } from './pages/TweetsPage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
