import axiosInstance from "../axiosInstance";


export async function Post(url, admissionForm) {
    const response = await axiosInstance.post(url, admissionForm)
    return response?.data;
}

export async function Get(url) {
    const response = await axiosInstance.get(url);
    return response?.data?.data;
}

export async function GetById(url,id) {
    const response = await axiosInstance.get(url + `/${id}`);
    return response?.data?.data;
}

export async function GetByShortName(url,shortName) {
    const response = await axiosInstance.get(url + `?shortName=${shortName}`);
    return response?.data?.data;
}



