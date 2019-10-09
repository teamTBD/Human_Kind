require 'rails_helper'


RSpec.describe Post, type: :model do
  it "must have a title" do
    post= Post.create
    expect(post.errors[:title]).to_not be_empty
  end 
  it "must have a description" do
    post= Post.create
    expect(post.errors[:description]).to_not be_empty
  end 
  it "must have a location" do
    post= Post.create
    expect(post.errors[:location]).to_not be_empty
  end 
  it "must have an image" do
    post= Post.create
    expect(post.errors[:image]).to_not be_empty
  end 
end 

  



