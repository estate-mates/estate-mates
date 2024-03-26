import { useEffect, useState } from "react";

export const useSetLocation = () => {
  const [location, setLocation] = useState<
    { lat: number; lon: number } | string
  >("");
  useEffect(()=> {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude,
          lon = position.coords.longitude;
          setLocation({ lat, lon });
        },
        function () {
          setLocation("Fail");
        }
        );
      } else {
        setLocation("Not Supported");
      }
    }, []);
  return location;
};
