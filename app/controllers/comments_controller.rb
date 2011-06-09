class CommentsController < ApplicationController

  before_filter :get_post

  def create
    @comment = @post.comments.new(params[:comment])
    @comment.save!
    redirect_to user_posts_path(@post.user, @post)
  end

  def index
    @comments = @post.comments
  end


  private

    def get_post
      @post = Post.find(params[:post_id])
    end


end
