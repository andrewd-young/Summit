import axios from "axios";


export const testRun = async () => {

  try {
    const response = await axios.get("/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const initUser = async (firstName, lastName, email, income, debt, location) => {
    try {
        const response = await axios.post("/onboarding/initUser", {
        firstName,
        lastName,
        email,
        income,
        debt,
        location
        });
        return response.data;
    } catch (error) {
        return response.error;
    }
}

export const login = async (email) => {
    try {
        const response = await axios.post("/onboarding/login", {
        email,
        });
        return response;
    } catch (error) {
        return response;
    }
}