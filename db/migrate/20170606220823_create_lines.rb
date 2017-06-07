class CreateLines < ActiveRecord::Migration[5.1]
  def change
    create_table :lines do |t|
      t.text :text
      t.integer :stanza_id

      t.timestamps
    end
    add_index :lines, :stanza_id
  end
end
