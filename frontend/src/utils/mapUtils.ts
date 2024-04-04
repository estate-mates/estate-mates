export const initializeMap = (
  map: kakao.maps.Map,
  setCenterAddress: React.Dispatch<React.SetStateAction<string>>
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
    }
  };
  searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);
  kakao.maps.event.addListener(map, "idle", () => {
    searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);
  });
};

export const AddMarker = (
  _map: kakao.maps.Map | null,
  lat: number,
  lng: number,
  clusterer: kakao.maps.MarkerClusterer
) => {
  const markerPosition = new kakao.maps.LatLng(lat, lng);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  // marker.setMap(map);
  // markers.push(marker);
  clusterer.addMarker(marker);
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
