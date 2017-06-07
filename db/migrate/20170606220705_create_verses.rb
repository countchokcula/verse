class CreateVerses < ActiveRecord::Migration[5.1]
  def change
    create_table :verses do |t|
      t.string :name
      t.text :words

      t.timestamps
    end
  end
end
