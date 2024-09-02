let sceneStart = document.getElementById("SceneStart");
let sceneGame = document.getElementById("SceneGame");
let startBtn = document.getElementById("startBtn");
let backHomeBtn = document.getElementById("backHome");

// وظيفة زر البدء
document.getElementById("startBtn").addEventListener("click", function() {
    // إخفاء مشهد البداية وإظهار مشهد اللعبة
    sceneStart.style.display = "none";
    sceneGame.style.display = "block";
});

// وظيفة زر العودة للصفحة الرئيسية
document.getElementById("backHomeBtn").addEventListener("click", function() {
    // إخفاء مشهد اللعبة وإظهار مشهد البداية
    sceneGame.style.display = "none";
    sceneStart.style.display = "block";
});




// متغيرات اللعبة
let currentLevel = 1;
let attemptsRemaining = 3;
let score = 0;

// دالة إنشاء البطاقات
function createCards() {
    // حدد عدد البطاقات في المستوى الحالي
    const numCards = 10; // (عدّل هذا الرقم حسب مستوى اللعبة)

    // إنشاء مجموعة من جميع صور البطاقات
    const allImages = ["image1.jpg", "image2.jpg", "image3.jpg", ...]; // أضف مسارات صورك هنا

    // إنشاء مجموعة فارغة لحفظ البطاقات
    const cards = [];

    // إنشاء بطاقات عشوائيًا
    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        const cardImage = allImages[randomIndex];

        // حدد بطاقة صحيحة عشوائيًا
        const isCorrect = i === 0; // (تغيير هذا الشرط لتحديد بطاقة صحيحة واحدة)

        // إنشاء بطاقة جديدة
        const card = {
            image: cardImage,
            isCorrect: isCorrect
        };

        // إضافة البطاقة إلى المجموعة
        cards.push(card);
    }

    // خلط البطاقات (اختياري)
    cards.sort(() => Math.random() - 0.5);

    // عرض البطاقات على الشاشة
    displayCards(cards);
}

// دالة لعرض البطاقات على الشاشة
function displayCards(cards) {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = ""; // مسح محتوى الحاوية

    for (const card of cards) {
        const flipCard = new FlipCard({
            element: document.getElementById(`card${cards.indexOf(card) + 1}`),
            frontImage: card.image,
            backImage: "back.jpg",
            onFlip: function(flipped, cardElement) {
                // تحقق من الإجابة (في هذه الدالة، يمكنك تحديث معلومات اللعبة)
                if (flipped && card.isCorrect) {
                    // إجابة صحيحة
                    score++;
                    attemptsRemaining++; // زيادة المحاولات في المستوى التالي
                    currentLevel++; // الانتقال إلى المستوى التالي

                    // عرض رسالة النجاح
                    alert("إجابة صحيحة!");

                    // إنشاء بطاقات جديدة للمستوى التالي
                    createCards();
                } else {
                    // إجابة خاطئة
                    attemptsRemaining--; // تقليل المحاولات

                    // عرض رسالة الخطأ
                    alert("إجابة خاطئة!");

                    // تحقق من نهاية اللعبة
                    if (attemptsRemaining === 0) {
                        alert(`انتهت اللعبة! النقاط: ${score}`);

                        // إعادة تعيين اللعبة
                        currentLevel = 1;
                        attemptsRemaining = 3;
                        score = 0;

                        // عرض مشهد البداية
                        document.querySelector(".SceneStart").style.display = "block";
                        document.querySelector(".SceneGame").style.display = "none";
                    }
                }

                updateGameInfo();
            }
        });
    }
}

// تحديث معلومات اللعبة
function updateGameInfo() {
    document.getElementById("levels").textContent = `المستوى: ${currentLevel}`;
    document.getElementById("Attempts").textContent = `المحاولات: ${attemptsRemaining}`;
}

// دالة التحقق من الإجابة
function checkAnswer(cardElement) {
    const isCorrect = cardElement.dataset.card === "correct";

    if (isCorrect) {
        // إجابة صحيحة
        score++;
        attemptsRemaining++; // زيادة المحاولات في المستوى التالي
        currentLevel++; // الانتقال إلى المستوى التالي

        // عرض رسالة النجاح
        alert("إجابة صحيحة!");

        // إنشاء بطاقات جديدة للمستوى التالي
        createCards();
    } else {
        // إجابة خاطئة
        attemptsRemaining--; // تقليل المحاولات

        // عرض رسالة الخطأ
        alert("إجابة خاطئة!");

        // تحقق من نهاية اللعبة
        if (attemptsRemaining === 0) {
            alert(`انتهت اللعبة! النقاط: ${score}`);

            // إعادة تعيين اللعبة
            currentLevel = 1;
            attemptsRemaining = 3;
            score = 0;

            // // عرض مشهد البداية
            // document.querySelector(".SceneStart").style.display = "block";
            // document.querySelector(".SceneGame").style.display = "none";
        }
    }

    updateGameInfo();
}

// إضافة مستمعي الأحداث للبطاقات
const flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach(card => {
    card.addEventListener("flip", function(event) {
        const cardElement = event.detail.cardElement;
        checkAnswer(cardElement);
    });
});

// تشغيل اللعبة عند بدء التشغيل
createCards();
updateGameInfo();

