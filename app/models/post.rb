class Post < ApplicationRecord
    belongs_to :user
    has_one_attached :image
    validates :title, :description,:location,:image, presence:true
end
