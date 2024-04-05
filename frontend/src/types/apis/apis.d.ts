import { IApartment } from "../map/map";

export interface IMapResponse {
  id: number | null;
  accYear: number | null;
  sggCd: number | null;
  sggNm: string | null;
  bjdongCd: number | null;
  bjdongNm: string | null;
  landGbn: number | null;
  landGbnNm: string | null;
  bonbeon: string | null;
  bubeon: string | null;
  bldgNm: string | null;
  dealYmd: string | null;
  objAmt: number | null;
  bldgArea: number | null;
  totArea: number | null;
  floor: number | null;
  rightGbn: string | null;
  cntlYmd: string | null;
  buildYear: number | null;
  houseType: string | null;
  reqGbn: string | null;
  rdealerLawdnm: string | null;
}

export interface IApartmentResponse {
  apartmentId: number;
  name: string;
  latitude: number;
  longitude: number;
}
