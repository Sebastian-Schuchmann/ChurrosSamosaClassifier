var form = document.forms.namedItem("fileinfo");

form.addEventListener('submit', function(ev) {
    let formdata = new FormData(form);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    
    fetch("http://1a3c5e234d38.ngrok.io/predict", requestOptions)
       .then(response => alert(response))
       .then(result => alert(result))
       .catch(error => alert('error', error));
});

