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

let editPost = (id, form) => {
    return fetch(`/posts/${id}`, {
        body: JSON.stringify(form),
        headers:{
            "Content-Type": "application/json"
        },
        method: 'PATCH'
    })
    .then((response) => {
        let json = response.json()
        return json
    })
}

let findPost = function(id) {
    return fetch(`/posts/${id}`)
    .then((resp) => {
        let json = resp.json()
        return json
    })
}

export {
    getPosts, createPost, editPost, findPost
}
=======
export {
    getPosts, createPost
}
>>>>>>> master
