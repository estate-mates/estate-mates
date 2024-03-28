export const initializeMap = (
  map: kakao.maps.Map,
  location: { lat: number; lng: number },
  setCenterAddress: React.Dispatch<React.SetStateAction<string>>
) => {
  const locPosition = new kakao.maps.LatLng(location.lat, location.lng);
  map.setCenter(locPosition);
  const geocoder = new kakao.maps.services.Geocoder();
  searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);

  kakao.maps.event.addListener(map, "idle", function () {
    searchDetailAddrFromCoords(map.getCenter(), displayCenterInfo);
  });

  function searchDetailAddrFromCoords(
    coords: kakao.maps.LatLng,
    callback: (result: ILocation[], status: kakao.maps.services.Status) => void
  ) {
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  function displayCenterInfo(
    result: ILocation[],
    status: kakao.maps.services.Status
  ) {
    if (status === kakao.maps.services.Status.OK) {
      // const infoDiv = document.getElementById("centerAddr") as HTMLElement;
      // infoDiv.innerHTML = result[0].address.address_name;
      setCenterAddress(result[0].address.address_name.split(" ")[1]);
    }
  }
};

export const searchAndAddMarker = (map: kakao.maps.Map, address: string) => {
  const places = new kakao.maps.services.Places();
  const clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 0,
  });
  places.keywordSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const place = result[0];
      const coords = new kakao.maps.LatLng(
        parseFloat(place.y),
        parseFloat(place.x)
      );

      const marker = new kakao.maps.Marker({
        position: coords,
      });
      // marker.setMap(map);
      clusterer.addMarker(marker);
      kakao.maps.event.addListener(marker, "click", function () {
        const infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>",
        });
        infowindow.open(map, marker);
      });
    } else {
      console.error("주소 검색 실패:", status);
    }
  });
};
