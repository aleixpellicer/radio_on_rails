# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


test_user = User.create(created_at: "2014-11-24 12:45:03", password: "12345678", updated_at: "2014-11-24 13:09:08", email: "aleixpellicer@hotmail.com", encrypted_password: "$2a$10$0mp3zkAJkPozD0Aj4SnkwOtdCCko9D6rKZRCtxf1VQXo6IqekyU42", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 6, current_sign_in_at: "2014-11-24 13:09:08", last_sign_in_at: "2014-11-24 13:07:50", current_sign_in_ip: "10.0.2.2", last_sign_in_ip: "10.0.2.2", confirmation_token: nil, confirmed_at: "2014-11-24 12:45:46", confirmation_sent_at: "2014-11-24 12:45:03", unconfirmed_email: nil, failed_attempts: 0, unlock_token: nil, locked_at: nil)

general_channel = Channel.create(name: "General", image:"general.jpg", user_id: test_user.id)
rock_channel = Channel.create(name: "Rock", image:"rock.jpg", user_id: test_user.id)
pop_channel = Channel.create(name: "Pop", image:"pop.jpg", user_id: test_user.id)
jazz_channel = Channel.create(name: "Jazz", image:"jazz.jpg", user_id: test_user.id)
ska_channel = Channel.create(name: "Ska", image:"ska.jpg", user_id: test_user.id)
bachata_channel = Channel.create(name: "Bachata", image:"bachata.jpg", user_id: test_user.id)