json.id model.id
json.title model.title
json.location model.location
json.description model.description
json.latitude model.latitude
json.longitude model.longitude
json.user_id model.user_id
json.username model.user.username
json.image_url url_for(model.image) if model.image.attached?
json.likes model.likes.count
