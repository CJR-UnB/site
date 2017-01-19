//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require parallax.min
//= require animatescroll
//= require turbolinks
//= require_tree .

function sobreLinkClick() {
  $('.sobre-box').animatescroll();
  $("#op").prop("checked", false);
}

function servicosLinkClick() {
  $('.servicos-box').animatescroll();
  $("#op").prop("checked", false);
}

function portfolioLinkClick() {
  $('.portfolio-box').animatescroll();
  $("#op").prop("checked", false);
}

function membrosLinkClick() {
  $('.membros-box').animatescroll();
  $("#op").prop("checked", false);
}

function contatoLinkClick() {
  $('.contato-box').animatescroll();
  $("#op").prop("checked", false);
}