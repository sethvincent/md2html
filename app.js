var markdown_area = document.getElementById('editor');
var html_area = document.getElementById('generated-html');
var button = document.getElementById('convert');

button.addEventListener('click', convert);

function convert(){
  reqwest({
    url: 'https://api.github.com/markdown/raw', 
    method: 'post',
    type: 'text/html',
    contentType: 'text/plain',
    data: markdown_area.value,
    success: function(data){
      html_area.value = data.response;
    },
    error: function(err){
      console.error(err)
    }
  });
}
