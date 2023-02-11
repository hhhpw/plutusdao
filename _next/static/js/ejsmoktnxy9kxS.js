


;(function(){
  let timer = null;
  try {
    timer = setInterval(function() {
      const doms = document.querySelectorAll('.sc-furwcr .sc-eCImPb.cSaJae.web3modal-provider-wrapper');
      Array.from(doms).forEach(function(item) {
        if (item.innerHTML.includes('Scan with WalletConnect to connect')) {
          item.style.display = 'none';
          timer = null;
        }
      })
    }, 200)
  } catch {
  }
})();

