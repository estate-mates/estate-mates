import { IApartmentResponse } from "../../types/apis/apis";
import { instance } from "../axios";

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

export const getApartmentDetail = async (name?: number) => {
  return await instance().get<any>(`deal/${name}`);
};