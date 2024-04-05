import { IApartmentResponse, IMapResponse } from "../../types/apis/apis";
import { instance } from "../axios";

export const getMapList = async (name?: string) => {
  return await instance().get<IMapResponse>(`deal/${name}`);
};

export const getApartmentList = async ([
  swLat,
  swLng,
  neLat,
  neLng,
]: number[]) => {
  return await instance().get<IApartmentResponse[]>(`apartments`, {
    params: {
      southWestLatitude: swLat,
      southWestLongitude: swLng,
      northEastLatitude: neLat,
      northEastLongitude: neLng,
    },
  });
};
