class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.text :description
      t.string :image
      t.decimal :price
      t.string :currency
      t.datetime :time_created

      t.timestamps
    end
  end
end
