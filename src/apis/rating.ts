import instance from "./axios";

export interface RatingType {
  rating: number;
}

export const rating = async (id: string, rate: RatingType) => {
  const response = await instance.post(`/rating/${id}`, rate);
  return response;
};
