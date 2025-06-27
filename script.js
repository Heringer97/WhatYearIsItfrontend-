fetch('https://whatyearisit-backend-xi-virid.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.getElementById('year').textContent = data.year;
 });



  