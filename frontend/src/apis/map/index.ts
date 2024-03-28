import { IMapResponse } from "../../types/apis/apis";
import { instance } from "../axios";

export async function getMapList(name?: string) {
  return await instance().get<IMapResponse>(`deal`, { params: { sggNm: name } });
}

export async function getTest() {
  return await instance().get(`deal/test`);
}