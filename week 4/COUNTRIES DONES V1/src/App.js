import countries from "./countries.json"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { CountriesList } from "./components/CountriesList"
import { CountryDetails } from "./components/CountryDetails"



function App() {

  const [allCountries, setAllCountries] = useState(countries)


  return (

    

    <div className="App">
        <Navbar />

          <div className="d-flex container">
              <div className="row">
                      <CountriesList allCountries={allCountries}/>

            </div>

    <Routes>
        <Route path={"/:paises"} element={<CountryDetails allCountries={allCountries}/>}/>
    </Routes>

        </div>
    </div>




    
     

    
  );
}

export default App;
