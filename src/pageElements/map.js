import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api"
import { useMemo } from "react"

export default function MapGoogle() {

  const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyA4Jo780GSXpzJWMUeDGTSYGgnM57GvzYg"})

  if (!isLoaded) return <div>Loading...</div>
  return <Map/>
}


function Map() {
  const center = useMemo(() => ({lat: 42.260740, lng: -79.285646}), [])

  return <GoogleMap zoom={10} center={center} mapContainerClassName="map">
    <MarkerF position={center}/>
  </GoogleMap>
}