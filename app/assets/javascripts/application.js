//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require parallax.min
//= require animatescroll
//= require slides.min
//= require turbolinks
//= require_tree .

function uncheckOp() {
  $("#op").prop("checked", false);
}

function inscricaoPs(){
  alert('As Inscrições Foram Finalizadas Neste Semestre!!!');
}

function sobreLinkClick() {
  $('.sobre-box').animatescroll();
  uncheckOp();
}

function servicosLinkClick() {
  $('.servicos-box').animatescroll();
  uncheckOp();
}

function portfolioLinkClick() {
  $('.portfolio-box').animatescroll();
  uncheckOp();
}

function membrosLinkClick() {
  $('.membros-box').animatescroll();
  uncheckOp();
}

function contatoLinkClick() {
  $('.contato-box').animatescroll();
  uncheckOp();
}

$(document).ready(function() {
  $('.rslides').responsiveSlides({
    auto: false,
    pager: true,
    nav: true,
    speed: 500,
    maxwidth: 1200,
    namespace: "transparent-btns"
  });

  $('[data-toggle="tooltip"]').tooltip();
});

$(function(){
  $(document.body).on('show.bs.modal', function () {
    $(window.document).find('html').addClass('modal-open');
  });

  $(document.body).on('hide.bs.modal', function () {
    $(window.document).find('html').removeClass('modal-open');
  });
});
