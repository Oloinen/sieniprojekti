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
