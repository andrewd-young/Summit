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
  try{
        const response = await axios.post("/onboarding/initUser", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            income: income,
            totalDebt: debt,
            location: location
        });
        return response;
      } catch (err) {
    return err;
  }
}

export const login = async (email) => {
  const response = await axios.post("/onboarding/login", {
    email,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  });
  try{
    const response = await axios.post("/onboarding/login", {
      email,
    })
    return response;
  } catch (err) {
return err;
}

}