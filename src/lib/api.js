import axios from "axios";


export const testRun = async () => {

  try {
    const response = await axios.get("/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const initUser = async (firstName, lastName, email) => {
    try {
        const response = await axios.post("/users", {
        firstName,
        lastName,
        email,
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
