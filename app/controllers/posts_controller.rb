class PostsController < ApplicationController

  before_filter :fetch_user

  def index
    @posts = @user.posts
  end

  def new
    @post = @user.posts.build
  end

  def edit
    @post = @user.posts.find(params[:id])
  end

  def show
    @post = @user.posts.find(params[:id])
  end

  def create
    @post = @user.posts.new(params[:post])
    @post.save
    redirect_to user_posts_path
  end

  def destroy
    @post = @user.posts.find(params[:id])
    @post.destroy
    redirect_to user_posts_path
  end

  def update
    @post = @user.posts.find(params[:id])
    @post.update_attributes(params[:post])
    redirect_to user_posts_path
  end
  
  private

  def fetch_user
    @user = User.find(params[:user_id])
  end
  
end
