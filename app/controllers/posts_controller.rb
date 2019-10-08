class PostsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :update, :destroy]

    def index
        @posts = Post.all
    end

    def create
        @post = current_user.posts.create post_params
        render json: @post, status:201
    end

    def show
        @post = Post.find(params[:id])
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update(post_params)
            # render json: @post
            render :show
        else
            render json: {error: 'could not update'}, status: 400
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    private
    def post_params
        params.require(:post).permit(:title, :description, :location, :image)
    end

end
