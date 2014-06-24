$.getJSON("https://api.github.com/users/tylerberry4?client_id=" + token).done(function(response){
  user = response;
  var profileTpl = $('#profile').html();
  $("aside").append(_.template(profileTpl, user));
});

$.getJSON("https://api.github.com/users/tylerberry4/repos?client_id=" + token).done(function(response){
  repos = response;
  var reposTpl = $('#repo').html();
  $("#mainRepos").append(_.template(reposTpl, repos));
});

      