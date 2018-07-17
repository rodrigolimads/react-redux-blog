class API < Grape::API
  prefix 'api'
  format :json

  mount Blog::Posts
  mount Blog::Comments
end
