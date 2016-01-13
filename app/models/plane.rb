class Plane < ActiveRecord::Base
  has_many :flights
  has_many :reservations, through: :flights
end
