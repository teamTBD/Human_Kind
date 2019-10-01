class PostsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]

    def index
        posts = Post.all
        render json: posts
    end

    def create
        post = current_user.posts.create post_params
        render json: post, status:201
    end



    private
    def post_params
        params.require(:post).permit(:title, :description, :location)
    end 

end
