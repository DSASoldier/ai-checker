const inputElementValue=document.querySelector("#options-key");

chrome.storage.local.get(["set"],(res)=>{
  if(res.set==="set")
  {
    document.querySelector("#key-set").style.display="block";
  }
  else if(res.set==="not set"){
    document.querySelector("#key-not-set").style.display="block"
  }
})

const isValidKey=function(key){

    document.querySelector("#key-not-set").style.display="none"
    document.querySelector("#key-set").style.display="none"

    const token=`${key}`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "__cf_bm=UAIvCs6Q5d6xzAFuEtwiKwoX36RSgs8QsgAPku.RB9Y-1704094685-1-AXIrEFzUPtw/AqtAU6HGZtofPb1bNB8HCuu8mhzkqh4+InpCpcN0jzWs9pN+x9zPUustRrvTuFdApVVYpYhAMUc=; _cfuvid=Ifbe4ehtyc1AQ.7jLKFRSeEt73MjAPNHgR1qOdSXNFk-1704093629588-0-604800000");
    
    var raw = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `hey what's up `
        }
      ]
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then(async (response) => {

          const result = await response.json()
          if(result.error){
            if(result.error.code==='insufficient_quota'){
              chrome.storage.local.set({
                isExpired:true,
              })
              console.log("it is not working");
              // wrong image


              document.querySelector("#key-not-set").style.display="block"
              document.querySelector("#processing-bar").style.display="none";
              inputElementValue.value="";
              chrome.storage.local.set({
                set:"not set",
              })
            }
          }
        else{

            chrome.storage.local.set({
                key:key,
            })

            document.querySelector("#key-set").style.display="block";
            document.querySelector("#processing-bar").style.display="none";
            inputElementValue.value="";

            chrome.storage.local.set({
              set:"set",
              isExpired:false,
            })

            console.log("it is working");
        }
    }).catch(error => console.log('error', error));
  }
document.querySelector("#submit-key").addEventListener("click",function(){
    chrome.storage.local.set({
        optionsApiKey:inputElementValue.value,
    },()=>{
        isValidKey(inputElementValue.value);
        document.querySelector("#processing-bar").style.display="inline";
    })
})
