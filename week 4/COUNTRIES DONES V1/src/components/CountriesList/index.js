import { Link } from "react-router-dom"


export function CountriesList({allCountries}) {
    
    return (
        allCountries.map((country) => {
            return (
                <div className="container">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`} />
                <p key={country.name.common}><Link to={`/${country.name.common}`}>{country.name.official}</Link></p>
                </div>
            )
        })
    )
}