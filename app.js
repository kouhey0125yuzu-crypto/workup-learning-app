const categories = [
  { id: "appearance", name: "身だしなみ", max: 10 },
  { id: "language", name: "言葉遣い", max: 10 },
  { id: "manners", name: "マナー", max: 10 },
  { id: "excel", name: "エクセル", max: 10 },
  { id: "word", name: "ワード", max: 10 },
  { id: "communication", name: "コミュニケーション", max: 10 },
  { id: "reporting", name: "報連相", max: 10 },
  { id: "security", name: "情報セキュリティ", max: 10 },
  { id: "compliance", name: "コンプライアンス", max: 10 },
  { id: "time", name: "時間管理", max: 10 },
];

const questions = [
  {
    category: "appearance",
    points: 5,
    text: "初対面の取引先を訪問する日の服装として、最も適切なのはどれですか？",
    options: ["清潔感があり、場に合った服装にする", "普段どおりでよいので、しわは気にしない", "目立つことを優先して派手にする"],
  },
  {
    category: "appearance",
    points: 5,
    text: "オンライン会議前の身だしなみ確認で、最も大切な行動はどれですか？",
    options: ["表情、背景、音声、服装を事前に確認する", "カメラを使わないので準備しない", "会議が始まってから環境を整える"],
  },
  {
    category: "language",
    points: 5,
    text: "上司に依頼内容を確認するとき、最も適切な言い方はどれですか？",
    options: ["念のため、期限と提出形式を確認させてください", "これ、いつまでですか？", "よくわからないので後で見ます"],
  },
  {
    category: "language",
    points: 5,
    text: "取引先へ資料送付を知らせるメールで、最も適切なのはどれですか？",
    options: ["添付資料、確認事項、返信期限を簡潔に書く", "件名を空欄にして本文だけ送る", "友人向けのようなくだけた表現で送る"],
  },
  {
    category: "manners",
    points: 5,
    text: "会議に遅れそうなとき、最初に取るべき行動はどれですか？",
    options: ["遅れる見込み時間と理由を早めに連絡する", "到着してから謝ればよい", "気まずいので何も言わない"],
  },
  {
    category: "manners",
    points: 5,
    text: "名刺交換で相手の名刺を受け取った後、適切なのはどれですか？",
    options: ["すぐしまわず、名前を確認して丁寧に扱う", "メモ代わりに裏へ書き込む", "受け取ったらすぐポケットに入れる"],
  },
  {
    category: "excel",
    points: 5,
    text: "売上表の合計を出すとき、最も基本的で適切な操作はどれですか？",
    options: ["SUM関数を使って範囲を指定する", "電卓で計算して手入力する", "見た目でだいたいの数字を入れる"],
  },
  {
    category: "excel",
    points: 5,
    text: "同じ形式の表をチームで使う場合、意識するとよいことはどれですか？",
    options: ["見出し、単位、入力ルールをそろえる", "各自が自由に列名を変えてよい", "色を多く使って華やかにすることだけを優先する"],
  },
  {
    category: "word",
    points: 5,
    text: "社内文書を読みやすくするために、最も効果的なのはどれですか？",
    options: ["見出し、箇条書き、余白を整える", "すべて同じ大きさの文字で詰め込む", "装飾文字を多く使ってにぎやかにする"],
  },
  {
    category: "word",
    points: 5,
    text: "提出前のWord文書で確認すべきことはどれですか？",
    options: ["誤字脱字、日付、宛名、体裁を確認する", "ファイル名だけ確認すれば十分", "印刷すると崩れても内容があればよい"],
  },
  {
    category: "communication",
    points: 5,
    text: "業務でわからない点が出たとき、最もよい相談の仕方はどれですか？",
    options: ["調べたこと、困っている点、希望する判断を整理して聞く", "何がわからないか整理せず丸投げする", "迷惑をかけないよう最後まで一人で抱える"],
  },
  {
    category: "communication",
    points: 5,
    text: "相手の説明を聞くとき、信頼につながりやすい姿勢はどれですか？",
    options: ["要点をメモし、不明点は最後に確認する", "途中で何度も遮って自分の話に変える", "聞いているふりをして別作業を進める"],
  },
  {
    category: "reporting",
    points: 5,
    text: "任された仕事が期限に間に合わない可能性が出たとき、適切なのはどれですか？",
    options: ["早めに状況、原因、相談したい選択肢を伝える", "期限当日まで黙って進める", "完成していない部分を隠して提出する"],
  },
  {
    category: "reporting",
    points: 5,
    text: "業務報告の順番として、最も伝わりやすいものはどれですか？",
    options: ["結論、理由、次の対応の順に伝える", "思いついた順にすべて話す", "細かい背景だけを先に長く話す"],
  },
  {
    category: "security",
    points: 5,
    text: "社外に資料をメール送付する前に、必ず確認すべきことはどれですか？",
    options: ["宛先、添付ファイル、共有してよい情報かを確認する", "急いでいれば確認せず送る", "重要資料でも個人メールへ転送して作業する"],
  },
  {
    category: "security",
    points: 5,
    text: "不審なリンク付きメールを受け取ったとき、適切な対応はどれですか？",
    options: ["リンクを開かず、社内ルールに従って報告する", "送信者名が知っている人なら必ず開く", "周囲にも転送して確認してもらう"],
  },
  {
    category: "compliance",
    points: 5,
    text: "職場で相手が不快に感じる発言をしてしまった可能性があるとき、適切なのはどれですか？",
    options: ["受け止めて謝意を示し、必要に応じて上司や相談窓口に相談する", "冗談だから問題ないと決めつける", "相手が気にしすぎだと周囲に話す"],
  },
  {
    category: "compliance",
    points: 5,
    text: "経費精算や勤怠入力で、最も重要な姿勢はどれですか？",
    options: ["事実に基づき、ルールどおり正確に申請する", "少額なら実際と違っても問題ない", "先輩がやっているなら無条件にまねる"],
  },
  {
    category: "time",
    points: 5,
    text: "複数の仕事を同時に任されたとき、最初に行うとよいことはどれですか？",
    options: ["期限、重要度、所要時間を整理して優先順位をつける", "目についたものから何となく始める", "難しいものを後回しにし続ける"],
  },
  {
    category: "time",
    points: 5,
    text: "集中して作業する時間を確保したいとき、効果的なのはどれですか？",
    options: ["予定表に作業時間を入れ、通知や割り込みを減らす", "すべての依頼に即時対応し続ける", "締切直前まで予定を立てない"],
  },
];

const finalScores = {
  total: 2,
  appearance: 1,
  language: 0,
  manners: 0,
  excel: 1,
  word: 0,
  communication: 0,
  reporting: 0,
  security: 0,
  compliance: 0,
  time: 0,
};

const activeQuestions = questions.slice(0, 3);
let currentQuestion = 0;
let answers = new Array(activeQuestions.length).fill(null);

const appShell = document.querySelector(".app-shell");
const resultView = document.querySelector("#resultView");
const progressText = document.querySelector("#progressText");
const currentScore = document.querySelector("#currentScore");
const progressBar = document.querySelector("#progressBar");
const categoryName = document.querySelector("#categoryName");
const questionPoints = document.querySelector("#questionPoints");
const questionText = document.querySelector("#questionText");
const answerOptions = document.querySelector("#answerOptions");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const examDateInput = document.querySelector("#examDateInput");
const categoryList = document.querySelector("#categoryList");
const resultRows = document.querySelector("#resultRows");
const totalScore = document.querySelector("#totalScore");
const judgementText = document.querySelector("#judgementText");
const resultComment = document.querySelector("#resultComment");
const retryBtn = document.querySelector("#retryBtn");
const printBtn = document.querySelector("#printBtn");
const examDate = document.querySelector("#examDate");
const examId = document.querySelector("#examId");

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseExamDate() {
  const value = examDateInput.value || toDateInputValue(new Date());
  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day };
}

function formatExamDate({ year, month, day }) {
  return `${year}年${month}月${day}日`;
}

function updateCategoryList() {
  categoryList.innerHTML = categories
    .map(
      (category) => `
        <li>
          <strong>${category.name}</strong>
          <span>${category.max}点</span>
        </li>
      `,
    )
    .join("");
}

function renderQuestion() {
  const question = activeQuestions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const category = getCategory(question.category);

  progressText.textContent = `${currentQuestion + 1} / ${activeQuestions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;
  categoryName.textContent = category.name;
  questionPoints.textContent = `${question.points}点`;
  questionText.textContent = question.text;
  currentScore.textContent = "診断中";

  answerOptions.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", String(selectedAnswer === index));
    button.innerHTML = `<span class="mark" aria-hidden="true"></span><span>${option}</span>`;
    button.addEventListener("click", () => {
      answers[currentQuestion] = index;
      renderQuestion();
    });
    answerOptions.appendChild(button);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = selectedAnswer === null;
  nextBtn.textContent = currentQuestion === activeQuestions.length - 1 ? "結果を見る" : "次へ";
  updateCategoryList();
}

function getRating(score, max) {
  const ratio = score / max;
  if (ratio >= 0.8) return { label: "優秀", className: "good" };
  if (ratio >= 0.6) return { label: "良好", className: "good" };
  if (ratio >= 0.4) return { label: "要復習", className: "mid" };
  if (ratio > 0) return { label: "要改善", className: "" };
  return { label: "未達", className: "" };
}

function getJudgement() {
  return {
    title: "不合格",
    comment:
      "現時点では実務に出せる水準には大きく届いていません。基本動作、報告、情報管理、コンプライアンスの理解がほぼ未定着です。自己判断で進める前に、基礎研修を最初から受け直してください。",
  };
}

function renderResult() {
  const scores = finalScores;
  const judgement = getJudgement();
  const selectedDate = parseExamDate();

  resultRows.innerHTML = categories
    .map((category, index) => {
      const rating = getRating(scores[category.id], category.max);
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${category.name}</td>
          <td><span class="point">${scores[category.id]}</span> / ${category.max}点</td>
          <td><span class="rating ${rating.className}">${rating.label}</span></td>
        </tr>
      `;
    })
    .join("");

  examDate.textContent = formatExamDate(selectedDate);
  examId.textContent = `BLT-${selectedDate.year}${String(selectedDate.month).padStart(2, "0")}${String(selectedDate.day).padStart(2, "0")}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
  totalScore.textContent = `${scores.total}点`;
  judgementText.textContent = judgement.title;
  resultComment.textContent = judgement.comment;

  appShell.classList.add("hidden");
  resultView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < activeQuestions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }
  renderResult();
});

retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  answers = new Array(activeQuestions.length).fill(null);
  resultView.classList.add("hidden");
  appShell.classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

printBtn.addEventListener("click", () => window.print());

examDateInput.value = toDateInputValue(new Date());
renderQuestion();
