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
