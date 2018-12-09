class CircleController < ApplicationController
  
  def index

    p params.class
    if(params['location']||params['days']||params['genre']) #検索条件がある場合(実装汚いしまた考えよう)
      @page_title = "RESULT"
      @page_title_jp = "検索結果"
    else
      @page_title = "CIRCLES"
      @page_title_jp = "サークル一覧"
    end
    @location=params["location"]
    @days=''

    @days_array=params["days"]

    if (!@days_array.nil?)
      if @days_array.kind_of?(String)
        @days=@days_array
      else
        @days_array.each do |day|
          @days+=day
        end
      end
    end

    p "days:#{@days}"

    @query={
      'location'=>@location,
      'days'=>@days
    }
    @circles=connect_index_api(@query)
  end

  def user
    @ids=params["ids"]
    @circles=nil
    if @ids
        circles=@ids.split(//).map(&:to_i)
        @circles=connect_user_api(circles)
    end
    @page_title = "LIKE"
    @page_title_jp = "お気に入り"
    render "circle/index"
  end
  
  def show

    location=["豊中キャンパス","吹田キャンパス","箕面キャンパス","その他"]

    @id=params["id"]
    @circle=connect_show_api(@id)
    @name=@circle["name"]
    @desc=@circle["description"]
    @title=@circle["title"]
    @member = @circle["members"]
    @location = location[@circle["location"].to_i-1]
    @image=@circle["url"]
    @links=eval(@circle["link"])

    days_str=@circle["days"]
    @days=days_str.split(//).map(&:to_i)


    
  end

  private 

  def connect_show_api(id)
    url = "http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/#{id}"
    #url = "http://127.0.0.1:4000/circles/#{id}"
    res = JSON.parse(http_get({},url))
    return res
  end

  def connect_index_api(query)
    url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles.json'
    #url = 'http://127.0.0.1:4000/circles'
    res = JSON.parse(http_get(query,url))
    return res
  end

  def connect_user_api(circles)
    url = 'http://tk2-215-17314.vs.sakura.ne.jp:3000/circles/ids'
    res = JSON.parse(http_post(url,{"ids[]":circles}))
    return res
  end
end
