import { Injectable } from '@angular/core';
import { NewsModel } from './newsModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isShowSearchCard:boolean=false;
  isFocusInput:boolean=false;
  isClickTopic:string="Latest";
  isFollowingTopic:boolean=false;
  topics:string[]=["Latest","India","World","Business","Technology","Entertainment","Sports","Science","Health"];
  followHeading:string[]=["Topics & Sources","Saved searches","Saved stories"];
  followTopicHeader:{name:string,topicArray:string[]}[]=[
    {
      name:"Topics",
      topicArray:["India"]
    },
    {
      name:"Local",
      topicArray:[]
    },
    {
      name:"Sources",
      topicArray:[]
    }];
  newsContent:NewsModel[]=[{
    topic : "Business",
    publisher : "moneycontrol",
    title : "Market LIVE Updates: Indices trade flat amid volatility; RIL, Infosys, Tata Motors most active",
    url : "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-june-30-latest-news-bse-nse-sensex-nifty-covid-coronavirus-wonderla-holidays-infosys-gr-infraprojects-mtar-technologies-minda-industries-pba-infrastructure-8758621.html",
    time : "20 minutes ago",
    image:"assets/sensex.jpg",
    reference : [{
      publisher : "The Economic Times",
      title : "Sensex gains 180 points, Nifty50 above 15,800; Tata Steel, Power Grid rise 1% each",
      time : "2 hours ago",
      url :"https://economictimes.indiatimes.com/markets/stocks/news/sensex-gains-180-points-nifty50-above-15800-tata-steel-power-grid-rise-1-each/videoshow/92560680.cms",
    },{
      publisher : "BusinessToday",
      title : "Bulls vs Bears: Here's what to expect on Dalal Street today",
      time : "4 hours ago",
      url:"https://www.businesstoday.in/markets/market-commentary/story/bulls-vs-bears-heres-what-to-expect-on-dalal-street-today-339783-2022-06-30"
    }
  ],
  fullCover:"https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pBakpfRUJSR3B4cFMza1JucGhTZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "India",
    publisher : "NDTV",
    title : "Who Next After Uddhav Thackeray? Sena Rebels May Meet Governor, BJP Waits",
    time : "40 minutes ago",
    image:"assets/uddhav.png",
    url :"https://www.ndtv.com/india-news/maharashtra-crisis-shiv-sena-rebel-eknath-shinde-to-meet-mlas-today-may-meet-governor-say-sources-day-after-uddhav-thackeray-resigns-as-chief-minister-3113600",
    reference : [{
      publisher : "The Indian Express",
      title : "Rebel Sena MLAs land in Goa, Shinde to discuss next move",
      time : "5 hours ago",
      url : "https://indianexpress.com/article/cities/goa/rebel-sena-mlas-land-in-goa-shinde-to-discuss-next-move-7999630/"
    },{
      publisher : "India Today",
      title : "Need to strengthen anti-defection law: SC during Maharashtra floor test hearing",
      time : "3 hours ago",
      url : "https://www.indiatoday.in/law/story/maharashtra-political-crisis-sc-hearing-floor-test-uddhav-thackeray-anti-defection-law-1968392-2022-06-30"
    }
  ],
  fullCover : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k3MjliRUJSRzUzSWhIRUE1NVJDZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "Entertainment",
    publisher : "Indiaglitz",
    title : "Massive! Suriya becomes the first Tamil actor invited to the Oscars",
    url : "https://www.indiaglitz.com/oscars-2022-invitation-first-kollywood-actor-suriya-bollywood-actress-kajol-tamil-news-318962",
    time : "15 hours ago",
    image:"assets/suriya.jpg",
    reference : [{
      publisher : "Hindustan Times",
      title : "Suriya 'humbly' accepts The Academy’s invitation to join Oscars committee; Kamal Haasan says, 'be proud brother'",
      time : "16 hours ago",
      url :"https://www.hindustantimes.com/entertainment/tamil-cinema/suriya-humbly-accepts-the-academy-s-invitation-to-join-oscars-committee-101656555685328.html",
    },{
      publisher : "The Economic Times",
      title : "Kamal Haasan 'proud' of Suriya's Oscar panel entry,TN CM Stalin hails 'Jai Bhim' actor for highlighting social themes on screen",
      time : "20 hours ago",
      url:"https://economictimes.indiatimes.com/magazines/panache/kamal-haasan-proud-of-suriyas-oscar-panel-entry-tn-cm-stalin-hails-jai-bhim-actor-for-highlighting-social-themes-on-screen/articleshow/92563087.cms"
    }
  ],
  fullCover:"https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pCdlpyRUJSSEQzLXpjTV9BQ3JDZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "Technology",
    publisher : "mint",
    title : "Apple iPhone 12 prices slashed on Amazon. Here's how to avail the discount",
    url : "https://www.livemint.com/news/india/apple-iphone-12-prices-slashed-on-amazon-ahead-of-iphone-14-launch-here-s-how-to-avail-the-discount-11656579643318.html",
    time : "20 hours ago",
    image:"assets/apple.jpeg",
    reference : [{
      publisher : "HI Tech",
      title : "iPhone 13 mini, iPhone 12 mini price cuts are here! Know how to nab these iphone deals",
      time : "22 hours ago",
      url :"https://tech.hindustantimes.com/how-to/iphone-13-mini-iphone-12-mini-prices-are-here-know-how-to-nab-these-iphone-deals-71656578470057.html",
    },{
      publisher : "91mobiles",
      title : "iPhone 13 mini available at Rs 64,999 on Flipkart, but here’s why you should wait for a better deal",
      time : "23 hours ago",
      url:"https://www.91mobiles.com/hub/iphone-13-mini-price-cut-india-flipkart-wait-or-buy/"
    }
  ],
  fullCover:"https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k1LW9hX0JSRUNmVXRYeWM1SUx5Z0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "Sports",
    publisher : "NDTV",
    title : "England vs India, 5th Test: James Anderson Returns As England Name Playing XI",
    url : "https://sports.ndtv.com/england-vs-india-2022/eng-vs-ind-5th-test-james-anderson-returns-as-england-name-playing-xi-3114909",
    time : "20 hours ago",
    image:"assets/India-England.png",
    reference : [{
      publisher : "cric buzz",
      title : "Never been in a dressing-room before with everyone being so calm: Anderson",
      time : "22 hours ago",
      url :"https://www.cricbuzz.com/cricket-news/122884/never-been-in-a-dressing-room-before-so-calm-james-anderson-england-cricket-cricbuzzcom",
    },{
      publisher : "ESPN cricinfo",
      title : "Sam Billings retained, James Anderson returns as Ben Foakes, Jamie Overton miss out for India Test",
      time : "22 hours ago",
      url:"https://www.espncricinfo.com/story/eng-vs-ind-5th-test-sam-billings-retained-james-anderson-returns-as-ben-foakes-jamie-overton-miss-out-1322496"
    }
  ],
  fullCover:"https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pybUxmREJSR1lKYVZHeTJybW95Z0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "World",
    publisher : "The Hindu",
    title : "Russia-Ukraine crisis live updates | NATO refits in Eastern Europe against Russia",
    url : "https://www.thehindu.com/news/international/russia-ukraine-crisis-live-updates-dozens-missing-after-strike-on-ukraine-mall-russia-presses-attacks-on-east/article65578475.ece",
    time : "21 hours ago",
    image:"assets/ukraine-blast.jpg",
    reference : [{
      publisher : "The Times of India",
      title : "Russia Ukraine War News LIVE Updates: Russia steps up attacks in Ukraine after Nato summit",
      time : "1 hours ago",
      url :"https://timesofindia.indiatimes.com/world/europe/russia-ukraine-war-news-live-updates-june-30/liveblog/92555468.cms",
    },{
      publisher : "NDTV",
      title : "On Camera, People Run For Cover In Ukraine Park As Russian Missiles Hit Shopping Mall",
      time : "Yesterday",
      url:"https://www.ndtv.com/world-news/on-camera-people-run-for-cover-in-ukraine-park-as-russian-missiles-hit-shopping-mall-3110272"
    }
  ],
  fullCover : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lkbmNqQUJSR1ctOHQ4ek0xSEtTZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "India",
    publisher : "NDTV",
    title : "Chief Minister Eknath Shinde's 1st Move Meets Key BJP Demand: 10 Points",
    time : "Yesterday",
    image:"assets/Eknath-Shinde.jpg",
    url :"https://www.ndtv.com/india-news/oath-taken-maharashtra-chief-minister-eknath-shinde-in-goa-to-get-his-team-back-3117133",
    reference : [{
      publisher : "OutlookIndia",
      title : "Maharashtra's Controversial Aarey Forest Project, Why Is It Resurfacing Time And Again?",
      time : "Yesterday",
      url : "https://www.outlookindia.com/national/maharashtra-s-controversial-aarey-forest-project-why-is-it-resurfacing-time-and-again--news-205977"
    },{
      publisher : "Free Press Journal",
      title : "Shinde-Fadnavis government to build metro car shed in Mumbai's Aarey colony",
      time : "Yesterday",
      url : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pEalpfRkJSSG1VU1BxdXNRdUlpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
    }
  ],
  fullCover : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2k3MjliRUJSRzUzSWhIRUE1NVJDZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "India",
    publisher : "IndiaToday",
    title : "Waterlogging reported as heavy rain lashes parts of Mumbai; Orange alert issued",
    time : "Yesterday",
    image:"assets/mumbai.jpg",
    url :"https://www.indiatoday.in/cities/mumbai/story/monsoon-heavy-rain-in-mumbai-traffic-train-bus-hit-waterlogging-1968788-2022-07-01",
    reference : [{
      publisher : "ZEE NEWS",
      title : "Rainfall alert: Heavy rains in Mumbai, orange alert in Delhi - check IMD's weather prediction for next few days",
      time : "Yesterday",
      url : "https://zeenews.india.com/india/rainfall-alert-heavy-rains-in-mumbai-orange-alert-in-delhi-check-imds-weather-prediction-for-next-few-days-2480131.html"
    },{
      publisher : "Hindustan Times",
      title : "Mumbai sees waterlogging after heavy showers, more rain in forecast | Watch",
      time : "Yesterday",
      url : "https://www.hindustantimes.com/cities/mumbai-news/mumbai-rain-imd-issues-alerts-as-heavy-showers-lash-city-all-you-need-to-know-101656637429554.html"
    }
  ],
  fullCover : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pnMDc3RUJSRlJqZm9MVWhTaVNpZ0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  },{
    topic : "World",
    publisher : "NDTV",
    title : "Putin's Fresh Warning To Finland, Sweden On Installing NATO Infrastructure",
    time : "Yesterday",
    image:"assets/putin.jpg",
    url :"https://www.ndtv.com/world-news/russia-president-vladimir-putins-fresh-warning-to-finland-sweden-on-installing-nato-infrastructure-3113440",
    reference : [{
      publisher : "ZEE NEWS",
      title : "Russia-Ukraine war: President Putin warns Sweden and Finland over NATO troops and infrastructure",
      time : "Yesterday",
      url : "https://zeenews.india.com/world/russia-ukraine-war-president-putin-warns-sweden-and-finland-over-nato-troops-and-infrastructure-2479651.html"
    },{
      publisher : "The Times of India",
      title : "In big shift, Nato invites Finland,Sweden to join",
      time : "Yesterday",
      url : "https://timesofindia.indiatimes.com/world/rest-of-world/in-big-shift-nato-invites-finland-sweden-to-join/articleshow/92557166.cms"
    }
  ],
  fullCover : "https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2pldHRYREJSRzVJQUhsNUR5bXB5Z0FQAQ?hl=en-IN&gl=IN&ceid=IN%3Aen"
  }];
  constructor() { }
}
