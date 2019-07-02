
// Expands the line when "about" is hovered
$(function () {
  "use strict";
  $(".aboutText").on({
    mouseenter: function () {
      $(".about").animate({
        width: "28px"
      });
    },
    mouseleave: function () {
      $(".about").animate({
        width: "20px"
      });
    }
  });
});

// Shrinks the burgermenu when clicked
// Hides other elements
// Grows Cross
// Creates dark overlay
// Shows social media icons

$(function () {
  "use strict";
  $(".burgerMenu").click(function () {
    $(this).stop().fadeToggle(300);
    $(".whiteCross").stop().fadeToggle(300);
    $(".landingPageHeader").stop().fadeToggle(300);
    $(".darkOverlay").stop().fadeToggle(300);
    $(".mobileNavElementOne").stop().fadeToggle(300);
    $(".mobileNavElementTwo").stop().fadeToggle(300);
    $(".lineDivider").stop().fadeToggle(300);
    $(".socialMediaLineHide").stop().fadeToggle(100);
    $("#landingPageButton").stop().fadeToggle(300);

  });
});


// Does the reverse of the above code
$(function () {
  "use strict";
  $(".whiteCross").click(function () {
    $(this).stop().fadeToggle(300);
    $(".burgerMenu").stop().fadeToggle(300);
    $(".landingPageHeader").stop().fadeToggle(300);
    $(".darkOverlay").stop().fadeToggle(300);
    $(".mobileNavElementOne").stop().fadeToggle(300);
    $(".mobileNavElementTwo").stop().fadeToggle(300);
    $(".lineDivider").stop().fadeToggle(300);
    $(".socialMediaLineHide").stop().fadeToggle(100);
    $("#landingPageButton").stop().fadeToggle(300);
  });
});

// About open in mobile / tablet
$(function () {
  "use strict";
  $(".mobileNavElementTwo").click(function () {
    $(this).stop().fadeToggle(300);
    $(".socialMediaLineHide").stop().fadeToggle(300);
    $(".mobileNavElementOne").stop().fadeToggle(300);
    $(".whiteCross").stop().fadeToggle(300);
    $(".aboutClose").stop().fadeToggle(300);
    $(".aboutTextHidden").stop().fadeToggle(300);
    $(".aboutContactHidden").stop().fadeToggle(300);
    $(".mobileOverflowHidden").stop().fadeToggle(300);

  });
});

// About close in mobile / tablet
$(function () {
  "use strict";
  $(".aboutClose").click(function () {
    $(this).stop().fadeToggle(300);
    $(".aboutContactHidden").stop().fadeToggle(300);
    $(".aboutTextHidden").stop().fadeToggle(300);
    $(".lineDivider").stop().fadeToggle(300);
    $(".burgerMenu").stop().fadeToggle(300);
    $(".landingPageHeader").stop().fadeToggle(300);
    $("#landingPageButton").stop().fadeToggle(300);
    $(".darkOverlay").stop().fadeToggle(300);
    $(".mobileOverflowHidden").stop().fadeToggle(300);

  });
});

// Desktop about
$(function () {
  "use strict";
  $(".aboutOpen").click(function () {
    $(this).stop().fadeToggle(0);
    $(".aboutTextHiddenDesktop").stop().fadeToggle(300);
    $(".lineDivider").stop().fadeToggle(300);
    $(".landingPageHeader").stop().fadeToggle(300);
    $(".darkOverlay").stop().fadeToggle(300);
    $(".aboutCloseDesktop").stop().fadeToggle(0);
    $(".socialMediaLineHide").stop().fadeToggle(300);
    $("#landingPageButton").stop().fadeToggle(300);
    $("#hiddenOverflow").stop().fadeToggle(300);


  });
});

// Desktop about close
$(function () {
  "use strict";
  $(".aboutCloseDesktop").click(function () {
    $(this).stop().fadeToggle(0);
    $(".socialMediaLineHide").stop().fadeToggle(300);
    $(".aboutTextHiddenDesktop").stop().fadeToggle(300);
    $(".lineDivider").stop().fadeToggle(300);
    $(".landingPageHeader").stop().fadeToggle(300);
    $("#landingPageButton").stop().fadeToggle(300);
    $(".darkOverlay").stop().fadeToggle(300);
    $(".aboutOpen").stop().fadeToggle(0);
    $("#hiddenOverflow").stop().fadeToggle(300);
    
  });
});

// Fade redirect from index to my work
$(function () {
  "use strict";
  $(".fadeRedirect").click(function () {
    window.setTimeout(function(){
      // Move to a new location or you can do something else
      window.location.href = "myWork.html";
  }, 400);

    $("#landingPageWrapper").stop().fadeToggle(400);
    $(".oliverLogo").stop().fadeToggle(400);
    $(".aboutOpen").stop().fadeToggle(400);
    $(".oliver").stop().fadeToggle(400);

  });
});

