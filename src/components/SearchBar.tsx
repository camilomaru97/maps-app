import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context"
import { SearchResult } from "./SearchResult"

export const SearchBar = () => {

    const { searchPlacesByQuery } = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChanged = (event:ChangeEvent<HTMLInputElement>) => {
       if(debounceRef.current){
            clearTimeout(debounceRef.current)
       }
       debounceRef.current = setTimeout(() => {
            searchPlacesByQuery(event.target.value)
       }, 1000)
    }

  return (
    <div className="search-container">
        <input 
            className="form-control"
            type="text"
            placeholder="Buscar Lugar..."
            onChange={onQueryChanged}
        />
        <SearchResult />
    </div>
  )
}