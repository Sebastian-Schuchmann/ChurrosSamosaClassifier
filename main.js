var form = document.forms.namedItem("fileinfo");

form.addEventListener('submit', function(ev) {
  ev.preventDefault()
    let formdata = new FormData(form);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    
    fetch("http://1a3c5e234d38.ngrok.io/predict", requestOptions)
       .then(response => console.log(response))
       .then(result => console.log(result))
       .catch(error => console.log(error));
});

