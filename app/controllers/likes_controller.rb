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

end
