// import React from 'react';
// import HomePage from './components/component';
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
function App() {
  const content = useRoutes(routes);
  return content;
}
// function App() {
//   return (
//     <div>
//       <HomePage chargingStations={
//         [{
//           id: 1,
//           name: "string",
//           address: "string"
//         }]
//       } weatherData={{temperature: 0,
//         humidity: 0,
//         windSpeed: 0,
//         description: "string"}} />
//     </div>
//   );
// }

export default App;
