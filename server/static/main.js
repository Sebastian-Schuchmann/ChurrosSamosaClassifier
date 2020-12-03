var form = document.forms.namedItem("fileinfo");
var lastImage;

/*
For such a simple app I chose not to use a Framework like react, so it's plain vanilla JS.
But it uses Axios for fetching data via HTTP from the server.
*/

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  document.getElementById("loader").style.visibility = "visible";
  let formdata = new FormData(form);

  var requestOptions = {
    method: 'POST',
    body: formdata,
  };

  var loc = window.location;

  fetch(`${loc.protocol}//${loc.hostname}:${loc.port}/predict`, requestOptions)
    .then(response => response.text().then((result => {
      console.log(result);
      DisplayResult(result)
      document.getElementById("loader").style.visibility = "hidden";
    })));
});

//On Image Uploaded
form.addEventListener('change', function (ev) {
  lastImage = URL.createObjectURL(ev.target.files[0]);
  document.getElementById("uploadedImg").src = lastImage
})

function DisplayResult(result) {
  /*I have created some CSS classes to make this look half decent.*/
  resultDiv = document.getElementById("results")

  divContainer = document.createElement("div")
  divContainer.className = "result"

  divImage = document.createElement("div")
  divImage.className = "image"
  divImage.style.backgroundImage = "url('" + lastImage + "')";

  divText = document.createElement("div")
  divText.appendChild(document.createTextNode(result))
  divText.className = "text"

  divContainer.appendChild(divImage)
  divContainer.appendChild(divText)
  resultDiv.prepend(divContainer)
}