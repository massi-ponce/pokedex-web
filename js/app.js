$(function() {
  var currentPokemonId = 1;
  $("#Buscar").click(function() {
    var pokemon = $("#Barra-busqueda").val()
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, function(data) {
      currentPokemonId = data.id
      $("#texto-pokemon").text(data.name)
      $("#pokemon-image").attr("src",data.sprites.front_default)
      $("#Atrás").click(function() {
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId-1}`, function(data) {
          currentPokemonId = data.id
          $("#texto-pokemon").text(data.name)
          $("#pokemon-image").attr("src",data.sprites.front_default)
        });
      });
      $("#Siguiente").click(function() {
        $.getJSON(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId+1}`, function(data) {
          currentPokemonId = data.id
          $("#texto-pokemon").text(data.name)
          $("#pokemon-image").attr("src",data.sprites.front_default)
        });
      });
    });
    });
});