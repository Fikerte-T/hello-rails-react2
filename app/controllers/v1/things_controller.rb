class V1::ThingsController < ApplicationController
    def index
        render json: { :things => [
            {
                :name => 'something',
                :guid => '2iu91hrsjfnowye8r'
            }
        ]}.to_json
    end
end