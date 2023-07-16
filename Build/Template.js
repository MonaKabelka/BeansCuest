"use strict";
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.f = FudgeCore;
    BeansCuest.fS = FudgeStory;
    console.log("FudgeStory template starting");
    BeansCuest.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: BeansCuest.scene1_1, name: "Scene 1.1" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        BeansCuest.dataForSave = BeansCuest.fS.Progress.setData(BeansCuest.dataForSave, uiElement);
        // start the sequence
        BeansCuest.fS.Progress.go(scenes);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.CHARACTERS = {
        Oliver: {
            name: "Oliver",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Oliver_happy.png"
            }
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.LOCATIONS = {
        cloud: {
            name: "cloud",
            background: "Images/Backgrounds/cloud.png"
        },
        lilypond: {
            name: "lilypond",
            background: "Images/Backgrounds/lilypond.png"
        },
        mansion: {
            name: "mansion",
            background: "Images/Backgrounds/mansion.png"
        },
        mansion2: {
            background: "Images/Backgrounds/mansion2.png",
            name: "mansion2",
        },
        meadow: {
            background: "Images/Backgrounds/meadow.png",
            name: "meadow"
        },
        meadow2: {
            background: "Images/Backgrounds/meadow2.png",
            name: "meadow2"
        },
        wistfulwoods: {
            name: "wistfulwoods",
            background: "Images/Backgrounds/wistfulwoods.png"
        },
        woods: {
            background: "Images/Backgrounds/woods.png",
            name: "woods"
        },
        woods2: {
            background: "Images/Backgrounds/woods2.png",
            name: "woods2"
        },
        woods3: {
            background: "Images/Backgrounds/woods3.png",
            name: "woods3"
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.TRANSITIONS = {
        inScene: {
            alpha: "Images/Transitions/inScene.jpg",
            duration: 1,
            edge: 1
        }
    };
    function makeTransition(name, duration) {
        if (BeansCuest.TRANSITIONS[name]) {
            return BeansCuest.fS.update(duration ? duration : BeansCuest.TRANSITIONS[name].duration, BeansCuest.TRANSITIONS[name].alpha, BeansCuest.TRANSITIONS[name].edge);
        }
        return BeansCuest.fS.update(duration ? duration : 1);
    }
    BeansCuest.makeTransition = makeTransition;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function showCharacter(character, pose, [x, y]) {
        await BeansCuest.fS.Character.show(character, pose, BeansCuest.fS.positionPercent(x, y));
    }
    BeansCuest.showCharacter = showCharacter;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function createMultiLineSpeech(character, textNames, text) {
        for (let name of textNames) {
            await createSingleLineSpeech(character, text[character.name][name]);
        }
    }
    BeansCuest.createMultiLineSpeech = createMultiLineSpeech;
    ;
    async function createSingleLineSpeech(character, text) {
        await BeansCuest.fS.Speech.tell(character, text);
    }
    BeansCuest.createSingleLineSpeech = createSingleLineSpeech;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    BeansCuest.Scene = Scene;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function scene1_1() {
        let text = {
            Oliver: {
                T0000: "Hey Bean, finally!",
                T0001: "I was afraid something might have happened to you. I thought you weren't going to show up.",
            },
        };
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.createMultiLineSpeech(BeansCuest.CHARACTERS.Oliver, ["T0000", "T0001"], text);
    }
    BeansCuest.scene1_1 = scene1_1;
})(BeansCuest || (BeansCuest = {}));
//# sourceMappingURL=Template.js.map