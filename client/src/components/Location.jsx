/* eslint-disable no-unused-vars */
import React from "react";
import { Circle, CircleMarker, FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Location() {
    const center = [40.684934, -80.065723]
    const blueOptions = { color: '#83a8fc'}
    const dblueOptions = { color: '#1b3980'}
    const fillClear = { fillColor: '#83a8fc' }
    return (
        <MapContainer center={center} zoom={10} style={{ height: "400px", width: "75%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayersControl position="topright">
                <LayersControl.Overlay checked name="No travel fee">
                    <LayerGroup>
                        <Circle center={center} pathOptions={blueOptions} radius={17000}>
                            <Popup>No travel fee</Popup>
                        </Circle>
                    </LayerGroup>
                </LayersControl.Overlay>
                    <LayersControl.Overlay name="Travel fee">
                        <LayerGroup>
                            <Circle center={center} pathOptions={dblueOptions} radius={28000}>
                                <Popup>
                                    $10 travel fee
                                </Popup>
                            </Circle>
                        </LayerGroup>
                    </LayersControl.Overlay>
                
                </LayersControl>
            <Marker position={center}>
                <Popup>
                    BBronze Location Area
                </Popup>
            </Marker>
        </MapContainer>
    );
}
