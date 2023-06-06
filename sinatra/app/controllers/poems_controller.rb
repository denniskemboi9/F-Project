class PoemsController < ApplicationController
  set default_content_type: "application/json" 
  
  get "/poems" do
    all_poems = Poem.all
    all_poems.to_json(include: :user)
  end

  get "/poems/:id" do
    poem_by_id = Poem.find(params[:id])
    poem_by_id.to_json(include: :user)
  end


  # Add Poem
  post "/poems/addpoem" do
    authorize

    title=params[:title]
    author=params[:author]
    content=params[:content]
    user_id=params[:user_id]
    
    if(title.present? && author.present? && content.present? && user_id.present?)

      check_user = User.exists?(id: user_id)
      if check_user===false

        status 406
        puts "User does not exist"
        message = {:error=> "The User trying to add a poem does not exist!"}
        message.to_json
      
      else
        new_poem = Poem.create(title: title, author: author, content: content, user_id: user_id)
        if new_poem
          message = {:success=> "Poem created successfully"}
          message.to_json
        else
          status 406
          message = {:error=> "Error creating the poem"}
          message.to_json
        end

      end
    else
      status 406
      message = {:error=> "Please enter all fields"}
      message.to_json
    end
  end

  # Update Poem
  patch "/poems/editpoem/:id" do

    authorize
    title=params[:title]
    author=params[:author]
    content=params[:content]

    if(title.present? && author.present? && content.present? )  
      poem_find = Poem.find_by(id: params[:id])
      poem = poem_find.update(title: title, author: author, content: content)
      if poem
        message = {:success=> "Poem updated successfully"}
        message.to_json
      else
        status 406
        message = {:error=> "Error updating the poem"}
        message.to_json
      end

    else
      status 406
      message = {:error=> "All field are required"}
      message.to_json
    end 
  end


  # Delete Poems
  delete "/poems/delete/:id" do

    authorize 
    check_poem = Poem.exists?(id: params[:id] ) 
    if check_poem
        poem = Poem.find(params[:id])
        poem.destroy
        message = {:success=> "Poem deleted successfully"}
        message.to_json
    else
        status 406
        message = {:error=> "The poem does not exist"}
        message.to_json
    end
  end

end




  # # =============UPDATE Archive POST
  # patch "/posts/archive/:id" do
  #   authorize
  
  #   archive=params[:archive]
  
  
  #   if(archive.present? )
  #       post_find = Post.find_by(id: params[:id])
  #       post = post_find.update(archive: archive)
  #       if post
  #           message = {:success=> "Post archived"}
  #           message.to_json
  #       else
  #           status 406
  #           message = {:error=> "Error archiving the post"}
  #           message.to_json
  #       end
  
  #   else
  #       status 406
  #       message = {:error=> "All field are required"}
  #       message.to_json
  #   end
  #   end