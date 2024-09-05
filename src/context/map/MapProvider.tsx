import { useReducer } from "react"
import { Map, Marker, Popup } from "mapbox-gl"

import { MapContex } from "./MapContex"
import { mapReducer } from "./mapReducer"

export interface MapState {
    isMapReady: boolean,
    map?: Map,
	coordinates: [number, number] | []
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
	coordinates: []
}

interface Props {
	children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)

	const setMap = (map: Map) => {

		const myLocationPopup = new Popup()
			.setHTML(`
				<h4>Aqui estoy</h4>	
				<p>Por si me quieres buscar</p>
			`)

		new Marker()
			.setPopup(myLocationPopup)
			.setLngLat(map.getCenter())
			.addTo( map )
		
		dispatch({ type: 'setMap', payload: map})
	}

  return (
    <MapContex.Provider value={{
			...state,

			//Methods
			setMap
    }}>
			{children}
    </MapContex.Provider>
  )
}