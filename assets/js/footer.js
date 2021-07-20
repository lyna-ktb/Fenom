// File#: _1_collapse
// Usage: codyhouse.co/license
function footerCollapse() {
  var Collapse = function (element) {
    this.element = element;
    this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]');
    this.animate = this.element.getAttribute('data-collapse-animate') == 'on';
    this.animating = false;
    initCollapse(this);
  };

  function initCollapse(element) {
    if (element.triggers) {
      // set initial 'aria-expanded' attribute for trigger elements
      updateTriggers(element, !Util.hasClass(element.element, 'is-hidden'));

      // detect click on trigger elements
      for (var i = 0; i < element.triggers.length; i++) {
        element.triggers[i].addEventListener('click', function (event) {
          event.preventDefault();
          toggleVisibility(element);
        });
      }
    }

    // custom event
    element.element.addEventListener('collapseToggle', function (event) {
      toggleVisibility(element);
    });
  };

  function toggleVisibility(element) {
    var bool = Util.hasClass(element.element, 'is-hidden');
    if (element.animating) return;
    element.animating = true;
    animateElement(element, bool);
    updateTriggers(element, bool);
  };

  function animateElement(element, bool) {
    // bool === true -> show content
    if (!element.animate || !window.requestAnimationFrame) {
      Util.toggleClass(element.element, 'is-hidden', !bool);
      element.animating = false;
      return;
    }

    // animate content height
    Util.removeClass(element.element, 'is-hidden');
    var initHeight = !bool ? element.element.offsetHeight : 0,
      finalHeight = !bool ? 0 : element.element.offsetHeight;

    Util.addClass(element.element, 'overflow-hidden');

    Util.setHeight(initHeight, finalHeight, element.element, 200, function () {
      if (!bool) Util.addClass(element.element, 'is-hidden');
      element.element.removeAttribute("style");
      Util.removeClass(element.element, 'overflow-hidden');
      element.animating = false;
    }, 'easeInOutQuad');
  };

  function updateTriggers(element, bool) {
    for (var i = 0; i < element.triggers.length; i++) {
      bool ? element.triggers[i].setAttribute('aria-expanded', 'true') : element.triggers[i].removeAttribute('aria-expanded');
    };
  };

  window.Collapse = Collapse;

  //initialize the Collapse objects
  var collapses = document.getElementsByClassName('js-collapse');
  if (collapses.length > 0) {
    for (var i = 0; i < collapses.length; i++) {
      new Collapse(collapses[i]);
    }
  }
};
footerCollapse()


let divFooter = document.querySelector('.list-footer')

function setFooter() {
  if (window.matchMedia("(max-width: 512px)").matches) {
    divFooter.innerHTML = `
<ul>
  <li class="footer-mobile">
    <div class="flex justify-between border-2 border-top">
      <h4 class="justify-between margin-bottom-sm text-base@md padding-top-sm" aria-controls="collapse-content1">Shop</h4>
      <i class="fas fa-angle-down padding-top-sm" aria-controls="collapse-content1"></i>
    </div>

    <div id="collapse-content1" class="is-hidden js-collapse" data-collapse-animate="on">
      <div class="margin-top-xs padding-md  radius-md">
        <div class="text-component">
          <ul class="grid gap-xs text-sm@md">
            <li><a href="#0" class="main-footer__link">Homme</a></li>
            <li><a href="#0" class="main-footer__link">Femme</a></li>
            <li><a href="#0" class="main-footer__link">Lifestore</a></li>
            <li><a href="#0" class="main-footer__link">Marques</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>

  <li class="footer-mobile">
    <div class="flex justify-between border-2 border-top">
      <h4 class="justify-between margin-bottom-sm text-base@md padding-top-sm" aria-controls="collapse-content2">SAV</h4>
      <i class="fas fa-angle-down padding-top-sm" aria-controls="collapse-content2"></i>
    </div>

    <div id="collapse-content2" class="is-hidden js-collapse" data-collapse-animate="on">
      <div class="margin-top-xs padding-md  radius-md">
        <div class="text-component">
          <ul class="grid gap-xs text-sm@md">
            <li><a href="#0" class="main-footer__link">Livraison</a></li>
            <li><a href="#0" class="main-footer__link">Retour</a></li>
            <li><a href="#0" class="main-footer__link">Paiement</a></li>
            <li><a href="#0" class="main-footer__link">FAQ</a></li>
            <li><a href="#0" class="main-footer__link">CGV</a></li>
            <li><a href="#0" class="main-footer__link">Infos persos</a></li>
            <li><a href="#0" class="main-footer__link">Mentions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>

  <li class="footer-mobile">
    <div class="flex justify-between border-2 border-top">
      <h4 class="justify-between margin-bottom-sm text-base@md padding-top-sm" aria-controls="collapse-content">A propos</h4>
      <i class="fas fa-angle-down padding-top-sm" aria-controls="collapse-content"></i>
    </div>
    <div id="collapse-content" class="is-hidden js-collapse" data-collapse-animate="on">
      <div class="margin-top-xs padding-md  radius-md">
        <div class="text-component">
          <ul class="grid gap-xs text-sm@md">
            <li><a href="#0" class="main-footer__link">Features</a></li>
            <li><a href="#0" class="main-footer__link">Qui sommes-nous</a></li>
            <li><a href="#0" class="main-footer__link">Travailler avec Fenom</a></li>
            <li><a href="#0" class="main-footer__link">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</ul>`
    footerCollapse()

  } else {
    divFooter.innerHTML = `<ul class="grid gap-lg">
						
    <li class="col-4@xs col-4@md">
      <h4 class="margin-bottom-sm text-base@md">Shop</h4>
      <ul class="grid gap-xs text-sm@md">
        <li><a href="#0" class="main-footer__link">Homme</a></li>
        <li><a href="#0" class="main-footer__link">Femme</a></li>
        <li><a href="#0" class="main-footer__link">Lifestore</a></li>
        <li><a href="#0" class="main-footer__link">Marques</a></li>
      </ul>
    </li>

    <li class="col-4@xs col-4@md">
      <h4 class="margin-bottom-sm text-base@md">SAV</h4>
      <ul class="grid gap-xs text-sm@md">
        <li><a href="#0" class="main-footer__link">Livraison</a></li>
        <li><a href="#0" class="main-footer__link">Retour</a></li>
        <li><a href="#0" class="main-footer__link">Paiement</a></li>
        <li><a href="#0" class="main-footer__link">FAQ</a></li>
        <li><a href="#0" class="main-footer__link">CGV</a></li>
        <li><a href="#0" class="main-footer__link">Infos persos</a></li>
        <li><a href="#0" class="main-footer__link">Mentions</a></li>
      </ul>
    </li>

    <li class="col-4@xs col-4@md">
      <h4 class="margin-bottom-sm text-base@md">A propos</h4>
      <ul class="grid gap-xs text-sm@md">
        <li><a href="#0" class="main-footer__link">Features</a></li>
        <li><a href="#0" class="main-footer__link">Qui sommes-nous</a></li>
        <li><a href="#0" class="main-footer__link">Travailler avec Fenom</a></li>
        <li><a href="#0" class="main-footer__link">Contact</a></li>
      </ul>
    </li>
    </ul>`
  }

}
setFooter()

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', setFooter);

});

