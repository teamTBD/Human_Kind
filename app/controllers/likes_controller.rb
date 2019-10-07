class LikesController < ApplicationController
    
    before_action :authenticate_user!
    def create
       like= current_user.likes.create like_params
       if like.valid?
           render json: like, status: 201
       else
           render json: {error: "Could not Like"}, status: 403
       end
    end
    
    def like_params
        params.require(:like).permit(:post_id)
    end

    def find
        like= current_user.likes.where(post_id: params[:post_id]).first
        if like
            render json: like
        else
            head :no_content, status: 404
        end
    end
    
end
