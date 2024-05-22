import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import VideoWatch from "./components/VideoWatch";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <VideoContainer />
      },
      {
        path: 'watch',
        element: <VideoWatch />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
