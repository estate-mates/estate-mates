import { useEffect, useState } from "react";
import { AddMarker, initializeMap } from "../../utils/mapUtils";
import { useSetLocation } from "../../hooks/useSetLocation";
import { useMapListQuery } from "../../hooks/queries/useMapListQuery";

function Map() {
  const location = useSetLocation();
  const [centerAddress, setCenterAddress] = useState("호원동");
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [clusterer, setClusterer] = useState<kakao.maps.MarkerClusterer | null>(
    null
  );
  const { data } = useMapListQuery({
    dong: centerAddress,
  }).mapListQuery;
  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 4,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
    initializeMap(newMap, setCenterAddress);
    return () => {
      setMap(null);
    };
  }, [location]);
  useEffect(() => {
    if (!map) return;
    const newClusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
    });
    setClusterer(newClusterer);
  }, [map]);
  useEffect(() => {
    if (!clusterer || !data) return;
    clusterer.clear();
    data.data.forEach((item: any) => {
      AddMarker(map, item.latitude, item.longitude, clusterer);
    });
  }, [clusterer, data]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      <div className="hAddr" style={{ position: "fixed", top: 0, zIndex: 10 }}>
        <span id="centerAddr"></span>
      </div>
    </div>
  );
}

export default Map;
