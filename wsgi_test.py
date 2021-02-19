import cgi
from wsgiref.simple_server import make_server
import pprint

def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    path_info = environ.get('PATH_INFO')
    print('path_info:{}'.format(path_info))
    return ['Hello, World'.encode('utf-8')]

with make_server('', 8000, application) as httpd:
    httpd.serve_forever() # make_server したのをhttpdと名付けて、そのserver_forever()を実行 (使い終わったら閉じてくれる)