// ========================================
// FRUITLENS AI
// ========================================


// ========================================
// MODEL URL
// ========================================

const MODEL_URL =
    "https://teachablemachine.withgoogle.com/models/NpIJcus1e/";


// ========================================
// VARIABLE
// ========================================

let model = null;
let modelReady = false;
let selectedImage = null;


// ========================================
// ELEMENT HTML
// ========================================

const imageInput =
    document.getElementById("imageInput");

const preview =
    document.getElementById("preview");

const analyzeBtn =
    document.getElementById("analyzeBtn");

const statusText =
    document.getElementById("statusText");

const resultCard =
    document.getElementById("resultCard");

const resultName =
    document.getElementById("resultName");

const confidenceText =
    document.getElementById("confidenceText");

const confidenceBar =
    document.getElementById("confidenceBar");

const fruitInfo =
    document.getElementById("fruitInfo");

const fruitBenefits =
    document.getElementById("fruitBenefits");

const fruitFact =
    document.getElementById("fruitFact");

const fruitWhen =
    document.getElementById("fruitWhen");

const secondOpinion =
    document.getElementById("secondOpinion");

const matchSelect =
    document.getElementById("matchSelect");

const matchResults =
    document.getElementById("matchResults");

const historyList =
    document.getElementById("historyList");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");


// ========================================
// DATA BUAH
// ========================================

const fruitData = {
    pisang: {
        name: "Pisang 🍌",
        description: "Pisang mengandung karbohidrat, vitamin B6, dan kalium.",
        benefits: "Dapat menjadi sumber energi dan bagian dari pola makan seimbang.",
        fact: "Pisang tumbuh dalam tandan.",
        when: "Cocok dimakan sebagai camilan atau bersama sarapan."
    },

    belimbing: {
        name: "Belimbing ⭐",
        description: "Belimbing mengandung air, vitamin C, dan serat.",
        benefits: "Dapat menambah variasi buah dalam pola makan sehari-hari.",
        fact: "Jika dipotong melintang, belimbing berbentuk seperti bintang.",
        when: "Dapat dinikmati saat matang dan sudah dicuci bersih."
    },

    rukam: {
        name: "Rukam",
        description: "Rukam adalah buah tropis yang umumnya berwarna merah tua hingga keunguan saat matang.",
        benefits: "Dapat dinikmati sebagai salah satu variasi buah lokal.",
        fact: "Rukam dikenal sebagai buah yang tumbuh pada tanaman berkayu.",
        when: "Pilih buah yang matang dan olah dengan cara yang sesuai sebelum dikonsumsi."
    },

    namnam: {
        name: "Namnam",
        description: "Namnam merupakan buah tropis dengan bentuk pipih dan tidak beraturan.",
        benefits: "Dapat menambah keragaman buah lokal yang dikenal masyarakat.",
        fact: "Buah namnam tumbuh langsung pada batang atau cabang tua.",
        when: "Konsumsi setelah matang dan dicuci bersih."
    },

    kepel: {
        name: "Kepel",
        description: "Kepel adalah buah tropis yang tumbuh berkelompok pada batang pohon.",
        benefits: "Merupakan salah satu contoh keanekaragaman buah Nusantara.",
        fact: "Pohon kepel dikenal sebagai tanaman buah yang berasal dari kawasan Asia Tenggara.",
        when: "Nikmati hanya buah yang matang dan layak konsumsi."
    },

    durian: {
        name: "Durian 🌰",
        description: "Durian memiliki daging buah bertekstur lembut dan aroma yang khas.",
        benefits: "Mengandung energi dan sejumlah zat gizi, sehingga sebaiknya dinikmati dalam porsi sewajarnya.",
        fact: "Kulit durian memiliki duri yang tajam.",
        when: "Pilih durian matang dan buka dengan hati-hati."
    },

    lemon: {
        name: "Lemon 🍋",
        description: "Lemon memiliki rasa asam dan mengandung vitamin C.",
        benefits: "Dapat menambah rasa pada air minum atau makanan.",
        fact: "Lemon termasuk kelompok buah sitrus.",
        when: "Dapat digunakan dalam minuman atau sebagai bahan masakan."
    },

    salak: {
        name: "Salak",
        description: "Salak memiliki kulit bersisik dan daging buah yang renyah.",
        benefits: "Mengandung serat dan dapat menjadi pilihan buah untuk camilan.",
        fact: "Kulit salak menyerupai sisik ular.",
        when: "Kupas kulitnya dan periksa bijinya sebelum dimakan."
    },

    mangga: {
        name: "Mangga 🥭",
        description: "Mangga mengandung vitamin C dan berbagai zat gizi.",
        benefits: "Dapat menjadi bagian dari pola makan yang beragam.",
        fact: "Mangga memiliki banyak varietas dengan warna dan rasa berbeda.",
        when: "Cocok dimakan segar setelah dicuci dan dikupas bila diperlukan."
    },

    pepaya: {
        name: "Pepaya",
        description: "Pepaya mengandung vitamin C, provitamin A, dan serat.",
        benefits: "Seratnya membantu mendukung pencernaan yang sehat.",
        fact: "Daging pepaya matang biasanya berwarna jingga atau kemerahan.",
        when: "Belah buah, buang bijinya, lalu nikmati daging buahnya."
    },

    melon: {
        name: "Melon 🍈",
        description: "Melon memiliki kandungan air yang tinggi.",
        benefits: "Dapat membantu menambah asupan cairan dari makanan.",
        fact: "Melon memiliki beberapa varietas dengan warna daging buah berbeda.",
        when: "Cocok disajikan dingin setelah dicuci dan dipotong."
    },

    tomat: {
        name: "Tomat 🍅",
        description: "Tomat mengandung vitamin C dan likopen.",
        benefits: "Dapat dimakan segar atau digunakan dalam berbagai masakan.",
        fact: "Dalam ilmu botani, tomat termasuk buah.",
        when: "Cuci bersih sebelum dimakan atau diolah."
    },

    jambu: {
        name: "Jambu",
        description: "Jambu biji mengandung vitamin C dan serat.",
        benefits: "Dapat menjadi pilihan buah untuk menambah variasi asupan serat.",
        fact: "Beberapa jenis jambu memiliki daging buah putih, merah, atau merah muda.",
        when: "Cuci bersih dan potong sebelum dinikmati."
    },

    pir: {
        name: "Pir 🍐",
        description: "Pir mengandung air dan serat.",
        benefits: "Dapat menjadi camilan buah yang menyegarkan.",
        fact: "Banyak varietas pir memiliki bentuk membulat dengan bagian atas lebih sempit.",
        when: "Cuci bersih dan nikmati langsung atau dipotong."
    }
};


// ========================================
// LOAD MODEL
// ========================================

async function loadModel() {
    try {
        statusText.innerText =
            "🤖 Menghubungkan ke AI...";

        if (typeof tf === "undefined") {
            throw new Error(
                "TensorFlow.js tidak termuat."
            );
        }

        statusText.innerText =
            "🤖 Menyiapkan Teachable Machine...";

        if (typeof tmImage === "undefined") {
            throw new Error(
                "Teachable Machine tidak termuat."
            );
        }

        statusText.innerText =
            "🤖 Mengunduh model AI...";

        console.log("Memulai loading model...");
        console.log("Model URL:", MODEL_URL);

        model = await tmImage.load(
            MODEL_URL + "model.json",
            MODEL_URL + "metadata.json"
        );

        modelReady = true;

        statusText.innerText =
            "✅ AI siap digunakan";

        analyzeBtn.disabled = false;

        console.log("✅ MODEL BERHASIL DIMUAT");

    } catch (error) {
        console.error("❌ MODEL ERROR:", error);

        modelReady = false;
        analyzeBtn.disabled = true;

        statusText.innerText =
            "❌ AI gagal dimuat";

        alert(
            "AI gagal dimuat.\n\n" +
            error.message
        );
    }
}


// ========================================
// PILIH FOTO
// ========================================

imageInput.addEventListener(
    "change",
    function (event) {
        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        selectedImage = file;

        const reader =
            new FileReader();

        reader.onload =
            function (e) {
                preview.src =
                    e.target.result;

                preview.style.display =
                    "block";

                resultCard.style.display =
                    "none";

                statusText.innerText =
                    modelReady
                        ? "📸 Foto siap dianalisis"
                        : "🤖 AI masih memuat...";
            };

        reader.readAsDataURL(file);
    }
);


// ========================================
// ANALISIS
// ========================================

analyzeBtn.addEventListener(
    "click",
    async function () {
        if (!modelReady || !model) {
            alert(
                "AI belum siap.\n\n" +
                "Tunggu sampai muncul " +
                "'AI siap digunakan'."
            );

            return;
        }

        if (!selectedImage) {
            alert(
                "Silakan pilih foto buah terlebih dahulu."
            );

            return;
        }

        analyzeBtn.disabled = true;

        statusText.innerText =
            "🤖 AI sedang menganalisis...";

        try {
            const image =
                new Image();

            image.src =
                URL.createObjectURL(
                    selectedImage
                );

            await new Promise(
                function (resolve, reject) {
                    image.onload = resolve;
                    image.onerror = reject;
                }
            );

            console.log("Mulai prediction...");

            let predictions =
                await model.predict(image);

            predictions.sort(
                function (a, b) {
                    return (
                        b.probability -
                        a.probability
                    );
                }
            );

            console.log(
                "Predictions:",
                predictions
            );

            const best =
                predictions[0];

            const second =
                predictions[1];

            const confidence =
                best.probability * 100;

            showResult(
                best.className,
                confidence,
                second
            );

            saveHistory(
                best.className,
                confidence
            );

            statusText.innerText =
                "✅ Analisis selesai";

            URL.revokeObjectURL(
                image.src
            );

        } catch (error) {
            console.error(
                "❌ PREDICTION ERROR:",
                error
            );

            statusText.innerText =
                "❌ Gagal menganalisis";

            alert(
                "Gagal menganalisis foto.\n\n" +
                error.message
            );
        }

        analyzeBtn.disabled = false;
    }
);


// ========================================
// TAMPILKAN HASIL
// ========================================

function showResult(
    label,
    confidence,
    second
) {
    resultCard.style.display =
        "block";

    const key =
        normalizeFruitName(label);

    const percentage =
        Math.round(confidence);

    if (fruitData[key]) {
        resultName.innerText =
            fruitData[key].name;
    } else {
        resultName.innerText =
            "❓ Tidak dikenali";
    }

    confidenceText.innerText =
        percentage + "%";

    confidenceBar.style.width =
        percentage + "%";

    if (
        !fruitData[key] ||
        confidence < 70
    ) {
        fruitInfo.innerText =
            "AI belum cukup yakin dengan hasil foto ini.";

        fruitBenefits.innerText =
            "Coba gunakan foto yang lebih jelas.";

        fruitFact.innerText =
            "Pastikan buah terlihat jelas dan pencahayaan cukup.";

        fruitWhen.innerText =
            "Coba scan kembali dengan foto yang berbeda.";

    } else {
        const fruit =
            fruitData[key];

        fruitInfo.innerText =
            fruit.description;

        fruitBenefits.innerText =
            fruit.benefits;

        fruitFact.innerText =
            fruit.fact;

        fruitWhen.innerText =
            fruit.when;
    }

    if (!second) {
        secondOpinion.innerHTML =
            "Tidak ada prediksi kedua.";

        return;
    }

    const secondPercentage =
        Math.round(
            second.probability * 100
        );

    const gap =
        confidence -
        second.probability * 100;

    let status;
    let className;

    if (
        confidence >= 85 &&
        gap >= 30
    ) {
        status =
            "🟢 Hasil cukup konsisten";

        className =
            "good";

    } else if (
        confidence >= 70 &&
        gap >= 15
    ) {
        status =
            "🟡 Perlu diperhatikan";

        className =
            "warning";

    } else {
        status =
            "🔴 AI masih ragu";

        className =
            "bad";
    }

    secondOpinion.innerHTML = `
        <div class="opinion-status ${className}">
            ${status}
        </div>

        <div class="prediction-box">
            <strong>Prediksi utama</strong>
            <br>
            ${getFruitDisplayName(label)}
            — ${percentage}%
        </div>

        <div class="prediction-box">
            <strong>Prediksi kedua</strong>
            <br>
            ${getFruitDisplayName(second.className)}
            — ${secondPercentage}%
        </div>
    `;
}


// ========================================
// NORMALISASI NAMA
// ========================================

function normalizeFruitName(label) {
    const text =
        String(label)
            .toLowerCase()
            .trim();

    if (text.includes("pisang") || text.includes("banana"))
        return "pisang";

    if (text.includes("belimbing") || text.includes("starfruit"))
        return "belimbing";

    if (text.includes("rukam") || text.includes("rukem"))
        return "rukam";

    if (text.includes("namnam") || text.includes("nam-nam"))
        return "namnam";

    if (text.includes("kepel"))
        return "kepel";

    if (text.includes("durian"))
        return "durian";

    if (text.includes("lemon"))
        return "lemon";

    if (text.includes("salak") || text.includes("snake fruit"))
        return "salak";

    if (text.includes("mangga") || text.includes("mango"))
        return "mangga";

    if (text.includes("pepaya") || text.includes("papaya"))
        return "pepaya";

    if (text.includes("melon"))
        return "melon";

    if (text.includes("tomat") || text.includes("tomato"))
        return "tomat";

    if (text.includes("jambu") || text.includes("guava"))
        return "jambu";

    if (text.includes("pir") || text.includes("pear"))
        return "pir";

    return null;
}


// ========================================
// NAMA UNTUK DITAMPILKAN
// ========================================

function getFruitDisplayName(label) {
    const key =
        normalizeFruitName(label);

    if (key && fruitData[key]) {
        return fruitData[key].name;
    }

    return label;
}


// ========================================
// FRUIT MATCH
// ========================================

const matchData = {
    refreshing: [
        {
            fruit: "Belimbing ⭐",
            reason: "Memiliki kandungan air dan rasa yang segar."
        },
        {
            fruit: "Melon 🍈",
            reason: "Memiliki kandungan air yang tinggi."
        },
        {
            fruit: "Pir 🍐",
            reason: "Mengandung air dan dapat dinikmati sebagai buah segar."
        }
    ],

    vitaminC: [
        {
            fruit: "Jambu",
            reason: "Jambu biji dikenal mengandung vitamin C."
        },
        {
            fruit: "Mangga 🥭",
            reason: "Mengandung vitamin C."
        },
        {
            fruit: "Lemon 🍋",
            reason: "Lemon mengandung vitamin C dan memiliki rasa asam."
        }
    ],

    snack: [
        {
            fruit: "Pisang 🍌",
            reason: "Praktis untuk dinikmati sebagai camilan."
        },
        {
            fruit: "Salak",
            reason: "Daging buahnya renyah dan mudah dibawa."
        },
        {
            fruit: "Pir 🍐",
            reason: "Dapat dinikmati langsung setelah dicuci."
        }
    ],

    activity: [
        {
            fruit: "Pisang 🍌",
            reason: "Mengandung karbohidrat yang dapat menjadi sumber energi."
        },
        {
            fruit: "Mangga 🥭",
            reason: "Dapat menjadi bagian dari camilan buah."
        },
        {
            fruit: "Pepaya",
            reason: "Mengandung karbohidrat dan serat."
        }
    ],

    fiber: [
        {
            fruit: "Pir 🍐",
            reason: "Mengandung serat."
        },
        {
            fruit: "Pepaya",
            reason: "Mengandung serat."
        },
        {
            fruit: "Salak",
            reason: "Mengandung serat."
        }
    ]
};


// ========================================
// FRUIT MATCH EVENT
// ========================================

matchSelect.addEventListener(
    "change",
    function () {
        const value =
            matchSelect.value;

        if (!value) {
            matchResults.innerHTML = "";
            return;
        }

        const results =
            matchData[value];

        matchResults.innerHTML =
            results.map(
                function (item, index) {
                    return `
                        <div class="match-item">
                            <strong>
                                ${index + 1}.
                                ${item.fruit}
                            </strong>

                            <p>
                                ${item.reason}
                            </p>
                        </div>
                    `;
                }
            ).join("");
    }
);


// ========================================
// HISTORY
// ========================================

function saveHistory(
    label,
    confidence
) {
    let history =
        JSON.parse(
            localStorage.getItem(
                "fruitLensHistory"
            )
        ) || [];

    history.unshift({
        label: label,

        confidence:
            Math.round(confidence),

        date:
            new Date().toLocaleString(
                "id-ID"
            )
    });

    history =
        history.slice(0, 10);

    localStorage.setItem(
        "fruitLensHistory",
        JSON.stringify(history)
    );

    displayHistory();
}


// ========================================
// TAMPILKAN HISTORY
// ========================================

function displayHistory() {
    const history =
        JSON.parse(
            localStorage.getItem(
                "fruitLensHistory"
            )
        ) || [];

    if (history.length === 0) {
        historyList.innerHTML =
            "<p>Belum ada riwayat scan.</p>";

        return;
    }

    historyList.innerHTML =
        history.map(
            function (item) {
                return `
                    <div class="history-item">
                        <strong>
                            ${getFruitDisplayName(
                                item.label
                            )}
                        </strong>

                        <span>
                            ${item.confidence}%
                        </span>

                        <small>
                         </div>
                `;
            }
        ).join("");
}


// ========================================
// HAPUS HISTORY
// ========================================

clearHistoryBtn.addEventListener(
    "click",
    function () {
        localStorage.removeItem(
            "fruitLensHistory"
        );

        displayHistory();
    }
);


// ========================================
// MULAI
// ========================================

displayHistory();

loadModel();       