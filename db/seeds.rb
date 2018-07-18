3.times do |idx|
  Post.create(title: "Nice post title #{idx}", content: "Awesome content for a one post #{idx}")
end

2.times do |idx|
  Post.all.each do |post|
    post.comments.create(title: "Your post sucks #{idx}", body: "OMG, my eyes is bleeding")
  end
end
