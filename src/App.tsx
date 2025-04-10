import { useContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import PostsContainerPage, {loader as PostListLoader} from './pages/PostsContainerPage';
import RootLayout from './pages/RootLayout';
import { ThemeContext } from './store/app-theme-context';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';

function App() {

  const {isDarkThemeOn} = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = isDarkThemeOn ? 'dark' : 'light';
    localStorage.setItem('currentThemeMode', isDarkThemeOn ? 'dark' : 'light')
  }, [isDarkThemeOn]);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <PostsContainerPage />,
          loader: PostListLoader
        },
        {
          path: 'post/:postId',
          element: <PostDetailPage />
        },
        {
          path: 'add-post',
          element: <NewPostPage />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
