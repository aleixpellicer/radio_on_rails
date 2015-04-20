class Channel < ActiveRecord::Base
  belongs_to :user
  has_many :songs

  has_attached_file :image, :styles => { :medium => "1620x1080>", :thumb => "210x140>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

end
