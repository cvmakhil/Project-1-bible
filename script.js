let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    fetch('https://labs.bible.org/api/?passage=random&type=json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].bookname);
            let book = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse;
            let text = data[0].text;
            document.getElementById("result").innerHTML =
                '<p>' + text + '<br>' + book + '</p>';
        });
});

// fetch('https://api.publicapis.org/entries')
//  .then(response => {
//     if (!respons e.ok) {
//       throw new Error('Server response was not ok');
//     }
//     console.log('Response:', response);
//     return response.json();
//  })
//  .then(data => {
//     console.log('Data:', data[0]);
//  })
//  .catch(error => {
//     console.error('Fetch failed:', error);
//  });
