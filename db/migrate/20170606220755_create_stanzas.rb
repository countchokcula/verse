class CreateStanzas < ActiveRecord::Migration[5.1]
  def change
    create_table :stanzas do |t|
      t.text :words
      t.integer :verse_id

      t.timestamps
    end
    add_index :stanzas, :verse_id
  end
end
