class User < ActiveRecord::Base
  has_many :reservations
  has_many :flights, :through => :reservations
  has_secure_password

  validates :username, :presence => true
  validates :username, :uniqueness => true
end
