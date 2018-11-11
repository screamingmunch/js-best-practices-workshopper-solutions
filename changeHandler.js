// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter
const coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
};

module.exports = {
    convertToChange: function (change) {
        const result = [];

        Object.entries(coins)
            .sort(([c1, v1],[c2, v2]) => v2-v1)
            .forEach(([coin, value]) => {
                const amount = Math.floor(change / value);
                result.push(...Array.from({ length: amount }, e => coin));
                change = change % value;
            });         

        return result;
    },
    getAmount: function (coinType) {
        const coin = coins[coinType];
        if (!coin) {
            throw new Error('Unrecognized coin ' + coinType);
        }
        return coin; 
    }
};