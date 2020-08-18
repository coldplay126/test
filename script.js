//My Code

const lists = document.querySelector('.tweet-list');

function clickTweet () {
    console.log('q');

    let obj = {};
    let date = new Date().format()
    let button = document.querySelector('#form-input').value;
    let comment = document.querySelector('#commentArea').value;

        obj.user = button;
        obj.message = comment;
        obj.created_at = date;
        DATA.unshift(obj);
        relay();
}

function relay() {
    const list = document.createElement('ul')
    list.classList.add('tweetie')

    const tweets = newTweet.reduce(reducer, list)
    lists.append(tweets);
}


function reducer (list, tweet) {
    const container = document.createElement('li')
    container.classList.add('warp')
    
    let elUser = document.createElement("h3");
    elUser.classList.add('user');
    elUser.textContent = tweet.user;

    let elDate = document.createElement("li");
    elDate.classList.add('.created-at')
    elDate.textContent = tweet.created_at;

    let elMsg = document.createElement("li");
    elMsg.classList.add('.message')
    elMsg.textContent = tweet.message;

    let hr = document.createElement('hr');
    hr.classList.add('line');

    container.append(elUser, elDate, elMsg, hr);
    list.append(container);
    return list;
    } 

function clocker() {
    let body = document.querySelector('body');
    const span = document.createElement('span');
    span.textContent = new Date();
    body.appendChild(span)
    }
      
    clocker();