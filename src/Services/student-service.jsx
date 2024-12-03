import axiosInstance from "../axiosInstance";

export async function Post(url, formData) {
  const response = await axiosInstance.post(url, formData);
  return response?.data;
}

export async function Get(url) {
  const response = await axiosInstance.get(url);
  return response?.data?.data;
}

export async function GetAllWithPagination(
  url,
  param1,
  value1,
  param2,
  value2,
  param3,
  value3,
  pageNo,
  pageSize
) {
  url =
    url +
    `?${param1}=${value1}&${param2}=${value2}&${param3}=${value3}&PageNo=${pageNo}&PageSize=${pageSize}`;
  const response = await axiosInstance.get(url);
  return response?.data?.data;
}

export async function GetById(url, id) {
  const response = await axiosInstance.get(url + `/${id}`);
  return response?.data?.data;
}

export async function GetByQueryId(url, id) {
  const response = await axiosInstance.get(url + `?id=${id}`);
  return response?.data?.data;
}

export async function GetByShortName(url, shortName) {
  const response = await axiosInstance.get(url + `?shortName=${shortName}`);
  return response?.data?.data;
}

export async function Delete(url, uid) {
  const response = await axiosInstance.post(url + `?id=${uid}`, null);
  return response?.data;
}
