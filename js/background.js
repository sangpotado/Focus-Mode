/*******************************************************************************
Copyright (C) 2015 Adrien Coppola

This file is part of Focus Mode.

Focus Mode is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Focus Mode is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Focus Mode.  If not, see <http://www.gnu.org/licenses/>.
*******************************************************************************/
(function(){

  var storage = chrome.storage;

  /* Load the websites to block and pass it to the callback */
  function loadWebsites(callback){
    /* Set or get the websites to block */
    var websites;

    storage.local.get(["defaultWebsites", "customWebsites"], function(items){
      //First, load the default websites to block
      if(items.defaultWebsites === undefined){
        websites = [{"url" : "https://theporndude.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/", 'on' : true}, 

        {"url" : "https://porndudecasting.com/", 'on' : true}, 
        {"url" : "https://twitter.com/porndudecasting", 'on' : true}, 

        {"url" : "https://porndudeshop.com/?utm_source=porndude", 'on' : true}, 

        {"url" : "https://porndudecasting.com/", 'on' : true}, 
        {"url" : "https://twitter.com/porndudecasting", 'on' : true}, 

        {"url" : "https://porndudeshop.com/?utm_source=porndude", 'on' : true}, 
        {"url" : "#", 'on' : true}, 

        {"url" : "https://mygaysites.com", 'on' : true}, 

        {"url" : "https://www.pornhub.com/", 'on' : true}, 

        {"url" : "http://porndude.link/xvideos", 'on' : true}, 

        {"url" : "https://xhamster.com/", 'on' : true}, 

        {"url" : "https://www.xnxx.com/", 'on' : true}, 

        {"url" : "https://www.eporner.com/", 'on' : true}, 

        {"url" : "http://daft.sex", 'on' : true}, 

        {"url" : "https://hqporner.com/", 'on' : true}, 
 
        {"url" : "https://beeg.com/", 'on' : true}, 

        {"url" : "https://sxyprn.com/", 'on' : true}, 

        {"url" : "https://spankbang.com/", 'on' : true}, 

        {"url" : "https://www.porntrex.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/1397/porntrex", 'on' : true}, 
        {"url" : "https://xmoviesforyou.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/3192/xmoviesforyou", 'on' : true}, 
        {"url" : "https://www.porngo.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/4423/porngo", 'on' : true}, 
        {"url" : "https://www.youjizz.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/560/youjizz", 'on' : true}, 
        {"url" : "https://motherless.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/561/motherless", 'on' : true}, 
        {"url" : "https://www.redtube.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/564/redtube", 'on' : true}, 
        {"url" : "https://www.youporn.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/499/youporn", 'on' : true}, 
        {"url" : "https://pornone.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/494/vporn", 'on' : true}, 
        {"url" : "https://www.veporno.net/", 'on' : true}, 
        {"url" : "https://theporndude.com/1548/veporn", 'on' : true}, 
        {"url" : "https://www.4tube.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/555/4tube", 'on' : true}, 
        {"url" : "https://www.porntube.com/?cid=2930", 'on' : true}, 
        {"url" : "https://theporndude.com/495/porntube", 'on' : true}, 
        {"url" : "https://www.3movs.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/849/3movs", 'on' : true}, 
        {"url" : "https://www.tube8.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/565/tube8", 'on' : true}, 
        {"url" : "https://www.porndig.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/1116/porndig", 'on' : true}, 
        {"url" : "http://porndude.link/cumlouder", 'on' : true}, 
        {"url" : "https://theporndude.com/2070/cumlouder", 'on' : true}, 
        {"url" : "https://txxx.com/?promo=10718", 'on' : true}, 
        {"url" : "https://theporndude.com/1100/txxx", 'on' : true}, 
        {"url" : "https://porndoe.com/?utm_campaign=theporndude&utm_medium=trafficbuy&utm_source=theporndude", 'on' : true}, 
        {"url" : "https://theporndude.com/1251/porndoe", 'on' : true}, 
        {"url" : "https://www.pornhat.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/4083/pornhat", 'on' : true}, 
        {"url" : "https://ok.xxx/", 'on' : true}, 
        {"url" : "https://theporndude.com/5095/ok", 'on' : true}, 
        {"url" : "https://www.porn00.org/latest-vids/", 'on' : true}, 
        {"url" : "https://theporndude.com/3228/porn00", 'on' : true}, 
        {"url" : "https://www.pornhits.com/main/", 'on' : true}, 
        {"url" : "https://theporndude.com/6248/pornhits", 'on' : true}, 
        {"url" : "https://goodporn.to/", 'on' : true}, 
        {"url" : "https://fapello.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/8997/fapello", 'on' : true}, 
        {"url" : "https://simpcity.su/", 'on' : true}, 
        {"url" : "https://theporndude.com/10191/simpcity", 'on' : true}, 
        {"url" : "https://influencersgonewild.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/5543/influencersgonewild", 'on' : true}, 
        {"url" : "https://dirtyship.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/3997/dirtyship", 'on' : true}, 
        {"url" : "https://porntn.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/6069/porntn", 'on' : true}, 
        {"url" : "https://thothub.to/", 'on' : true}, 
        {"url" : "https://theporndude.com/6175/thothub", 'on' : true}, 
        {"url" : "https://nudostar.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/4960/nudostar", 'on' : true}, 
        {"url" : "https://bitchesgirls.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/5712/bitchesgirls", 'on' : true}, 
        {"url" : "https://coomer.party/", 'on' : true}, 
        {"url" : "https://theporndude.com/9170/coomer", 'on' : true}, 
        {"url" : "https://gotanynudes.com/", 'on' : true}, 
        {"url" : "https://internetchicks.com/", 'on' : true}, 
        {"url" : "https://fapfappy.com/", 'on' : true}, 
        {"url" : "https://fikfap.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/7836/fikfap", 'on' : true}, 
        {"url" : "https://fyptt.to/", 'on' : true}, 
        {"url" : "https://theporndude.com/7885/fyptt", 'on' : true}, 
        {"url" : "https://xxxtik.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/7849/xxxtik", 'on' : true}, 
        {"url" : "https://tik.porn/", 'on' : true}, 
        {"url" : "https://theporndude.com/6169/tikporn", 'on' : true}, 
        {"url" : "https://www.xfree.com/", 'on' : true}, 
   
        {"url" : "https://pdcams.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/9219/pdcams", 'on' : true}, 
        {"url" : "http://porndude.link/porndudecams", 'on' : true}, 
        {"url" : "https://theporndude.com/2288/porndudecams", 'on' : true}, 
        {"url" : "https://theporndude.com/top-sex-cam-sites", 'on' : true}, 
        {"url" : "https://theporndude.com/best-dating-sites", 'on' : true}, 
        {"url" : "http://porndude.link/adultfriendfinder", 'on' : true}, 
        {"url" : "https://theporndude.com/230/adultfriendfinder", 'on' : true}, 
        {"url" : "http://porndude.link/fuckbook", 'on' : true}, 
        {"url" : "https://theporndude.com/1106/fuckbook", 'on' : true}, 
        {"url" : "http://porndude.link/ashleymadison", 'on' : true}, 
        {"url" : "https://theporndude.com/222/ashleymadison", 'on' : true}, 
        {"url" : "http://porndude.link/fling", 'on' : true}, 
        {"url" : "https://theporndude.com/1495/fling", 'on' : true}, 
        {"url" : "http://porndude.link/benaughty", 'on' : true}, 
        {"url" : "https://theporndude.com/3423/benaughty", 'on' : true}, 
        {"url" : "https://theporndude.com/1544/sexdating", 'on' : true}, 
        {"url" : "https://theporndude.com/1544/sexdating", 'on' : true}, 
        {"url" : "https://theporndude.com/8028/uberhorny", 'on' : true}, 
        {"url" : "https://theporndude.com/8028/uberhorny", 'on' : true}, 
        {"url" : "https://theporndude.com/1657/milfaholic", 'on' : true}, 
        {"url" : "https://theporndude.com/1657/milfaholic", 'on' : true}, 
        {"url" : "https://theporndude.com/10666/friendswithbenefits", 'on' : true}, 
        {"url" : "https://theporndude.com/10666/friendswithbenefits", 'on' : true}, 
        {"url" : "https://theporndude.com/9570/heatedaffairs", 'on' : true}, 
        {"url" : "https://theporndude.com/9570/heatedaffairs", 'on' : true}, 
        {"url" : "https://theporndude.com/2991/blackcrush", 'on' : true}, 
        {"url" : "https://theporndude.com/2991/blackcrush", 'on' : true}, 
        {"url" : "https://theporndude.com/1508/swingersdateclub", 'on' : true}, 
        {"url" : "https://theporndude.com/1508/swingersdateclub", 'on' : true}, 
        {"url" : "https://theporndude.com/224/alt", 'on' : true}, 
        {"url" : "https://theporndude.com/224/alt", 'on' : true}, 
        {"url" : "https://theporndude.com/4392/tsdates", 'on' : true}, 
        {"url" : "https://theporndude.com/4392/tsdates", 'on' : true}, 
        {"url" : "https://theporndude.com/2569/swinglifestyle", 'on' : true}, 
        {"url" : "https://theporndude.com/2569/swinglifestyle", 'on' : true}, 
        {"url" : "https://theporndude.com/8756/swingerzonecentral", 'on' : true}, 


        {"url" : "http://porndude.link/brazzersnetwork", 'on' : true}, 
        {"url" : "https://theporndude.com/595/brazzers", 'on' : true}, 
        {"url" : "http://porndude.link/realitykings", 'on' : true}, 
        {"url" : "https://theporndude.com/609/realitykings", 'on' : true}, 
        {"url" : "https://porndude.link/spicevids", 'on' : true}, 
        {"url" : "https://theporndude.com/10440/spicevids", 'on' : true}, 
        {"url" : "http://porndude.link/iknowthatgirl", 'on' : true}, 
        {"url" : "https://theporndude.com/594/iknowthatgirl", 'on' : true}, 
        {"url" : "http://porndude.link/mofosnetwork", 'on' : true}, 
        {"url" : "https://theporndude.com/606/mofosnetwork", 'on' : true}, 
        {"url" : "http://porndude.link/adulttime", 'on' : true}, 
        {"url" : "https://theporndude.com/3954/adulttime", 'on' : true}, 
        {"url" : "http://porndude.link/puretaboo", 'on' : true}, 
        {"url" : "https://theporndude.com/2754/puretaboo", 'on' : true}, 
        {"url" : "http://porndude.link/xvideosred", 'on' : true}, 
        {"url" : "https://theporndude.com/5109/xvideosred", 'on' : true}, 
        {"url" : "http://porndude.link/bangbrosnetwork", 'on' : true}, 
        {"url" : "https://theporndude.com/608/bangbros", 'on' : true}, 
        {"url" : "http://porndude.link/naughtyamerica", 'on' : true}, 
        {"url" : "https://theporndude.com/599/naughtyamerica", 'on' : true}, 
        {"url" : "http://porndude.link/faphouse", 'on' : true}, 
        {"url" : "https://theporndude.com/7364/faphouse", 'on' : true}, 
        {"url" : "http://porndude.link/teamskeet", 'on' : true}, 
        {"url" : "https://theporndude.com/714/teamskeet", 'on' : true}, 
        {"url" : "http://porndude.link/evilangel", 'on' : true}, 
        {"url" : "https://theporndude.com/1246/evilangel", 'on' : true}, 
        {"url" : "http://porndude.link/vixen", 'on' : true}, 
        {"url" : "https://theporndude.com/1753/vixen", 'on' : true}, 
        {"url" : "http://porndude.link/adultprime", 'on' : true}, 
        {"url" : "https://theporndude.com/7185/adultprime", 'on' : true}, 
        {"url" : "http://porndude.link/letsdoeit", 'on' : true}, 
        {"url" : "https://theporndude.com/1529/porndoepremium", 'on' : true}, 
        {"url" : "http://porndude.link/pornbox", 'on' : true}, 
        {"url" : "https://theporndude.com/7511/pornbox", 'on' : true}, 
        {"url" : "http://porndude.link/bellesaplus", 'on' : true}, 
        {"url" : "https://theporndude.com/6173/bellesaplus", 'on' : true}, 
        {"url" : "http://porndude.link/familystrokes", 'on' : true}, 
        {"url" : "https://theporndude.com/1377/familystrokes", 'on' : true}, 
        {"url" : "https://porndude.link/pornplus", 'on' : true}, 
        {"url" : "https://theporndude.com/10499/pornplus", 'on' : true}, 
        {"url" : "http://porndude.link/babesnetwork", 'on' : true}, 
        {"url" : "https://theporndude.com/1003/babesnetwork", 'on' : true}, 
        {"url" : "http://porndude.link/digitalplayground", 'on' : true}, 
        {"url" : "https://theporndude.com/600/digitalplayground", 'on' : true}, 
        {"url" : "http://porndude.link/milehighmedia", 'on' : true}, 
        {"url" : "https://theporndude.com/4750/milehighmedia", 'on' : true}, 
        {"url" : "http://porndude.link/milfed", 'on' : true}, 
        {"url" : "https://theporndude.com/5300/milfed", 'on' : true}, 
        {"url" : "http://porndude.link/julesjordan", 'on' : true}, 
        {"url" : "https://theporndude.com/1827/julesjordan", 'on' : true}, 
        {"url" : "http://porndude.link/blacked", 'on' : true}, 
        {"url" : "https://theporndude.com/1118/blacked", 'on' : true}, 
        {"url" : "http://porndude.link/sislovesme", 'on' : true}, 
        {"url" : "https://theporndude.com/1491/sislovesme", 'on' : true}, 
        {"url" : "http://porndude.link/nubilefilms", 'on' : true}, 
        {"url" : "https://theporndude.com/604/nubilefilms", 'on' : true}, 
        {"url" : "http://porndude.link/dogfartnetwork", 'on' : true}, 
        {"url" : "https://theporndude.com/1712/dogfartnetwork", 'on' : true}, 
        {"url" : "http://porndude.link/clips4sale", 'on' : true}, 
   
        {"url" : "https://porndude2.com/", 'on' : true}, 
        {"url" : "https://theporndude.vip/", 'on' : true}, 
        {"url" : "https://pornsites.com/", 'on' : true}, 
        {"url" : "https://porngeek.com/", 'on' : true}, 

        {"url" : "http://gotpd.me/twitter", 'on' : true}, 

        {"url" : "https://pornwebmasters.com/", 'on' : true}, 
        {"url" : "https://theporndude.com/wallpapers/", 'on' : true}, 
        {"url" : "https://theporndude.com/about", 'on' : true}, 
        {"url" : "https://porndudecasting.com/", 'on' : true}, 
        {"url" : "https://twitter.com/porndudecasting", 'on' : true}, 
        {"url" : "https://theporndude.com/blog/", 'on' : true}, 


        {"url" : "http://gotpd.link/work-with-porndude", 'on' : true}, 
        {"url" : "https://theporndude.com", 'on' : true}];
        // [
        //   {"url" : "facebook.com", "on" : true},
        //   {"url" : "twitter.com", "on" : true},
        //   {"url" : "linkedin.com", "on" : true},
        //   {"url" : "instagram.com", "on" : true},
        //   {"url" : "youtube.com", "on" : true},
        //   {"url" : "dailymotion.com", "on" : true},
        //   {"url" : "flickr.com", "on" : true},
        // ];

        storage.local.set({"defaultWebsites": websites});
      }
      else {
        websites = items.defaultWebsites;
      }

      //Then load the customs websites to block
      if(items.customWebsites === undefined){
        storage.local.set({"customWebsites": []});
      }
      else {
        websites = websites.concat(items.customWebsites);
      }

      //Call the callback and pass the resulting array
      if(typeof callback === "function"){
        callback(websites);
      }
    });
  }

  /* Check if the url contains words from the keywords array */
  function urlContains(url, keywords){
    var result = false;

    for(var index in keywords){
      if(keywords[index].on && url.indexOf(keywords[index].url) != -1){
        result = true;
        break;
      }
    }

    return result;
  }

  /* Redirect if necessary */
  function analyzeUrl(details){
    storage.local.get("on", function(item){
      if(item.on === true){

        loadWebsites(function(websites){
          /* FrameId test to be sure that the navigation event doesn't come from a subframe */
          if(details.frameId === 0 && urlContains(details.url, websites)){
            var id = details.tabId;

            chrome.tabs.update(id, {"url": "html/message.html"});

            /* update the number of blocked attempts */
            storage.local.get("blocked", function(item){
              storage.local.set({"blocked": item.blocked+1});
              console.log(item);
            });
          }
        });
      }
    });
  }

  /* Attach event callback */
  chrome.webNavigation.onCommitted.addListener(analyzeUrl);

  storage.local.get("on", function(item){
    if(item.on === undefined){
      /* deactivated by default & set the number of blocked attempts*/
      storage.local.set({"on": false, "blocked": 0});
    }
  });

  /* Load on start */
  loadWebsites();
})();
