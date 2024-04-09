import { useQuery } from "@tanstack/react-query";
import {
  getApartmentList,
  getApartmentDetail,
} from "../../apis/map";

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

export const useApartmentDetailQuery = (params: { apartmentId: number }) => {
  const apartmentDetailQuery = useQuery({
    queryKey: ["apartmentDetail", params],
    queryFn: async () => await getApartmentDetail(params.apartmentId),
  });

  return { apartmentDetailQuery };
};
