class UsersController < ApplicationController
    before_action :authenticate_user!, only: [:show, :update]

    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            # render json: @user
            render :show
        else
            render json: {error: 'could not update'}, status: 400
        end
    end

    private
    def user_params
        params.require(:user).permit(:avatar, :bio)
    end

end
