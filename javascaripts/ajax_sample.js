let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
            data[number]=this.response[number];
          titleArea.innerHTML = request.response[number].title;
          contentArea.innerHTML = request.response[number].content;
          videoArea.setAttribute("src", request.response[number].url);
          number == 2 ? number = 0 : number++;
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
  
}

function changeVideo() {
    button.addEventListener('click', e => {
        if(data.length < 3){
            getData();
            //ajax.jsonからデータを取得していない場合
            //data配列が3未満だった場合はgetData関数を動かす
        }
        else{
            titleArea.innerHTML = data[number].title;
            contentArea.innerHTML = data[number].content;
            videoArea.setAttribute("src", data[number].url);
            number == 2 ? number = 0 : number++;
            //data配列入れた情報を表示
        }
    })
  }


window.onload = changeVideo;