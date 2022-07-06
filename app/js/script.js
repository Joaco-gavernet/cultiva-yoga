$(document).ready(() => {
  var allLinks = $('a');
  console.log('allLinks', allLinks);

  $('a').on('click', function (event) {
    // store the destination of the link in a variable
    const hash = this.hash;
    // check if is an internal link or an external one
    if (hash.charAt(0) == '#') {
      event.preventDefault();

      // switch for mobile
      if ($(window).width() < 1024) {
        switch (hash) {
          case '#section3':
            window.scrollTo({
              top: 692,
              behavior: 'smooth'
            });
            break;
          case '#section4':
            window.scrollTo({
              top: 1565,
              behavior: 'smooth'
            });
            break;
          case '#section5':
            window.scrollTo({
              top: 2628,
              behavior: 'smooth'
            });
            break;
          case '#index':
          default:
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
        }
      }

      // switch for desktop
      if ($(window).width() >= 1024) {
        switch (hash) {
          case '#section3':
            document.getElementById("section3").scrollIntoView({
              block: "end",
              behavior: 'smooth'
            })
            break;
          case '#section4b':
            document.getElementById("section4b").scrollIntoView({
              block: "end",
              behavior: 'smooth'
            })
            break;
          case '#section5':
            document.getElementById("section5").scrollIntoView({
              block: "end",
              behavior: 'smooth'
            })
            break;
          case '#index':
            document.getElementById("index").scrollIntoView({
              block: "end",
              behavior: 'smooth'
            })
            break;
        }
      }
    }
  })

  if ($(window).width() >= 1024) {
    mainNav();
    $(window).scroll(function () {
      mainNav();
    });
    function mainNav() {
      var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (top > 596) $('.nav-desktop').stop().animate({
        "opacity": '1'
      });
      else $('.nav-desktop').stop().animate({
        "opacity": '0'
      });
    }
  }

}) // dom checking

