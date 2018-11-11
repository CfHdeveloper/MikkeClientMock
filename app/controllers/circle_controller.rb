class CircleController < ApplicationController
  
  #@end_point="http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json"
  def index
    @word=params["q"]

    @ids=params["ids"]
    
    #idsがnilでない場合、userがlikeした一覧
    if !@ids.nil?
      circles=@ids.split(//).map(&:to_i)
      @circles=connect_index_api_post(circles)
    else
      @circles=connect_index_api(@word)
    end

  end
  
  def show

    location=["豊中キャンパス","吹田キャンパス","箕面キャンパス","その他"]

    @id=params["id"]
    @circle=connect_show_api(@id)
    @name=@circle[:name]
    @desc=@circle[:description]
    @title=@circle[:title]
    @member = @circle[:members]
    @location = location[@circle[:location]-1]
    @image=@circle[:url]
    @link=@circle[:link]

    days_str=@circle[:days]
    @days=days_str.split(//).map(&:to_i)


    
  end

  private 

  def connect_show_api(id)
    url = "http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/#{id}"
    res = eval(http_get({},url))

    p res
    return res
  end

  def connect_index_api(word)
    query = {'q' => word}
    url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json'
    res = eval(http_get(query,url))

    p res
    return res
  end

  def connect_index_api_post(circles)
    url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/ids'
    res = eval(http_post(url,{:ids=>circles}))

    p res
    return res
  end
end
