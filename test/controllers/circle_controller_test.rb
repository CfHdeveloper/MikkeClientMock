require 'test_helper'

class CircleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get circle_index_url
    assert_response :success
  end

end
