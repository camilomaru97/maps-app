import { useContext } from "react"
import { MapContex, PlacesContext } from "../context"

export const BtnMyLocation = () => {

	const { map, isMapReady } = useContext(MapContex)
	const { userLocation } = useContext(PlacesContext)

  const onClick = () => {
		if(!isMapReady) throw new Error('El mapa no esta listo')
		if(!userLocation) throw new Error('El hay ubicacion del usuario')

			map?.flyTo({
				zoom: 14,
				center: userLocation
			})

	}

  return (
    <button
        className="btn btn-primary"
				onClick={onClick}
        style={{
            position: "fixed",
            top: '20px',
            right: '20px',
            zIndex: 999
        }}
    >   
        Mi Ubicacion
    </button>
  )
}