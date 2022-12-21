

        const input = document.querySelector('input[type="search"]');
        
        input.addEventListener('search', (event) => {
            event.preventDefault()

            hackersnoozeul = document.querySelectorAll('#newslist li');
            console.log(`The term searched for was ${input.value}`);
            

            for (let i = 0; i < hackersnoozeul.length; i++) { 
                hackersnoozeul[i].innerText.toLowerCase();  
             if (hackersnoozeul[i].innerText.includes(input.value)) 
             {
    
                console.log('found')
             }
            else {
                hackersnoozeul[i].style.display="none";
                console.log('not found') 
                 }


           }


        })




let hackersnoozeNews = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        
        
        let hackersnoozeFetch = async () => {
            let responseStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
            let storyDetails = await responseStory.json();
             

        let hackersnoozeul = document.querySelector('#newslist');
        let hackersnoozeli = document.createElement('li');
        let hackersnoozea = document.createElement('a');

        

        hackersnoozeli.innerText = `${storyDetails.title} - by ${storyDetails.by} `;
        let linkText = document.createTextNode(`${storyDetails.url}`);
        hackersnoozea.appendChild(linkText);
        hackersnoozea.href = `${storyDetails.url}`


        hackersnoozeul.appendChild(hackersnoozeli);
        hackersnoozeli.appendChild(hackersnoozea);

     }

    hackersnoozeFetch()
    
    }

        
    let hackersnoozeFetch1 = async () => {
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
        
     
      let titleOne = document.querySelector('#titleOne');
      let buttonOne = document.querySelector('#buttonOne');
      let buttonView1 = document.querySelector('#buttonView1')

  
      buttonView1.addEventListener('click', (event) => {

        event.preventDefault()
        let hackersnoozeView = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
            let dataComment = await responseComment.json();

            let hackerViewInternal = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment1 = document.querySelector('#comment1')
            comment1.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)   

        };
        hackerViewInternal()
    }
     hackersnoozeView()
     
      })

      

     
      buttonOne.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      titleOne.innerText = `${details.title} by ${details.by}`
      
    };

    let hackersnoozeFetch2 = async () => {
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
      let titleTwo = document.querySelector('#titleTwo');
      let buttonTwo = document.querySelector('#buttonTwo');
      let buttonView2 = document.querySelector('#buttonView2')



buttonView2.addEventListener('click', (event) => {

    event.preventDefault()
    let hackersnoozeView2 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let dataComment = await responseComment.json();

        let hackerViewInternal2 = async () => {
            let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
            let newdataComment = await responseCommentInternal.json();
        
        let comment2 = document.querySelector('#comment2')
        comment2.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
        console.log(newdataComment)

    };
    hackersnoozeViewInternal2()
}
 hackerView2()
 
  })


      buttonTwo.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      titleTwo.innerText = `${details.title} by ${details.by}`
    
    
    };

    let hackersnoozeFetch3 = async () => {

        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
    
      let titleThree = document.querySelector('#titleThree');
      let buttonThree = document.querySelector('#buttonThree');
      let buttonView3 = document.querySelector('#buttonView3')

      buttonView3.addEventListener('click', (event) => {

        event.preventDefault()
        let hackersnoozeView3 = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
            let dataComment = await responseComment.json();
    
            let hackerViewInternal3 = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment3 = document.querySelector('#comment3')
            comment3.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)
    
            
    
        };
        hackersnoozeViewInternal3()
    }
     hackersnoozeView3()
     
      })

      buttonThree.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

   
      titleThree.innerText = `${details.title} by ${details.by}`
      

    
    };


    let hackersnoozeFetch4 = async () => {
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
      let titleFour = document.querySelector('#titleFour');
      let buttonFour = document.querySelector('#buttonFour');
      let buttonView4 = document.querySelector('#buttonView4')

     buttonView4.addEventListener('click', (event) => {

        event.preventDefault()
        let hackersnoozeView4 = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
            let dataComment = await responseComment.json();
    
            let hackersnoozeViewInternal4 = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment4 = document.querySelector('#comment4')
            comment4.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)
    
            
    
        };
        hackersnoozeViewInternal4()
    }
     hackerView4()
     
      })

      buttonFour.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      titleFour.innerText = `${details.title} by ${details.by}`
      

    
    };

    
    let hackersnoozeComments1 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment1 = document.querySelector('#comment1')


        comment1.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackersnoozeComments2 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment2 = document.querySelector('#comment2')


        comment2.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackersnoozeComments3 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment3 = document.querySelector('#comment3')


        comment3.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackersnoozeComments4 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment4 = document.querySelector('#comment4')


        comment4.innerText = `Comments: ${dataComment.kids.length}`
    };


   hackersnoozeComments1()
   hackersnoozeComments2()
   hackersnoozeComments3() 
   hackersnoozeComments4()    


    hackersnoozeFetch1()
    hackersnoozeFetch2()
    hackersnoozeFetch3()
    hackersnoozeFetch4()


}


hackersnoozeNews()



       