const app=document.getElementById("app");
let lang=localStorage.getItem("ocj_lang")||"ne";
let route="welcome", currentLevel=0, currentLesson=0;
const T={
en:{choose:"Choose Language",welcome:"Welcome!",intro:"A complete learning journey for Santhali language and Ol Chiki.",start:"Start Journey →",journey:"My Journey",level:"Level",lesson:"Lesson",next:"Next →",back:"← Back",mini:"Mini Quiz",xp:"XP & Reward",complete:"Level Complete",sample:"TEST BUILD",noaudio:"Audio is intentionally not included in this test build.",profile:"Profile",home:"Home",learn:"Learn",practice:"Practice",play:"Play",explore:"Explore",creator:"LOVA HANSDA",locked:"Structure preview — content is being verified before final release.",final:"FINAL — Fluent Santhali",certificate:"Completion Certificate"},
ne:{choose:"भाषा छान्नुहोस्",welcome:"नमस्कार!",intro:"Santhali भाषा र Ol Chiki लिपि सिक्ने हाम्रो पूर्ण यात्रा।",start:"यात्रा सुरु गर्नुहोस् →",journey:"मेरो यात्रा",level:"तह",lesson:"पाठ",next:"अर्को →",back:"← पछाडि",mini:"सानो क्विज",xp:"XP र पुरस्कार",complete:"तह पूरा भयो",sample:"TEST BUILD",noaudio:"यो test build मा Audio जानाजानी राखिएको छैन।",profile:"प्रोफाइल",home:"गृह",learn:"सिक्नुहोस्",practice:"अभ्यास गर्नुहोस्",play:"खेल्नुहोस्",explore:"अन्वेषण गर्नुहोस्",creator:"LOVA HANSDA",locked:"Structure preview — अन्तिम release अघि सामग्री verify गरिँदैछ।",final:"FINAL — Fluent Santhali",certificate:"समापन प्रमाणपत्र"},
hi:{choose:"भाषा चुनें",welcome:"नमस्कार!",intro:"Santhali भाषा और Ol Chiki लिपि सीखने की पूरी यात्रा।",start:"यात्रा शुरू करें →",journey:"मेरी यात्रा",level:"स्तर",lesson:"पाठ",next:"अगला →",back:"← पीछे",mini:"मिनी क्विज़",xp:"XP और पुरस्कार",complete:"स्तर पूरा",sample:"TEST BUILD",noaudio:"इस test build में Audio जानबूझकर नहीं है।",profile:"प्रोफ़ाइल",home:"होम",learn:"सीखें",practice:"अभ्यास करें",play:"खेलें",explore:"अन्वेषण करें",creator:"LOVA HANSDA",locked:"Structure preview — अंतिम release से पहले सामग्री verify की जा रही है।",final:"FINAL — Fluent Santhali",certificate:"Completion Certificate"},
bn:{choose:"ভাষা নির্বাচন করুন",welcome:"নমস্কার!",intro:"Santhali ভাষা ও Ol Chiki লিপি শেখার সম্পূর্ণ যাত্রা।",start:"যাত্রা শুরু করুন →",journey:"আমার যাত্রা",level:"স্তর",lesson:"পাঠ",next:"পরবর্তী →",back:"← পিছনে",mini:"মিনি কুইজ",xp:"XP ও পুরস্কার",complete:"স্তর সম্পূর্ণ",sample:"TEST BUILD",noaudio:"এই test build-এ Audio ইচ্ছাকৃতভাবে রাখা হয়নি।",profile:"প্রোফাইল",home:"হোম",learn:"শিখুন",practice:"অনুশীলন করুন",play:"খেলুন",explore:"অন্বেষণ করুন",creator:"LOVA HANSDA",locked:"Structure preview — final release-এর আগে content verify করা হচ্ছে।",final:"FINAL — Fluent Santhali",certificate:"Completion Certificate"}};
const levels=[
["परिचय","Introduction",["संथाली के हो?","संथाली र Ol Chiki","Ol Chiki किन?","पण्डित रघुनाथ मुर्मू","लेखनका आधारभूत नियम","हाम्रो सिकाइ यात्रा"]],
["Ol Chiki From Zero","Ol Chiki From Zero",["३० मुख्य अक्षरको परिचय","अक्षर पहिचान","अक्षर हेर्ने अभ्यास","लेखन अभ्यास","मिलाउने खेल","सानो क्विज"]],
["Ol Chiki Numbers","Ol Chiki Numbers",["अंक परिचय","अंक पहिचान","अंक मिलाउने","अंक लेख्ने अभ्यास","छिटो अभ्यास","सानो क्विज"]],
["अक्षर → शब्द","Letter → Word",["अक्षर जोड्ने अवधारणा","छोटो शब्द अभ्यास","२/३ अक्षरका शब्द","४ अक्षर वा बढीका शब्द","कपी/लेखन अभ्यास","सानो क्विज"]],
["Santhali शब्दावली","Basic Santhali Vocabulary",["अभिवादन","मानिस र परिवार","घर र दैनिक वस्तु","खाना/पेय","प्रकृति/जनावर","रङ, समय र स्थान","सानो क्विज"]],
["सामान्य वाक्यहरू","Basic Sentences",["वाक्यको अवधारणा","वाक्य संरचना","सकारात्मक वाक्य","नकारात्मक वाक्य","प्रश्न/उत्तर","परिचय र दैनिक संवाद","सानो क्विज"]],
["सर्वनाम","Pronouns",["सर्वनामको परिचय","प्रयोग","वाक्य बनाउने","पहिचान अभ्यास","मिलाउने खेल","सानो क्विज"]],
["संज्ञा","Nouns",["संज्ञाको परिचय","मानिस","स्थान","वस्तु","श्रेणीकरण","अभ्यास","सानो क्विज"]],
["क्रिया","Verbs",["क्रियाको परिचय","दैनिक काम","कार्य पहिचान","वाक्य बनाउने","अभ्यास","सानो क्विज"]],
["काल","Tense",["वर्तमान","भूत","भविष्य","काल पहिचान","वाक्य अभ्यास","सानो क्विज"]],
["व्याकरण","Grammar",["वाक्य ढाँचा","कण/चिन्ह","प्रश्न बनाउने","नकारात्मक ढाँचा","व्याकरण अभ्यास","सानो क्विज"]],
["Ol Chiki लेखन","Ol Chiki Writing",["३० अक्षर पुनरावृत्ति","Stroke order","Spacing","शब्द लेखन","वाक्य लेखन","Dictation","सानो क्विज"]],
["Ol Chiki पठन","Ol Chiki Reading",["अक्षर पढ्ने","शब्द पढ्ने","वाक्य पढ्ने","अनुच्छेद","संवाद","कथा/अर्थ बुझ्ने","सानो क्विज"]],
["दैनिक कुराकानी","Daily Conversation",["अभिवादन","परिचय","परिवार","घर/काम","किनमेल","दिशा र दैनिक प्रश्न/उत्तर","सानो क्विज"]],
["सुन्ने + बोल्ने","Listening + Speaking",["सुनेर चिन्ने","सुनेर छान्ने","दोहोऱ्याउने","उच्चारण अभ्यास","बोल्ने prompt","संवाद अभ्यास","सानो क्विज"]],
["उन्नत व्याकरण","Advanced Grammar",["उन्नत संरचना","जटिल वाक्य","जोडिएका वाक्य","व्यावहारिक प्रयोग","व्याकरण अभ्यास","सानो क्विज"]],
["उन्नत पठन + लेखन","Advanced Reading & Writing",["उन्नत पठन","लेखन","अनुवाद","अनुच्छेद","बुझाइ अभ्यास","व्यावहारिक पाठ","सानो क्विज"]],
["पूर्ण Ol Chiki Mastery","Full Ol Chiki Mastery",["अक्षर पुनरावृत्ति","हिज्जे","हस्तलेखन","पठन","Dictation","वाक्य/अनुच्छेद","अंक, मिति र समय","Digital typing","सानो क्विज"]],
["FINAL — Fluent Santhali","Fluent Santhali",["Translation बिना संवाद","प्रश्न/उत्तर","लामो संवाद","कथा र बुझाइ","स्वतन्त्र Ol Chiki लेखन","Final Mission","Final Assessment","Certificate"]]
];

function tr(k){return (T[lang]||T.en)[k]||T.en[k]||k}
function setLang(x){lang=x;localStorage.setItem("ocj_lang",x);route="welcome";render()}
function nav(r,l=0){route=r;currentLevel=l;currentLesson=0;render()}
function shell(body){
 app.innerHTML=`<div class="app"><header><div class="brand"><img src="image/official-logo.png"><div><b>OL CHIKI JOURNEY</b><small>Santhali Language App</small></div></div><span class="tag">${tr("sample")}</span></header>${body}<nav><button onclick="nav('journey')">⌂<small>${tr("home")}</small></button><button onclick="nav('journey')">🗺<small>${tr("journey")}</small></button><button onclick="nav('level',1)">✎<small>${tr("practice")}</small></button><button onclick="nav('profile')">●<small>${tr("profile")}</small></button></nav></div>`
}
function render(){
 if(route==="welcome") return welcome();
 if(route==="language") return language();
 if(route==="journey") return journey();
 if(route==="level") return levelPage();
 if(route==="lesson") return lessonPage();
 if(route==="quiz") return quizPage();
 if(route==="profile") return profilePage();
}
function welcome(){app.innerHTML=`<div class="splash"><img src="image/official-logo.png"><h1>${tr("welcome")}</h1><p>${tr("intro")}</p><div class="langmini"><button onclick="setLang('ne')">🇳🇵 नेपाली</button><button onclick="setLang('en')">🇬🇧 English</button><button onclick="setLang('hi')">🇮🇳 हिन्दी</button><button onclick="setLang('bn')">🇧🇩 বাংলা</button></div><button class="gold" onclick="nav('journey')">${tr("start")}</button><p class="creator">— ${tr("creator")} —</p></div>`}
function language(){welcome()}
function journey(){
 const cards=levels.map((v,i)=>`<button class="levelCard" onclick="nav('level',${i})"><span class="num">${i===18?"★":i}</span><div><b>${i===18?tr("final"):v[0]}</b><small>${v[1]} • ${v[2].length} ${tr("lesson")}</small></div><strong>›</strong></button>`).join("");
 shell(`<main class="page"><div class="hero"><div class="pill">${tr("noaudio")}</div><h1>${tr("journey")}</h1><p>${tr("locked")}</p></div><section class="levels">${cards}</section></main>`)
}
function levelPage(){
 const v=levels[currentLevel], is1=currentLevel===1, is2=currentLevel===2;
 let extra="";
 if(is1) extra=`<div class="card"><h2>${tr("learn")}: 30 Core Letters</h2><p>${tr("locked")}</p><div class="grid">${CORE_LETTERS.map((x,i)=>`<button class="letter"><small>${String(i+1).padStart(2,"0")}</small><b>${x}</b></button>`).join("")}</div></div>`;
 if(is2) extra=`<div class="card"><h2>Ol Chiki Numbers</h2><p>${tr("locked")}</p><div class="grid">${OL_CHIKI_NUMBERS.map(x=>`<button class="letter"><small>${x.value}</small><b>${x.g}</b></button>`).join("")}</div></div>`;
 const lessonButtons=v[2].map((x,i)=>i===v[2].length-1 && x.includes("क्विज")||x.includes("Quiz")?`<button class="lessonCard" onclick="nav('quiz',${currentLevel})"><span>✓</span><div><b>${x}</b><small>${tr("mini")}</small></div><strong>›</strong></button>`:`<button class="lessonCard" onclick="currentLesson=${i};route='lesson';render()"><span>${i+1}</span><div><b>${x}</b><small>${tr("learn")} • ${tr("practice")} • ${tr("play")}</small></div><strong>›</strong></button>`).join("");
 shell(`<main class="page"><div class="topline"><button class="back" onclick="nav('journey')">${tr("back")}</button><span>${tr("level")} ${currentLevel}</span><span>${currentLevel+1}/19</span></div><div class="progress"><i style="width:${((currentLevel+1)/19)*100}%"></i></div><h1>${currentLevel===18?tr("final"):v[0]}</h1>${currentLevel===0?`<div class="murmuIntro"><img src="image/pandit-raghunath-murmu.jpg"><div><b>${v[3-0][0]}</b><p>${tr("locked")}</p></div></div>`:""}${extra}<section>${lessonButtons}</section><button class="gold wide" onclick="nav('quiz',${currentLevel})">${tr("mini")}</button></main>`)
}
function lessonPage(){
 const v=levels[currentLevel], title=v[2][currentLesson];
 let visual=`<div class="visualScene"><span>OL CHIKI</span></div>`;
 if(currentLevel===0 && currentLesson===3) visual=`<img class="murmu" src="image/pandit-raghunath-murmu.jpg">`;
 if(currentLevel===0 && currentLesson===4) visual=`<div class="board">${CORE_LETTERS.slice(0,15).map(x=>`<span>${x}</span>`).join("")}</div>`;
 if(currentLevel===1) visual=`<div class="board">${CORE_LETTERS.slice(Math.max(0,currentLesson*5),Math.min(30,currentLesson*5+15)).map(x=>`<span>${x}</span>`).join("")}</div>`;
 if(currentLevel===2) visual=`<div class="board">${OL_CHIKI_NUMBERS.map(x=>`<span>${x.g}</span>`).join("")}</div>`;
 shell(`<main class="page"><div class="topline"><button class="back" onclick="nav('level',${currentLevel})">${tr("back")}</button><span>${tr("level")} ${currentLevel}</span><span>${currentLesson+1}/${v[2].length}</span></div><div class="progress"><i style="width:${((currentLesson+1)/v[2].length)*100}%"></i></div><h1>${title}</h1>${visual}<div class="card"><p>${tr("locked")}</p><div class="notice">${tr("noaudio")}</div></div><div class="flow"><span>${tr("learn")}</span><span>→</span><span>${tr("practice")}</span><span>→</span><span>${tr("play")}</span></div><div class="actions"><button class="back" onclick="nav('level',${currentLevel})">${tr("back")}</button>${currentLesson<v[2].length-1?`<button class="gold" onclick="currentLesson++;render()">${tr("next")}</button>`:`<button class="gold" onclick="nav('quiz',${currentLevel})">${tr("mini")}</button>`}</div></main>`)
}
function quizPage(){
 shell(`<main class="page center"><div class="hero"><div class="quizIcon">✓</div><h1>${tr("mini")}</h1><p>${tr("locked")}</p></div><div class="card"><h2>${tr("sample")}</h2><p>This is a structural quiz screen for testing navigation, scoring layout and unlock flow. Final questions will use verified lesson content.</p><div class="quizOptions"><button>Option A</button><button>Option B</button><button>Option C</button></div><button class="gold wide" onclick="nav('level',${currentLevel})">${tr("complete")}</button></div><div class="reward"><b>${tr("xp")}</b><br>+100 XP • Badge preview</div></main>`)
}
function profilePage(){
 shell(`<main class="page center"><img class="profileLogo" src="image/official-logo.png"><h1>LOVA HANSDA</h1><div class="card"><h2>${tr("certificate")}</h2><img class="certificate" src="assets/certificate-reference.png"><p>${tr("locked")}</p></div></main>`)
}
render();
