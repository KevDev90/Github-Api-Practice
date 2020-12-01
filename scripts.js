const apiKey = "a078120361656a60efb12c699d21a63021d7235b";

const searchURL = 'https://api.github.com/users/';

function getGitUser(userHandle) {
    const user = $('#js-search-user').val();
    const url = searchURL + user + '/repos';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
    }

function displayResults(responseJson) {
    console.log(responseJson, 'response')
    // The repos associated with that handle must be displayed on the page.
    // You must display the repo name and link to the repo URL
    $('#results-list').empty();
    for (let i = 0; i < responseJson.length; i++){
      $('#results-list').append(
        `<li><h2><a href="${responseJson[i].html_url}" target="_blank">${responseJson[i].name} </a></h3>
        </li>`
      )};
  
    $('#results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getGitUser();
    });
  }
  
  $(watchForm);

