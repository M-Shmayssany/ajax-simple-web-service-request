    //Create the XHR Object
    let xhr = new XMLHttpRequest;
    let resObj;
    let quote = document.getElementById('quote');
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    resObj = JSON.parse(this.responseText);
                    console.log(resObj);

                    // adding the paragraphe of the quote
                    let quoteP = document.createElement('p');
                    quote.appendChild(quoteP);
                    quoteP.innerHTML = resObj.quote;

                    // append a cite to the quote
                    let cite = document.createElement('cite');
                    quote.appendChild(cite);
                    cite.innerHTML = `<a href="${resObj.permalink}">${resObj.author}</a>, Total quotes ${resObj.total_quotes}`;

                    // adding image of the author if found
                    let img = document.createElement('img');
                    if(resObj.photo == ""){
                        img.setAttribute('src', './assets/img/photo-not-available-logo-concept.png');
                    }else{
                        img.setAttribute('src', `${resObj.photo}`);
                    
                    img.setAttribute('class', 'img');
                    quote.appendChild(img);
                    }

                }else{
                        alert(`Error : ${this.status}`);
                }
    }
    //call send
    xhr.send();