(() => {
  const logoUrl = 'https://raw.githubusercontent.com/san-taiyo/V-sign/main/assets/images/logo/logo.PNG';
  const oldLogoPart = '/%E3%83%AD%E3%82%B3%E3%82%99.PNG';

  function fixLogo() {
    document.querySelectorAll('img').forEach((img) => {
      if (img.src.includes(oldLogoPart)) img.src = logoUrl;
    });
  }

  fixLogo();
  window.addEventListener('hashchange', () => setTimeout(fixLogo, 0));
})();
