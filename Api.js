
const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function() {
  allSkeleton.forEach(item=> {
    item.classList.remove('skeleton')
  })
});


// let url = `https://swapi.dev/api/planets/?format=json`;

// async function data()
// {
//     const planet = await fetch(url);
//     const planetData = await planet.json();

//     console.log(planetData.results[0]);
// }

// data();
