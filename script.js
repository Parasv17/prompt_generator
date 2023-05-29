

// let index=Math.floor(Math.random()*arr.length)

// document.getElementsByClassName("joke_body")[0].innerHTML=arr[Math.floor(Math.random()*arr.length)]

// const btn=document.getElementById("btn");
// const img=document.querySelector("img");
// const audio=document.querySelector("audio");
// function newJoke(){
//     let index=Math.floor(Math.random()*arr.length)
//     console.log(index)
//     document.getElementsByClassName("joke_body")[0].innerHTML=arr[index]
//     btn.classList.add("btn_raise")
//     img.classList.add("btn_raise")
//     audio.currentTime=0;
//     audio.play()

//     setTimeout(function() {
//         btn.classList.remove("btn_raise")
//         img.classList.remove("btn_raise")
        
//     }, 75);
// }


// btn.addEventListener("click",newJoke)

let arr = [
    `Trump on use of AI to influence political opinions`,
    `Trump on being banned from Twitter for a lifetime`,
    `Andrew Tate on being banned from Twitter for a lifetime`,
    `Elon Musk Discovers a Hidden Alien Civilization`,
    `Zuckerberg is an AI - secret being revealed to the world`,
    `Zuckerberg on the emergence of Metaverse replacing reality`,
    `Steve Jobs on recent repetitive iPhone design`,
    `Elon Musk on various Tesla car crashes and the failure of self-driving cars, and a suggestion of a permanent ban on the same`,
    `Tim Cook on Apple intentionally killing the battery of the iPhone with software updates`,
    `Tim Cook on facing consumer rights charges for not shipping the charging adapter`,
    `Modi on pegasus spying software used on the opposition (proven by Supreme Court)`,
    `Use of excessive drone use by the US military`,
    `College profs on college students protesting for allowing ChatGPT to do the work of writing code while students provide algorithms and prompts`,
    `Media houses use Deep fakes to spread fake news and sensationalize TRP`,
    `Artists on Digital Art AI being more admired and expensive than human work`,
    `Tinder on Blade Runner/Her type dating {anime/ai girl lover (waifu)}`,
    `YouTube CEO on the emergence of short content and YouTube becoming new Tiktok`,
    `Nokia 3310 on the durability of current phones (brownie points for a roast)`,
    `CEO of OpenAI on the likability of an actual terminator situation`,
    `The Weeknd on the use of AI to generate music and autotune`,
    `Porn industry on the use of AI to create porn/hentai (Porn Pen)`,
    `Petrol Heads on Extinction of petrol cars/electric cars`,
    `Lockheed Martin on the war in the USA`,
    `JARVIS on Tony Stark preferring ChatGPT over it`,
    `Tony Stark on how he would privatize world peace with his Armour`,
    `Elon Musk invented a Time Travel Device and created holiday plans for historic eras`,
  ];
  
  
  
  
  const btn = document.getElementById("btn");
  const img = document.querySelector("img");
  const audio = document.querySelector("audio");
  
 
  function newJoke() {
    // wait(3000);
    if (arr.length === 0) {
      // All jokes have been used, reset the array
      let arr1 = [
        `Trump on use of AI to influence political opinions`,
        `Trump on being banned from Twitter for a lifetime`,
        `Andrew Tate on being banned from Twitter for a lifetime`,
        `Elon Musk Discovers a Hidden Alien Civilization`,
        `Zuckerberg is an AI - secret being revealed to the world`,
        `Zuckerberg on the emergence of Metaverse replacing reality`,
        `Steve Jobs on recent repetitive iPhone design`,
        `Elon Musk on various Tesla car crashes and the failure of self-driving cars, and a suggestion of a permanent ban on the same`,
        `Tim Cook on Apple intentionally killing the battery of the iPhone with software updates`,
        `Tim Cook on facing consumer rights charges for not shipping the charging adapter`,
        `Modi on pegasus spying software used on the opposition (proven by Supreme Court)`,
        `Use of excessive drone use by the US military`,
        `College profs on college students protesting for allowing ChatGPT to do the work of writing code while students provide algorithms and prompts`,
        `Media houses use Deep fakes to spread fake news and sensationalize TRP`,
        `Artists on Digital Art AI being more admired and expensive than human work`,
        `Tinder on Blade Runner/Her type dating {anime/ai girl lover (waifu)}`,
        `YouTube CEO on the emergence of short content and YouTube becoming new Tiktok`,
        `Nokia 3310 on the durability of current phones (brownie points for a roast)`,
        `CEO of OpenAI on the likability of an actual terminator situation`,
        `The Weeknd on the use of AI to generate music and autotune`,
        `Porn industry on the use of AI to create porn/hentai (Porn Pen)`,
        `Petrol Heads on Extinction of petrol cars/electric cars`,
        `Lockheed Martin on the war in the USA`,
        `JARVIS on Tony Stark preferring ChatGPT over it`,
        `Tony Stark on how he would privatize world peace with his Armour`,
        `Elon Musk invented a Time Travel Device and created holiday plans for historic eras`,
      ];
      arr=[`FINISH`,];
      
    }
  
    const index = Math.floor(Math.random() * arr.length);
    const selectedJoke = arr[index];
    arr.splice(index, 1); // Remove the selected joke from the array
    setTimeout(function (){
        document.getElementsByClassName("joke_body")[0].innerHTML = selectedJoke;

    },1500)
    btn.classList.add("btn_raise");
    img.classList.add("btn_raise");
    audio.currentTime = 0;
    audio.play();
  
    setTimeout(function () {
      btn.classList.remove("btn_raise");
      img.classList.remove("btn_raise");
    //   setTimeout(newJoke, 3000); // Show new joke after 3 seconds
    }, 75);
    // setTimeout(function(){
    //     document.getElementsByClassName("joke_body")[0].innerHTML = "CLICK ON THE POSTER TO START YOUR SITUATIONSHIP";
    // },10000)

    // setTimeout(function () {
    //     newJoke(); // Show new joke after 3 seconds
    //   }, 3000);
  }
  
  btn.addEventListener("click", newJoke);
  
  