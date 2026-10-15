help - wyświetla listę komend
2048 - prosta gra polegająca na łączeniu liczb oraz osiągnięcie liczb 2048 (uwielbiam tą gre)
cal - wyświetla kalendarz. Wyświetla przeszły, obecny i przyszły miesiąc
ipaddr - wyświetla obecne ip komputeraz oraz lokalizacje
Wyniki komend: 
C:\Users\Maciej>curl -v http://info.cern.ch/
* Host info.cern.ch:80 was resolved.
* IPv6: (none)
* IPv4: 188.184.67.127
*   Trying 188.184.67.127:80...
* Established connection to info.cern.ch (188.184.67.127 port 80) from 10.130.50.107 port 49412
* using HTTP/1.x
> GET / HTTP/1.1
> Host: info.cern.ch
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Date: Wed, 07 Oct 2026 15:42:15 GMT
< Server: Apache
< Last-Modified: Wed, 05 Feb 2014 16:00:31 GMT
< ETag: "286-4f1aadb3105c0"
< Accept-Ranges: bytes
< Content-Length: 646
< Connection: close
< Content-Type: text/html
<
<html><head></head><body><header>
<title>http://info.cern.ch</title>
</header>

<h1>http://info.cern.ch - home of the first website</h1>
<p>From here you can:</p>
<ul>
<li><a href="http://info.cern.ch/hypertext/WWW/TheProject.html">Browse the first website</a></li>
<li><a href="http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html">Browse the first website using the line-mode browser simulator</a></li>
<li><a href="http://home.web.cern.ch/topics/birth-web">Learn about the birth of the web</a></li>
<li><a href="http://home.web.cern.ch/about">Learn about CERN, the physics laboratory where the web was born</a></li>
</ul>
</body></html>
* shutting down connection #0

C:\Users\Maciej>curl -I http://github.com/
HTTP/1.1 301 Moved Permanently
Content-Length: 0
Location: https://github.com/


C:\Users\Maciej>curl -I http://info.cern.ch/cos-tam
HTTP/1.1 404 Not Found
Date: Wed, 07 Oct 2026 15:43:51 GMT
Server: Apache
Connection: close
Content-Type: text/html; charset=iso-8859-1
