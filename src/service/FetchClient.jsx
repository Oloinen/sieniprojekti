export const fetchMainData =()=> {
    return fetch("/api/sienet")
    .then(res => res.json())
  };

export const createMushroom =(data) => {
    return fetch("/api/sienet", {
        method: "POST",
        headers: {
        "Accept": "application/json", "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const putMushroom =(id, data) => {
    return fetch("/api/sienet/"+id, {
        method: "PUT",
        headers: {
        "Accept": "application/json", "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const deleteMushroom = (id) => {
    return fetch("/api/sienet/"+id, {
        method: 'DELETE'
    })
}

export const showMushroom = (id) => {
    return fetch ("/api/sienet/"+id)
    .then(res => res.json())
}