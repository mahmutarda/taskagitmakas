// Değişken tanımları
var you; // Sizin seçiminiz
var yourScore = 0; // Sizin skorunuz
var opponent; // Rakibin seçimi
var opponentScore = 0; // Rakibin skoru

// Seçeneklerin listesi
var choices = ["rock", "paper", "scissors"];

// Sayfa yüklendiğinde çalışacak işlev
window.onload = function() {
    // Her seçenek için bir resim oluştur
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i]; // ID'yi seçenek adıyla ayarla
        choice.src = choices[i] + ".png"; // Resmin kaynağını belirle
        choice.addEventListener("click", selectChoice); // Tıklama olayını ekle
        document.getElementById("choices").append(choice); // Seçenekleri görüntüle
    }
}

// Seçenek seçildiğinde çalışacak işlev
function selectChoice() {
    you = this.id; // Seçilen seçeneği al
    document.getElementById("your-choice").src = you + ".png"; // Sizin seçiminizi göster

    // Rakip için rastgele bir seçenek belirle
    opponent = choices[Math.floor(Math.random() * 3)]; // Rastgele bir seçenek al
    document.getElementById("opponent-choice").src = opponent + ".png"; // Rakibin seçimini göster

    // Kazananı kontrol et
    if (you == opponent) {
        // Beraberlik durumunda her iki skoru da artır
        yourScore += 1;
        opponentScore += 1;
    } else {
        // Kazananı belirle
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1; // Siz kazanırsınız
            } else if (opponent == "paper") {
                opponentScore += 1; // Rakip kazanır
            }
        } else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1; // Siz kazanırsınız
            } else if (opponent == "rock") {
                opponentScore += 1; // Rakip kazanır
            }
        } else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1; // Siz kazanırsınız
            } else if (opponent == "scissors") {
                opponentScore += 1; // Rakip kazanır
            }
        }
    }

    // Skorları güncelle
    document.getElementById("your-score").innerText = yourScore; // Sizin skorunuzu göster
    document.getElementById("opponent-score").innerText = opponentScore; // Rakibin skorunu göster
}

