class ApplicationController < Sinatra::Base
  set default_content_type: "application/json"
  

  get "/poems" do
    all_poems = Poem.all
    all_poems.to_json
  end

  get "/poems/:id" do
    poem_by_id = Poem.find(params[:id])
    poem_by_id.to_json
  end

  get "/authors" do
    all_authors = Author.all
    all_authors.to_json
  end

  get "/authors/:id" do
    author_by_id = Author.find(params[:id])
    author_by_id.to_json
  end

end

# # Imported
# class ApplicationController < ActionController::API
#     include ActionController::Cookies
#     before_action :authorize

#     # private functions
#     private
#     def authorize
#        @current_user = User.find_by(id: session[:user_id] )  
#        render json: {error: ["Not authorized"]}, status: :unauthorized unless @current_user
#     end
# end
