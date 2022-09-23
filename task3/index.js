console.log('this is live covid-19 updates');

// function getData(){
    
//     fetch(url).then((Response)=>{
//         return Response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// getData();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd50db0e753msh6e29aa37663f28ep16a93ajsnb38a8a2c44c8',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options).then((response)=>{
        return response.json();
     }).then((data)=> {
         
      function table(data){
         console.log(data);

         var tblval = document.querySelector('#tblval');

         for(let i=1; i<(data['countries_stat'].length); i++){
            var x = tblval.insertRow();

            x.insertCell(0);
            tblval.rows[i].cells[0].innerHTML = data['countries_stat'][i-1]['country_name'];
            // tblval.rows[i].cells[0].innerHtml = 'Khushi';
            tblval.rows[i].cells[0].style.background = '#7a4a91';
            tblval.rows[i].cells[0].style.color = '#fff';

            x.insertCell(1);
            tblval.rows[i].cells[1].innerHTML = data['countries_stat'][i-1]['cases'];
            tblval.rows[i].cells[1].style.background = '#4bb7d8';

            x.insertCell(2);
            tblval.rows[i].cells[2].innerHTML = data['countries_stat'][i-1]['total_recovered'];
            tblval.rows[i].cells[2].style.background = '#f36e23';

            x.insertCell(3);
            tblval.rows[i].cells[3].innerHTML = data['countries_stat'][i-1]['deaths'];
            tblval.rows[i].cells[3].style.background = '#4bb7d8';

            x.insertCell(4);
            tblval.rows[i].cells[4].innerHTML = data['countries_stat'][i-1]['new_cases'];
            tblval.rows[i].cells[4].style.background = '#f36e23';

            x.insertCell(5);
            tblval.rows[i].cells[5].innerHTML = data['countries_stat'][i-1]['new_deaths'];
            tblval.rows[i].cells[5].style.background = '#4bb7d8';
         }
      }
      table(data);

     }).catch(err => {
        console.error(err)
     });

