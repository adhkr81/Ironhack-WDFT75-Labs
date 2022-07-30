import { useParams } from "react-router-dom"



export function CountryDetails ({allCountries}) {

const { paises } = useParams()


console.log(useParams())
console.log(paises)


return(

    allCountries.filter((current) => {

        return current.name.common === paises
            
    }).map((current) => {
        return(
            <div key={current.area} className={"container"}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${(current.alpha2Code).toLowerCase()}.png`} />
                <div><strong>CAPITAL: </strong>{current.capital}</div>
                <div><strong>AREA: </strong>{current.area}</div>
            </div>
        )
    })



    )    
}