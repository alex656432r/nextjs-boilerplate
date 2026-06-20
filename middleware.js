export default function middleware(req) {
  const url = new URL(req.url);
  
  // Пропускаем картинки и стили
  if (url.pathname.includes('.')) {
    return;
  }

  // Проверяем, введен ли правильный пароль в куки
  const cookies = req.headers.get('cookie') || '';
  const hasAccess = cookies.includes('forum_access=Px3#WkdDnkab6B;');

  // Если зашли на страницу логина
  if (url.pathname === '/login') {
    return new Response(
      `<html>
        <head>
          <meta charset="utf-8">
          <title>Закрытый форум</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { background: #121212; color: #fff; font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .box { background: #1e1e1e; padding: 30px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); text-align: center; width: 300px; }
            input { width: 100%; padding: 12px; margin: 15px 0; border: 1px solid #333; background: #2a2a2a; color: #fff; border-radius: 4px; box-sizing: border-box; font-size: 16px; }
            button { width: 100%; padding: 12px; background: #2787e5; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 16px; }
            button:hover { background: #2174c7; }
          </style>
        </head>
        <body>
          <div class="box">
            <h2>Доступ ограничен</h2>
            <p style="color: #888; font-size: 14px;">Введите секретный пароль для входа</p>
            <input type="password" id="pass" placeholder="Пароль">
            <button onclick="check()">Войти</button>
          </div>
          <script>
            function check() {
              const p = document.getElementById('pass').value;
              document.cookie = "forum_access=" + p + "; path=/; max-age=31536000";
              location.reload();
            }
          </script>
        </body>
      </html>`,
      { headers: { 'content-type': 'text/html;charset=UTF-8' } }
    );
  }

  // Если пароля нет — кидаем на страницу ввода пароля
  if (!hasAccess) {
    return Response.redirect(new URL('/login', req.url));
  }
}
