
const baseURL = `https://hostel-cleaner-backend.onrender.com`;

// const baseURL = `http://localhost:8080`;

export const register  = async (body) => {
    const res = await fetch(`${baseURL}/auth/register`, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}

export const login  = async (body) => {
    const res = await fetch(`${baseURL}/auth/login`, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}





export const sendRequest = async (body) => {
    
    const res = await fetch(`${baseURL}/user/sendRequest`, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}

export const requestComplete = async (body) => {
    const res = await fetch(`${baseURL}/admin/requestComplete`, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}


export const sendFeedback = async (body) => {
    const res = await fetch(`${baseURL}/user/sendFeedback`,  {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}


export const allotCleaner = async (body) => {
    const res = await fetch(`${baseURL}/user/allotCleaner`, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(body),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}

export const getProfileData = async () => {

    const token = (JSON.parse(localStorage.getItem('token')))['token']

    const res = await fetch(`${baseURL}/user/getProfileData`, {

        // Adding headers to the request
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    console.log(data);


    // const res = await axios.post(`${baseURL}/auth/login`, formData);
    // const data = res.data;
    return data;
}
