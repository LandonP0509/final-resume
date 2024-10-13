// console.log("JS File Working");

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    toggleButton.addEventListener('click', function() {
        if (localStorage.getItem('darkMode') !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('bg-dark', 'text-light');
        document.querySelector('header')?.classList.add('bg-dark', 'text-light');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('bg-dark', 'text-light');
        document.querySelector('header')?.classList.remove('bg-dark', 'text-light');
        localStorage.setItem('darkMode', 'disabled');
    }
});



const githubUsername = 'LandonP0509';

fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
  .then(response => response.json())
  .then(repos => {
    const showcaseContainer = document.getElementById('github-projects');
    repos.forEach(repo => {
      const projectElement = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">${repo.description || 'No description available.'}</p>
              <a href="${repo.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      `;
      showcaseContainer.innerHTML += projectElement;
    });
  });

