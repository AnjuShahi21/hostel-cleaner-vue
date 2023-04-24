const baseURL = process.env.VUE_APP_BACKEND_URL

export const register  = async (body) => {
    const res = await fetch(`${baseURL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    const data = await res.json();
    return data;
}

export const login  = async (body) => {
    const res = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const data = await res.json();
    return data;
}


export const sendRequest = async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/user/sendRequest`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token,
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    return res;
}

export const requestComplete = async (body) => {
    const res = await fetch(`${baseURL}/admin/requestComplete`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const data = await res.json();
    return data;
}


export const sendFeedback = async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/user/sendFeedback`,  {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token,
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}

export const addNewCleaner = async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/addNewCleaner`,  {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token,
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    return res;
}


export const allotCleaner = async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/allotCleaner`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token,
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}

export const getDashboard = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/user/getDashboard`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    const data = await res.json();
    return data;
}

export const getUserWiseApprovedCleaner = async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/user/getUserWiseApprovedCleaner`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}

export const getSuggestion = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getSuggestion`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
   return data;
}

export const getPendingRequests = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getPendingRequests`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    const data = await res.json();
    return data;
}

export const getFreeCleaners = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getFreeCleaners`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}

export const getComplaint = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getComplaint`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}

export const getRequest= async (body) => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getRequests`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const data = await res.json();
    return data;
}

export const getRequests= async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/admin/getRequests`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })

    const data = await res.json();
    return data;
}


export const getProfileData = async () => {
    const token = (JSON.parse(localStorage.getItem('token')))['token']
    const res = await fetch(`${baseURL}/user/getProfileData`, {
        headers: {
            'Authorization': 'Bearer '+ token, 
            "Content-type": "application/json; charset=UTF-8"
        }
       
    })
    const data = await res.json();
    return data;
}
