// your code here
document.getElementById('urlForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  
  // Get values from form inputs
  var name = document.getElementById('name').value;
  var year = document.getElementById('year').value;

  // Construct URL with query string
	var url= 'https://localhost:8080/'
if(name){
	url+=`?name=${name}`	
}
if(year){
		if(!name){
			url+=`?year=${year}`
		}
	else{
		url+=`&year=${year}`
	}
	}
	
  
  
  // Update the h3 element with the generated URL
  document.getElementById('url').textContent = url;
});
