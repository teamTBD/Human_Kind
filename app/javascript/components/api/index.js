let getPosts = function () {
    return fetch("/posts")
    .then(response => {
        return response.json()
    })
}

let createPost = function (attributes) {
    return fetch("/posts", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({post: attributes})
    })
    .then(resp=>{
        let json = resp.json()
        return json
    })
}

export {
    getPosts, createPost
}