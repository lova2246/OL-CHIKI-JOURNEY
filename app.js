const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const STORE = "ol-chiki-journey-v4";

const T = {
  en:{chooseLanguage:"Choose Language",languageHelp:"Choose your interface language. Learning content stays in Santhali / Ol Chiki.",welcome:"Welcome",accountHelp:"Create a learner profile or continue as a guest.",createAccount:"Create Account",guest:"Continue as Guest",existing:"Use saved profile",home:"Home",journey:"Journey",practice:"Practice",profile:"Profile",start:"Start",continue:"Continue",locked:"Locked",completed:"Completed",learn:"Learn",see:"See",practiceStep:"Practice",play:"Play",miniQuiz:"Mini Quiz",startQuiz:"Start Mini Quiz",back:"Back",next:"Next",finish:"Finish",xp:"XP",progress:"Progress",today:"Today's Journey",levels:"Levels",letters:"30 Core Letters",writing:"Writing Practice",numbers:"Ol Chiki Numbers",audio:"Listen",audioPending:"Verified recording will be added after audio approval.",noGuess:"No guessing • Verify • Cross-check • Approve",intro:"Introduction",introWhat:"What is Santhali?",introScript:"Santhali and Ol Chiki",introWhy:"Why Ol Chiki?",introHistory:"Pandit Raghunath Murmu",introRules:"Basic writing rules",level:"Level",quizScore:"Quiz Score",bonus:"Bonus XP",profileName:"Profile Name",certificate:"Certificate",settings:"Settings",save:"Save",reset:"Reset Progress",freePractice:"Free Practice World",language:"Language",sound:"Sound",about:"About",logout:"Switch Profile",creator:"Created by LOVA HANSDA",dynamicCert:"Your certificate uses your profile name and completion date.",print:"Print / Save PDF",status:"Status",draftNote:"Curriculum structure is added. Specific Santhali vocabulary/audio is only added after verification.",verified30:"30 Core Letters — user-approved reference structure",rows:"6 rows × 5 letters",letterPractice:"Choose a letter to practice.",draw:"Trace / write the letter below.",clear:"Clear",check:"Check",close:"Close",question:"Question",correct:"Correct",wrong:"Try again",score:"Score",certificateNote:"This is an app-completion certificate, not an official government or academic certificate.",final:"FINAL",free:"Free Practice",menu:"Menu"},
  ne:{chooseLanguage:"भाषा छान्नुहोस्",languageHelp:"एपको interface भाषा छान्नुहोस्। सिकाइ सामग्री Santhali / Ol Chiki मै रहनेछ।",welcome:"स्वागत छ",accountHelp:"Learner profile बनाउनुहोस् वा Guest रूपमा जारी राख्नुहोस्।",createAccount:"खाता बनाउनुहोस्",guest:"Guest रूपमा जारी राख्नुहोस्",existing:"पहिलेको profile प्रयोग गर्नुहोस्",home:"गृह",journey:"यात्रा",practice:"अभ्यास",profile:"प्रोफाइल",start:"सुरु गर्नुहोस्",continue:"जारी राख्नुहोस्",locked:"लक गरिएको",completed:"पूरा भयो",learn:"सिक्नुहोस्",see:"हेर्नुहोस्",practiceStep:"अभ्यास गर्नुहोस्",play:"खेल्नुहोस्",miniQuiz:"सानो क्विज",startQuiz:"सानो क्विज सुरु गर्नुहोस्",back:"पछाडि",next:"अर्को",finish:"समाप्त",xp:"XP",progress:"प्रगति",today:"आजको यात्रा",levels:"तहहरू",letters:"३० मुख्य अक्षर",writing:"लेखन अभ्यास",numbers:"Ol Chiki अंक",audio:"सुन्नुहोस्",audioPending:"Audio approval पछि verified recording थपिनेछ।",noGuess:"अनुमान होइन • जाँच • Cross-check • स्वीकृति",intro:"परिचय",introWhat:"Santhali के हो?",introScript:"Santhali र Ol Chiki",introWhy:"Ol Chiki किन?",introHistory:"पण्डित रघुनाथ मुर्मू",introRules:"लेखनका आधारभूत नियम",level:"तह",quizScore:"क्विज अंक",bonus:"Bonus XP",profileName:"प्रोफाइल नाम",certificate:"प्रमाणपत्र",settings:"सेटिङ",save:"सेभ गर्नुहोस्",reset:"प्रगति रिसेट",freePractice:"Free Practice World",language:"भाषा",sound:"ध्वनि",about:"बारेमा",logout:"Profile बदल्नुहोस्",creator:"सिर्जना: LOVA HANSDA",dynamicCert:"प्रमाणपत्रमा तपाईंको profile नाम र पूरा गरेको मिति स्वतः आउनेछ।",print:"Print / PDF Save",status:"स्थिति",draftNote:"Course structure तयार छ। वास्तविक Santhali शब्दावली/audio verification पछि मात्र थपिन्छ।",verified30:"३० मुख्य अक्षर — तपाईंले स्वीकृत गरेको reference structure",rows:"६ पङ्क्ति × ५ अक्षर",letterPractice:"अभ्यास गर्न अक्षर छान्नुहोस्।",draw:"तल अक्षर लेख्नुहोस् / trace गर्नुहोस्।",clear:"मेट्नुहोस्",check:"जाँच्नुहोस्",close:"बन्द",question:"प्रश्न",correct:"सही",wrong:"फेरि प्रयास गर्नुहोस्",score:"अंक",certificateNote:"यो app-completion certificate हो; सरकारी वा academic official certificate होइन।",final:"अन्तिम",free:"Free Practice",menu:"मेनु"},
  hi:{chooseLanguage:"भाषा चुनें",languageHelp:"ऐप की interface भाषा चुनें। सीखने की सामग्री Santhali / Ol Chiki में रहेगी।",welcome:"स्वागत है",accountHelp:"Learner profile बनाएं या Guest के रूप में जारी रखें।",createAccount:"खाता बनाएं",guest:"Guest के रूप में जारी रखें",existing:"सहेजी गई profile इस्तेमाल करें",home:"होम",journey:"यात्रा",practice:"अभ्यास",profile:"प्रोफ़ाइल",start:"शुरू करें",continue:"जारी रखें",locked:"लॉक",completed:"पूरा",learn:"सीखें",see:"देखें",practiceStep:"अभ्यास करें",play:"खेलें",miniQuiz:"मिनी क्विज़",startQuiz:"मिनी क्विज़ शुरू करें",back:"पीछे",next:"अगला",finish:"समाप्त",xp:"XP",progress:"प्रगति",today:"आज की यात्रा",levels:"स्तर",letters:"30 मुख्य अक्षर",writing:"लेखन अभ्यास",numbers:"Ol Chiki अंक",audio:"सुनें",audioPending:"Audio approval के बाद verified recording जोड़ी जाएगी।",noGuess:"अनुमान नहीं • जाँच • Cross-check • स्वीकृति",intro:"परिचय",introWhat:"Santhali क्या है?",introScript:"Santhali और Ol Chiki",introWhy:"Ol Chiki क्यों?",introHistory:"पंडित रघुनाथ मुर्मू",introRules:"लेखन के मूल नियम",level:"स्तर",quizScore:"क्विज़ स्कोर",bonus:"Bonus XP",profileName:"प्रोफ़ाइल नाम",certificate:"प्रमाणपत्र",settings:"सेटिंग्स",save:"सहेजें",reset:"प्रगति रीसेट",freePractice:"Free Practice World",language:"भाषा",sound:"ध्वनि",about:"बारे में",logout:"प्रोफ़ाइल बदलें",creator:"निर्माता: LOVA HANSDA",dynamicCert:"Certificate में आपकी profile का नाम और completion date अपने आप आएगा।",print:"Print / PDF Save",status:"स्थिति",draftNote:"Course structure जोड़ा गया है। वास्तविक Santhali vocabulary/audio verification के बाद ही जोड़े जाएंगे।",verified30:"30 मुख्य अक्षर — आपके द्वारा स्वीकृत reference structure",rows:"6 पंक्तियाँ × 5 अक्षर",letterPractice:"अभ्यास के लिए अक्षर चुनें।",draw:"नीचे अक्षर trace / लिखें।",clear:"मिटाएँ",check:"जाँचें",close:"बंद",question:"प्रश्न",correct:"सही",wrong:"फिर प्रयास करें",score:"स्कोर",certificateNote:"यह app-completion certificate है; सरकारी या academic official certificate नहीं।",final:"अंतिम",free:"Free Practice",menu:"मेनू"},
  bn:{chooseLanguage:"ভাষা নির্বাচন করুন",languageHelp:"অ্যাপের interface ভাষা নির্বাচন করুন। শেখার বিষয়বস্তু Santhali / Ol Chiki-তেই থাকবে।",welcome:"স্বাগতম",accountHelp:"Learner profile তৈরি করুন অথবা Guest হিসেবে চালিয়ে যান।",createAccount:"অ্যাকাউন্ট তৈরি করুন",guest:"Guest হিসেবে চালিয়ে যান",existing:"সংরক্ষিত profile ব্যবহার করুন",home:"হোম",journey:"যাত্রা",practice:"অনুশীলন",profile:"প্রোফাইল",start:"শুরু করুন",continue:"চালিয়ে যান",locked:"লক করা",completed:"সম্পন্ন",learn:"শিখুন",see:"দেখুন",practiceStep:"অনুশীলন করুন",play:"খেলুন",miniQuiz:"মিনি কুইজ",startQuiz:"মিনি কুইজ শুরু করুন",back:"পিছনে",next:"পরবর্তী",finish:"শেষ",xp:"XP",progress:"অগ্রগতি",today:"আজকের যাত্রা",levels:"স্তরসমূহ",letters:"৩০টি মূল অক্ষর",writing:"লেখার অনুশীলন",numbers:"Ol Chiki সংখ্যা",audio:"শুনুন",audioPending:"Audio approval-এর পরে verified recording যোগ করা হবে।",noGuess:"অনুমান নয় • যাচাই • Cross-check • অনুমোদন",intro:"পরিচিতি",introWhat:"Santhali কী?",introScript:"Santhali ও Ol Chiki",introWhy:"Ol Chiki কেন?",introHistory:"পণ্ডিত রঘুনাথ মুর্মু",introRules:"লেখার মৌলিক নিয়ম",level:"স্তর",quizScore:"কুইজ স্কোর",bonus:"Bonus XP",profileName:"প্রোফাইল নাম",certificate:"সার্টিফিকেট",settings:"সেটিংস",save:"সংরক্ষণ",reset:"অগ্রগতি রিসেট",freePractice:"Free Practice World",language:"ভাষা",sound:"শব্দ",about:"সম্পর্কে",logout:"Profile পরিবর্তন",creator:"নির্মাতা: LOVA HANSDA",dynamicCert:"Certificate-এ আপনার profile-এর নাম এবং completion date স্বয়ংক্রিয়ভাবে আসবে।",print:"Print / PDF Save",status:"অবস্থা",draftNote:"Course structure যোগ করা হয়েছে। আসল Santhali vocabulary/audio verification-এর পরে যোগ করা হবে।",verified30:"৩০টি মূল অক্ষর — আপনার অনুমোদিত reference structure",rows:"৬ সারি × ৫ অক্ষর",letterPractice:"অনুশীলনের জন্য অক্ষর বেছে নিন।",draw:"নিচে অক্ষর trace / লিখুন।",clear:"মুছুন",check:"যাচাই করুন",close:"বন্ধ",question:"প্রশ্ন",correct:"সঠিক",wrong:"আবার চেষ্টা করুন",score:"স্কোর",certificateNote:"এটি app-completion certificate; সরকারি বা academic official certificate নয়।",final:"FINAL",free:"Free Practice",menu:"মেনু"}
};

const LEVELS = [
  ["0","intro","Introduction",["What is Santhali?","Santhali and Ol Chiki","Why Ol Chiki?","Pandit Raghunath Murmu","Basic writing rules"]],
  ["1","letters","30 Core Letters & Writing",["Introduction","30 core letters","Sound + Listening","Recognition Practice","Writing / Doodle Practice","30-Letter Review"]],
  ["2","numbers","Ol Chiki Numbers",["Introduction to Ol Chiki numbers","Recognize digits 0–9","Number order","Number writing practice","Listen & choose when verified audio is available","Numbers mini review"]],
  ["3","vocab","Santhali Vocabulary",["Greetings","People and family","Home","Food and drinks","Body and clothes","School and work","Nature","Animals and birds","Plants","Fruits and vegetables","Colors","Days and months","Time and directions","Weather","Daily activities","Feelings","Common verbs and adjectives"]],
  ["4","sentences","Basic Sentences",["Sentence concept","Subject / Object / Verb","Positive sentences","Negative sentences","Questions and answers","Introductions","Daily conversation"]],
  ["5","pronouns","Pronouns",["Personal pronouns","Singular and plural","Inclusive / exclusive patterns where verified","Pronoun practice","Sentence practice"]],
  ["6","nouns","Nouns",["Noun concept","People","Places","Objects","Nature nouns","Number and noun practice","Noun identification"]],
  ["7","verbs","Verbs",["Verb concept","Common actions","Verb recognition","Verb forms","Sentence building","Verb practice"]],
  ["8","tense","Tense",["Present","Past","Future","Time markers","Tense recognition","Tense practice"]],
  ["9","grammar","Grammar",["Word order","Agreement patterns","Questions","Negation","Modifiers","Postpositions / particles where verified","Grammar practice"]],
  ["10","writing","Ol Chiki Writing",["30-letter revision","Stroke order","Spacing","Word writing","Sentence writing","Dictation","Transliteration","Spelling correction","Handwriting challenge"]],
  ["11","reading","Ol Chiki Reading",["Letters → words","Words → sentences","Paragraphs","Dialogue","Story reading","Posters / social text","Guessing unknown words","Reading speed"]],
  ["12","conversation","Daily Conversation",["Greetings","Introducing yourself","Family talk","Home talk","School / work talk","Shopping / everyday situations","Questions and answers"]],
  ["13","listening","Listening + Speaking",["Sound recognition","Listen and choose","Word listening","Sentence listening","Repeat practice","Speaking practice","Comprehension"]],
  ["14","advanced","Advanced Grammar",["Complex sentence patterns","Connectors","Clauses","Negation patterns","Question patterns","Grammar correction","Advanced practice"]],
  ["15","advancedRW","Advanced Reading & Writing",["Long reading","Summary","Translation","Paragraph writing","Dialogue writing","Editing","Comprehension"]],
  ["16","mastery","Full Ol Chiki Mastery",["Letters","Vowels and consonants","Spelling","Handwriting","Reading","Dictation","Sentence / paragraph writing","Punctuation","Dialogue","Numbers","Date and time","Names and places","Digital typing"]],
  ["FINAL","final","Fluent Santhali",["Conversation without translation","Think in Santhali","Ask and answer","Long conversation","Stories","Express opinions","Independent Ol Chiki writing","Comprehension","Final mission","Mastery certificate"]]
];

const state = JSON.parse(localStorage.getItem(STORE) || "null") || {
  lang:null,name:"",guest:false,completed:[],skipped0:false,xp:0,quizScores:{},completionDate:null,selectedLetter:0
};

function save(){localStorage.setItem(STORE,JSON.stringify(state))}
function tr(k){return (T[state.lang]||T.en)[k] || T.en[k] || k}
function levelTitle(id){
  const L=LEVELS.find(x=>x[0]===id); if(!L)return id;
  const map={0:"intro",1:"letters",2:"words",3:"vocab",4:"sentences",5:"pronouns",6:"nouns",7:"verbs",8:"tense",9:"grammar",10:"writing",11:"reading",12:"conversation",13:"listening",14:"advanced",15:"advancedRW",16:"mastery",FINAL:"final"};
  const key=map[id];
  const custom={en:{intro:"Introduction",letters:"30 Core Letters & Writing",words:"Letter → Word",vocab:"Santhali Vocabulary",sentences:"Basic Sentences",pronouns:"Pronouns",nouns:"Nouns",verbs:"Verbs",tense:"Tense",grammar:"Grammar",writing:"Ol Chiki Writing",reading:"Ol Chiki Reading",conversation:"Daily Conversation",listening:"Listening + Speaking",advanced:"Advanced Grammar",advancedRW:"Advanced Reading & Writing",mastery:"Full Ol Chiki Mastery",final:"Fluent Santhali"}};
  if(state.lang==="en") return custom.en[key];
  const titles={ne:{intro:"परिचय",letters:"३० मुख्य अक्षर र लेखन",words:"अक्षर → शब्द",vocab:"Santhali शब्दावली",sentences:"सामान्य वाक्यहरू",pronouns:"सर्वनाम",nouns:"संज्ञा",verbs:"क्रिया",tense:"काल",grammar:"व्याकरण",writing:"Ol Chiki लेखन",reading:"Ol Chiki पठन",conversation:"दैनिक कुराकानी",listening:"सुन्ने र बोल्ने",advanced:"उन्नत व्याकरण",advancedRW:"उन्नत पठन र लेखन",mastery:"पूर्ण Ol Chiki निपुणता",final:"प्रवाहपूर्ण Santhali"},
  hi:{intro:"परिचय",letters:"30 मुख्य अक्षर और लेखन",words:"अक्षर → शब्द",vocab:"Santhali शब्दावली",sentences:"मूल वाक्य",pronouns:"सर्वनाम",nouns:"संज्ञा",verbs:"क्रिया",tense:"काल",grammar:"व्याकरण",writing:"Ol Chiki लेखन",reading:"Ol Chiki पठन",conversation:"दैनिक बातचीत",listening:"सुनना और बोलना",advanced:"उन्नत व्याकरण",advancedRW:"उन्नत पठन और लेखन",mastery:"पूर्ण Ol Chiki महारत",final:"प्रवाहपूर्ण Santhali"},
  bn:{intro:"পরিচিতি",letters:"৩০টি মূল অক্ষর ও লেখা",words:"অক্ষর → শব্দ",vocab:"Santhali শব্দভাণ্ডার",sentences:"মৌলিক বাক্য",pronouns:"সর্বনাম",nouns:"বিশেষ্য",verbs:"ক্রিয়া",tense:"কাল",grammar:"ব্যাকরণ",writing:"Ol Chiki লেখা",reading:"Ol Chiki পড়া",conversation:"দৈনন্দিন কথোপকথন",listening:"শোনা ও বলা",advanced:"উন্নত ব্যাকরণ",advancedRW:"উন্নত পড়া ও লেখা",mastery:"সম্পূর্ণ Ol Chiki দক্ষতা",final:"সাবলীল Santhali"}};
  return titles[state.lang]?.[key] || L[2];
}
function isUnlocked(id){
  if(id==="0" || id==="1") return true;
  const idx=LEVELS.findIndex(x=>x[0]===id);
  if(idx<=0)return true;
  return state.completed.includes(LEVELS[idx-1][0]);
}
function pct(){return Math.round((state.completed.length/LEVELS.length)*100)}
function setShell(show=true){$("#shell").classList.toggle("hidden",!show)}
function show(id){["splash","languageScreen","accountScreen"].forEach(x=>$("#"+x).classList.add("hidden")); if(id)$("#"+id).classList.remove("hidden")}
function applyLang(){document.documentElement.lang=state.lang||"en";$$("[data-i18n]").forEach(e=>e.textContent=tr(e.dataset.i18n));$("#langBtn").textContent=(state.lang||"en").toUpperCase()}
function startFlow(){
  if(!state.lang){show("languageScreen");return}
  if(!state.name){show("accountScreen");return}
  setShell(true);applyLang();route("home")
}
$("#splashStart").onclick=()=>startFlow();
$$("[data-lang]").forEach(b=>b.onclick=()=>{state.lang=b.dataset.lang;save();applyLang();show("accountScreen")});
$("#createProfile").onclick=()=>{const n=$("#nameInput").value.trim();if(!n)return alert("Please enter your name.");state.name=n;state.guest=false;save();setShell(true);applyLang();route("home")};
$("#guestProfile").onclick=()=>{state.name="Guest Learner";state.guest=true;save();setShell(true);applyLang();route("home")};
$("#existingProfile").onclick=()=>{if(state.name){setShell(true);applyLang();route("home")}else alert("No saved profile found.")};
$("#langBtn").onclick=()=>{show("languageScreen");setShell(false)};
$("#menuBtn").onclick=()=>route("profile");
$("#modalClose").onclick=()=>$("#modal").classList.add("hidden");
$$(".bottom-nav button").forEach(b=>b.onclick=()=>route(b.dataset.route));

function route(r,arg=null){
  if(!state.lang){show("languageScreen");return}
  if(!state.name){show("accountScreen");return}
  setShell(true);applyLang();
  if(r==="home")renderHome(); else if(r==="journey")renderJourney(); else if(r==="practice")renderPractice(); else if(r==="profile")renderProfile(); else if(r==="level")renderLevel(arg); else if(r==="quiz")renderQuiz(arg); else if(r==="certificate")renderCertificate(); else if(r==="letter")renderLetter(arg);
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderHome(){
  $("#view").innerHTML=`
  <section class="hero"><span class="pill">${state.guest?"Guest":tr("profileName")}</span><h1>${escapeHtml(state.name)} 👋</h1>
  <p>${tr("today")}: ${levelTitle(nextLevelId())}</p>
  <div class="progress"><i style="width:${pct()}%"></i></div><p><b>${pct()}%</b> • ${state.xp} ${tr("xp")}</p></section>
  <h2 class="section-title">${tr("today")}</h2>
  <div class="grid">
    <button class="nav-card" onclick="route('level','${nextLevelId()}')"><h3>${tr("continue")}</h3><p>${levelTitle(nextLevelId())}</p></button>
    <button class="nav-card" onclick="route('journey')"><h3>${tr("journey")}</h3><p>${LEVELS.length} ${tr("levels")}</p></button>
    <button class="nav-card" onclick="route('practice')"><h3>${tr("freePractice")}</h3><p>${tr("letters")} • ${tr("writing")}</p></button>
    <button class="nav-card" onclick="route('certificate')"><h3>${tr("certificate")}</h3><p>${tr("dynamicCert")}</p></button>
  </div>
  <h2 class="section-title">${tr("levels")}</h2>${renderLevelCards(6)}`;
}
function nextLevelId(){return LEVELS.find(l=>l[0]!=="0" && !state.completed.includes(l[0]))?.[0] || (state.skipped0?"1":"0")}
function renderLevelCards(limit=LEVELS.length){
  return `<div class="grid">${LEVELS.slice(0,limit).map(L=>{
    const unlocked=isUnlocked(L[0]),done=state.completed.includes(L[0]);
    return `<button class="level-card ${!unlocked?"locked":""} ${done?"done":""}" ${unlocked?`onclick="route('level','${L[0]}')"`:"disabled"}>
      <span class="num">${tr("level")} ${L[0]}</span><span class="status">${done?"✓":unlocked?"→":"🔒"}</span>
      <div class="title">${levelTitle(L[0])}</div><small>${done?tr("completed"):unlocked?tr("start"):tr("locked")}</small></button>`}).join("")}</div>`;
}
function renderJourney(){
  $("#view").innerHTML=`<section class="hero"><h1>${tr("journey")}</h1><p>${tr("learn")} → ${tr("see")} → ${tr("practiceStep")} → ${tr("play")} → ${tr("miniQuiz")} → XP</p></section>
  <h2 class="section-title">${tr("levels")}</h2>${renderLevelCards()}`;
}
function renderPractice(){
  $("#view").innerHTML=`<section class="hero"><h1>${tr("freePractice")}</h1><p>${tr("letterPractice")}</p></section>
  <div class="card" style="margin-top:16px"><h2>${tr("letters")}</h2><div class="letter-grid">${CORE_LETTERS.map((x,i)=>letterCard(x,i)).join("")}</div></div>`;
}
function renderProfile(){
  $("#view").innerHTML=`<section class="hero"><h1>${tr("profile")}</h1><p>${escapeHtml(state.name)}</p></section>
  <div class="grid">
    <div class="card"><h3>${tr("progress")}</h3><div class="progress"><i style="width:${pct()}%"></i></div><p>${pct()}% • ${state.xp} ${tr("xp")}</p></div>
    <div class="card"><h3>${tr("language")}</h3><p>${state.lang.toUpperCase()}</p><button class="action-btn" onclick="show('languageScreen');setShell(false)">${tr("language")}</button></div>
    <div class="card"><h3>${tr("certificate")}</h3><button class="action-btn" onclick="route('certificate')">${tr("certificate")}</button></div>
    <div class="card"><h3>${tr("settings")}</h3><button class="action-btn" onclick="resetProgress()">${tr("reset")}</button><button class="action-btn" onclick="switchProfile()" style="margin-top:8px">${tr("logout")}</button></div>
  </div>`;
}
function renderLevel(id){
  const L=LEVELS.find(x=>x[0]===id);
  if(!L||!isUnlocked(id)){route("journey");return}
  const steps=L[3];
  let special="";
  if(id==="0") special=introContent();
  if(id==="1") special=lettersContent();
  if(id==="2") special=numbersContent();
  if(id==="10") special=writingContent();
  if(id==="11") special=readingContent();
  if(id==="FINAL") special=finalContent();
  $("#view").innerHTML=`<section class="hero"><span class="pill">${tr("level")} ${id}</span><h1>${levelTitle(id)}</h1><p>${tr("learn")} → ${tr("see")} → ${tr("practiceStep")} → ${tr("play")} → ${tr("miniQuiz")}</p></section>
  <div class="card" style="margin-top:16px"><h2>${tr("levels")}: ${steps.length} ${tr("practice")}</h2><div class="lesson-path">${steps.map((s,i)=>`<button class="lesson-btn" onclick="openLesson('${id}',${i})"><b>${i+1}. ${localizedTopic(s)}</b><small>${i%4===0?tr("learn"):i%4===1?tr("see"):i%4===2?tr("practiceStep"):tr("play")}</small></button>`).join("")}</div></div>
  ${special}
  <div class="notice" style="margin-top:16px">${tr("draftNote")}</div>
  <div class="row no-print" style="margin-top:18px"><button class="action-btn" onclick="route('journey')">${tr("back")}</button>${id==="0"?`<button class="action-btn" onclick="skipLevel0()">Skip Quiz → Level 1</button>`:`<button class="primary" onclick="route('quiz','${id}')">${tr("startQuiz")}</button>`}</div>`;
}
function localizedTopic(s){return s}
function introContent(){return `<div class="grid">
  <div class="card"><h3>${tr("introWhat")}</h3><p>Santhali is the language-learning focus of this app. This introduction explains the language, its writing system, and the learning journey before detailed lessons begin.</p></div>
  <div class="card"><h3>${tr("introScript")}</h3><p>Ol Chiki is the script used for the writing journey in this app. The course separates language learning from script practice so beginners can build confidence step by step.</p></div>
  <div class="card"><h3>${tr("introWhy")}</h3><p>This lesson introduces the role of a dedicated writing system and prepares learners for the 30 core letters.</p></div>
  <div class="card"><h3>${tr("introHistory")}</h3><p>Pandit Raghunath Murmu is presented in the course history section as the creator/inventor associated with Ol Chiki.</p></div>
  <div class="card"><h3>${tr("introRules")}</h3><p>Writing direction, letter recognition, spacing and careful copying are introduced here. Detailed stroke practice begins in Level 1.</p></div>
</div>`}
function playDraftSound(i){
  const x=CORE_LETTERS[i];
  // Temporary computer playback only. This is NOT the final native recording.
  const text=x.label.replace(/\//g,' ');
  if('speechSynthesis' in window){ const u=new SpeechSynthesisUtterance(text); u.lang='en-IN'; u.rate=.78; u.pitch=1; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); }
  openModal(`<h2>${x.g} — Letter ${String(x.id).padStart(2,'0')}</h2><p>Test playback only. Final pronunciation audio will use the approved real recording.</p><div class="notice">Cross-check reference: ${escapeHtml(x.name)} • ${escapeHtml(x.ipa)}</div>`);
}
function lettersContent(){return `<div class="card" style="margin-top:16px"><h2>${tr("letters")}</h2><p>30 letters are learned directly, one by one. No groups are required in the learner flow.</p><div class="letter-grid">${CORE_LETTERS.map((x,i)=>letterCard(x,i)).join("")}</div></div>
<div class="card" style="margin-top:16px"><h2>${tr("writing")}</h2><p>Every letter has Trace → Free Write → Check → Practice Again.</p><button class="primary" onclick="route('letter',0)">${tr("start")}</button></div>`}
function letterCard(x,i){return `<div class="letter-card"><div class="glyph">${x.g}</div><div class="letter-label">Letter ${String(x.id).padStart(2,'0')}</div><div class="muted">${x.name}</div><div class="muted">Sound reference: ${x.ipa}</div><button class="audio-btn" onclick="playDraftSound(${i})">🔊 ${tr("audio")}</button><button class="audio-btn" onclick="route('letter',${i})">✍ ${tr("practice")}</button></div>`}
function writingContent(){return `<div class="card" style="margin-top:16px"><h2>${tr("writing")}</h2><p>Choose any of the 30 letters. Writing results are GOOD / ALMOST / TRY AGAIN; writing mistakes never lock the level.</p><div class="letter-grid">${CORE_LETTERS.map((x,i)=>`<button class="letter-card" onclick="route('letter',${i})"><div class="glyph">${x.g}</div><div>Letter ${String(x.id).padStart(2,'0')}</div></button>`).join("")}</div></div>`}
function numbersContent(){return `<div class="card" style="margin-top:16px"><h2>Ol Chiki Numbers</h2><p>Level 2 introduces the 10 Ol Chiki digits. Number names/pronunciation will be added only after verification.</p><div class="letter-grid">${OL_CHIKI_NUMBERS.map(n=>`<div class="letter-card"><div class="glyph">${n.g}</div><div class="letter-label">${n.value}</div><button class="audio-btn" onclick="openModal('<h2>${n.g}</h2><p>Number-name audio will be added after pronunciation verification.</p>')">🔊 ${tr("audio")}</button></div>`).join("")}</div></div>`}
function readingContent(){return `<div class="grid"><div class="card"><h3>${tr("letters")}</h3><p>Read from isolated letters toward words and sentences.</p></div><div class="card"><h3>Dialogue</h3><p>Short verified dialogues will be added after language-content review.</p></div><div class="card"><h3>Story</h3><p>Story material will be added only from approved/verified Santhali sources or original approved content.</p></div></div>`}
function finalContent(){return `<div class="grid"><div class="card"><h3>${tr("final")}</h3><p>Final mission combines verified skills from the full journey.</p></div><div class="card"><h3>${tr("certificate")}</h3><p>${tr("dynamicCert")}</p><button class="primary" onclick="route('certificate')">${tr("certificate")}</button></div></div>`}

function openLesson(id,i){
  const L=LEVELS.find(x=>x[0]===id), topic=L[3][i];
  openModal(`<span class="pill">${tr("level")} ${id}</span><h2>${escapeHtml(topic)}</h2>
  <p>${tr("learn")} → ${tr("see")} → ${tr("practiceStep")} → ${tr("play")}</p>
  <div class="notice">${tr("draftNote")}</div>
  <div class="row" style="margin-top:16px"><button class="primary" onclick="document.querySelector('.modal').classList.add('hidden')">${tr("continue")}</button></div>`);
}
function skipLevel0(){state.skipped0=true;save();route("level","1")}
function renderQuiz(id){
  const L=LEVELS.find(x=>x[0]===id); if(!L)return;
  let qs=[];
  if(id==="0") qs=[
    {q:"What is Santhali?",a:["A Munda language","An Ol Chiki letter","A number system","A writing exercise"],c:0},
    {q:"What is Ol Chiki?",a:["A writing script used for Santhali","A language unrelated to Santhali","A game mode","A certificate"],c:0},
    {q:"Which direction is Ol Chiki written?",a:["Left to right","Right to left","Top to bottom only","Bottom to top"],c:0},
    {q:"Who is credited with creating Ol Chiki?",a:["Pandit Raghunath Murmu","William Shakespeare","Rabindranath Tagore","Isaac Newton"],c:0}
  ];
  else if(id==="1") qs=[
    {q:"How many core Ol Chiki letters are in Level 1?",a:["30","20","40","50"],c:0},
    {q:"Which letter begins the approved 30-letter sequence?",a:["ᱚ","ᱟ","ᱳ","ᱤ"],c:0},
    {q:"What happens if writing practice is not neat enough?",a:["The learner can practice again","The whole app locks","Level 1 is deleted","The profile is deleted"],c:0},
    {q:"What must be passed before Level 2 unlocks?",a:["The Level 1 Mini Quiz","The certificate print","Profile settings","Free Practice"],c:0}
  ];
  else if(id==="2") qs=[
    {q:"How many Ol Chiki digits are introduced in Level 2?",a:["10","5","20","30"],c:0},
    {q:"Which symbol is Ol Chiki digit zero?",a:["᱐","᱑","᱙","ᱚ"],c:0},
    {q:"Which symbol is Ol Chiki digit five?",a:["᱕","᱔","᱖","ᱛ"],c:0},
    {q:"What is the Level 2 focus?",a:["Ol Chiki numbers","Advanced tense","Long stories","Certificate design"],c:0}
  ];
  else qs=[{q:`What is the focus of ${levelTitle(id)}?`,a:[L[2],"Only account settings","Only the certificate","Only free practice"],c:0},{q:"What happens at the end of this level?",a:["A Mini Quiz","Nothing","Delete progress","Skip all lessons"],c:0}];
  const optional=id==="0";
  $("#view").innerHTML=`<section class="hero"><span class="pill">${tr("miniQuiz")}</span><h1>${levelTitle(id)}</h1><p>${optional?"Optional quiz — you may skip Level 0.":"Pass all questions to unlock the next level."}</p></section><div class="card" style="margin-top:16px">${qs.map((q,qi)=>`<div class="quiz-block" data-q="${qi}"><h3>${qi+1}. ${q.q}</h3>${q.a.map((a,ai)=>`<button class="choice quiz-option" onclick="answer(this,${ai},${q.c})">${a}</button>`).join("")}</div>`).join("")}<div id="quizResult" class="result hidden"></div></div><div class="row no-print" style="margin-top:16px"><button class="action-btn" onclick="route('level','${id}')">${tr("back")}</button>${optional?`<button class="action-btn" onclick="skipLevel0()">Skip Quiz → Level 1</button>`:""}</div>`;
}
function answer(btn,chosen,correct){
  const block=btn.closest(".quiz-block"); if(block.dataset.done)return;
  block.dataset.done="1"; const opts=[...block.querySelectorAll(".quiz-option")];
  opts[correct]?.classList.add("correct"); if(chosen!==correct)btn.classList.add("wrong");
  const blocks=$$(".quiz-block"); const done=blocks.every(b=>b.dataset.done==="1");
  if(done){
    const corrects=blocks.filter(b=>b.querySelector(".correct") && !b.querySelector(".wrong")).length;
    const score=Math.round(corrects/blocks.length*100);
    const id=location.hash.replace("#quiz/","") || "0";
    const pass=score===100;
    $("#quizResult").classList.remove("hidden");
    $("#quizResult").innerHTML=`<h2>${tr("score")}: ${score}%</h2><p>${pass?"🎉 All answers are correct. Next level unlocked.":"🔒 One or more answers are wrong. Review and retry until every answer is correct."}</p>${pass?`<button class="primary" onclick="completeLevel('${id}',${score})">${tr("finish")}</button>`:`<button class="primary" onclick="route('quiz','${id}')">Retry Quiz</button><button class="action-btn" onclick="route('level','${id}')">Review Level</button>`}`;
  }
}
function completeLevel(id,score){
  if(id!=="0" && score!==100)return;
  if(!state.completed.includes(id)){state.completed.push(id);state.xp+=10+score;state.quizScores[id]=score}
  if(id==="FINAL")state.completionDate=new Date().toISOString();
  save();
  if(id==="FINAL"){ route("certificate"); return; }
  const idx=LEVELS.findIndex(x=>x[0]===id);
  const next=LEVELS[idx+1]?.[0] || "FINAL";
  route("level",next);
}
function renderLetter(i){
  i=Math.max(0,Math.min(CORE_LETTERS.length-1,Number(i)||0));state.selectedLetter=i;save();const x=CORE_LETTERS[i];
  $("#view").innerHTML=`<section class="hero"><span class="pill">${tr("writing")}</span><h1>${x.g} — ${x.label}</h1><p>${x.name} • ${x.row}</p></section>
  <div class="card" style="margin-top:16px"><div class="glyph" style="font-size:5rem;text-align:center">${x.g}</div><p style="text-align:center">${tr("draw")}</p>
  <div class="canvas-wrap"><canvas id="writeCanvas" class="write-canvas"></canvas></div>
  <div class="row" style="margin-top:12px"><button class="action-btn" onclick="clearCanvas()">${tr("clear")}</button><button class="primary" onclick="checkCanvas()">${tr("check")}</button></div></div>
  <div class="row" style="margin-top:16px"><button class="action-btn" onclick="route('level','1')">${tr("back")}</button>${i>0?`<button class="action-btn" onclick="route('letter',${i-1})">←</button>`:""}${i<29?`<button class="primary" onclick="route('letter',${i+1})">→ ${tr("next")}</button>`:""}</div>`;
  initCanvas();
}
let ctx,drawing=false;
function initCanvas(){const c=$("#writeCanvas");if(!c)return;const ratio=Math.max(1,window.devicePixelRatio||1);c.width=c.clientWidth*ratio;c.height=c.clientHeight*ratio;ctx=c.getContext("2d");ctx.scale(ratio,ratio);ctx.lineWidth=5;ctx.lineCap="round";ctx.lineJoin="round";ctx.strokeStyle="#183b2a";const pos=e=>{const r=c.getBoundingClientRect();return{x:(e.touches?e.touches[0].clientX:e.clientX)-r.left,y:(e.touches?e.touches[0].clientY:e.clientY)-r.top}};const down=e=>{drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);e.preventDefault()};const move=e=>{if(!drawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke();e.preventDefault()};const up=()=>drawing=false;c.onpointerdown=down;c.onpointermove=move;c.onpointerup=up;c.onpointerleave=up}
function clearCanvas(){if(ctx){const c=$("#writeCanvas");ctx.clearRect(0,0,c.clientWidth,c.clientHeight)}}
function checkCanvas(){openModal(`<h2>${tr("writing")}</h2><p>${tr("correct")} — keep practicing until your strokes feel comfortable.</p>`)}
function renderCertificate(){
  const done=state.completed.includes("FINAL"),date=state.completionDate?new Date(state.completionDate):new Date();
  const dateStr=date.toLocaleDateString("en-IN",{day:"2-digit",month:"2-digit",year:"2-digit"});
  const score=state.quizScores["FINAL"]??"—";
  $("#view").innerHTML=`<div class="row no-print" style="justify-content:space-between;margin-bottom:12px"><button class="action-btn" onclick="route('home')">${tr("back")}</button><button class="primary" onclick="window.print()">${tr("print")}</button></div>
  <div class="certificate"><img src="image/official-logo.png" class="cert-logo"><p>OL CHIKI JOURNEY</p><h2>Achievement Certificate</h2><p>This certificate is presented to</p><div class="cert-name">${escapeHtml(state.name)}</div><p>for completing the OL CHIKI JOURNEY learning path.</p><p><b>${tr("quizScore")}:</b> ${score}${score!=="—"?"%":""}</p><p class="cert-date">${dateStr}</p><p>${tr("certificateNote")}</p><p style="margin-top:30px"><b>LOVA HANSDA</b><br>Creator</p></div>
  <div class="notice no-print" style="margin-top:16px">${tr("dynamicCert")} ${done?"":"Complete FINAL to record the final completion date."}</div>`;
}
function openModal(html){$("#modalBody").innerHTML=html;$("#modal").classList.remove("hidden")}
function resetProgress(){if(confirm("Reset all learning progress?")){state.completed=[];state.skipped0=false;state.xp=0;state.quizScores={};state.completionDate=null;save();route("home")}}
function switchProfile(){state.name="";state.guest=false;save();setShell(false);show("accountScreen")}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));

if(state.lang && state.name){setShell(true);applyLang();route("home")}else if(state.lang){show("accountScreen")}else{show(null)}
