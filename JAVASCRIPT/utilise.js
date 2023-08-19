document.addEventListener("DOMContentLoaded", function() {
    var Button = document.getElementById("Button");

    if (Button) {
        Button.addEventListener("click", function() {
            // Redirect to the next page after signup
            window.location.href = "http://127.0.0.1:5500/HTML/home_page.html";
        });
    }
});
var setVanta = ()=>{
    if (window.VANTA) window.VANTA.WAVES({
      el: ".s-page-1 .s-section-1 .s-section",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
    }
    _strk.push(function() {
      setVanta()
      window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
    })

