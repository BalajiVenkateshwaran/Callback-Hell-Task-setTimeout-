var counter = 10;
var count = document.getElementById("headTag");

count.innerHTML = counter--;

setTimeout(() => {
  count.innerHTML = counter--;
  setTimeout(() => {
    count.innerHTML = counter--;
    setTimeout(() => {
      count.innerHTML = counter--;
      setTimeout(() => {
        count.innerHTML = counter--;
        setTimeout(() => {
          count.innerHTML = counter--;
          setTimeout(() => {
            count.innerHTML = counter--;
            setTimeout(() => {
              count.innerHTML = counter--;
              setTimeout(() => {
                count.innerHTML = counter--;
                setTimeout(() => {
                  count.innerHTML = counter--;
                  setTimeout(() => {
                    count.innerHTML = counter--;
                    count.innerHTML = "";
                    count.style.backgroundImage =
                      "url('https://media3.giphy.com/media/gWhzI4AeKa9KdOLhUh/giphy.gif?cid=ecf05e47vgqti9jt0dincdvzz6eqsumv0ajcykbc2p18src0&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
