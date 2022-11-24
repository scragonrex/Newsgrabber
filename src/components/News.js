import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import { CircularProgress, Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';

const News = (props) => {
  const [show, setshow] = useState(false)
  // const [articles, setArticles] = useState([
    const articles=[
      {
        "_id": "51ef25074f9be9fb33ddc10c69de3dbc",
        "_score": 23.149832,
        "author": null,
        "clean_url": "kitv.com",
        "country": "NA",
        "language": "en",
        "link": "http://www.kitv.com/story/42196143/to-cap-off-his-amazing-week-elon-musk-just-made-770-million",
        "published_date": "2020-06-01 16:11:00",
        "rank": "10592",
        "rights": "Copyright 2000 -  2020 WorldNow and KITV",
        "summary": "By Chris Isidore, CNN Business Elon Musk had a big week.",
        "title": "To cap off his amazing week, Elon Musk just made $770 million",
        "topic": "NA"
      },
      {
        "_id": "5ccb4eaa67ad6cf4f326c3b8aa0e5652",
        "_score": 22.824793,
        "author": null,
        "clean_url": "cnn.com",
        "country": "US",
        "language": "en",
        "link": "http://rss.cnn.com/~r/rss/cnn_topstories/~3/6gcYo3nQDbM/elon-musk-future-of-space-travel-2008-vault-orig.cnn-business",
        "published_date": "2020-06-01 14:09:22",
        "rank": "55",
        "rights": "Copyright (c) 2020 Turner Broadcasting System, Inc. All Rights Reserved.",
        "summary": "In an early interview with CNN, SpaceX founder Elon Musk explained how he could work with NASA and his vision for the future of space travel.",
        "title": "Listen to Elon Musk's early predictions about space travel",
        "topic": "news"
      },
      {
        "_id": "c348e0f6158456ddee0d76ead53e4b34",
        "_score": 22.734735,
        "author": "Suzanne O'Halloran",
        "clean_url": "foxbusiness.com",
        "country": "NA",
        "language": "en",
        "link": "http://feeds.foxbusiness.com/~r/foxbusiness/latest/~3/cJopa48TZLI/teslas-elon-musk-hits-769-million-payday",
        "published_date": "2020-05-29 03:51:59",
        "rank": "1125",
        "rights": null,
        "summary": "Elon Musk's decision to not take a salary is paying off.",
        "title": "Tesla's Elon Musk hits $769 million payday",
        "topic": "business"
      },
      {
        "_id": "24e173ea731fe226de87d82b781e7ed7",
        "_score": 22.544767,
        "author": "Tamara Vlahovic",
        "clean_url": "thefrisky.com",
        "country": "NA",
        "language": "en",
        "link": "https://thefrisky.com/elon-musk-and-grimes-changed-their-babys-name/",
        "published_date": "2020-05-26 07:18:47",
        "rank": "9073",
        "rights": null,
        "summary": "Grimes and Elon Musk made quite a stir when they decided to name their newborn baby X Æ…\n \nThe post Elon Musk and Grimes Changed Their Baby's Name appeared first on The Frisky.",
        "title": "Elon Musk and Grimes Changed Their Baby's Name",
        "topic": "entertainment"
      },
      {
        "_id": "2aa7f4fcaf22817dfd7c44ea32a53843",
        "_score": 22.375732,
        "author": "Jehran Daniel",
        "clean_url": "iol.co.za",
        "country": "ZA",
        "language": "en",
        "link": "https://www.iol.co.za/news/science/cyril-ramaphosa-applauds-elon-musk-on-historic-space-flight-48799098",
        "published_date": "2020-06-01 10:53:00",
        "rank": "2141",
        "rights": "INDEPENDENT MEDIA",
        "summary": "President Cyril Ramaphosa has offered his congratulations to Pretoria-born and raised tech billionaire and engineer, Elon Musk on his company's first commercial flight into space.",
        "title": "Cyril Ramaphosa applauds Elon Musk on historic space flight",
        "topic": "news"
      },
      {
        "_id": "b595b3c70533daaa0722f79d3c7e9c4b",
        "_score": 22.358946,
        "author": "Monit Khanna",
        "clean_url": "indiatimes.com",
        "country": "IN",
        "language": "en",
        "link": "https://www.indiatimes.com/technology/science-and-future/elon-musk-gets-emotional-after-spacex-crew-dragon-launch-recounts-18-year-struggle-514623.html",
        "published_date": "2020-06-01 14:44:20",
        "rank": "340",
        "rights": "Copyright: © 2020 Times Internet Limited. Powered by Indiatimes Lifestyle Network. All rights reserved, https://www.indiatimes.com/privacypolicy",
        "summary": "Elon Musk was overwhelmed with emotions upon the successful launch as well as docking of the Crew Dragon capsule, which was later renamed by the astronauts as Endeavour.",
        "title": "Elon Musk Gets Emotional After SpaceX Crew Dragon Launch, Recounts 18 Year Struggle",
        "topic": "NA"
      },
      {
        "_id": "a8412aa84c43fb4a434b04059c35ba1c",
        "_score": 22.323912,
        "author": null,
        "clean_url": "marketwatch.com",
        "country": "NA",
        "language": "en",
        "link": "http://feeds.marketwatch.com/~r/marketwatch/bulletins/~3/5wFhK6vLyrM/go",
        "published_date": "2020-05-28 21:15:48",
        "rank": "294",
        "rights": "Copyright 2020, MarketWatch, Inc.",
        "summary": "Tesla's CEO Elon Musk to get payout of nearly $800 million",
        "title": "Tesla's CEO Elon Musk to get payout of nearly $800 million",
        "topic": "NA"
      },
      {
        "_id": "0f4acda1f3b8c5da4c127abc6be44a8a",
        "_score": 22.314686,
        "author": "Jami Ganz",
        "clean_url": "nydailynews.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.nydailynews.com/news/national/ny-elon-musk-770-million-stock-20200529-bej7g54cqncydcikx6hwghz5gy-story.html#ed=rss_www.nydailynews.com/arcio/rss/category/news/",
        "published_date": "2020-05-29 16:08:48",
        "rank": "454",
        "rights": "© 2020 New York Daily News",
        "summary": "Elon Musk is driving all the way to the bank. Again.",
        "title": "Elon Musk gets whopping $770M in Tesla stock as company achieves performance goals",
        "topic": "news"
      },
      {
        "_id": "bbabfd852d1313046819125561537fa5",
        "_score": 22.277342,
        "author": null,
        "clean_url": "upi.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.upi.com/Entertainment_News/2020/05/25/Grimes-Elon-Musk-tweak-their-infants-unusual-name/7081590427701/",
        "published_date": "2020-05-25 18:30:33",
        "rank": "1135",
        "rights": "Copyright (c) 2020 United Press International, Inc. All Rights Reserved.",
        "summary": "Singer Grimes and businessman Elon Musk have slightly changed the name of their infant son.",
        "title": "Grimes, Elon Musk tweak their infant's unusual name",
        "topic": "entertainment"
      },
      {
        "_id": "ecdce40ca8f31402387fbc3098f29e89",
        "_score": 22.254593,
        "author": "The Associated Press",
        "clean_url": "firstpost.com",
        "country": "IN",
        "language": "en",
        "link": "https://www.firstpost.com/tech/science/nasa-astronauts-reach-iss-spacexs-elon-musk-says-its-the-first-step-on-a-journey-toward-a-civilization-on-mars-8433711.html",
        "published_date": "2020-06-01 06:47:25",
        "rank": "2371",
        "rights": "https://www.firstpost.com",
        "summary": "NASA astronauts reach ISS, SpaceX's Elon Musk says its the 'first step on a journey toward a civilization on Mars'",
        "title": "NASA astronauts reach ISS, SpaceX's Elon Musk says its the 'first step on a journey toward a civilization on Mars'",
        "topic": "tech"
      },
      {
        "_id": "59712d1632499a30ba956aec56a995d1",
        "_score": 22.232811,
        "author": "Felix Allen",
        "clean_url": "thesun.co.uk",
        "country": "NA",
        "language": "en",
        "link": "https://www.thesun.co.uk/news/6967264/elon-musk-net-worth-spacex-tesla/",
        "published_date": "2020-05-31 17:41:05",
        "rank": "475",
        "rights": null,
        "summary": "ELON Musk is the eccentric billionaire behind some of the world&#8217;s most innovative companies including SpaceX and Tesla. He hit the headlines earlier this year by naming his newborn baby X Æ A-12 before launching USA&#8217;s first manned spacecraft into orbit since 2011. What is Elon Musk&#8217;s net worth? Self-made billionaire Elon Musk, 48, is [&#8230;]",
        "title": "Elon Musk's net worth: How did the SpaceX founder make his money?",
        "topic": "world"
      },
      {
        "_id": "391abaa1617289b24713c4c82e05d167",
        "_score": 22.20645,
        "author": null,
        "clean_url": "onenewspage.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.onenewspage.com/video/20200529/13081503/Inside-Elon-Musk-780-Million-Tesla-Payout.htm",
        "published_date": "2020-05-29 14:34:13",
        "rank": "40499",
        "rights": "(c) copyright One News Page",
        "summary": "And that's just the first payout for Elon Musk.",
        "title": "Inside Elon Musk's $780 Million Tesla Payout: Video",
        "topic": "news"
      },
      {
        "_id": "0b71538edfa6c4cb4e191f44ed68587c",
        "_score": 22.175125,
        "author": "alex",
        "clean_url": "albawaba.com",
        "country": "JO",
        "language": "en",
        "link": "https://www.albawaba.com/entertainment/elon-musk-and-grimes-reveal-their-sons-nick-name-and-it-much-easier-his-real-name",
        "published_date": "2020-06-01 07:08:14",
        "rank": "6865",
        "rights": null,
        "summary": "The singer and Tesla CEO welcomed their first child together in Ma  &nbsp;Earlier this month Canadian singer Grimes and Tesla CEO Elon Musk welcomed their first child, a baby boy named&nbsp; X Æ A-12 Musk...",
        "title": "Elon Musk and Grimes' Reveal Their Son's Nickname And it is Much Easier Than His Real Name",
        "topic": "NA"
      },
      {
        "_id": "1c7ea738c9df49695de008d5559a059f",
        "_score": 22.158026,
        "author": "Larry Light, Contributor",
        "clean_url": "forbes.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.forbes.com/sites/larrylight/2020/06/01/the-natural-elon-musks-non-traditional-approach-to-tesla-advertising/",
        "published_date": "2020-06-01 16:16:06",
        "rank": "53",
        "rights": "Copyright 2020 Forbes LLC",
        "summary": "some people believe that Tesla should spend more on traditional advertising. Elon Musk prefers to invest in favor of his Twitter account of 35 million followers and other non-traditional methods.",
        "title": "The Natural: Elon Musk's Non-Traditional Approach to Tesla Advertising",
        "topic": "NA"
      },
      {
        "_id": "db295f5a961dfd34a81a5611ab7ddc6a",
        "_score": 22.158026,
        "author": "Larry Light, Contributor",
        "clean_url": "forbes.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.forbes.com/sites/larrylight/2020/06/01/the-natural-elon-musks-non-traditional-approach-to-tesla-advertising/",
        "published_date": "2020-06-01 16:16:06",
        "rank": "53",
        "rights": "Copyright 2020 Forbes LLC",
        "summary": "some people believe that Tesla should spend more on traditional advertising. Elon Musk prefers to invest in favor of his Twitter account of 35 million followers and other non-traditional methods.",
        "title": "The Natural: Elon Musk's Non-Traditional Approach To Tesla Advertising",
        "topic": "NA"
      },
      {
        "_id": "098b298f1f8778a6ca12cce7f0e6dc87",
        "_score": 22.116726,
        "author": null,
        "clean_url": "cnn.com",
        "country": "US",
        "language": "en",
        "link": "http://rss.cnn.com/~r/rss/cnn_latest/~3/7sEh7uTSKGo/index.html",
        "published_date": "2020-05-31 17:42:29",
        "rank": "55",
        "rights": "Copyright (c) 2020 Turner Broadcasting System, Inc. All Rights Reserved.",
        "summary": "Read CNN's Fast Facts about Elon Musk and learn more about the billionaire entrepreneur behind Tesla, SpaceX and SolarCity.",
        "title": "Elon Musk Fast Facts",
        "topic": "NA"
      },
      {
        "_id": "8a4284b3ba9c9b3b8f8b8ce0e8846375",
        "_score": 22.088516,
        "author": null,
        "clean_url": "indiatoday.in",
        "country": "NA",
        "language": "en",
        "link": "https://www.indiatoday.in/trending-news/story/elon-musk-and-grimes-slightly-change-their-baby-s-name-here-s-how-they-write-it-now-1681926-2020-05-26?utm_source=rss",
        "published_date": "2020-05-26 04:35:22",
        "rank": "2743",
        "rights": null,
        "summary": "Elon Musk and Grimes have slightly changed their baby's name",
        "title": "Elon Musk and Grimes slightly change their baby's name. Here's how they write it now",
        "topic": "NA"
      },
      {
        "_id": "7a5a5764427ab98ffc5b986f64c5aff6",
        "_score": 21.995304,
        "author": "alex",
        "clean_url": "albawaba.com",
        "country": "JO",
        "language": "en",
        "link": "https://www.albawaba.com/entertainment/elon-musk-and-grimes-reveal-their-sons-nick-name-and-it-much-easier-his-real-name",
        "published_date": "2020-06-01 07:08:14",
        "rank": "6865",
        "rights": null,
        "summary": "The singer and Tesla CEO welcomed their first child together in Ma  &nbsp;Earlier this month Canadian singer Grimes and Tesla CEO Elon Musk welcomed their first child, a baby boy named&nbsp; X Æ A-12 Musk...",
        "title": "Elon Musk and Grimes' Reveal Their Son's Nick Name And it is Much Easier Than His Real Name",
        "topic": "NA"
      },
      {
        "_id": "8bd09fc6f81906ae5dad42719c1d058d",
        "_score": 21.98943,
        "author": "Alex Winter",
        "clean_url": "thesun.co.uk",
        "country": "NA",
        "language": "en",
        "link": "https://www.thesun.co.uk/news/11552046/elon-musks-children-baby-grimes/",
        "published_date": "2020-05-25 14:19:19",
        "rank": "475",
        "rights": null,
        "summary": "BILLIONAIRE Elon Musk and his girlfriend Grimes welcomed a baby boy earlier this month. It&#8217;s the 31-year-old singer&#8217;s first child and Musk&#8217;s seventh. Who is baby Musk? On May 5, 2020, Elon Musk and his partner Grimes announced the arrival of their little boy. The pair initially named their newborn child X Æ A-12. The [&#8230;]",
        "title": "Meet Elon Musk's six children as he welcomes baby son with singer Grimes",
        "topic": "world"
      },
      {
        "_id": "8bb8c90ab607842fb105c149e9efe1a0",
        "_score": 21.896975,
        "author": "Bang Showbiz",
        "clean_url": "iol.co.za",
        "country": "ZA",
        "language": "en",
        "link": "https://www.iol.co.za/lifestyle/family/baby/grimes-and-elon-musk-changes-sons-name-to-comply-with-california-law-48488061",
        "published_date": "2020-05-25 16:00:00",
        "rank": "2141",
        "rights": "INDEPENDENT MEDIA",
        "summary": "Grimes and Elon Musk have been forced to change their baby's name to comply with California law.",
        "title": "Grimes and Elon Musk changes son's name to comply with California law",
        "topic": "NA"
      },
      {
        "_id": "695256afbe684016779803f5c0f38b44",
        "_score": 21.876682,
        "author": "Nancy Dillon",
        "clean_url": "nydailynews.com",
        "country": "NA",
        "language": "en",
        "link": "http://feeds.nydailynews.com/~r/nydnrss/news/national/~3/9nZp9EUHBRg/ny-elon-musk-and-grimes-change-name-of-newborn-son-20200525-5sydonqx3jdx5fsewg6prl3equ-story.html",
        "published_date": "2020-05-25 16:45:37",
        "rank": "454",
        "rights": "© 2020 New York Daily News",
        "summary": "Elon Musk and Grimes have upgraded their newborn son's unique name to comply with California law.",
        "title": "Grimes and Elon Musk retrofit newborn son's name to comply with California ban",
        "topic": "NA"
      },
      {
        "_id": "75798aa448c58afecd05dd75828ce859",
        "_score": 21.862469,
        "author": "Matthew Rozsa",
        "clean_url": "salon.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.salon.com/2020/05/29/billionaire-ceo-elon-musk-gets-a-performance-based-payout-as-economy-sputters/",
        "published_date": "2020-05-29 20:20:03",
        "rank": "708",
        "rights": null,
        "summary": "Elon Musk's $775 million payoff comes as billionaires have consolidated their wealth amid the pandemic",
        "title": "Billionaire CEO Elon Musk gets a nine-figure payout as economy sputters",
        "topic": "NA"
      },
      {
        "_id": "4ade7898f2339b06492ff6d7202fee5f",
        "_score": 21.839981,
        "author": null,
        "clean_url": "foxbusiness.com",
        "country": "NA",
        "language": "en",
        "link": "http://feeds.foxbusiness.com/~r/foxbusiness/video/~3/ZZTf1RnNwCQ/",
        "published_date": "2020-05-29 15:33:11",
        "rank": "1125",
        "rights": null,
        "summary": "FOX Business' Stuart Varney says his initially opinion on Tesla CEO Elon Musk was wrong.",
        "title": "Varney: Elon Musk isn't just a ‘showman,' he's a ‘game changer'",
        "topic": "NA"
      },
      {
        "_id": "3678b312959b14cdf0031c095bfa0453",
        "_score": 21.79329,
        "author": null,
        "clean_url": "cnn.com",
        "country": "US",
        "language": "en",
        "link": "https://www.cnn.com/videos/business/2020/05/29/elon-musk-future-of-space-travel-2008-vault-orig.cnn-business",
        "published_date": "2020-05-30 17:52:50",
        "rank": "55",
        "rights": "Copyright (c) 2020 Turner Broadcasting System, Inc. All Rights Reserved.",
        "summary": "In an early interview with CNN, SpaceX founder Elon Musk explained how he could work with NASA and his vision for the future of space travel.",
        "title": "Elon Musk's space travel predictions",
        "topic": "NA"
      },
      {
        "_id": "7d9eaf825e4095281a91cefd786d32b5",
        "_score": 21.783888,
        "author": null,
        "clean_url": "cbsnews.com",
        "country": "US",
        "language": "en",
        "link": "https://www.cbsnews.com/news/spacex-elon-musk-founder-60-minutes-interview/",
        "published_date": "2020-05-30 16:37:26",
        "rank": "214",
        "rights": null,
        "summary": "As SpaceX prepares to launch humans into orbit for first time, revisit Elon Musk's 2012 interview with 60 Minutes' Scott Pelley.",
        "title": "SpaceX's Elon Musk: 2012 60 Minutes Interview",
        "topic": "news"
      },
      {
        "_id": "85ee71a1e8a88c8bb463c601c1dcfd68",
        "_score": 21.778545,
        "author": "The New York Times",
        "clean_url": "firstpost.com",
        "country": "IN",
        "language": "en",
        "link": "https://www.firstpost.com/tech/science/superhero-spacesuits-elon-musks-spacex-astronaut-suit-is-like-a-tuxedo-for-the-starship-enterprise-8428671.html",
        "published_date": "2020-05-30 13:19:04",
        "rank": "2371",
        "rights": "https://www.firstpost.com",
        "summary": "Superhero spacesuits: Elon Musk's SpaceX astronaut suit is like a Tuxedo for the Starship Enterprise",
        "title": "Superhero spacesuits: Elon Musk's SpaceX astronaut suit is like a Tuxedo for the Starship Enterprise",
        "topic": "tech"
      },
      {
        "_id": "816fdd5078564b5deaefac5ba8473673",
        "_score": 21.682632,
        "author": null,
        "clean_url": "wfaa.com",
        "country": "NA",
        "language": "en",
        "link": "http://rssfeeds.wfaa.com/~/625205128/0/wfaa/entertainment~Elon-Musk-and-Grimes-have-slightly-tweaked-their-babys-name",
        "published_date": "2020-05-26 12:32:56",
        "rank": "4703",
        "rights": null,
        "summary": "Singer Grimes and SpaceX and Tesla CEO Elon Musk changed their newborn's name to include Roman numerals.\n        ",
        "title": "Elon Musk and Grimes have slightly tweaked their baby's name",
        "topic": "NA"
      },
      {
        "_id": "78975856864781eb2f0f42a880c01490",
        "_score": 21.681318,
        "author": null,
        "clean_url": "cnbc.com",
        "country": "US",
        "language": "en",
        "link": "https://www.cnbc.com/2020/05/28/tesla-sent-20-employees-to-temp-at-spacex-filing-shows.html",
        "published_date": "2020-05-29 15:59:37",
        "rank": "162",
        "rights": null,
        "summary": "Elon Musk runs both Tesla and SpaceX, and a new filing reveals that the companies are increasingly working together.",
        "title": "Tesla sent 20 staffers to SpaceX, Elon Musk's other company, filing shows",
        "topic": "tech"
      },
      {
        "_id": "3008a5c33451a0c970f59cf3cd32928a",
        "_score": 21.678267,
        "author": null,
        "clean_url": "cbsnews.com",
        "country": "US",
        "language": "en",
        "link": "https://www.cbsnews.com/video/2012-spacex-elon-musks-race-to-space/",
        "published_date": "2020-05-27 16:53:07",
        "rank": "214",
        "rights": null,
        "summary": "From PayPal to electric cars to rockets, billionaire entrepreneur Elon Musk wants his company, SpaceX, to build America's next manned spacecraft",
        "title": "2012: SpaceX: Elon Musk's race to space",
        "topic": "news"
      },
      {
        "_id": "ef4b718ffea05ed74d3369a65404ebb3",
        "_score": 21.676544,
        "author": "Stephanie Nolasco",
        "clean_url": "foxnews.com",
        "country": "US",
        "language": "en",
        "link": "https://www.foxnews.com/entertainment/elon-musk-and-grimes-slightly-change-babys-name-roman-numerals-look-better",
        "published_date": "2020-05-25 17:01:29",
        "rank": "243",
        "rights": null,
        "summary": "Elon Musk and his girlfriend Grimes have made a slight change to their newborn son's unconventional name.",
        "title": "Elon Musk and Grimes slightly change baby's name: ‘Roman numerals look better'",
        "topic": "news"
      },
      {
        "_id": "10c33c586bb3ab9981e1df9757dbe4d6",
        "_score": 21.676544,
        "author": "Melissa Roberto",
        "clean_url": "foxnews.com",
        "country": "US",
        "language": "en",
        "link": "https://www.foxnews.com/entertainment/grimes-nickname-newborn-son-elon-musk",
        "published_date": "2020-05-30 15:08:17",
        "rank": "243",
        "rights": null,
        "summary": "Grimes revealed the nickname she has given her and Elon Musk's newborn son.",
        "title": "Grimes reveals nickname of newborn son she shares with Elon Musk after changing unique moniker",
        "topic": "news"
      },
      {
        "_id": "88a881afa81bbe0e1eb028c384e59731",
        "_score": 21.647305,
        "author": null,
        "clean_url": "techtimes.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.techtimes.com/articles/249861/20200525/tesla-ceo-elon-musk-and-singer-grimes-have-changed-their-babys-name.htm",
        "published_date": "2020-05-25 15:00:00",
        "rank": "2915",
        "rights": "All articles are copyrighted by Tech Times",
        "summary": "If X Æ A-12 isn't complicated enough, Elon Musk and Grimes have changed their baby's name.",
        "title": "Tesla CEO Elon Musk and Singer Grimes Have Changed Their Baby's Name",
        "topic": "tech"
      },
      {
        "_id": "c721b26a524feeff23cbad8d16befaeb",
        "_score": 21.642473,
        "author": "Mark Shapland",
        "clean_url": "standard.co.uk",
        "country": "NA",
        "language": "en",
        "link": "https://www.standard.co.uk/business/url-tesla-ceo-elon-musk-payday-performance-a4454436.html",
        "published_date": "2020-05-29 10:02:00",
        "rank": "846",
        "rights": null,
        "summary": "Elon Musk has been paid a whopping £625 million in one of the biggest paydays corporate America has ever seen.",
        "title": "Tesla rewards CEO Elon Musk with whopping £625m payday",
        "topic": "business"
      },
      {
        "_id": "dee72ccd343cf5df34a54ddabf060400",
        "_score": 21.625687,
        "author": "CNN",
        "clean_url": "ctvnews.ca",
        "country": "NA",
        "language": "en",
        "link": "https://www.ctvnews.ca/entertainment/elon-musk-and-grimes-have-changed-their-baby-s-name-1.4952963",
        "published_date": "2020-05-25 11:37:40",
        "rank": "1160",
        "rights": "Copyright Bellmedia",
        "summary": "Just when you thought you'd learned how to spell Grimes and Elon Musk's unusual baby name, they've gone and changed it.",
        "title": "Elon Musk and Grimes have changed their baby's name",
        "topic": "entertainment"
      },
      {
        "_id": "4a71b2a847a3f15ee00cb21279f95d1a",
        "_score": 21.618229,
        "author": null,
        "clean_url": "kgw.com",
        "country": "NA",
        "language": "en",
        "link": "http://rssfeeds.kgw.com/~/625205168/0/kgw/technology~Elon-Musk-and-Grimes-have-slightly-tweaked-their-babys-name",
        "published_date": "2020-05-26 12:32:56",
        "rank": "6618",
        "rights": null,
        "summary": "Singer Grimes and SpaceX and Tesla CEO Elon Musk changed their newborn's name to include Roman numerals.\n        ",
        "title": "Elon Musk and Grimes have slightly tweaked their baby's name",
        "topic": "NA"
      },
      {
        "_id": "673dfa55a6706d799e7f5b1fe962e0c9",
        "_score": 21.617775,
        "author": "Joey Klender",
        "clean_url": "teslarati.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.teslarati.com/tesla-stock-reels-in-900-following-elon-musks-big-space-achievement-analyst-upgrades/",
        "published_date": "2020-06-01 14:48:52",
        "rank": "14388",
        "rights": null,
        "summary": "Tesla (NASDAQ: TSLA) moves closer to the $900 mark after a big weekend for CEO Elon Musk. Musk qualified for the first tranche of his multibillion-dollar performance bonus, and SpaceX successfully launched two astronauts into space this past weekend. The electric automaker also received several upgrades from analysts based on Tesla’s future outlook in international […]\n \nThe post Tesla stock reels in $900 following Elon Musk's big space achievement, analyst upgrades appeared first on TESLARATI.",
        "title": "Tesla stock reels in $900 following Elon Musk's big space achievement, analyst upgrades",
        "topic": "NA"
      },
      {
        "_id": "31dfab73720f859dec30f5f6fe36d057",
        "_score": 21.588333,
        "author": "Music-News.com",
        "clean_url": "noise11.com",
        "country": "NA",
        "language": "en",
        "link": "http://www.noise11.com/news/grimes-and-elon-musk-change-baby-name-to-comply-with-california-law-20200526",
        "published_date": "2020-05-25 14:10:49",
        "rank": "93034",
        "rights": null,
        "summary": "Grimes and Elon Musk have altered the name of their newborn son in order to comply with Californian law.\n \nThe post Grimes and Elon Musk Change Baby Name To Comply With California Law appeared first on Noise11.com.",
        "title": "Grimes and Elon Musk Change Baby Name To Comply With California Law",
        "topic": "music"
      },
      {
        "_id": "1960eec31fd99ee793a5ae38681f9ddc",
        "_score": 21.58324,
        "author": "John Koetsier, Senior Contributor",
        "clean_url": "forbes.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.forbes.com/sites/johnkoetsier/2020/05/27/teslas-just-got-cheaper-elon-musk-drops-prices-by-up-to-5000/",
        "published_date": "2020-05-27 16:03:51",
        "rank": "53",
        "rights": "Copyright 2020 Forbes LLC",
        "summary": "While SpaceX is sending two American astronauts up today, Elon Musk's other company is dropping prices down.",
        "title": "Teslas Just Got Cheaper: Elon Musk Drops Prices By Up To $5,000",
        "topic": "NA"
      },
      {
        "_id": "14a674e657b3fbb86702789c2ac97e1a",
        "_score": 21.583113,
        "author": null,
        "clean_url": "cnn.com",
        "country": "US",
        "language": "en",
        "link": "http://rss.cnn.com/~r/rss/cnn_showbiz/~3/7zmWTzgnbS4/index.html",
        "published_date": "2020-05-25 19:08:05",
        "rank": "55",
        "rights": "Copyright (c) 2020 Turner Broadcasting System, Inc. All Rights Reserved.",
        "summary": "Just when you thought you'd learned how to spell Grimes and Elon Musk's unusual baby name, they've gone and changed it.",
        "title": "Elon Musk and Grimes have changed their baby's name. A bit",
        "topic": "entertainment"
      },
      {
        "_id": "ed3f0c0a70c1ab565cbe17f417122815",
        "_score": 21.57529,
        "author": null,
        "clean_url": "digg.com",
        "country": "US",
        "language": "en",
        "link": "https://www.cnn.com/2020/05/25/entertainment/grimes-musk-baby-name-tweak-scli-intl/index.html",
        "published_date": "2020-05-25 16:42:45",
        "rank": "187",
        "rights": null,
        "summary": "Just when you thought you'd learned how to spell Grimes and Elon Musk's unusual baby name, they've gone and changed it.",
        "title": "Elon Musk And Grimes Have Changed Their Baby's Name, Slightly",
        "topic": "tech"
      },
      {
        "_id": "f624cd65b4f9fd7ed49ca5c0ca068d64",
        "_score": 21.560266,
        "author": "Cointelegraph By Benjamin Pirus",
        "clean_url": "cointelegraph.com",
        "country": "NA",
        "language": "en",
        "link": "https://cointelegraph.com/news/dogecoin-ceo-elon-musk-launches-humans-into-orbit",
        "published_date": "2020-05-30 19:30:27",
        "rank": "2501",
        "rights": null,
        "summary": "Voted as the best hypothetical CEO for crypto asset Dogecoin, Elon Musk sent two fresh humans up through the stratosphere today.",
        "title": "Dogecoin CEO Elon Musk Launches Humans Into Orbit",
        "topic": "NA"
      },
      {
        "_id": "8133fd780019112b3955ee3e3c3b7590",
        "_score": 21.54908,
        "author": null,
        "clean_url": "belfasttelegraph.co.uk",
        "country": "NA",
        "language": "en",
        "link": "https://www.belfasttelegraph.co.uk/news/uk/elon-musk-space-entrepreneurs-race-to-mars-39238386.html",
        "published_date": "2020-05-27 13:10:02",
        "rank": "2746",
        "rights": null,
        "summary": "Elon Musk is on the cusp of a historic moment in his space ambitions, as SpaceX prepares to take two astronauts to the International Space Station (ISS) on Wednesday.",
        "title": "Elon Musk: Space entrepreneur's race to Mars",
        "topic": "NA"
      },
      {
        "_id": "20fa5e758416516dda9dceb1df9f9512",
        "_score": 21.526548,
        "author": "Felix Allen",
        "clean_url": "thesun.co.uk",
        "country": "NA",
        "language": "en",
        "link": "https://www.thesun.co.uk/news/6967264/elon-musk-net-worth-spacex-tesla/",
        "published_date": "2020-05-30 09:00:05",
        "rank": "475",
        "rights": null,
        "summary": "ELON Musk is the eccentric billionaire behind some of the world&#8217;s most innovative companies including SPACEX and Tesla. He hit the headlines earlier this year by naming his newborn baby X Æ A-12 &#8211; as his profits continued to soar. Here&#8217;s what you need to know. What is Elon Musk&#8217;s net worth? Self-made billionaire Elon [&#8230;]",
        "title": "Elon Musk's net worth – how did the SpaceX founder make his money?",
        "topic": "world"
      },
      {
        "_id": "baa7239cc7da052db034ce3480d0bb41",
        "_score": 21.523418,
        "author": "Mike Brown",
        "clean_url": "inverse.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.inverse.com/innovation/spacex-elon-musk-mars-city",
        "published_date": "2020-05-26 17:51:25",
        "rank": "3345",
        "rights": null,
        "summary": "SpaceX and Elon Musk want to build a city on Mars, but some advances will need to happen before it could be feasible.",
        "title": "SpaceX: Elon Musk explains one factor that could decide the Mars city",
        "topic": "NA"
      },
      {
        "_id": "c0d7a9b2f37868baa7d2890c9854f51a",
        "_score": 21.5231,
        "author": "Catie Perry",
        "clean_url": "foxbusiness.com",
        "country": "NA",
        "language": "en",
        "link": "http://feeds.foxbusiness.com/~r/foxbusiness/latest/~3/s5KjiFS4Y8Q/varney-elon-musk-most-important-executive-in-the-world",
        "published_date": "2020-05-29 15:42:23",
        "rank": "1125",
        "rights": null,
        "summary": "FOX Business' Stuart Varney during his latest \"My Take” argues Tesla CEO Elon Musk is a \"game changer,\" not just a \"showman.\"",
        "title": "Varney: Elon Musk is the most important executive in the world",
        "topic": "business"
      },
      {
        "_id": "7b61486f9a65cd8263e9bb83af9c668a",
        "_score": 21.519749,
        "author": "Elise Taylor",
        "clean_url": "vogue.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.vogue.com/article/grimes-elon-musk-baby-name-meaning",
        "published_date": "2020-05-26 17:05:00",
        "rank": "1187",
        "rights": "© Condé Nast 2020",
        "summary": "Grimes wrote on Instagram that she and Elon Musk have changed their baby's name from X Æ A-12 to X Æ A-Xii.",
        "title": "Grimes and Elon Musk Have Edited Their Unusual Baby Name",
        "topic": "NA"
      },
      {
        "_id": "2117a32ca9e7ca434ccebc60ce0d2e70",
        "_score": 21.511505,
        "author": null,
        "clean_url": "straitstimes.com",
        "country": "NA",
        "language": "en",
        "link": "http://www.straitstimes.com/lifestyle/entertainment/elon-musk-grimes-change-babys-name",
        "published_date": "2020-05-26 21:00:00",
        "rank": "1346",
        "rights": null,
        "summary": "May 27, 2020 5:00 AM\n\nBillionaire Elon Musk and his Canadian singer girlfriend Grimes have apparently renamed their child.",
        "title": "Elon Musk, Grimes change baby's name",
        "topic": "NA"
      },
      {
        "_id": "a0a426ed8e25d84e3b25da376c059c7e",
        "_score": 21.50363,
        "author": null,
        "clean_url": "independent.ie",
        "country": "NA",
        "language": "en",
        "link": "https://www.independent.ie/entertainment/music/grimes-confirms-she-and-elon-musk-have-changed-their-babys-unusual-name-39232024.html",
        "published_date": "2020-05-25 14:07:05",
        "rank": "1499",
        "rights": null,
        "summary": "Grimes has confirmed that she has changed the name of her baby with Elon Musk to comply with California state law.",
        "title": "Grimes confirms she and Elon Musk have changed their baby's unusual name",
        "topic": "entertainment"
      },
      {
        "_id": "d068abad1aeb75b2f7a6387f5d354fa8",
        "_score": 21.503506,
        "author": "Oboh",
        "clean_url": "vanguardngr.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.vanguardngr.com/2020/05/elon-musks-spacex-sends-2-astronauts-into-space/",
        "published_date": "2020-05-30 20:24:40",
        "rank": "6519",
        "rights": null,
        "summary": "Four years after Elon Musk began the project, and nine years after the last launch on American soil, National Aeronautics and Space Administration, NASA, and Musk's SpaceX have sent two Americans into space with the successful launch of the Falcon 9 rocket from Kennedy Space Centre\n \nThe post Elon Musk’s SpaceX sends 2 astronauts into space appeared first on Vanguard News.",
        "title": "Elon Musk's SpaceX sends 2 astronauts into space",
        "topic": "tech"
      },
      {
        "_id": "be13e25206aaefd8a8c0571ace9fe2c9",
        "_score": 21.496464,
        "author": "Newsdesk",
        "clean_url": "music-news.com",
        "country": "NA",
        "language": "en",
        "link": "https://www.music-news.com/news/UK/131935/Grimes-and-Elon-Musk-alter-baby-s-name-to-comply-with-Californian-law",
        "published_date": "2020-05-25 10:45:00",
        "rank": "45775",
        "rights": "Music News 2020",
        "summary": "Grimes and Elon Musk had to change the numbers in their son's name to Roman numerals.",
        "title": "Grimes and Elon Musk alter baby's name to comply with Californian law",
        "topic": "NA"
      }
    ];
  const [page, setPage] = useState(1);
  document.title = `${props.category}-Newsgrabber`;

  const pageChange = (event, value) => {
    setPage(value);
  }

  const pageBtn=
    (<>
    <Pagination color="primary" count={10} page={page} onChange={pageChange} size="medium" sx={{ display: { xs: "block", sm: "none" } }} />
    <Pagination color="primary" count={10} page={page} onChange={pageChange} size="large" sx={{ display: { xs: "none", sm: "block" } }} />
 </>)
 

  const updatePage = async () => {
    console.log("updatePage")
    props.changeProgress(10);
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'a47529c91emsha25daef1e66a341p1ba7adjsn5c4aed17e5e6',
    //     'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    //   }
    // };

    // fetch(`https://newscatcher.p.rapidapi.com/v1/latest_headlines?&lang=en&topic=${props.category}&country=%20in&media=True`, options)
    //   .then(response => response.json())
    //   .then(data => setArticles(data.articles))
    //   .catch(err => console.error(err));
    //   console.log(articles)
    //   props.changeProgress(100);
  }

  useEffect(() => {
    updatePage();
    setTimeout(() => {
      setshow(true)
    }, 3000);
    // eslint-disable-next-line
  }, [page])

  return (
    < Box m={1}>
      <Typography textAlign={'center'} sx={{fontSize:{sm:'50px', xs:'27px'}, fontWeight:'bold'}}>Top {props.category} headlines</Typography>
      {!show && <Box mt={10} sx={{ display: 'flex' , justifyContent:'center'}}>
       <CircularProgress />
    </Box>}
        <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: {xs:'repeat(1,1fr)', sm:'repeat(3, 1fr)'}}}>
          {articles.slice((page - 1) * 9, ((page - 1) * 9) + 9).map((element, index) => {
            return (
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.summary ? element.summary.slice(0, 88) : ""} imageUrl={element.media} newsUrl={element.link} author={element.author} date={element.published_date} source={element.topic} />
             );
          })}
        </Box>
      
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }} >
        {show && pageBtn}
      </Box>
    </Box>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'General',
  pageSize: 6
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}
export default News
