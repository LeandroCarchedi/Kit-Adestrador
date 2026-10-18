const offerDialog = document.getElementById('oferta-dialog');
document.querySelectorAll('.offer-action').forEach(button => button.addEventListener('click', event => {
  event.preventDefault();
  offerDialog.showModal();
}));
document.querySelectorAll('.dialog-close, .dialog-ok').forEach(button => button.addEventListener('click', () => offerDialog.close()));
offerDialog.addEventListener('click', event => { if (event.target === offerDialog) { const r=offerDialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) offerDialog.close(); } });
