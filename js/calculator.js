// ========================================
// 禁煙アプリ：計算機能
// ========================================

// 1本あたりのタバコの価格を計算する
function calculatePricePerCigarette(packPrice, packCount) {
    if (packPrice <= 0 || packCount <= 0) {
        return 0;
    }

    return packPrice / packCount;
}


// 禁煙開始からの経過日数を計算する
function calculateElapsedDays(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    // 日付が正しく設定されているか確認
    if (isNaN(start.getTime()) || start > now) {
        return 0;
    }

    // 経過時間をミリ秒で計算
    const elapsedMilliseconds = now.getTime() - start.getTime();

    // ミリ秒を日数に変換
    const elapsedDays = elapsedMilliseconds / (1000 * 60 * 60 * 24);

    return elapsedDays;
}


// 禁煙によって節約できた金額を計算する
function calculateSavedMoney(cigarettesPerDay, pricePerCigarette, elapsedDays) {
    if (cigarettesPerDay < 0 || pricePerCigarette < 0 || elapsedDays < 0) {
        return 0;
    }

    const savedMoney = cigarettesPerDay * pricePerCigarette * elapsedDays;

    // 小数点以下を切り捨てて円単位で返す
    return Math.floor(savedMoney);
}


// 喫煙によって失われたと推定される時間を計算する
// 1本あたり20分として計算
function calculateEstimatedLifeLoss(cigarettesPerDay, elapsedDays) {
    if (cigarettesPerDay < 0 || elapsedDays < 0) {
        return 0;
    }

    const totalCigarettes = cigarettesPerDay * elapsedDays;

    // 1本あたり20分
    const lostMinutes = totalCigarettes * 20;

    return Math.floor(lostMinutes);
}


// 分を「○日○時間○分」に変換する
function formatLifeLoss(totalMinutes) {
    totalMinutes = Math.max(0, Math.floor(totalMinutes));

    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return `${days}日${hours}時間${minutes}分`;
}


// 節約金額で買える商品の候補を計算する
function calculateAffordableProducts(savedMoney, products) {
    if (savedMoney < 0 || !Array.isArray(products)) {
        return [];
    }

    return products
        .filter(product => {
            return Number.isFinite(product.price) && product.price > 0;
        })
        .filter(product => savedMoney >= product.price)
        .map(product => {
            return {
                name: product.name,
                price: product.price,
                quantity: Math.floor(savedMoney / product.price)
            };
        })
        .sort((a, b) => a.price - b.price);
}