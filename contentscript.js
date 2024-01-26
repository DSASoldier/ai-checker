const imgElement = document.createElement("img");

const divEl = document.createElement("div");

imgElement.src = chrome.runtime.getURL("icon.png");

imgElement.src = "data:image/png;base64,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"

imgElement.className = "contentscript-img";

document.querySelector("body").prepend(imgElement);

const imgSelect = document.querySelector(".contentscript-img");

imgSelect.style = "position: fixed; top: 154px; left: 34px; width: 64px; z-index:9999;";

imgSelect.addEventListener("click", function () {

  const html = `<div id="div1" style="position:relative;" class="prevent-select">
  <img
  src="${chrome.runtime.getURL("cross.png")}"
  style="position: fixed; width: 16px; right: 1px; top: 1px; z-index: 3"
  class="cross-menu"
/>

    <img id="img1" src="${chrome.runtime.getURL("icon.png")}" alt="none" />
    <div class="operations formality">Formality</div>
    <div class="operations language--conversion">Language Conversion</div>
    <div class="operations grammar--checker">grammar checker</div>
  </div>
  <div
    id="mygrammar-checkar-main"
    class="
      operations__content--active operations__content operations__content--1
    "
  >
    <div style="font-weight: bold; font-size: larger">Formality</div>
    <button id="casual" class="select--manner">
      <img
        src="https://assets.grammarly.com/emoji/v1/1f455.svg"
        alt="none"
        style="width: 20px; height: 20px"
      />
      <div style="display: inline; margin-left: 2px; position:relative; top:-4px;">casual</div>
    </button>
    <button id="neutral" class="select--manner">
      <img
        src="https://assets.grammarly.com/emoji/v1/1f610.svg"
        alt="none"
        style="width: 20px; height: 20px"
      />
      <div style="display: inline;position:relative; top:-4px;">neutral</div>
    </button>
    <button id="formal" class="select--manner">
      <img
        src="https://assets.grammarly.com/emoji/v1/1f454.svg"
        alt="none"
        style="width: 20px; height: 20px"
      />
      <div style="display: inline; position:relative; top:-4px;">formal</div>
    </button>
    <div class="Tone" style="margin-top: 54px">
      <h3>Tone</h3>
      <div style="margin-bottom: 7px">Select up to three</div>

      <button class="manner-btn personable">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f917.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img personable-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2">Personable</span>
      </button>

      <button class="manner-btn confident">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f91d.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img confident-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2">Confident</span>
      </button>

      <button class="manner-btn empathetic">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f607.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img empathetic-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2">Empathetic</span>
      </button>

      <button class="manner-btn engaging">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f929.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img engaging-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2">Engaging</span>
      </button>

      <button class="manner-btn witty">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f92d.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img witty-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2" style="left: 39px">Witty </span>
      </button>
      <button class="manner-btn direct">
        <img
          class="btn-img"
          src="https://assets.grammarly.com/emoji/v1/1f3af.svg"
          style="width: 20px; height: 20px"
        />
        <img class="cross-img direct-img cross-img2" src="${chrome.runtime.getURL("cross.png")}" />

        <span class="select--manner2" style="left: 40px">Direct</span>
      </button>

      <br />
      <br />

      <label for="lang">Your Profession</label>
      <br />

      <select
        name="profession"
        id="profession"
        style="height: 30px; width: 200px"
      >
        <option value="Engineer ">Engineer</option>
        <option value="HR--Professional">HR Professional</option>
        <option value="IT--Professional">IT Professional</option>
        <option value="Marketing--Professional">
          Marketing Professional
        </option>
      </select>

      <br />
      <br />

      <label for="language">I write in</label>
      <br />
      <select name="" id="language" style="height: 30px; width: 200px">
        <option value="australian">Australian English</option>
        <option value="british">British English</option>
        <option value="canada">Canadian English</option>
        <option value="india">Indian English</option>
      </select>
      <h4>These voice settings will apply to any text you generate.</h4>
      <button
        style="
          margin-left: 264px;
          background-color: green;
          padding: 3px;
          border-radius: 3px;
          width: 129px;
        "
        class="select"
      >
        <div style="font-weight: 800;color: white;display: flex;justify-content: center;">Use this voice</div>
      </button>
    </div>
  </div>

  <div
    id="third-div"
    class="operations__content--active operations__content--2"
  >
    <button class="span--el">
      <span>English to Hindi</span>
    </button>

    <button class="span--el">
      <span>Hindi To English</span>
    </button>

    <button class="span--el">
      <span>English To Spanish</span>
    </button>

    <button class="span--el">
      <span>Spanish To English</span>
    </button>
    
  </div>

  <div class="output-area" style="position: relative; border-style: groove">
      <img
        src="${chrome.runtime.getURL("cross.png")}"
        style="position: absolute;
        width: 17px;
        left: 425px;
        top: 1px;"
        class="output-img-cross"
      />
      <div style="margin-bottom: 21px;margin-top: 12px;margin-left: 20px;width: 392px;">
        <div
          style="
            background-color: green;
            font-size: medium;
            color: white;
            
          "
        >
          your content is:
          </div>
          <textarea cols="51" rows="5" id="text2"style="min-width: 392px;max-width: 392px;"></textarea>
        </div>

      <div style="position:relative;margin-left: 21px;width: 392px;">
      <img id="my-grammar-checker-progress-loading"src="${chrome.runtime.getURL("progressBar.gif")}" style="position: absolute;width: 29px;left: 182px;top: 72px;">
        <div
          style="
            background-color: green;
            font-size: medium;
            color: white;
          "
        >
          your output is:
        </div>
        <textarea cols="51" rows="10" id="text1" style="min-width: 392px;max-width: 392px;"></textarea>
      </div>
    </div>
  `;

  imgSelect.style.display = "none";

  const newDiv = document.createElement("div");

  const inputElement = document.createElement("textArea");
  const inputImageDiv = document.createElement("div");

  inputImageDiv.style = "position:relative;margin-top: 10px; border-style:groove;";

  newDiv.className = "div-create";

  inputImageDiv.className = "input-img-content";

  const createImg2 = document.createElement("img");
  createImg2.src = chrome.runtime.getURL("submit.png");

  createImg2.style = "width: 34px;position: absolute;left: 405px;top: 2px;";
  createImg2.className = "submit-icon";

  inputElement.type = "text";

  inputElement.placeholder = "write your text here";

  inputElement.style = "width:390px; height:40px;"

  inputImageDiv.appendChild(inputElement);

  inputImageDiv.appendChild(createImg2);

  newDiv.appendChild(inputImageDiv);

  newDiv.insertAdjacentHTML('afterbegin', html);

  newDiv.style = "position: fixed; top: 0px; right:0px; width: 455px; z-index:9999; border-style:groove;";

  newDiv.style.backgroundColor = "white";

  document.body.appendChild(newDiv);

  const mannerElement = document.querySelectorAll(".select--manner");
  const mannerElement2 = document.querySelectorAll(".select--manner2");
  const spanElement = document.querySelectorAll(".span--el");
  const operations = document.querySelectorAll(".operations");
  const operationContent = document.querySelectorAll(".operations__content--active");
  const mannerBtn = document.querySelectorAll(".manner-btn");
  const crossMenu = document.querySelector(".cross-menu");
  const selectNewDiv = document.querySelector(".div-create");
  const selectOutputArea = document.querySelector(".output-area");
  const selectSubmmitButton = document.querySelector(".submit-icon");
  const outputAreaCrossImage = document.querySelector(".output-img-cross");
  const outputTextContent=document.querySelector("#text1");

  selectOutputArea.classList.add("operations__content");
  operationContent.forEach(t => t.classList.add("operations__content"));

  let selectItem = 0;
  let submitSelect=0;
  chrome.storage.local.set({
    selectItem,
    submitSelect,
  })

  console.log(selectSubmmitButton);
  const submitButtonDisable=function()
  {
    chrome.storage.local.get(["isExpired"],(res)=>{
      if(res.isExpired){
        selectSubmmitButton.style.opacity=0.5;
      }
      else{
        selectSubmmitButton.style.opacity=1;
      }
    })
  }

  submitButtonDisable();
  setInterval(submitButtonDisable,1000);

  spanElement.forEach(
    function (button) {
      button.addEventListener("click", function () {
        spanElement.forEach(t => {
          t.style.borderColor = "";
          t.style.borderWidth = "";
        });

        const languageConversion=button.textContent
        let toLanguage="";
        let a=languageConversion.split(" ");
        a=a.filter(t=>t!="");
        toLanguage=a[3].split('\n')[0];

        chrome.storage.local.set({
          toLanguage,
        })

        button.style.borderColor = "#2fc352";
        button.style.borderWidth = "revert";
      })
    }
  )
  
  const grammarCheckerFunction=function(key,content){
    
    // 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
    console.log(content)

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
          "content": `correct grammar and spelling of "${content}" `
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
              return ;
            }
          }
          const gramaticalCorrectContent=result.choices[0].message.content
          console.log(gramaticalCorrectContent)
          document.querySelector("#text1").textContent=gramaticalCorrectContent;
          if(gramaticalCorrectContent){
            document.querySelector("#my-grammar-checker-progress-loading").style.display="none";
          }
    }).catch(error => console.log('error', error));
  }

  const changeVoice=function(key,content,toneArray,formality,profession,language){
    // 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
    const tone1=toneArray.length?toneArray[0]:"",tone2=toneArray.length===2?toneArray[1]:"",tone3=toneArray.length===3?toneArray[2]:"";
    const passFormality=formality??"casual";
    const token=`${key}`;
    const gptEl= document.getElementById('result_of_gpt')
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "__cf_bm=UAIvCs6Q5d6xzAFuEtwiKwoX36RSgs8QsgAPku.RB9Y-1704094685-1-AXIrEFzUPtw/AqtAU6HGZtofPb1bNB8HCuu8mhzkqh4+InpCpcN0jzWs9pN+x9zPUustRrvTuFdApVVYpYhAMUc=; _cfuvid=Ifbe4ehtyc1AQ.7jLKFRSeEt73MjAPNHgR1qOdSXNFk-1704093629588-0-604800000");
    
    var raw = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `change voice of this "${content}" with ${tone1+" "+tone2+" "+tone3}, and with formality ${passFormality} and with profession ${profession} and in language ${language}`
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
              return ;
            }
          }
          const changedVoice=result.choices[0].message.content
          console.log(changedVoice)
          document.querySelector("#text1").textContent=changedVoice;
          if(changeVoice){
            document.querySelector("#my-grammar-checker-progress-loading").style.display="none";
          }
          
    }).catch(error => console.log('error', error));
}

const languageConversionFuncion=function(key,content,language){
  // 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
    const token=`${key}`;
    const gptEl= document.getElementById('result_of_gpt')
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "__cf_bm=UAIvCs6Q5d6xzAFuEtwiKwoX36RSgs8QsgAPku.RB9Y-1704094685-1-AXIrEFzUPtw/AqtAU6HGZtofPb1bNB8HCuu8mhzkqh4+InpCpcN0jzWs9pN+x9zPUustRrvTuFdApVVYpYhAMUc=; _cfuvid=Ifbe4ehtyc1AQ.7jLKFRSeEt73MjAPNHgR1qOdSXNFk-1704093629588-0-604800000");
    
    var raw = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": `convert this ${content} to ${language}`
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
              return ;
            }
          }
          const convertedLanguage=result.choices[0].message.content
          console.log(convertedLanguage);
          document.querySelector("#text1").textContent=convertedLanguage;
          // 
          if(convertedLanguage){
            document.querySelector("#my-grammar-checker-progress-loading").style.display="none";
          }

    }).catch(error => console.log('error', error));
}


  
  selectSubmmitButton.addEventListener("click", function (e) {
    
    if(selectSubmmitButton.style.opacity==='0.5') return ;

    document.querySelector("#my-grammar-checker-progress-loading").style.display="block";

    document.querySelector("#text1").textContent="";

    operationContent.forEach(t => t.classList.add("operations__content"));
    selectOutputArea.classList.remove("operations__content");
    inputImageDiv.classList.add("operations__content");

    const inputElementContent=inputElement.value
    const submitSelect=1;

    chrome.storage.local.set({
      inputElementContent,
      submitSelect,
    })

    document.querySelector("#text2").value = inputElement.value; 
    chrome.storage.local.get(["type","selectItem"],(res)=>{

      if(res.type==="formality"){
        if(res.selectItem!==1) 
        {
          return ;
        }

        chrome.storage.local.get(["key","inputElementContent","toneArray","formality","profession","language"],(res)=>{
          console.log(res.inputElementContent,res.toneArray,res.formality,res.profession,res.language)

          changeVoice(res.key,res.inputElementContent,res.toneArray,res.formality,res.profession,res.language);
        })
      }
      else if(res.type==="language conversion"){
        chrome.storage.local.get(["key","inputElementContent","toLanguage"],(res)=>{
          if(res.toLanguage==="") 
          {
            return ;
          }

          console.log(res.inputElementContent,res.toLanguage)

          languageConversionFuncion(res.key,res.inputElementContent,res.toLanguage)
        })
      }
      else{
        chrome.storage.local.get(["key","inputElementContent"],(res)=>{

      
          grammarCheckerFunction(res.key,res.inputElementContent)
        })
      }
    })
 
});

  outputAreaCrossImage.addEventListener("click", function (e) {

    operationContent.forEach(t => t.classList.remove("operations__content"));

    document.querySelector("#third-div").classList.add("operations__content");

    selectOutputArea.classList.add("operations__content");
    inputImageDiv.classList.remove("operations__content");

  });

  crossMenu.addEventListener("click", function () {

    document.body.removeChild(selectNewDiv);
    imgSelect.style.display = "flex";

  })

  operations.forEach(function (t) {
    t.addEventListener("click", function (e) {

      /***********************************/

      if(t.textContent==="Formality"){
        chrome.storage.local.set({
          type:"formality"
        })
      }else if(t.textContent==="Language Conversion"){
        chrome.storage.local.set({
          type:"language conversion"
        })
      }
      else{
        chrome.storage.local.set({
          type:"grammar checker"
        })
      }
      selectOutputArea.classList.add("operations__content");
      inputImageDiv.classList.remove("operations__content");

      operations.forEach(t => t.style.borderColor = "");
      operations.forEach(t => t.classList.remove("operations__tab--active"));
      operationContent.forEach(t => t.classList.remove("operations__content"));

      t.style.borderColor = "#2fc352";
      t.classList.add("operations__tab--active");
      if (t.classList.contains("formality")) {
        document.querySelector(".operations__content--2").classList.add("operations__content");
      }
      else if(t.classList.contains("language--conversion")){
        document.querySelector(".operations__content--1").classList.add("operations__content");
      }
      else{
        operationContent.forEach(t=>t.classList.add("operations__content"));
      }
    })
  })

  mannerElement.forEach(function (manner) {

    manner.addEventListener("click", function () {

      mannerElement.forEach(t => { t.style.borderColor = ""; t.style.borderWidth = "thin" });

      let formality = manner.id;

      chrome.storage.local.set({
        formality,
      })

      manner.style.borderColor = "#2fc352";
      manner.style.borderWidth = "revert";
    });
  });

  mannerElement2.forEach(function (manner) {

    manner.addEventListener("click", function () {

      mannerElement2.forEach(t => t.style.borderColor = "");
      manner.style.borderColor = "#2fc352";

    });
  });

  // spanElement.forEach(function (spanElement){
  //   spanElement.addEventListener("mouseenter",function(){
  //     spanElement.style.opacity="0.5";
  //   });

  //   spanElement.addEventListener("mouseout",function(){
  //     spanElement.style.opacity="1";
  //   });
  // })

  let toneArray = [];
  mannerBtn.forEach(function (t) {

    let count2 = 0;

    t.addEventListener("click", function (e) {



      if (t.style.opacity == 0.5) return;

      const arr = t.classList;

      document.querySelector(`.${arr[1]}-img`).classList.remove("cross-img2");

      count2++;

      if (count2 % 2 === 0) {
        t.style.borderColor = "";
        t.style.borderWidth = "";

        document.querySelector(`.${arr[1]}-img`).classList.add("cross-img2");

        for (let i = 0; i < toneArray.length; i++) {
          if (toneArray[i] == arr[1]) {
            toneArray.splice(i, 1);
          }
        }

        // console.log(toneArray);

        mannerBtn.forEach(el => {
          el.style.opacity = 1;
        })
      }

      if (count2 % 2 !== 0) {

        toneArray.push(arr[1]);



        t.style.borderColor = "#2fc352";
        t.style.borderWidth = "rivert";
      }

      let count = 0;

      for (let i = 0; i < mannerBtn.length; i++) {
        if (mannerBtn[i].style.borderColor == "rgb(47, 195, 82)") count++;
      }

      if (count == 3) {
        mannerBtn.forEach(el => {
          if (el.style.borderColor == "rgb(47, 195, 82)") return;

          el.style.opacity = 0.5;
        })
      }

      chrome.storage.local.set({
        toneArray,
      })
    })
  })

  const professionLanguage = function () {

    const profession = document.querySelector("#profession");
    const language = document.querySelector("#language");

    if (profession && language && profession.options && language.options) {
      chrome.storage.local.set({
        profession: profession.options[profession.selectedIndex].text,
        language: language.options[language.selectedIndex].text
      })
    }

  }

  professionLanguage();
  setInterval(professionLanguage, 1000);

  document.querySelector(".select").addEventListener("click", () => {
    selectItem = 1;
    chrome.storage.local.set({
      selectItem,
    })
  })
 
})