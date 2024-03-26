import { useEffect } from "react";
import { useSetLocation } from "../../hooks/useSetLocation";

function Map() {
  const location = useSetLocation();
  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    if (typeof location === "object" && "lat" in location && "lon" in location) {
      const locPosition = new kakao.maps.LatLng(location.lat, location.lon);
      map.setCenter(locPosition);
    } else {
      // 위치 정보를 가져오지 못했을 때 기본 위치를 설정합니다.
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
			map.setCenter(locPosition);
    }
  }, [location]);
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

export default Map;
