import { BaseUrl } from "./Baseurl";
import Cookies from "js-cookie";

export const GetAllhotels = async (id) => {
  try {
    let result = await fetch(`${BaseUrl}/Branch/getall/branch`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};


export const Gethotelbyid = async (id) => {
  try {
    let result = await fetch(`${BaseUrl}/Branch/get/branch/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};






