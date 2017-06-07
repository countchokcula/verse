class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :word
      t.integer :line_id

      t.timestamps
    end
    add_index :words, :line_id
  end
end
