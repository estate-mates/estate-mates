import { useQuery } from "@tanstack/react-query";
import { getMapList, getApartmentList } from "../../apis/map";

export const useMapListQuery = (params: { dong: string }) => {
  const mapListQuery = useQuery({
    queryKey: ["mapList", params],
    queryFn: async () => await getMapList(params.dong),
  });

  return { mapListQuery };
};

export const useApartmentListQuery = (params: {
  southWestLatitude: number;
  southWestLongitude: number;
  northEastLatitude: number;
  northEastLongitude: number;
}) => {
  const apartmentListQuery = useQuery({
    queryKey: ["apartmentList", params],
    queryFn: async () =>
      await getApartmentList([
        params.southWestLatitude,
        params.southWestLongitude,
        params.northEastLatitude,
        params.northEastLongitude,
      ]),
  });

  return { apartmentListQuery };
};
