$(document).ready((function(){function n(){const n=navigator.userAgent||navigator.vendor||window.opera;return/android|iPad|iPhone|iPod|blackberry|iemobile|opera mini|windows phone/i.test(n)}AOS.init({duration:1500,once:!0,mirror:!1});const o=n()?"fb://profile/100004373797795":"https://www.facebook.com/100004373797795",e=n()?"x://user?screen_name=tobinguyennn":"https://x.com/tobinguyennn";$("#fb-link").attr("href",o),$("#x-link").attr("href",e)}));