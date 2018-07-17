module Blog
  class Posts < Grape::API
    format :json

    resource :posts do
      desc 'List all posts'
      get :list do
        Post.all
      end

      desc 'Display a post by the given ID'
      params do
        requires :id, type: Integer, desc: 'Post id.'
      end
      route_param :id do
        get :show do
          Post.find(params[:id])
        end
      end

      desc 'Create a new post'
      params do
        requires :title, type: String, desc: 'Post title'
        requires :content, type: String, desc: 'Post content'
      end

      post do
        Post.create!(
          title: params[:title],
          content: params[:content]
        )
      end
    end
  end
end
