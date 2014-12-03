# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


test_user = User.create(created_at: "2014-11-24 12:45:03", password: "12345678", updated_at: "2014-11-24 13:09:08", email: "tebbxtreme@hotmail.com", encrypted_password: "$2a$10$0mp3zkAJkPozD0Aj4SnkwOtdCCko9D6rKZRCtxf1VQXo6IqekyU42", reset_password_token: nil, reset_password_sent_at: nil, remember_created_at: nil, sign_in_count: 6, current_sign_in_at: "2014-11-24 13:09:08", last_sign_in_at: "2014-11-24 13:07:50", current_sign_in_ip: "10.0.2.2", last_sign_in_ip: "10.0.2.2", confirmation_token: nil, confirmed_at: "2014-11-24 12:45:46", confirmation_sent_at: "2014-11-24 12:45:03", unconfirmed_email: nil, failed_attempts: 0, unlock_token: nil, locked_at: nil, provider: "facebook", uid: "10205339582515401")

general_channel = Channel.create(name: "General", user_id: test_user.id)
rock_channel = Channel.create(name: "Rock", user_id: test_user.id)
ironhack = Channel.create(name: "Ironhack", user_id: test_user.id)
aleix = Channel.create(name: "Aleix's channel", user_id: test_user.id)

vaina = Song.create(name: "Una vaina loca", url: "IPBmNNWvUiQ", length_seconds: 185, channel_id: general_channel.id, user_id: test_user.id)
serenata = Song.create(name: "Serenata rap", url: "4MgKG87M0sc", length_seconds: 287, channel_id: general_channel.id, user_id: test_user.id)

