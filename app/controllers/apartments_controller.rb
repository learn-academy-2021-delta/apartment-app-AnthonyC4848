class ApartmentsController < ApplicationController
    apartments = Apartment.all
    render json: apartments
end
