class Line < ApplicationRecord
  belongs_to :stanza
  has_many :words
  after_create :create_words

  def create_words
    self.text.split(" ").each do |word|
      self.words.create({word: word})
    end
  end
end
