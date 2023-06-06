class UsersController < ApplicationController
  set default_content_type: "application/json"
  
  get "/users" do
    all_users = User.all
    all_users.to_json
  end

  get "/users/:id" do
    user_by_id = User.find(params[:id])
    user_by_id.to_json
  end

  # Add user
  post "/users/adduser" do
    _username=params[:username]
    _email=params[:email]
    _password=params[:password]

    if(_username.present? && _email.present? && _password.present?)
           
      check_username = User.exists?(username: _username)#true / false
      check_email = User.exists?(email: _email)#true / false

      puts check_username
      if check_username==true
        status 406
        message = {:error=> "Username exists in our database"}
        message.to_json()
      
      elsif check_email==true
        status 406
        message = {:error=> "Email exists in our database"}
        message.to_json()

      else
        user = User.create(username: _username, email: _email,password: _password)
        if user
            message = {:success=> "User has been created successfully"}
            message.to_json()
        else
            message = {:error=> "Error saving the user"}
            message.to_json()
        end
      end
  
    else
      status 406
      message = {:error=> "All values are required"}
      message.to_json()
    end
  end

  # Get current user
  get "/current_user" do
    user = User.find_by(id: session[:user_id])
    
    if user
      {:user => user}.to_json
    else
      message = {:error=> "No User is logged in"}
      message.to_json
    end
  end

end

