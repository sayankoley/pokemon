import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pokemon } from './pokemon'
import Applayout from './AppLayout';
import { PokemonDetails } from './PokemonDetails';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Pokemon />,
        },
        {
          path: "pokemon/:id", 
          element: <PokemonDetails />,
        },
      ],
    },
  ],
  {
    basename: "/pokemon", 
  }
);


function App() {
 return <RouterProvider router={router}></RouterProvider>
}

export default App
