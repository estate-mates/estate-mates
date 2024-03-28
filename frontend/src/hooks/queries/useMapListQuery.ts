import { useQuery } from "@tanstack/react-query";
import { getMapList } from "../../apis/map";

export const useMapListQuery = (params: { sggNm: string }) => {
  const mapListQuery = useQuery({
    queryKey: ["mapList", params],
    queryFn: async () => await getMapList(params.sggNm),
  });

  return { mapListQuery };
};

export const useTestQuery = () => {
  const TestQuery = useQuery({
    queryKey: ["test"],
    queryFn: async () => await getMapList(),
  });

  return { TestQuery };
};