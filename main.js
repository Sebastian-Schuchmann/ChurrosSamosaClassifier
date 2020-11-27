var form = document.forms.namedItem("fileinfo");

form.addEventListener('submit', function(ev) {
    let formdata = new FormData(form);

    var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    
    fetch("http://127.0.0.1:5000/predict", requestOptions)
       .then(response => alert(response))
       .then(result => alert(result))
       .catch(error => alert('error', error));
});

