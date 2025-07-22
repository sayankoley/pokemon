import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Pokemon } from './pokemon';
import Applayout from './AppLayout';
import { PokemonDetails } from './PokemonDetails';

const router = createHashRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Pokemon />,
      },
      {
        path: "/:id", 
        element: <PokemonDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
