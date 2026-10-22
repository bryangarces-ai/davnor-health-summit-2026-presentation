// ==========================================================================
// OFFICIAL LOGOS CONFIGURATION
// Order: DOH (Left) -> Province of Davao del Norte (CENTER) -> PHO (Right)
// ==========================================================================

(function () {
  var path = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '';
  var isSub = path.indexOf('/0') !== -1 || path.indexOf('/admin') !== -1;
  var prefix = isSub ? '../' : '';

  window.OFFICIAL_LOGOS = [
    prefix + 'shared/assets/logos/logo-3.png',
    prefix + 'shared/assets/logos/DDN.png',
    prefix + 'shared/assets/logos/PHO-Logo.png'
  ];
})();
