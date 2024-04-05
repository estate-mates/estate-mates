import { useEffect, useState } from "react";

export const useSetLocation = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude,
            lng = position.coords.longitude;
          setLocation({ lat, lng });
        },
        () => {
          setLocation({ lat: 37.566826, lng: 126.9786567 });
        }
      );
    } else {
      setLocation({ lat: 37.566826, lng: 126.9786567 });
    }
  }, []);
  return location;
};
