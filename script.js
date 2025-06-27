fetch('https://what-year-is-it-backend-sepia.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.getElementById('year').textContent = data.year;
 });


  