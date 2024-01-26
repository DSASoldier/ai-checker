
chrome.storage.local.set({
  formality:"",
  inputElementContent:"",
  isExpired:true,
  language:"",
  set:"",
  key:"",
  optionsApiKey:"",
  profession:"",
  toLanguage:"",
  toneArray:[],
  type:"",
})

const setBadge=function()
{
  chrome.storage.local.get(["isExpired"],(res)=>{
    if(res.isExpired){
      chrome.action.setBadgeText(
        {text:"expired"},
      )
    }
    else{
      chrome.action.setBadgeText(
        {text:""},
      )
    }
  })
}

setBadge();
setInterval(setBadge,1000);
