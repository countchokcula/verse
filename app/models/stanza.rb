class Stanza < ApplicationRecord
  has_many :lines
  after_create :create_lines

  private
  def create_lines
    self.words.split("\n").each do |line|
      self.lines.create({text: line})
    end
  end
end
