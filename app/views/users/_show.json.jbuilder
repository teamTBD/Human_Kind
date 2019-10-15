json.username model.username
json.posts model.posts
json.avatar url_for(model.avatar) if model.avatar.attached?
json.id model.id
json.bio model.bio
json.posts model.posts do |post|
    json.id post.id
    json.title post.title
    json.location post.location
    json.description post.description
    json.latitude post.latitude
    json.longitude post.longitude
    json.user_id post.user_id
    json.username post.user.username
    json.image_url url_for(post.image) if post.image.attached?
    json.likes post.likes.count
end
    # json, partial: "posts/show", as: :model
