import { useEffect, useState } from "react";
import { AddMarker, initializeMap } from "../../utils/mapUtils";
import { useSetLocation } from "../../hooks/useSetLocation";
import {
  useApartmentDetailQuery,
  useApartmentListQuery,
} from "../../hooks/queries/useMapListQuery";

const Map = () => {
  const location = useSetLocation();
  const [_centerAddress, setCenterAddress] = useState("호원동");
  const [bounds, setBounds] = useState({
    swLat: 37.7109974,
    swLng: 127.0441301,
    neLat: 37.7309746,
    neLng: 127.0614465,
  });
  const [apartmentId, setApartmentId] = useState(0);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [clusterer, setClusterer] = useState<kakao.maps.MarkerClusterer | null>(
    null
  );
  const { data } = useApartmentListQuery({
    southWestLatitude: bounds.swLat,
    southWestLongitude: bounds.swLng,
    northEastLatitude: bounds.neLat,
    northEastLongitude: bounds.neLng,
  }).apartmentListQuery;
  const Detaildata = useApartmentDetailQuery({
    apartmentId: apartmentId,
  }).apartmentDetailQuery;
  console.log(Detaildata.data?.data);
  console.log(apartmentId);
  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.lng),
      level: 4,
      maxlevel: 6,
    };
    const newMap = new window.kakao.maps.Map(container, options);
    setMap(newMap);
    initializeMap(newMap, setCenterAddress, setBounds);
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
    data.data.forEach((item) => {
      AddMarker(map, item, clusterer, setApartmentId);
    });
  }, [clusterer, data]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
      <div className="hAddr" style={{ position: "fixed", top: 0, zIndex: 10 }}>
        <span id="centerAddr"></span>
      </div>
      {apartmentId && (
        <div
          id="apartmentDetail"
          style={{ position: "fixed", top: 50, zIndex: 100 }}
        >
          {Detaildata.data?.data.map((apartment: any) => (
            <div>
              <span>연: {apartment.dealYear}, </span>
              <span>월: {apartment.dealMonth}, </span>
              <span>일: {apartment.dealDay}, </span>
              <span>전용면적(㎡): {apartment.area}, </span>
              <span>거래금액(만원): {apartment.dealAmount}</span>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Map;
