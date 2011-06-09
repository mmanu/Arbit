class UsersController < ApplicationController

  before_filter :fetch_user

  def show
    render :nothing => true
  end

  def update
    @user.update_attributes(params[:user])
    redirect_to user_posts_path(@user)
  end

  def edit
    
  end


  private

  def fetch_user
    @user = User.find(params[:id])
  end
  
end
