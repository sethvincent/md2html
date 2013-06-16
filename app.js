var markdown_area = document.getElementById('editor');
var html_area = document.getElementById('generated-html');

var github_button = document.getElementById('github-convert');
var marked_button = document.getElementById('marked-convert');

github_button.addEventListener('click', githubConverter);
marked_button.addEventListener('click', markedConverter);

function markedConverter(){
  var md = marked(markdown_area.value);
  html_area.value = md;
}

function githubConverter(){
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
