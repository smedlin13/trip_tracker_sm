class User < ApplicationRecord

  validates :first_name, :last_name, :phone_number, :email, :password, presence: true
end
