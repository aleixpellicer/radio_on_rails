class SessionsController < Devise::SessionsController
    
    # def create
        
    #     resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
    #     binding.pry
    #     sign_in(resource_name, resource)
        
    #     render :json => {:success => true, :content => render_to_string(:layout => false, :partial => 'sessions/manager')}
    # end

    # def failure
    #     render :json => {:success => false, :errors => "Login failed."} and return
    # end
end