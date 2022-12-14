import instance from "./axios";

export const getTopThree = async() => {
    const response = await instance.get('/mentor/top3');
    return response;
}