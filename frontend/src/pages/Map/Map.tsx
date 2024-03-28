import { useEffect, useState } from "react";
import { useSetLocation } from "../../hooks/useSetLocation";
import { initializeMap, searchAndAddMarker } from "../../utils/mapUtils";
import { useMapListQuery } from "../../hooks/queries/useMapListQuery";

function Map() {
  const location = useSetLocation();
  const [_centerAddress, setCenterAddress] = useState("");
  const { data, isLoading } = useMapListQuery({ sggNm: "중구" }).mapListQuery;
  useEffect(() => {
    if (!isLoading && data) {
      const container = document.getElementById("map") as HTMLElement;
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
        level: 4,
      };
      const map = new kakao.maps.Map(container, options);
      initializeMap(map, location, setCenterAddress);
      if (Array.isArray(data.data)) {
        data.data.forEach((item) => {
          const address = `${item.sggNm} ${item.bjdongNm} ${item.bldgNm}`;
          return searchAndAddMarker(map, address);
        });
      } else {
        console.error("데이터 없음");
      }
    }
  }, [isLoading, data, location]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      {/* <div className="hAddr" style={{ position: "fixed", top: 0, zIndex: 10 }}>
        <span id="centerAddr"></span>
      </div> */}
    </div>
  );
}

export default Map;
