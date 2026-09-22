(function(){
  'use strict';

  const LANGS = ['en','ne','hi','bn'];
  const T = {
    en:{name:'English',journey:'OL CHIKI JOURNEY',subtitle:'Santhali Language App',tag:'Learn • Play • Explore',start:'Start Journey',continueJourney:'Continue Journey',home:'Home',journeyNav:'Journey',profile:'Profile',settings:'Settings',back:'Back',language:'Language',sound:'Sound',music:'Music',notifications:'Notifications',created:'Created by LOVA HANSDA',chooseLanguage:'Choose your language',introTitle:'Learn Santhali through Ol Chiki',introText:'Learn letters, words, reading, writing, listening and conversation through a friendly game-based journey.',create:'Create Account',login:'Log In',guest:'Continue as Guest',welcome:'Welcome',xp:'XP',lessons:'Lessons',streak:'Streak',badges:'Badges',daily:'Daily Challenge',dictionary:'Dictionary',myJourney:'My Journey',review:'Review',learn:'Learn',practice:'Practice',play:'Play',complete:'Complete',available:'Available',locked:'Locked',miniQuiz:'Mini Quiz',quizIntro:'Check what you learned in this level.',next:'Next',finish:'Finish',clear:'Clear',check:'Check',trace:'Trace',doodle:'Doodle',see:'See',numbers:'Ol Chiki Numbers',letters:'Ol Chiki Letters',level:'Level',lessonComplete:'Lesson Complete',levelComplete:'Level Complete',bonus:'Bonus XP',score:'Score',certificate:'Certificate',downloadNote:'Certificate preview. Export can be added later.',reviewNote:'Completed lessons stay available for review and practice.',verifiedNote:'Learning content is added only after verification. Technical Unicode details are not shown to learners.',creator:'Creator',save:'Save',continueText:'Continue',close:'Close',reset:'Reset Progress',resetConfirm:'Reset all local progress?',yes:'Yes, reset',no:'No',freeWorld:'Free Practice World',contentSoon:'This section is structured and ready. Verified lesson content will be added here without guessing.',startQuiz:'Start Mini Quiz',retry:'Try Again',correct:'Correct',incorrect:'Not quite',question:'Question',of:'of',finishQuiz:'Finish Quiz',dailyDone:'Daily challenge completed!',reviewCompleted:'Review completed lesson',writeHint:'Use your finger, mouse or stylus inside the writing area.',level0:'Introduction',level1:'Ol Chiki From Zero',level2:'Letter → Word',level3:'Basic Santhali Vocabulary',level4:'Basic Sentences',level5:'Pronouns',level6:'Nouns',level7:'Verbs',level8:'Tense',level9:'Grammar',level10:'Ol Chiki Writing',level11:'Ol Chiki Reading',level12:'Daily Conversation',level13:'Listening + Speaking',level14:'Advanced Grammar',level15:'Advanced Reading & Writing',level16:'Full Ol Chiki Mastery',final:'Fluent Santhali'},
    ne:{name:'नेपाली',journey:'OL CHIKI JOURNEY',subtitle:'Santhali Language App',tag:'Learn • Play • Explore',start:'यात्रा सुरु गर्नुहोस्',continueJourney:'यात्रा जारी राख्नुहोस्',home:'Home',journeyNav:'यात्रा',profile:'Profile',settings:'Settings',back:'पछाडि',language:'भाषा',sound:'ध्वनि',music:'संगीत',notifications:'सूचना',created:'Created by LOVA HANSDA',chooseLanguage:'आफ्नो भाषा छान्नुहोस्',introTitle:'Ol Chiki मार्फत Santhali सिक्नुहोस्',introText:'अक्षर, शब्द, पढाइ, लेखाइ, सुनाइ र कुराकानीलाई खेलजस्तै यात्राबाट सिक्नुहोस्।',create:'Account बनाउनुहोस्',login:'Log In',guest:'Guest रूपमा जारी राख्नुहोस्',welcome:'स्वागत छ',xp:'XP',lessons:'पाठ',streak:'Streak',badges:'Badges',daily:'Daily Challenge',dictionary:'Dictionary',myJourney:'मेरो यात्रा',review:'Review',learn:'सिक्नुहोस्',practice:'अभ्यास',play:'खेल',complete:'Complete',available:'Available',locked:'Locked',miniQuiz:'सानो Quiz',quizIntro:'यो Level मा सिकेको कुरा जाँच्नुहोस्।',next:'अर्को',finish:'समाप्त',clear:'Clear',check:'Check',trace:'Trace',doodle:'Doodle',see:'हेर्नुहोस्',numbers:'Ol Chiki Numbers',letters:'Ol Chiki Letters',level:'Level',lessonComplete:'Lesson Complete',levelComplete:'Level Complete',bonus:'Bonus XP',score:'Score',certificate:'Certificate',downloadNote:'यो certificate को preview हो। पछि export थप्न सकिन्छ।',reviewNote:'Complete भएका lesson हरू फेरि Review र Practice गर्न मिल्छ।',verifiedNote:'Verified भएपछि मात्र learning content थपिन्छ। Technical Unicode details learner लाई देखाइँदैन।',creator:'Creator',save:'Save',continueText:'जारी राख्नुहोस्',close:'बन्द',reset:'Progress Reset',resetConfirm:'सबै local progress reset गर्ने?',yes:'हो, reset',no:'होइन',freeWorld:'Free Practice World',contentSoon:'यो section को structure तयार छ। Verified lesson content बिना अनुमान नगरी पछि थपिनेछ।',startQuiz:'सानो Quiz सुरु गर्नुहोस्',retry:'फेरि प्रयास',correct:'सही',incorrect:'अहिले सही भएन',question:'प्रश्न',of:'मध्ये',finishQuiz:'Quiz समाप्त',dailyDone:'Daily challenge पूरा भयो!',reviewCompleted:'Complete भएको lesson Review गर्नुहोस्',writeHint:'Writing area मा finger, mouse वा stylus प्रयोग गर्नुहोस्।',level0:'Introduction',level1:'Ol Chiki From Zero',level2:'Letter → Word',level3:'Basic Santhali Vocabulary',level4:'Basic Sentences',level5:'Pronouns',level6:'Nouns',level7:'Verbs',level8:'Tense',level9:'Grammar',level10:'Ol Chiki Writing',level11:'Ol Chiki Reading',level12:'Daily Conversation',level13:'Listening + Speaking',level14:'Advanced Grammar',level15:'Advanced Reading & Writing',level16:'Full Ol Chiki Mastery',final:'Fluent Santhali'},
    hi:{name:'हिन्दी',journey:'OL CHIKI JOURNEY',subtitle:'Santhali Language App',tag:'Learn • Play • Explore',start:'यात्रा शुरू करें',continueJourney:'यात्रा जारी रखें',home:'Home',journeyNav:'यात्रा',profile:'Profile',settings:'Settings',back:'वापस',language:'भाषा',sound:'ध्वनि',music:'संगीत',notifications:'सूचनाएँ',created:'Created by LOVA HANSDA',chooseLanguage:'अपनी भाषा चुनें',introTitle:'Ol Chiki के माध्यम से Santhali सीखें',introText:'अक्षर, शब्द, पढ़ना, लिखना, सुनना और बातचीत एक खेल-जैसी यात्रा से सीखें।',create:'Account बनाएँ',login:'Log In',guest:'Guest के रूप में जारी रखें',welcome:'स्वागत है',xp:'XP',lessons:'Lessons',streak:'Streak',badges:'Badges',daily:'Daily Challenge',dictionary:'Dictionary',myJourney:'मेरी यात्रा',review:'Review',learn:'सीखें',practice:'अभ्यास',play:'खेल',complete:'Complete',available:'Available',locked:'Locked',miniQuiz:'छोटा Quiz',quizIntro:'इस Level में आपने जो सीखा है उसे जाँचें।',next:'अगला',finish:'समाप्त',clear:'Clear',check:'Check',trace:'Trace',doodle:'Doodle',see:'देखें',numbers:'Ol Chiki Numbers',letters:'Ol Chiki Letters',level:'Level',lessonComplete:'Lesson Complete',levelComplete:'Level Complete',bonus:'Bonus XP',score:'Score',certificate:'Certificate',downloadNote:'यह certificate preview है। Export बाद में जोड़ा जा सकता है।',reviewNote:'Complete lessons को फिर से Review और Practice किया जा सकता है।',verifiedNote:'Verified होने के बाद ही learning content जोड़ा जाएगा। Technical Unicode details learner को नहीं दिखाए जाते।',creator:'Creator',save:'Save',continueText:'जारी रखें',close:'बंद',reset:'Progress Reset',resetConfirm:'सारा local progress reset करें?',yes:'हाँ, reset',no:'नहीं',freeWorld:'Free Practice World',contentSoon:'यह section तैयार है। Verified lesson content बिना अनुमान के बाद में जोड़ा जाएगा।',startQuiz:'छोटा Quiz शुरू करें',retry:'फिर कोशिश करें',correct:'सही',incorrect:'अभी सही नहीं',question:'प्रश्न',of:'में से',finishQuiz:'Quiz समाप्त',dailyDone:'Daily challenge पूरा हुआ!',reviewCompleted:'Complete lesson को Review करें',writeHint:'Writing area में finger, mouse या stylus इस्तेमाल करें।',level0:'Introduction',level1:'Ol Chiki From Zero',level2:'Letter → Word',level3:'Basic Santhali Vocabulary',level4:'Basic Sentences',level5:'Pronouns',level6:'Nouns',level7:'Verbs',level8:'Tense',level9:'Grammar',level10:'Ol Chiki Writing',level11:'Ol Chiki Reading',level12:'Daily Conversation',level13:'Listening + Speaking',level14:'Advanced Grammar',level15:'Advanced Reading & Writing',level16:'Full Ol Chiki Mastery',final:'Fluent Santhali'},
    bn:{name:'বাংলা',journey:'OL CHIKI JOURNEY',subtitle:'Santhali Language App',tag:'Learn • Play • Explore',start:'যাত্রা শুরু করুন',continueJourney:'যাত্রা চালিয়ে যান',home:'Home',journeyNav:'যাত্রা',profile:'Profile',settings:'Settings',back:'পিছনে',language:'ভাষা',sound:'শব্দ',music:'সঙ্গীত',notifications:'নোটিফিকেশন',created:'Created by LOVA HANSDA',chooseLanguage:'আপনার ভাষা বেছে নিন',introTitle:'Ol Chiki-এর মাধ্যমে Santhali শিখুন',introText:'অক্ষর, শব্দ, পড়া, লেখা, শোনা এবং কথোপকথন একটি গেম-ভিত্তিক যাত্রায় শিখুন।',create:'Account তৈরি করুন',login:'Log In',guest:'Guest হিসেবে চালিয়ে যান',welcome:'স্বাগতম',xp:'XP',lessons:'Lessons',streak:'Streak',badges:'Badges',daily:'Daily Challenge',dictionary:'Dictionary',myJourney:'আমার যাত্রা',review:'Review',learn:'শিখুন',practice:'অনুশীলন',play:'খেলুন',complete:'Complete',available:'Available',locked:'Locked',miniQuiz:'ছোট Quiz',quizIntro:'এই Level-এ যা শিখেছেন তা পরীক্ষা করুন।',next:'পরবর্তী',finish:'শেষ',clear:'Clear',check:'Check',trace:'Trace',doodle:'Doodle',see:'দেখুন',numbers:'Ol Chiki Numbers',letters:'Ol Chiki Letters',level:'Level',lessonComplete:'Lesson Complete',levelComplete:'Level Complete',bonus:'Bonus XP',score:'Score',certificate:'Certificate',downloadNote:'এটি certificate preview। পরে export যোগ করা যাবে।',reviewNote:'Complete lesson আবার Review ও Practice করা যাবে।',verifiedNote:'Verification-এর পরে learning content যোগ করা হবে। Technical Unicode details learner-কে দেখানো হবে না।',creator:'Creator',save:'Save',continueText:'চালিয়ে যান',close:'বন্ধ',reset:'Progress Reset',resetConfirm:'সব local progress reset করবেন?',yes:'হ্যাঁ, reset',no:'না',freeWorld:'Free Practice World',contentSoon:'এই section-এর structure প্রস্তুত। Verified lesson content অনুমান না করে পরে যোগ করা হবে।',startQuiz:'ছোট Quiz শুরু করুন',retry:'আবার চেষ্টা করুন',correct:'সঠিক',incorrect:'এখনও সঠিক নয়',question:'প্রশ্ন',of:'এর মধ্যে',finishQuiz:'Quiz শেষ',dailyDone:'Daily challenge সম্পূর্ণ!',reviewCompleted:'Complete lesson Review করুন',writeHint:'Writing area-তে finger, mouse বা stylus ব্যবহার করুন।',level0:'Introduction',level1:'Ol Chiki From Zero',level2:'Letter → Word',level3:'Basic Santhali Vocabulary',level4:'Basic Sentences',level5:'Pronouns',level6:'Nouns',level7:'Verbs',level8:'Tense',level9:'Grammar',level10:'Ol Chiki Writing',level11:'Ol Chiki Reading',level12:'Daily Conversation',level13:'Listening + Speaking',level14:'Advanced Grammar',level15:'Advanced Reading & Writing',level16:'Full Ol Chiki Mastery',final:'Fluent Santhali'}
  };

  const LEVELS = [
    {id:0,key:'level0',desc:'Introduction to Santhali and Ol Chiki'},
    {id:1,key:'level1',desc:'30 core letters, recognition and writing practice'},
    {id:2,key:'level2',desc:'Sound blending, syllables and word building'},
    {id:3,key:'level3',desc:'Everyday vocabulary and picture learning'},
    {id:4,key:'level4',desc:'Basic sentence patterns and conversation'},
    {id:5,key:'level5',desc:'Pronouns and practical sentence use'},
    {id:6,key:'level6',desc:'Nouns and everyday categories'},
    {id:7,key:'level7',desc:'Common verbs and actions'},
    {id:8,key:'level8',desc:'Present, past and future patterns'},
    {id:9,key:'level9',desc:'Core grammar and sentence formation'},
    {id:10,key:'level10',desc:'Handwriting, dictation and spelling'},
    {id:11,key:'level11',desc:'Letters to stories and comprehension'},
    {id:12,key:'level12',desc:'Daily-use conversations'},
    {id:13,key:'level13',desc:'Listening and speaking practice'},
    {id:14,key:'level14',desc:'Advanced grammar challenges'},
    {id:15,key:'level15',desc:'Advanced reading, writing and translation'},
    {id:16,key:'level16',desc:'Full Ol Chiki mastery and digital typing'},
    {id:'final',key:'final',desc:'Final mission for fluent Santhali practice'}
  ];

  const state = loadState();
  let currentScreen = state.lang ? 'home' : 'language';
  let currentLevel = 0;
  let currentLetter = 0;
  let quizState = null;
  let canvas = null;
  let ctx = null;
  let drawing = false;

  function freshState(){return {lang:null,name:'',xp:0,streak:0,badges:[],completed:{},quizScores:{},daily:null,sound:true,music:false,notifications:false};}
  function loadState(){
    try{const raw=localStorage.getItem('olchikiJourneyState'); return raw?Object.assign(freshState(),JSON.parse(raw)):freshState();}
    catch(e){return freshState();}
  }
  function save(){try{localStorage.setItem('olchikiJourneyState',JSON.stringify(state));}catch(e){}}
  function lang(){return T[state.lang]||T.en}
  function t(k){return lang()[k]||T.en[k]||k}
  function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
  function today(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
  function completedCount(){return Object.values(state.completed).filter(Boolean).length}
  function unlocked(id){if(id===0)return true;if(id==='final')return completedCount()>=17;return !!state.completed[id-1] || !!state.completed[id];}
  function levelCompleted(id){return !!state.completed[id]}
  function addXP(n){state.xp+=n;save()}
  function levelTitle(id){const l=LEVELS.find(x=>x.id===id);return l?t(l.key):String(id)}

  function shell(content, active='home'){
    const nav = active==='language'||active==='intro'||active==='account' ? '' : `<nav class="bottom-nav"><div class="nav-inner">
      <button class="nav-btn ${active==='home'?'active':''}" data-nav="home">🏠<br><small>${t('home')}</small></button>
      <button class="nav-btn ${active==='journey'?'active':''}" data-nav="journey">🗺️<br><small>${t('journeyNav')}</small></button>
      <button class="nav-btn ${active==='profile'?'active':''}" data-nav="profile">🏅<br><small>${t('profile')}</small></button>
      <button class="nav-btn ${active==='settings'?'active':''}" data-nav="settings">⚙️<br><small>${t('settings')}</small></button>
    </div></nav>`;
    return `<div class="screen"><header class="topbar"><div class="brand"><img src="image/official-logo.png" alt="OL CHIKI JOURNEY logo"><div><strong>${t('journey')}</strong><small>${t('subtitle')}</small></div></div>${active!=='language'&&active!=='intro'&&active!=='account'?'<button class="icon-btn" data-action="home" aria-label="Home">⌂</button>':''}</header>${content}${shellFooter(active)}${nav}</div>`;
  }
  function shellFooter(active){return `<div class="footer-note">${t('tag')} · ${t('created')}</div>`}

  function render(){
    canvas=null;ctx=null;drawing=false;
    const app=document.getElementById('app');
    if(currentScreen==='language') app.innerHTML=languageScreen();
    else if(currentScreen==='intro') app.innerHTML=introScreen();
    else if(currentScreen==='account') app.innerHTML=accountScreen();
    else if(currentScreen==='home') app.innerHTML=homeScreen();
    else if(currentScreen==='journey') app.innerHTML=shell(journeyScreen(),'journey');
    else if(currentScreen==='level') app.innerHTML=shell(levelScreen(currentLevel),'journey');
    else if(currentScreen==='letter') app.innerHTML=shell(letterScreen(currentLevel,currentLetter),'journey');
    else if(currentScreen==='numbers') app.innerHTML=shell(numbersScreen(),'journey');
    else if(currentScreen==='quiz') app.innerHTML=shell(quizScreen(),'journey');
    else if(currentScreen==='quizResult') app.innerHTML=shell(quizResultScreen(),'journey');
    else if(currentScreen==='profile') app.innerHTML=shell(profileScreen(),'profile');
    else if(currentScreen==='settings') app.innerHTML=shell(settingsScreen(),'settings');
    else if(currentScreen==='certificate') app.innerHTML=shell(certificateScreen(),'profile');
    bind();
  }

  function languageScreen(){return `<main class="container"><section class="hero"><div class="hero-copy"><div class="eyebrow">OL CHIKI JOURNEY</div><h1>${t('chooseLanguage')}</h1><p>Santhali Language App<br><strong>${t('tag')}</strong></p><div class="card"><div class="lesson-grid">${LANGS.map(x=>`<button class="btn btn-secondary" data-lang="${x}">${esc(T[x].name)}</button>`).join('')}</div></div></div><div class="hero-logo"><img src="image/official-logo.png" alt="Official OL CHIKI JOURNEY logo"></div></section></main>`}

  function introScreen(){return `<main class="container"><section class="hero"><div class="hero-copy"><div class="eyebrow">${t('journey')}</div><h1>${t('introTitle')}</h1><p>${t('introText')}</p><div class="actions"><button class="btn btn-primary" data-action="account">${t('start')}</button></div><p class="muted">${t('created')}</p></div><div class="hero-logo"><img src="image/official-logo.png" alt="Official logo"></div></section><div class="card"><h3>${t('verifiedNote')}</h3></div></main>`}

  function accountScreen(){return `<main class="container"><div class="card" style="max-width:560px;margin:40px auto"><div class="close-row"><div><div class="eyebrow">${t('journey')}</div><h2>${t('welcome')}</h2></div></div><label class="muted">Player Name</label><input id="playerName" type="text" maxlength="40" placeholder="Your name" value="${esc(state.name)}" style="width:100%;padding:13px;border:1px solid var(--line);border-radius:14px;margin:8px 0 16px"><div class="actions"><button class="btn btn-primary" data-action="create">${t('create')}</button><button class="btn btn-secondary" data-action="guest">${t('guest')}</button></div><p class="muted" style="margin-top:16px;font-size:12px">${t('reviewNote')}</p></div></main>`}

  function homeScreen(){
    const pct=Math.min(100,Math.round(completedCount()/17*100));
    return shell(`<main class="container"><section class="hero" style="padding-top:22px"><div class="hero-copy"><div class="eyebrow">${t('welcome')}</div><h1>${esc(state.name||'Learner')} 🌿</h1><p>${t('introText')}</p><div class="actions"><button class="btn btn-primary" data-action="continue">${t('continueJourney')}</button><button class="btn btn-secondary" data-nav="journey">${t('myJourney')}</button></div></div><div class="hero-logo"><img src="image/official-logo.png" alt="Official logo"></div></section><div class="stats"><div class="stat"><b>${state.xp}</b><span>${t('xp')}</span></div><div class="stat"><b>${completedCount()}</b><span>${t('lessons')}</span></div><div class="stat"><b>${state.streak}</b><span>${t('streak')}</span></div><div class="stat"><b>${state.badges.length}</b><span>${t('badges')}</span></div></div><div class="card" style="margin-top:14px"><div class="section-title"><h3>${t('myJourney')}</h3><span class="review-pill">${pct}%</span></div><div class="progress"><i style="width:${pct}%"></i></div></div><div class="section-title"><h2>${t('daily')}</h2></div><div class="card"><p>${dailyText()}</p><button class="btn btn-gold" data-action="daily">+25 XP</button></div><div class="section-title"><h2>${t('dictionary')}</h2></div><div class="card"><div class="empty">${t('contentSoon')}</div></div></main>`,'home');
  }

  function dailyText(){if(state.daily===today())return t('dailyDone');return state.lang==='ne'?'आजको सानो challenge पूरा गरेर Bonus XP पाउनुहोस्।':'Complete a small daily challenge to earn bonus XP.'}

  function journeyScreen(){
    return `<main class="container"><div class="section-title"><div><div class="eyebrow">${t('journey')}</div><h1>${t('myJourney')}</h1></div><span class="review-pill">${state.xp} XP</span></div><div class="journey">${LEVELS.map(l=>levelCard(l)).join('')}</div><div class="card" style="margin-top:16px"><h3>${t('freeWorld')}</h3><p class="muted">${t('contentSoon')}</p><button class="btn btn-secondary" data-action="freeWorld">${t('practice')}</button></div></main>`;
  }
  function levelCard(l){const isOpen=unlocked(l.id),done=levelCompleted(l.id);return `<article class="card level-card ${isOpen?'':'locked'}"><div><div class="level-top"><div class="level-number">${l.id==='final'?'★':l.id}</div><span class="status ${done?'done':isOpen?'open':'locked'}">${done?t('complete'):isOpen?t('available'):t('locked')}</span></div><h3>${t(l.key)}</h3><p>${esc(l.desc)}</p></div><button class="btn ${done?'btn-secondary':'btn-primary'}" ${isOpen?'':'disabled'} data-level="${l.id}">${done?t('review'):t('learn')}</button></article>`}

  function levelScreen(id){
    const l=LEVELS.find(x=>x.id===id); if(!l)return '';
    if(id==='final') return finalLevelScreen();
    const lessons = id===0?['What is Santhali?','Santhali and Ol Chiki','Pandit Raghunath Murmu','Basic writing direction','Introduction quiz']:
      id===1?['30 core letters','See & recognise','Trace','Doodle / free write','Letter revision','Numbers after alphabet','Mini Quiz']:['Learn','See','Listen','Practice','Play','Mini Quiz'];
    return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backJourney">← ${t('back')}</button></div><div class="section-title"><div><div class="eyebrow">${t('level')} ${id}</div><h1>${t(l.key)}</h1></div><span class="status ${levelCompleted(id)?'done':'open'}">${levelCompleted(id)?t('complete'):t('available')}</span></div>${id===0?`<div class="card"><h3>Introduction</h3><p>Santhali is the language being learned in this app. Ol Chiki is the script used in the journey. The historical introduction includes Pandit Raghunath Murmu and basic writing direction.</p><p class="muted">This prototype keeps historical wording concise and avoids unverified pronunciation or vocabulary.</p></div>`:''}${id===1?`<div class="card"><h3>${t('letters')}</h3><p class="muted">${t('writeHint')}</p><div class="letter-grid" style="margin-top:12px">${window.OL_CHIKI_LETTERS.map((x,i)=>`<div class="letter-card"><div class="glyph">${x.glyph}</div><div class="letter-name">${esc(x.name)}</div><button data-letter="${i}">${levelCompleted(1)?t('review'):t('practice')}</button></div>`).join('')}</div></div><div class="card" style="margin-top:14px"><h3>${t('numbers')}</h3><p class="muted">Numbers are placed after the alphabet as requested.</p><button class="btn btn-secondary" data-action="numbers">${t('numbers')}</button></div>`:''}${id>1?`<div class="notice">${t('contentSoon')}</div><div class="lesson-grid" style="margin-top:14px">${lessons.map(x=>`<div class="lesson"><b>${esc(x)}</b><span>${t('learn')} → ${t('practice')} → ${t('play')}</span></div>`).join('')}</div>`:''}<div class="card" style="margin-top:16px"><h3>${t('miniQuiz')}</h3><p class="muted">${t('quizIntro')}</p><button class="btn btn-gold" data-action="quiz" data-quiz-level="${id}">${t('startQuiz')}</button></div>${levelCompleted(id)?`<div class="card" style="margin-top:12px"><span class="review-pill">✓ ${t('reviewCompleted')}</span></div>`:''}</main>`;
  }

  function finalLevelScreen(){return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backJourney">← ${t('back')}</button></div><div class="section-title"><div><div class="eyebrow">FINAL</div><h1>${t('final')}</h1></div><span class="status open">${t('available')}</span></div><div class="card"><h2>Final Mission</h2><div class="lesson-grid"><div class="lesson"><b>Conversation</b><span>Practice without translation.</span></div><div class="lesson"><b>Reading</b><span>Understand longer material.</span></div><div class="lesson"><b>Writing</b><span>Write independently in Ol Chiki.</span></div><div class="lesson"><b>Comprehension</b><span>Show what you learned.</span></div></div></div><div class="card" style="margin-top:14px"><h3>${t('miniQuiz')}</h3><p class="muted">${t('quizIntro')}</p><button class="btn btn-gold" data-action="quiz" data-quiz-level="final">${t('startQuiz')}</button></div></main>`}

  function numbersScreen(){return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backLevel1">← ${t('back')}</button></div><div class="section-title"><div><div class="eyebrow">LEVEL 1</div><h1>${t('numbers')}</h1></div></div><div class="notice">Ol Chiki number symbols are shown here. Names and pronunciations will only be added after verification.</div><div class="number-grid" style="margin-top:14px">${window.OL_CHIKI_DIGITS.map((d,i)=>`<div class="number-card"><b>${d}</b><span>${i}</span></div>`).join('')}</div></main>`}

  function letterScreen(level,index){const letter=window.OL_CHIKI_LETTERS[index];if(!letter)return '';return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backLevel1">← ${t('back')}</button></div><div class="section-title"><div><div class="eyebrow">${t('level')} 1 · ${index+1}/30</div><h1>${t('practice')}</h1></div><span class="review-pill">${esc(letter.name)}</span></div><div class="practice-layout"><div class="practice-letter"><div><div class="glyph">${letter.glyph}</div><div style="text-align:center;font-weight:900;color:var(--forest)">${esc(letter.name)}</div></div></div><div class="canvas-wrap"><p class="muted">${t('writeHint')}</p><canvas id="writingCanvas" width="900" height="560" aria-label="Ol Chiki writing practice"></canvas><div class="canvas-actions"><button class="btn btn-secondary" data-action="clearCanvas">${t('clear')}</button><button class="btn btn-primary" data-action="checkCanvas">${t('check')}</button></div><div id="canvasResult" class="feedback" hidden></div></div></div><div class="actions" style="margin-top:14px"><button class="btn btn-secondary" data-action="letterPrev" ${index===0?'disabled':''}>←</button><button class="btn btn-gold" data-action="letterQuiz">${t('miniQuiz')}</button><button class="btn btn-primary" data-action="letterNext" ${index===29?'disabled':''}>→</button></div></main>`}

  function quizData(level){
    if(level===0)return [
      {q:'Which script is the focus of OL CHIKI JOURNEY?',opts:['Ol Chiki','Latin','Devanagari','Arabic'],a:0,h:'The app is named after the script used in this learning journey.'},
      {q:'Who is widely credited with creating Ol Chiki?',opts:['Pandit Raghunath Murmu','Rabindranath Tagore','Munshi Premchand','Bankim Chandra Chattopadhyay'],a:0,h:'Think of the historical figure associated with the creation of the script.'},
      {q:'In which direction is Ol Chiki written?',opts:['Left to right','Right to left','Top to bottom','Bottom to top'],a:0,h:'Think of the normal horizontal reading direction used in the script.'}
    ];
    if(level===1)return [
      {q:'How many core Ol Chiki letters are included in this beginner alphabet lesson?',opts:['20','25','30','40'],a:2,h:'The lesson covers the complete core beginner inventory used in this prototype.'},
      {q:'What comes after the alphabet in the OL CHIKI JOURNEY structure?',opts:['Ol Chiki numbers','Advanced grammar','Certificate','Final mission'],a:0,h:'It is the dedicated symbol-learning section placed immediately after the alphabet.'},
      {q:'What is the free-writing stage called after the trace guide is removed?',opts:['Doodle','Lock','Translate','Listen'],a:0,h:'It is the stage where the learner writes independently.'}
    ];
    if(level==='final')return [
      {q:'What is the final stage of OL CHIKI JOURNEY called?',opts:['Fluent Santhali','Letter Garden','Word Workshop','Introduction'],a:0,h:'It comes after Level 16 and leads into continued free practice.'},
      {q:'What can the learner do after the Final stage?',opts:['Use the Free Practice World','Lose all progress','Return to Level 0 only','Delete the app'],a:0,h:'The journey continues with ongoing practice after mastery.'},
      {q:'What is awarded after completing the learning journey?',opts:['An app-completion certificate','A government licence','A school diploma','A passport'],a:0,h:'It is an in-app achievement document, not an official academic certificate.'}
    ];
    return [
      {q:`What is placed at the end of Level ${level}?`,opts:['A small mini quiz','A phone call','A shopping cart','A login password'],a:0,h:'Every level follows the same learning-to-check structure.'},
      {q:'What is the general learning pattern used throughout the journey?',opts:['Learn → Practice → Play → XP → Reward','Buy → Sell → Close','Login → Logout → Delete','Read → Print → Mail'],a:0,h:'Think about the repeating lesson flow defined for the app.'},
      {q:'What happens to a completed level?',opts:['It stays available for review','It disappears permanently','It locks forever','It deletes the score'],a:0,h:'Completion changes the status, but review remains available.'}
    ];
  }

  function quizScreen(){
    if(!quizState){startQuiz(currentLevel);}
    const q=quizState.questions[quizState.index];
    return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backLevelFromQuiz">← ${t('back')}</button></div><div class="card"><div class="eyebrow">${t('miniQuiz')}</div><h1>${levelTitle(quizState.level)}</h1><p class="muted">${t('question')} ${quizState.index+1} ${t('of')} ${quizState.questions.length}</p><div class="progress"><i style="width:${(quizState.index/quizState.questions.length)*100}%"></i></div><div style="margin-top:20px"><h2>${esc(q.q)}</h2><div class="quiz-options">${q.opts.map((o,i)=>`<button class="quiz-option" data-answer="${i}" ${quizState.selected!==null?'disabled':''}>${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join('')}</div><p class="muted" style="margin-top:14px">Hint: <span id="hintText">${quizState.hintVisible?q.h:'Tap a hint when needed.'}</span></p><button class="btn btn-secondary" data-action="hint">${quizState.hintVisible?'Hide hint':'Show hint'}</button>${quizState.selected!==null?`<div class="feedback">${quizState.selected===q.a?t('correct'):t('incorrect')} — ${esc(q.opts[q.a])}</div><div class="actions" style="margin-top:14px"><button class="btn btn-primary" data-action="quizNext">${quizState.index===quizState.questions.length-1?t('finishQuiz'):t('next')}</button></div>`:''}</div></div></main>`;
  }

  function quizResultScreen(){const pct=Math.round(quizState.score/quizState.questions.length*100);return `<main class="container"><div class="card quiz-result"><div class="eyebrow">${t('miniQuiz')}</div><h1>${t('levelComplete')}</h1><div class="score-ring"><span>${pct}%</span></div><h2>${quizState.score}/${quizState.questions.length}</h2><p class="muted">${t('bonus')}: +${quizState.score*10} XP</p><div class="actions" style="justify-content:center"><button class="btn btn-primary" data-action="completeLevel">${t('finish')}</button><button class="btn btn-secondary" data-action="retryQuiz">${t('retry')}</button></div></div></main>`}

  function profileScreen(){return `<main class="container"><div class="section-title"><div><div class="eyebrow">${t('profile')}</div><h1>${esc(state.name||'Learner')}</h1></div><span class="review-pill">${state.xp} XP</span></div><div class="stats"><div class="stat"><b>${state.xp}</b><span>${t('xp')}</span></div><div class="stat"><b>${completedCount()}</b><span>${t('lessons')}</span></div><div class="stat"><b>${state.badges.length}</b><span>${t('badges')}</span></div><div class="stat"><b>${state.streak}</b><span>${t('streak')}</span></div></div><div class="section-title"><h2>Achievements</h2></div><div class="lesson-grid">${['Letter Explorer','Word Builder','Ol Chiki Writer','Ol Chiki Reader','Santhali Listener','Santhali Speaker','Grammar Master','Ol Chiki Master','Santhali Master'].map((b,i)=>`<div class="lesson"><b>${state.badges.includes(b)?'🏅':'🔒'} ${b}</b><span>${state.badges.includes(b)?'Unlocked':'Complete related milestones'}</span></div>`).join('')}</div><div class="section-title"><h2>${t('certificate')}</h2></div><div class="card"><p class="muted">${completedCount()>=17?'Your certificate is ready.':'Complete the full journey to unlock the certificate preview.'}</p><button class="btn btn-gold" data-action="certificate" ${completedCount()>=17?'':'disabled'}>${t('certificate')}</button></div></main>`}

  function settingsScreen(){return `<main class="container"><div class="section-title"><div><div class="eyebrow">${t('settings')}</div><h1>${t('settings')}</h1></div></div><div class="settings-grid"><div class="setting"><span>${t('language')}</span><select id="langSelect">${LANGS.map(x=>`<option value="${x}" ${state.lang===x?'selected':''}>${esc(T[x].name)}</option>`).join('')}</select></div><div class="setting"><span>${t('sound')}</span><input type="checkbox" id="soundToggle" ${state.sound?'checked':''}></div><div class="setting"><span>${t('music')}</span><input type="checkbox" id="musicToggle" ${state.music?'checked':''}></div><div class="setting"><span>${t('notifications')}</span><input type="checkbox" id="notifToggle" ${state.notifications?'checked':''}></div></div><div class="card" style="margin-top:14px"><h3>${t('about')}</h3><p class="muted">${t('journey')} — ${t('subtitle')}<br>${t('tag')}<br>${t('created')}</p></div><div class="card" style="margin-top:14px"><h3>${t('reset')}</h3><button class="btn btn-danger" data-action="reset">${t('reset')}</button></div></main>`}

  function certificateScreen(){const d=new Date();const date=String(d.getDate()).padStart(2,'0')+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getFullYear()).slice(-2);const avg=Object.values(state.quizScores).length?Math.round(Object.values(state.quizScores).reduce((a,b)=>a+b,0)/Object.values(state.quizScores).length):0;return `<main class="container"><div class="actions"><button class="btn btn-secondary" data-action="backProfile">← ${t('back')}</button></div><div class="certificate"><img src="image/official-logo.png" alt="Official logo"><h1>CERTIFICATE</h1><h2>OF ACHIEVEMENT</h2><p>This is to certify that</p><div class="recipient">${esc(state.name||'Lova Hansda')}</div><p>has successfully completed the <strong>OL CHIKI JOURNEY</strong><br>Santhali Language Learning Program.</p><div class="score">Quiz average: ${avg}%</div><div class="date">Date of Completion: ${date}</div><p style="margin-top:28px;font-size:12px;color:#6b746d">App-completion certificate · ${t('creator')}: LOVA HANSDA</p></div><p class="footer-note">${t('downloadNote')}</p></main>`}

  function startQuiz(level){quizState={level,questions:quizData(level),index:0,score:0,selected:null,hintVisible:false};currentScreen='quiz';render()}

  function bind(){
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{state.lang=b.dataset.lang;save();currentScreen='intro';render();}));
    document.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.nav)));
    document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>{currentLevel=b.dataset.level==='final'?'final':Number(b.dataset.level);currentScreen='level';render();}));
    document.querySelectorAll('[data-letter]').forEach(b=>b.addEventListener('click',()=>{currentLetter=Number(b.dataset.letter);currentScreen='letter';render();}));
    document.querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.action,b)));
    document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>answer(Number(b.dataset.answer))));
    const ls=document.getElementById('langSelect');if(ls)ls.addEventListener('change',()=>{state.lang=ls.value;save();render();});
    const st=document.getElementById('soundToggle');if(st)st.addEventListener('change',()=>{state.sound=st.checked;save();});
    const mt=document.getElementById('musicToggle');if(mt)mt.addEventListener('change',()=>{state.music=mt.checked;save();});
    const nt=document.getElementById('notifToggle');if(nt)nt.addEventListener('change',()=>{state.notifications=nt.checked;save();});
    if(currentScreen==='letter')initCanvas();
  }

  function navigate(where){currentScreen=where;render()}
  function action(a,btn){
    if(a==='account'){currentScreen='account';render();return}
    if(a==='create'||a==='guest'){const input=document.getElementById('playerName');if(a==='create'){state.name=(input?.value||'').trim()||'Learner';}else{state.name=state.name||'Learner';}save();currentScreen='home';render();return}
    if(a==='continue'){currentScreen='journey';render();return}
    if(a==='home'){currentScreen='home';render();return}
    if(a==='backJourney'){currentScreen='journey';render();return}
    if(a==='backLevel1'){currentLevel=1;currentScreen='level';render();return}
    if(a==='backProfile'){currentScreen='profile';render();return}
    if(a==='backLevelFromQuiz'){currentScreen='level';render();return}
    if(a==='numbers'){currentScreen='numbers';render();return}
    if(a==='quiz'){currentLevel=btn.dataset.quizLevel==='final'?'final':Number(btn.dataset.quizLevel);startQuiz(currentLevel);return}
    if(a==='hint'){quizState.hintVisible=!quizState.hintVisible;render();return}
    if(a==='quizNext'){if(quizState.index<quizState.questions.length-1){quizState.index++;quizState.selected=null;quizState.hintVisible=false;render();}else{currentScreen='quizResult';render();}return}
    if(a==='completeLevel'){const id=quizState.level;state.completed[id]=true;state.quizScores[id]=Math.round(quizState.score/quizState.questions.length*100);addXP(quizState.score*10+25);unlockBadges(id);save();currentScreen='level';render();toast(t('levelComplete'));return}
    if(a==='retryQuiz'){startQuiz(quizState.level);return}
    if(a==='daily'){if(state.daily!==today()){state.daily=today();addXP(25);toast(t('dailyDone'));render();}return}
    if(a==='freeWorld'){toast(t('contentSoon'));return}
    if(a==='letterPrev'){if(currentLetter>0){currentLetter--;render();}return}
    if(a==='letterNext'){if(currentLetter<29){currentLetter++;render();}return}
    if(a==='letterQuiz'){startQuiz(1);return}
    if(a==='clearCanvas'){clearCanvas();return}
    if(a==='checkCanvas'){const r=document.getElementById('canvasResult');if(r){r.hidden=false;r.textContent='Practice recorded. Keep improving your stroke control! +5 XP';}addXP(5);toast('+5 XP');return}
    if(a==='reset'){if(confirm(t('resetConfirm'))){const l=state.lang;Object.assign(state,freshState());state.lang=l;save();currentScreen='home';render();}return}
    if(a==='certificate'){currentScreen='certificate';render();return}
  }
  function answer(i){if(!quizState||quizState.selected!==null)return;quizState.selected=i;if(i===quizState.questions[quizState.index].a)quizState.score++;render()}
  function unlockBadges(id){if(id===1&&!state.badges.includes('Letter Explorer'))state.badges.push('Letter Explorer');if(id===2&&!state.badges.includes('Word Builder'))state.badges.push('Word Builder');if(id===10&&!state.badges.includes('Ol Chiki Writer'))state.badges.push('Ol Chiki Writer');if(id===11&&!state.badges.includes('Ol Chiki Reader'))state.badges.push('Ol Chiki Reader');if(id===13&&!state.badges.includes('Santhali Listener'))state.badges.push('Santhali Listener');if(id===14&&!state.badges.includes('Grammar Master'))state.badges.push('Grammar Master');if(id===16&&!state.badges.includes('Ol Chiki Master'))state.badges.push('Ol Chiki Master');if(id==='final'&&!state.badges.includes('Santhali Master'))state.badges.push('Santhali Master')}

  function initCanvas(){const c=document.getElementById('writingCanvas');if(!c)return;canvas=c;ctx=c.getContext('2d');ctx.lineWidth=8;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#14532d';function point(e){const r=c.getBoundingClientRect();const p=e.touches?e.touches[0]:e;return{x:(p.clientX-r.left)*(c.width/r.width),y:(p.clientY-r.top)*(c.height/r.height)}}function down(e){e.preventDefault();drawing=true;const p=point(e);ctx.beginPath();ctx.moveTo(p.x,p.y)}function move(e){if(!drawing)return;e.preventDefault();const p=point(e);ctx.lineTo(p.x,p.y);ctx.stroke()}function up(){drawing=false}c.addEventListener('pointerdown',down);c.addEventListener('pointermove',move);c.addEventListener('pointerup',up);c.addEventListener('pointercancel',up);clearCanvas()}
  function clearCanvas(){if(!ctx||!canvas)return;ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fffdf7';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='#14532d';}

  if('serviceWorker' in navigator && location.protocol!=='file:'){navigator.serviceWorker.register('sw.js').catch(()=>{});}
  if(!state.lang)currentScreen='language';
  render();
})();
