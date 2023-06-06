class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :title
      t.string :author
      t.string :content
      t.string :user_id
      t.timestamps
    end
  end
end


