import { instance } from "../axios";

export async function getMapList(params?: any) {
  return await instance().get(`map`, { params });
}