export default function Home() {
  return (
    <div style={{ background: '#121212', color: '#fff', minHeight: '100vh', padding: '30px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h1 style={{ borderBottom: '1px solid #222', paddingBottom: '15px', fontSize: '28px' }}>🔒 Закрытый форум сообщества</h1>
        
        <div style={{ background: '#1e1e1e', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h3>Тема: Наш видеоплеер Rumble</h3>
          <p style={{ color: '#aaa', fontSize: '14px' }}>Опубликовано: Только что | Автор: Администратор</p>
          
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000', overflow: 'hidden', borderRadius: '4px', marginTop: '15px' }}>
            <iframe 
              src="https://rumble.com" 
              style={{ width: '100%', height: '100%', border: 'none' }} 
              allowFullScreen 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

</body>
</html>
