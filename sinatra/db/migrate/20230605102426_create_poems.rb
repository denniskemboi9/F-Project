class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :title
      t.string :author_id
      t.string :content
      t.string :password_digest
      t.timestamps
    end
  end
end


