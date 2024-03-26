import { useEffect } from "react";

function Map() {
  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);
  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}

export default Map;
