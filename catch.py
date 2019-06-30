import urllib.request

midlist = ['1291841','1292722','1295644','1292064']

for mid in midlist:
    url = "https://api.douban.com/v2/movie/subject/" + mid + "?apikey=0df993c66c0c636e29ecbb5344252a4a"
    responces = urllib.request.urlopen(url)
    html = responces.read()
    html = html.decode('utf-8')
    print(mid)
    file0b = open(mid + '.json','w',encoding='utf-8')
    file0b.write(html)
    file0b.close()
