import axios from "axios";
// import store from "../store/store"; // Update the path as needed
// import { showLoader, hideLoader } from "../slices/uiSlice";
// import { setUserProfile } from "../slices/userSlice"; // Assuming you have a user slice
// import { setClasses } from "../slices/classSlice"; // Assuming you have a class slice

const BaseUrl = "https://gym-backend-zbsu.onrender.com"; // Replace with your actual base URL


export async function RegistrationRequest (email, password, full_name, confirmPassword, role)  {
    try {
        let url = `${BaseUrl}/api/registration`
      const res = await axios.post(url, {
          email,
          password,
          confirmPassword,
          full_name,
          role,
        },);
        if (res.status === 200) {
            return { ok: true, data: res.data }; // Return success response
          } else {
            return { ok: false, error: res.data || 'Registration failed' }; // Handle unexpected responses
          }
      
    } catch (err) {
      console.error('Axios error:', err);
      if (err.response) {
        // Backend responded with an error
        console.error('Backend response:', err.response.data);
        return err.response;
      } else {
        // Other errors (network, etc.)
        throw new Error('Unexpected error occurred');
      }
    }
  };


// Login API Request
export async function LoginRequest(email, password) {
  let url = `${BaseUrl}/api/login`;
  try {
    const response = await axios.post(url, { email, password });
    if (response.status === 200) {
      console.log(response.data);
        return true
      //   localStorage.setItem("token", response.data.token); // Example: Storing JWT
    }else {
        return { ok: false, error: response.data || 'Registration failed' }; // Handle unexpected responses
      }
  } catch (e) {
    console.log(e.toString());
    store.dispatch(hideLoader());
  }
}

export async function test(){
    try{
        let res = await axios.get(`${BaseUrl}/api`)
        if(res.status ===200){
            console.log(res)
            return res
        }
    }catch(er){
        console.log(er.toString)
    }
  }

// // Registration API Request


// // Fetch User Profile API Request
// export async function ProfileRequest() {
//   store.dispatch(showLoader());
//   let url = `${BaseUrl}/api/profile`;
//   try {
//     const token = localStorage.getItem("token"); // Retrieve token
//     const res = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (res.status === 200) {
//       store.dispatch(hideLoader());
//       console.log(res.data);
//       store.dispatch(setUserProfile(res.data)); // Dispatch to set profile in state
//     }
//   } catch (e) {
//     console.log(e.toString());
//     store.dispatch(hideLoader());
//   }
// }

// // Fetch Classes API Request
// export async function FetchClassesRequest() {
//   store.dispatch(showLoader());
//   let url = `${BaseUrl}/api/classes`;
//   try {
//     const token = localStorage.getItem("token"); // Retrieve token
//     const res = await axios.get(url, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (res.status === 200) {
//       store.dispatch(hideLoader());
//       console.log(res.data);
//       store.dispatch(setClasses(res.data.classes)); // Dispatch to set classes in state
//     }
//   } catch (e) {
//     console.log(e.toString());
//     store.dispatch(hideLoader());
//   }
// }
