/* ==================================================
   写真・名前の登録場所
================================================== */

const people = [

  // ここに写真と名前を追加していく
   { name: "ANOHRTS WHOOHYUN", image: "anohrts ウヒョン.png" },
   { name: "ANOHRTS SOONCHAN", image: "anohrts スンチャン.jpg" },
{ name: "ANOHRTS DAHOON", image: "anohrts ダフン.jpg" },
{ name: "ANOHRTS HYUNJE", image: "anohrts ヒュンジェ.jpg" },
{ name: "ANOHRTS KIHYUN", image: "anohtys ギヒョン.jpg" },
   { name: "ASCENDER  HAESOL", image: "ascender ヘソル.jpg" },
    { name: "ASCENDER  ROAN", image: "ascender ロアン.jpg" },
    { name: "ASCENDER  JIHOO", image: "ascender ジフ.jpg" },
    { name: "ASCENDER  YIJIN", image: "ascender イジン.jpg" },
    { name: "ASCENDER  DL", image: "ascender イドゥル.jpg" },
    { name: "CHASER  KANGBIN", image: "chaser カンビン.jpg" },
    { name: "CHASER  KEISUKE", image: "chaser ケイスケ.jpg" },
    { name: "CHASER  SIHUN", image: "chaser シフン.jpg" },
    { name: "CHASER  YUNSEONG", image: "chaser ユンビン.jpg" },
    { name: "CHASER  REN", image: "chaser レン.jpg" },
   { name: "D-ONE  IHWA", image: "d-one イファ.jpg" },
   { name: "D-ONE  JAEHOON", image: "d-one ジェフン.png" },
   { name: "D-ONE  JOOYOUNG", image: "d-one ジュヨン.jpeg" },
   { name: "D-ONE  SEJIN", image: "d-one セジン.jpeg" },
   { name: "D-ONE  HAN", image: "d-one ハン.jpeg" },
   { name: "D-ONE  HYUNWOONG", image: "d-one ヒョヌン.jpeg" },
    { name: "DXMON TK", image: "dxmon TK.avif" },
   { name: "DXMON HEE", image: "dxmon hee.webp" },
   { name: "DXMON REX", image: "dxmon rex.avif" },
   { name: "DXMON SEITA", image: "xmon セイタ.avif" },
   { name: "DXMON MINJAE", image: "dxmon ミンジェ.avif" },
   { name: "N.TOP CHAEMIN", image: "n.top chaemin.jpg" },
   { name: "N.TOP CHANGLIN", image: "n.top changlin.jpg" },
   { name: "N.TOP HEEWOO", image: "n.top heewoo.jpg" },
   { name: "N.TOP HYUNWOONG", image: "n.top hyunwoong-.jpg" },
   { name: "N.TOP KANGHYUN", image: "n.top kanghyun.jpg" },
   { name: "N.TOP MINSEO", image: "n.top minseo.jpg" },
   { name: "N.TOP TAKUTO", image: "n.top takuto.jpg" },
   { name: "NXON KDAY", image: "nxon k day.jpg" },
    { name: "NXON K", image: "nxon k.jpg" },
   { name: "NXON GYEOM", image: "nxon ギョム.jpg" },
   { name: "NXON JOHA", image: "nxon ジョハ.jpg" },
   { name: "NXON ZIKI", image: "nxon ジム.jpg" },
   { name: "NXON DAM", image: "nxon ダム.jpg" },
   { name: "NXON MINGYU", image: "nxon ミンギュ.jpg" },
   { name: "NXON MINJAE", image: "nxon ミンジェ.jpg" },
   { name: "W3WAY HYECHEON", image: "w3way へチョン.webp" },
   { name: "W3WAY AOI", image: "w3way アオイ.webp" },
   { name: "W3WAY WOOSEOK", image: "w3way ウソク.webp" },
   { name: "W3WAY XIHO", image: "w3way シホ.webp" },
   { name: "W3WAY DONGHYUN", image: "w3way ドンヒョン.webp" },
   { name: "W3WAY RYO", image: "w3way リョウ.webp" },
   { name: "W3WAY RINTARO", image: "w3way リンタロウ.webp" },
   { name: "WAKER IJUN", image: "weaker イジュン.jpeg" },
   { name: "WAKER KWONHYEOP", image: "weaker クォンヒョプ.jpeg" },
   { name: "WAKER KOHYEON", image: "weaker コヒョン.jpeg" },
   { name: "WAKER SABYEOL", image: "weaker セビョル.jpeg" },
   { name: "WAKER SEBUM", image: "weaker セボム.jpeg" },
   { name: "WAKER LEO", image: "weaker リオ.jpeg" },
   { name: "NBIG RYUMIN", image: "N.BIG RYUMIN.jpeg" },
   { name: "NBIG SEONGJUN", image: "N.BIG SEONGJUN.jpeg" },
    { name: "NBIG SIAN", image: "N.BIg SIAN.jpeg" },
    { name: "NBIG KWON DOEUN", image: "NBIG KWON-DOEUN.jpeg" },
    { name: "NBIG SEUNGYEON", image: "NBIG SEUNGYEON.jpeg" },
    { name: "DIAZ HARUKI", image: "DIAZ HARUKI.webp" },
    { name: "DIAZ K.O", image: " DIAZ K.O.webp" },
    { name: "DIAZ MINGUN", image: "DIAZ MINGUN.webp" },
    { name: "DIAZ SINWOO", image: "DIAZ SINWOO.webp" },
    { name: "DIAZ SOTA", image: "DIAZ SOTA.webp" },
       { name: "LEVERGENT HABIN", image: "HABIN.avif" },
    { name: "LEVERGENT KHAIN", image: "KHAIN.avif" }, 
    { name: "LEVERGENT JIO", image: "JIO.avif" }, 
    { name: "LEVERGENT R", image: "R.avif" }, 
    { name: "LEVERGENT RIHYEON", image: "RIHYEON.avif" },
   { name: "CMDM BYUNGHOON", image: "Byunghoon.jpg" },
   { name: "CMDM HEEJU", image: "Heeju.jpg" },
   { name: "CMDM HYUNHAH", image: "Hyunhah.jpg" },
   { name: "CMDM JUNHYOUNG", image: "Junhyoung.jpg" },
   { name: "CMDM NOHYUL", image: "Nohyul.jpg" },
   { name: "DAYCHILD EDEN", image: "DAYCHILD-EDEN1.jpg" },
   { name: "DAYCHILD INTAE", image: "DAYCHILD-INTAE1.jpg" },
   { name: "DAYCHILD K", image: "DAYCHILD-K1.jpg" },
   { name: "DAYCHILD SIWOO", image: "DAYCHILD-SIWOO1.jpg" },
   { name: "DAYCHILD YEJONG", image: "DAYCHILD-YEJONG1.jpg" },
   { name: "ASC2NT KARAM", image: "ASC2NT KARAM-3-.jpeg" },
   { name: "ASC2NT HYOWON", image: "HYOWON-3-900x600.jpeg" },
   { name: "ASC2NT JAY", image: "JAY-3-900x600.jpeg" },
   { name: "ASC2NT KYLE", image: "KYLE-3-900x600.jpeg" },
   { name: "ASC2NT REON", image: "REON-3-900x600.jpeg" },
   { name: "MYONE DOJUN", image: "MYONE DOJUN.jpg" },
   { name: "MYONE SHIRO", image: "MYONE SHIRO.jpg" },
   { name: "MYONE R", image: "MYONE R.jpg" },
   { name: "MYONE ZENON", image: "MYONE ZENON.jpg" },
   { name: "EASTSHINE DONGJAE", image: "ES DONGJAE-5-.jpg" },
    { name: "EASTSHINE HYUN", image: "ES HYUN-3-.jpg" },
    { name: "EASTSHINE IEL", image: "ES IEL-4.jpg" },
    { name: "EASTSHINE LUMIN", image: "ES LUMIN-3-.jpg" },
    { name: "EASTSHINE PHOENIX", image: "ES PHOENIX-1-.webp" },
   { name: "DROP Cheol Kyu", image: "dp Cheol Kyu.webp" },
   { name: "DROP Gyu Eon", image: "dp Gyu Eon.webp" },
   { name: "DROP Jae Wo", image: "dp Jae Won.webp" },
   { name: "DROP Ju Sung", image: "dp Ju Sung.webp" },
   { name: "DROP Seung Woo", image: "dp Seung Woo.webp" },
   { name: "WHYNOT JUNHYEONG", image: "wn JUNHYEONG.jpg" },
   { name: "WHYNOT TOSEI", image: "wn TOSEI.jpg" },
   { name: "WHYNOT DOA", image: "wn doa.jpg" },
   { name: "WHYNOT JEONG", image: "wn jeong-scaled.jpg" },
   { name: "WHYNOT ROHOON", image: "wn rohoon.jpg" },
   { name: "WHYNOT DONGYEON", image: "wn rohoon.jpg" },
   { name: "WHYNOT SIHON", image: "wn sihon.jpg" },
   { name: "MUL KANGSAN", image: "MUL-KANGSAN4.jpg" },
   { name: "MUL LUHA", image: "MUL-LUHA4.jpg" },
   { name: "MUL SEONGHUN", image: "MUL-SEONGHUN4.jpg" },
   { name: "MUL SHINWOO", image: "MUL-SHINWOO4.jpg" },
   { name: "MUL WONCHUL", image: "MUL-WONCHUL.jpg" },
   { name: "MUL YUNSOL", image: "MUL-YUNSOL4.jpg" },
   { name: "ANTARES HARU", image: "AT HARU.jpeg" },
   { name: "ANTARES INO", image: "AT INO.jpeg" },
   { name: "ANTARES JAEHO", image: "AT JAEHO.jpeg" },
   { name: "ANTARES WOORI", image: "AT WOORI.jpeg" },
   { name: "ANTARES SEUNGHEE", image: "AT SEUNGHEE.jpeg" },
   { name: "ANTARES ZINO", image: "AT ZINO.jpeg" },
    { name: "DREAMCODE SEONGWAN", image: "dc Seongwan.webp" },
   { name: "DREAMCODE HYUNWOO", image: "dc hyunwoo.webp" },
   { name: "DREAMCODE JAEHUN", image: "dc jaehun.webp" },
   { name: "DREAMCODE JIMIN", image: "dc jimin.webp" },
   { name: "DREAMCODE JONGHOON", image: "dc jonghoon.webp" },
   { name: "DREAMOFONE JIHAN", image: "Screenshot 2026-10-03 19.02.45.png" },
   { name: "DREAMOFONE JIWON", image: "Screenshot 2026-10-03 19.04.12.png" },
   { name: "DREAMOFONE MINCHAN", image: "Screenshot 2026-10-03 19.03.35.png" },
   { name: "DREAMOFONE SARANG", image: "Screenshot 2026-10-03 19.05.01.png" },
   { name: "DREAMOFONE HWANHUI", image: "Screenshot 2026-10-03 19.05.54.png" },
   { name: "VOLTEQ JUNE", image: "VQ JUNE-1.jpg" },
    { name: "VOLTEQ KASUGA", image: "VQ KASUGA.jpg" },
    { name: "VOLTEQ LEO", image: " VQ LEO.jpg" },
   { name: "VOLTEQ TERUTO", image: "VQ TERUTO-1.jpg" },
   { name: "STC KANGMIN", image: "stc KANGMIN.jpg" },
   { name: "STC MINSUNG", image: "stc Minsung.jpg" },
   { name: "STC SIHYEON", image: "stc sihyeon.jpg" },
   { name: "STC DONGHYEON", image: "STC Donghyeon.jpg" },
   { name: "STC HYOYA", image: "STC HYOYA.jpg" },
{ name: "STC HYOYA", image: "STC HYOYA.jpg" },
   { name: "RE:GUYS D.I", image: "RG D.I.webp" },
   { name: "RE:GUYS DAEYOUNG", image: "RG Daeyoung.webp" },
   { name: "RE:GUYS DONGHYUN", image: "RG Donghyun.webp" },
   { name: "RE:GUYS JINHYEON", image: "RG Jinhyeon.webp" },
   { name: "RE:GUYS MINKI", image: "RG Minki.webp" },
   { name: "RE:GUYS SEMIN", image: "RG Semin.jpg" },
   { name: "RE:GUYS YEONGKI", image: "RG Yeongki.webp" },
   { name: "ADAP DOWON", image: "AP Dowon3.jpg" },
   { name: "ADAP HYUNSUNG", image: "AP Hyunsung3.jpg" },
   { name: "ADAP JAEYOUNG", image: "AP Jaeyoung3.jpg" },
   { name: "ADAP JONGHO", image: "AP Jongho3.jpg" },
   { name: "ADAP HYOTAE", image: "AP hyotae3.jpg" },
   { name: "ADAP JUNSEOK", image: "AP junseok3.jpg" },
    { name: "TRY THAT A.TOM", image: "A.TOM-TRY-THAT.jpg" },
   { name: "TRY THAT HYUKJIN", image: "TT HYUKJIN.png" },
   { name: "TRY THAT HANSEO", image: "HANSEO-TRY-THAT.jpg" },
   { name: "TRY THAT KION", image: "KION-TRY-THAT-scaled.jpg" },
   { name: "TRY THAT MINHA", image: "MINHA-TRY-THAT.jpg" },
   { name: "TRY THAT PIL", image: "PIL-TRY-THAT.jpg" },
   { name: "SWEET:CH HWI", image: "sc hwi-2.jpg" },
   { name: "SWEET:CH JIN", image: "sc jin.jpg" },
   { name: "SWEET:CH RIKUTO", image: "sc rikuto.jpg" },
   { name: "SWEET:CH SATOSHI", image: "sc satoshi.jpg" },
   { name: "SWEET:CH TAIKI", image: "sc taiki.jpg" },
   { name: "SWEET:CH WANGSEOK", image: "sc wangseok-1.jpg" },
   { name: "DIGNITY LUKE", image: "DG LUKE.jpeg" },
   { name: "DIGNITY LUO", image: "DG LUO.jpeg" },
   { name: "DIGNITY MINSEOK", image: "DG MINSEOK.jpeg" },
   { name: "DIGNITY ON", image: "DG ON.jpeg" },
   { name: "HIGHWAY YUNHYEONG", image: "HG YUNHYEONG.jpg" },
   { name: "HIGHWAY DAEHYUN", image: "HG DAEHYUN.jpg" },
   { name: "HIGHWAY HUA", image: "HG HUA.jpg" },
   { name: "HIGHWAY JUN", image: "HG JUN.jpg" },
   { name: "HIGHWAY MINHYUK", image: "HG Minhyuk.jpg" },
   { name: "HIGHWAY ROOKIE", image: "HG ROOKIE.jpg" },
   { name: "HIGHWAY SSEN", image: "HG SSEN.jpg" },
   { name: "GENUS　CHAEHOON", image: "GS CHAEHOON-1.jpg" },
   { name: "GENUS　CHANYONG", image: "GS CHANYONG-1.jpg" },
   { name: "GENUS　SEOHA", image: "GS SEOHA-1.jpg" },
   { name: "GENUS　JAEYOUNG", image: "GS jaeyoung-1.jpg" },
   { name: "GENUS　YUAN", image: "GS yuan-1.jpg" },
   { name: "TRY1 MIN", image: "T! min-1.jpg" },
    { name: "TRY1 HARAM", image: "T1 chaharam.jpg" },
    { name: "TRY1 JAMES", image: "T1 james.jpg" },
    { name: "TRY1 JIHWAN", image: "T1 jihwan-1.jpg" },
    { name: "TRY1 NEO", image: "T1 neo.jpg" },
    { name: "TRY1 R1KE", image: "T1 r1ke-1.jpg" },
    { name: "TRY1 TSUKITO", image: "T1 tsukito-1.jpg" },
   { name: "MY:ST JUNTAE", image: "myst 2-Juntae-.avif" },
   { name: "MY:ST WONCHEOL", image: "myst 3-Woncheol-.avif" },
   { name: "MY:ST WOOJIN", image: "myst 4-Woojin-.avif" },
   { name: "TRY1 TSUKITO", image: "T1 tsukito-1.jpg" },
   
   
   
   
   
   




   

];


/* ==================================================
   画面
================================================== */

const startScreen =
  document.getElementById("start-screen");

const selectionScreen =
  document.getElementById("selection-screen");

const finalistsScreen =
  document.getElementById("finalists-screen");

const rankingScreen =
  document.getElementById("ranking-screen");

const resultScreen =
  document.getElementById("result-screen");


/* ==================================================
   ボタン
================================================== */

const startButton =
  document.getElementById("start-button");

const backButton =
  document.getElementById("back-button");

const nextButton =
  document.getElementById("next-button");

const rankingStartButton =
  document.getElementById("ranking-start-button");

const resultButton =
  document.getElementById("result-button");

const againButton =
  document.getElementById("again-button");


/* ==================================================
   表示場所
================================================== */

const personContainer =
  document.getElementById("person-container");

const finalistsContainer =
  document.getElementById("finalists-container");

const rankingContainer =
  document.getElementById("ranking-container");

const resultContainer =
  document.getElementById("result-container");


const progress =
  document.getElementById("progress");

const firstChoice =
  document.getElementById("first-choice");

const secondChoice =
  document.getElementById("second-choice");


/* ==================================================
   データ
================================================== */

let currentRound = 0;

let rounds = [];

let firstSelected = null;

let secondSelected = null;

let selectedPeople = [];

let finalRanking = [];


/* ==================================================
   画面切り替え
================================================== */

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(element => {
      element.classList.remove("active");
    });

  screen.classList.add("active");

  window.scrollTo(0, 0);
}


/* ==================================================
   シャッフル
================================================== */

function shuffle(array) {

  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      result[i],
      result[j]
    ] =
    [
      result[j],
      result[i]
    ];
  }

  return result;
}


/* ==================================================
   4人ずつのグループを作る
================================================== */

function createRounds() {

  const shuffled =
    shuffle(people);

  rounds = [];

  for (
    let i = 0;
    i < shuffled.length;
    i += 4
  ) {

    let group =
      shuffled.slice(i, i + 4);

    /*
      最後が4人未満の場合、
      他の人を補充する
    */

    if (group.length < 4) {

      const used =
        new Set(group);

      const available =
        shuffled.filter(
          person => !used.has(person)
        );

      while (
        group.length < 4 &&
        available.length > 0
      ) {

        group.push(
          available.shift()
        );
      }
    }

    rounds.push(group);
  }
}


/* ==================================================
   4人を表示
================================================== */

function renderRound() {

  const group =
    rounds[currentRound];

  progress.textContent =
    `${currentRound + 1} / ${rounds.length}`;

  personContainer.innerHTML = "";

  firstSelected = null;

  secondSelected = null;

  updateChoices();


  group.forEach(person => {

    const card =
      document.createElement("div");

    card.className =
      "person-card";

    card.innerHTML = `

      <img
        src="${person.image}"
        alt="${person.name}"
      >

      <div class="person-name">
        ${person.name}
      </div>

      <div class="person-label"></div>

    `;

    card.addEventListener(
      "click",
      () => {
        selectPerson(person);
      }
    );

    personContainer.appendChild(card);

  });
}


/* ==================================================
   人を選択
================================================== */

function selectPerson(person) {

  /*
    1番好きに選ばれている場合
    → 解除
  */

  if (firstSelected === person) {

    firstSelected = null;

  }

  /*
    2番好きに選ばれている場合
    → 解除
  */

  else if (secondSelected === person) {

    secondSelected = null;

  }

  /*
    1番好きが空いている
  */

  else if (firstSelected === null) {

    firstSelected = person;

  }

  /*
    2番好きが空いている
  */

  else if (secondSelected === null) {

    secondSelected = person;

  }

  /*
    両方埋まっている場合
    → 新しく押した人を2番好きにする
  */

  else {

    secondSelected = person;

  }

  updateCards();

  updateChoices();
}


/* ==================================================
   カードの表示更新
================================================== */

function updateCards() {

  const cards =
    document.querySelectorAll(
      ".person-card"
    );

  cards.forEach(card => {

    const name =
      card.querySelector(
        ".person-name"
      ).textContent;

    const label =
      card.querySelector(
        ".person-label"
      );

    card.classList.remove(
      "first-selected"
    );

    card.classList.remove(
      "second-selected"
    );

    label.textContent = "";


    if (
      firstSelected &&
      firstSelected.name === name
    ) {

      card.classList.add(
        "first-selected"
      );

      label.textContent =
        "1番好き";
    }


    if (
      secondSelected &&
      secondSelected.name === name
    ) {

      card.classList.add(
        "second-selected"
      );

      label.textContent =
        "2番目に好き";
    }

  });
}


/* ==================================================
   選択状況
================================================== */

function updateChoices() {

  firstChoice.textContent =
    firstSelected
      ? firstSelected.name
      : "未選択";

  secondChoice.textContent =
    secondSelected
      ? secondSelected.name
      : "未選択";

  nextButton.disabled =
    !(
      firstSelected &&
      secondSelected
    );
}


/* ==================================================
   スタート
================================================== */

startButton.addEventListener(
  "click",
  () => {

    if (people.length < 4) {

      alert(
        "写真を4人以上登録してください。"
      );

      return;
    }

    currentRound = 0;

    selectedPeople = [];

    createRounds();

    showScreen(
      selectionScreen
    );

    renderRound();

  }
);


/* ==================================================
   次へ
================================================== */

nextButton.addEventListener(
  "click",
  () => {

    if (
      firstSelected &&
      !selectedPeople.includes(
        firstSelected
      )
    ) {

      selectedPeople.push(
        firstSelected
      );
    }


    if (
      secondSelected &&
      !selectedPeople.includes(
        secondSelected
      )
    ) {

      selectedPeople.push(
        secondSelected
      );
    }


    currentRound++;


    if (
      currentRound <
      rounds.length
    ) {

      renderRound();

    }

    else {

      /*
        最終的に9人を選ぶ
      */

      selectedPeople =
        shuffle(
          selectedPeople
        ).slice(0, 9);

      renderFinalists();

      showScreen(
        finalistsScreen
      );

    }

  }
);


/* ==================================================
   9人表示
================================================== */

function renderFinalists() {

  finalistsContainer.innerHTML = "";

  selectedPeople.forEach(
    person => {

      const card =
        document.createElement("div");

      card.className =
        "finalist-card";

      card.innerHTML = `

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <p>
          ${person.name}
        </p>

      `;

      finalistsContainer.appendChild(card);

    }
  );
}


/* ==================================================
   順位決定開始
================================================== */

rankingStartButton.addEventListener(
  "click",
  () => {

    finalRanking =
      [...selectedPeople];

    renderRanking();

    showScreen(
      rankingScreen
    );

  }
);


/* ==================================================
   順位表示
================================================== */

function renderRanking() {

  rankingContainer.innerHTML = "";

  finalRanking.forEach(
    (person, index) => {

      const item =
        document.createElement("div");

      item.className =
        "ranking-item";

      item.draggable = true;

      item.dataset.name =
        person.name;

      item.innerHTML = `

        <div class="ranking-number">
          ${index + 1}
        </div>

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <div class="ranking-name">
          ${person.name}
        </div>

      `;

      rankingContainer.appendChild(item);

    }
  );

  setupDragAndDrop();
}


/* ==================================================
   ドラッグ＆ドロップ
================================================== */

function setupDragAndDrop() {

  let dragged = null;

  const items =
    document.querySelectorAll(
      ".ranking-item"
    );


  items.forEach(item => {

    item.addEventListener(
      "dragstart",
      () => {
        dragged = item;
      }
    );


    item.addEventListener(
      "dragover",
      event => {
        event.preventDefault();
      }
    );


    item.addEventListener(
      "drop",
      event => {

        event.preventDefault();

        if (dragged === item) {
          return;
        }

        const all =
          [...rankingContainer.children];

        const draggedIndex =
          all.indexOf(dragged);

        const targetIndex =
          all.indexOf(item);


        if (
          draggedIndex <
          targetIndex
        ) {

          item.after(dragged);

        }

        else {

          item.before(dragged);

        }

        updateRanking();

      }
    );

  });
}


/* ==================================================
   順位を更新
================================================== */

function updateRanking() {

  const items =
    [...rankingContainer.children];

  finalRanking =
    items.map(item => {

      return people.find(
        person =>
          person.name ===
          item.dataset.name
      );

    });


  items.forEach(
    (item, index) => {

      item
        .querySelector(
          ".ranking-number"
        )
        .textContent =
        index + 1;

    }
  );
}


/* ==================================================
   結果を見る
================================================== */

resultButton.addEventListener(
  "click",
  () => {

    updateRanking();

    renderResult();

    showScreen(
      resultScreen
    );

  }
);


/* ==================================================
   結果表示
================================================== */

function renderResult() {

  resultContainer.innerHTML = "";

  finalRanking.forEach(
    (person, index) => {

      const item =
        document.createElement("div");

      item.className =
        "result-item";

      item.innerHTML = `

        <div class="result-rank">
          ${index + 1}
        </div>

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <div class="result-name">
          ${person.name}
        </div>

      `;

      resultContainer.appendChild(item);

    }
  );
}


/* ==================================================
   戻る
================================================== */

backButton.addEventListener(
  "click",
  () => {

    const answer =
      confirm(
        "最初からやり直しますか？"
      );

    if (answer) {

      showScreen(
        startScreen
      );

    }

  }
);


/* ==================================================
   もう一度
================================================== */

againButton.addEventListener(
  "click",
  () => {

    showScreen(
      startScreen
    );

  }
);
