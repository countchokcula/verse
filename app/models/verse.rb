class Verse < ApplicationRecord
  has_many :stanzas
  after_save :create_stanzas

  private
  def create_stanzas
    self.words.split("\r\n \r\n").each do |stanza|
      self.stanzas.create({words:stanza})
    end
  end
end
