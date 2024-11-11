import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_STUDENT_BASE_URL,
});

// For Request

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("Token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data?.statusCode == 201) {
      toast.success("Record Saved Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (response.data?.statusCode == 400) {
      toast.error(
        "The request could not be understood or was missing required parameters.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } else if (response.data?.statusCode == 401) {
      toast.error("Your Session is Expired Login Again..!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      localStorage.clear();
      window.location.reload();
    } else if (response.data?.statusCode == 500) {
      toast.error("Internal Server Error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if(response?.data?.statusCode == 200){
      return response;
    } else {
      toast.error("Internal Server Error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

     // Ensure the response is returned to the calling function
     return response;
  },(err) => {
    if (err.status == 401) {
        toast.error("Your Session is Expired Login Again..!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          localStorage.clear();
          window.location.reload();
    } else {
        toast.error("Something went wrong plz try again after sometime.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    }
  }
);


export default axiosInstance;