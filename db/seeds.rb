# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@durationArr = [ 3, 4, 5, 6, 7, 8]
10.times do
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name, 
    phone_number: Faker::PhoneNumber.phone_number, 
    email: Faker::Internet.email, 
    password: Faker::Internet.password
    )
  5.times do
  trip = Trip.create(
    name: Faker::Dessert.variety,
    duration: @durationArr.sample
  )
  end
end 

p User.all
p Trip.all