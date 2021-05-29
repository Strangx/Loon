let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.send();

xhr.onload = function() {
    console.log(xhr.response);
};
