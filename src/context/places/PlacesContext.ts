//Esto es lo que expone a los otros componentes
import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContextProps {
    isLoading: boolean,
    userLocation?: [number, number],
    isLoadingPlaces: boolean 
    places: Feature[]

    //Methods
    searchPlacesByQuery: (query: string) => Promise<Feature[]>
}

export const PlacesContext = createContext({} as PlacesContextProps)
