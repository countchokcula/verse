class HomeController < ApplicationController
  def index
    @verse = Verse.all.first
    @stanzas = @verse.stanzas
  end
end
