import { BaseUrl } from "./Baseurl";
import Cookies from "js-cookie";

export const Searchroom = async (branchid, checkindate, checkoutdate) => {
  try {
    const params = new URLSearchParams();
    if (branchid) params.append("branchid", branchid);
    if (checkindate) params.append("checkindate", checkindate);
    if (checkoutdate) params.append("checkoutdate", checkoutdate);

    let result = await fetch(
      `${BaseUrl}/Room/search/room?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const Getroombyid = async (id) => {
  try {
    let result = await fetch(`${BaseUrl}/Room/get/room/${id}`, {
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

export const Bookroom = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}}/booking/room/pay`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
