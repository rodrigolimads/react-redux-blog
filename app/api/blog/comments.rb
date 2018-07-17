module Blog
  class Comments < Grape::API
    format :json

    resource :comments do
      desc 'Display the comments filtered by the post ID'
      params do
        requires :post_id, type: Integer, desc: 'Post id.'
      end

      get :comments_by_post do
        Comment.where(post_id: params[:post_id])
      end

      desc 'Display a list of comments'
      get :list do
        Comment.all
      end

      desc 'Create a comment'
      params do
        requires :post_id, type: Integer
        requires :title, type: String
        requires :body, type: String
      end

      route_param :post_id do
        post :create do
          post = Post.find_by(id: params[:post_id])

          return error!({ message: 'Post not find' }, 404) unless post.present?

          post.comments.create!(
            title: params[:title],
            body: params[:body]
          )
        end
      end
    end
  end
end
