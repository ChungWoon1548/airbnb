import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const MapContainer = styled.div`
  height: 45vh;
  width: 100%;
  margin: auto;
  cursor: url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur), default;
`;

export default function Map() {
  const location = useLocation();
  const { coordinates } = location.state;

  useEffect(() => {
    if (coordinates) {
      const { X, Y } = coordinates;
    }
  }, [coordinates]);

  return (
    <MapContainer>
      <gmp-map
        center={`${coordinates.Y},${coordinates.X}`}
        zoom="15"
        map-id="DEMO_MAP_ID"
      >
        <gmp-advanced-marker
          position={`${coordinates.Y},${coordinates.X}`}
          title="My location"
        />
      </gmp-map>
    </MapContainer>
  );
}
