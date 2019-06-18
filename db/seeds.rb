20.times do
  User.create(
    name: Faker::Games::Zelda.character,
    nickname: Faker::Internet.username,
    image: Faker::Avatar.image,
    email: Faker::Internet.email,
    password: "password",
  )
end;

puts "20 Users Seeded";