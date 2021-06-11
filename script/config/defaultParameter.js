"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionParameter = void 0;
exports.sessionParameter = {
    entrySec: 21,
    numPlayers: 99,
    howtoMessage:  "荷物をひろって トラックを長くしよう！\n" +
        "ほかのトラックに 頭がぶつかると 死んでしまいます。\n" + 
        "　方向転換 ： クリック、ドラッグ\n" +　　
        "　ダッシュ ： ダブルクリック\n" +
        "　ふっかつボタン ： 全員 10回まで",
    premiumWeight: 2.5,
    config: {
        field: {
            radius: [3000, 2500, 2100, 1800, 1500],
            narrowRadiusPerSec: 0,
            bgOpacity: 1.0
        },
        food: {
            interval: 1700,
            volume: [25, 20, 15, 10, 5]
        },
        snake: {
            dashingTime: 3,
            baseSpeed: 5,
            maxSpeedScale: 4,
            amountDashingGaugeRecoveryPerFrame: 10,
            maxNameLength: 1,
            maxKnotLength: 30,
            respawnTimes: 100,
            premiumRespawnTimes: 100,
            invincibleTime: 10000
        },
        time: {
            isTimeBased: true,
            limit: 120
        },
        userInput: {
            pointMoveDistance: 50,
            doublePointDuration: 0.1,
            radianFineness: 72
        },
        audio: {
            audioVolume: 0.5
        }
    }
};
