class CreateSakes < ActiveRecord::Migration[7.0]
  def change
    create_table :sakes do |t|
      t.string :name
      t.string :kura
      t.string :todofuken

      t.timestamps
    end
  end
end
