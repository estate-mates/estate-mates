import { useQuery } from "@tanstack/react-query";
import { getMapList } from "../../apis/map";

export const useMapListQuery = (params: { dong: string }) => {
  const mapListQuery = useQuery({
    queryKey: ["mapList", params],
    queryFn: async () => await getMapList(params.dong),
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
