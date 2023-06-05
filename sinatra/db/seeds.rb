# puts "🌱 Seeding messages..."

# Message.create([
#   {
#     body: "Hello 👋",
#     username: "Liza"
#   },
#   {
#     body: "Hi!",
#     username: "Duane"
#   }

# ])

# puts "✅ Done seeding!"




# baked_good_names = ["Croissant", "Rhubarb Pie", "Black and White Cookie", "Scone", "Banana Bread"]
# Bakery.create(name: "Northside")
# Bakery.create(name: "Southside")
# Bakery.create(name: "Eastside")
# Bakery.create(name: "Westside")
# Bakery.all.each do |bakery|
#   3.times do
#     BakedGood.create(name: baked_good_names.sample, price: rand(1..5), bakery_id: bakery.id)
#   end
# end

puts "🌱 Seeding messages..."

poem_title = ["Poem of TMs", "Poem of Senior TMs", "Poem of Students", "Poem of Students", "Poem of Students"]
poem_content = ["I liked this", "I missed this", "I enjoyed this", "This were trials", "And I aced them", "No matter what", "Juma said", "I am a champion", "Forever", "And Ever"]

Author.create(name: "Kevin")
Author.create(name: "Beatrice")
Author.create(name: "Juma")
Author.create(name: "Kush")

Author.all.each do |author|
  3.times do
    Poem.create(title: poem_title.sample, author_id: author.id, content: poem_content.sample)
  end
end

puts "✅ Done seeding!"