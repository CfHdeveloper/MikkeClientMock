class ApplicationController < ActionController::Base

    require 'httpclient'


    def http_get(query,url,header={'Content-Type': 'application/json'})
        
        client = HTTPClient.new
        client.debug_dev = $stderr    # デバッグ情報を標準エラー出力に
    
        # get
        res = client.get(url, :query => query, :follow_redirect => true, :header => header)
        # post
        #res = client.post('http://httpbin.org/post', :body => query)
    
        return res.body

    end

    def http_post(url,body,header={'Content-Type': 'application/json'})
        
    client = HTTPClient.new
    client.debug_dev = $stderr    # デバッグ情報を標準エラー出力に

    # get
    res = client.post(url, :body=>body, :header=>header, :follow_redirect => true, :header => header)
    # post
    #res = client.post('http://httpbin.org/post', :body => query)

    return res.body

end

end
