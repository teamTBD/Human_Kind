# describe "User" do
#   it "has many posts" do
#     expect{User.posts}.to be >= 0
#   end
# end 
require 'devise'

describe "User" do
    it "can be a new user" do
    user= User.new
    user.first_name="string"
    user.last_name="string"
    user.email="string"
    user.username="string"
    end
    it "cannot use the same email multiple times" do
    user=User.new
    user2=User.new
    user.email = 'dan@dan.com'
    user2.email = 'dan@dan.com'
    expect(user2).not_to be_valid
    end
     it "cannot use the same username multiple times" do
    user=User.new
    user2=User.new
    user.username = 'dan@dan.com'
    user2.username = 'dan@dan.com'
    expect(user2).not_to be_valid
    end
end

