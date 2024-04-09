import { IApartmentResponse } from "../types/apis/apis";

export const initializeMap = (
  map: kakao.maps.Map,
  setCenterAddress: React.Dispatch<React.SetStateAction<string>>,
  setBounds: React.Dispatch<
    React.SetStateAction<{
      swLat: number;
      swLng: number;
      neLat: number;
      neLng: number;
    }>
  >
) => {
  const geocoder = new kakao.maps.services.Geocoder();
  const searchDetailAddrFromCoords = (
    coords: kakao.maps.LatLng,
    callback: (result: ILocation[], status: kakao.maps.services.Status) => void
  ) => {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };
  const displayCenterInfo = (
    result: ILocation[],
    status: kakao.maps.services.Status
  ) => {
    if (status === kakao.maps.services.Status.OK) {
      const infoDiv = document.getElementById("centerAddr") as HTMLElement;
      infoDiv.innerHTML = result[0].address.address_name;
      setCenterAddress(result[0].address.address_name.split(" ")[2]);
      setBounds({
        swLat: map.getBounds().getSouthWest().getLat(),
        swLng: map.getBounds().getSouthWest().getLng(),
        neLat: map.getBounds().getNorthEast().getLat(),
        neLng: map.getBounds().getNorthEast().getLng(),
      });
    }
  };
  searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);
  kakao.maps.event.addListener(map, "idle", () => {
    searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);
  });
};

export const AddMarker = (
  _map: kakao.maps.Map | null,
  item: IApartmentResponse,
  clusterer: kakao.maps.MarkerClusterer,
  setApartmentId: React.Dispatch<React.SetStateAction<number>>,
) => {
  const markerPosition = new kakao.maps.LatLng(item.latitude, item.longitude);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  clusterer.addMarker(marker);
  kakao.maps.event.addListener(marker, "click", () => {
    setApartmentId(item.apartmentId);
  });
};

export const Removemarker = (
  _map: kakao.maps.Map,
  markers: kakao.maps.Marker[],
  clusterer: kakao.maps.MarkerClusterer
) => {
  if (markers.length === 0 || clusterer === undefined) return;
  markers.forEach((marker) => marker.setMap(null));
  clusterer.clear();
};
