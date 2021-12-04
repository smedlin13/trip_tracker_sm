class User < ApplicationRecord
  has_many :trips, dependent: :destroy

  validates :first_name, :last_name, :phone_number, :email, :password, presence: true
end
