json.username model.username
json.posts model.posts
json.avatar model.avatar
json.id model.id
json.array! @model.posts, partial: "posts/show", as: :model
