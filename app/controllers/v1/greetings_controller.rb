class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    if @greeting
      render json: { success: true, message: 'Greeting found', data: { greeting: @greeting } }, status: :ok
    else
      render json: { success: false, errors: 'Greeting not found' }, status: :unprocessable_entity
    end
  end
end
