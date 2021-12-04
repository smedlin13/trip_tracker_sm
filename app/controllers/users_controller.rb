class UsersController < ApplicationController
    def index
      @users = User.all 
      render component: 'Users', props:{ users: @users }
    end
  
    def show
      @user = User.find(params[:id])
      render component: 'User', props: { user: @user }
    end
  
    def new
      @user = User.new
      render component: 'UserNew', props: { user: @user }
    end
  
    def edit
      @user = User.find(params[:id])
      render component: 'UserEdit', props: { user: @user }
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to users_path
      else 
        render component: 'UserNew', props: { user: @user }
      end
    end
    
    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        redirect_to users_path
      else  
        render component: 'UserEdit', props: { user: @user }
      end
    end
  
    def destroy
      @user = User.find(params[:id])
      @user.destroy(params[:id]).destroy
      redirect_to root_path
    end
  
    private
      def user_params
        params.require(:users).permit(:first_name, :last_name, :email, :password, :phone_number)
      end
    
end
