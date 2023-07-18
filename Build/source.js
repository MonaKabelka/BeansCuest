"use strict";
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.f = FudgeCore;
    BeansCuest.fS = FudgeStory;
    BeansCuest.dataForSave = {
        fishingRod: false,
        moonstone: false,
        pixieDust: false,
        ladder: false,
        sunstone: false,
        startstone: false,
        novelpage1: false,
        novelpage2: false,
        novelpage3: false,
        novelpage4: false,
        novelpage5: false,
        novelpage6: false,
    };
    BeansCuest.POSITIONS = {
        1: [50, 50],
        2: {
            1: [25, 50],
            2: [75, 50],
        },
        3: {
            1: [20, 50],
            2: [50, 50],
            3: [80, 50],
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        BeansCuest.gameMenu = BeansCuest.fS.Menu.create(BeansCuest.transformMenu(BeansCuest.menuDefinition), BeansCuest.useCallbacks, "in-game-menu");
        BeansCuest.gameMenu.close();
        let scenes = [
            { scene: BeansCuest.scene1_1, name: "Scene 1.1" },
            { scene: BeansCuest.scene1_2, name: "Scene 1.2" },
            // { scene: scene2_1, name: "Scene 2.1" },
            // { scene: scene3_1, name: "Scene 3.1" },
            // { scene: scene4_1, name: "Scene 4.1" },
        ];
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Progress.go(scenes);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    function getBigger(duration) {
        return {
            start: { scaling: new BeansCuest.f.Vector2(0, 0), translation: BeansCuest.fS.positionPercent(50, 50) },
            end: { scaling: new BeansCuest.f.Vector2(1, 1), translation: BeansCuest.fS.positionPercent(50, 50) },
            duration,
            playmode: BeansCuest.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    function getSmaller(duration) {
        return {
            end: { scaling: new BeansCuest.f.Vector2(0, 0), translation: BeansCuest.fS.positionPercent(50, 50) },
            start: { scaling: new BeansCuest.f.Vector2(1, 1), translation: BeansCuest.fS.positionPercent(50, 50) },
            duration,
            playmode: BeansCuest.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    BeansCuest.ANIMATIONS = {
        getBigger,
        getSmaller
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.CHARACTERS = {
        Oliver: {
            name: "Oliver",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                happy: "Images/Characters/Oliver/happy.png",
                worried: "Images/Characters/Oliver/worried.png",
                proud: "Images/Characters/Oliver/proud.png"
            }
        },
        Bean: {
            name: "Bean",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                sad: "Images/Characters/Bean/sad.png",
                scared: "Images/Characters/Bean/scared.png",
                happy: "Images/Characters/Bean/happy.png",
                charmed: "Images/Characters/Bean/charmed.png",
                confused: "Images/Characters/Bean/confused.png",
                curious: "Images/Characters/Bean/curious.png"
            }
        },
        Stool: {
            name: "Stool",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                explanatory: "Images/Characters/Stool/explanatory.png",
                serious: "Images/Characters/Bean/serious.png",
                charmed: "Images/Characters/Stool/charmed.png",
                happy: "Images/Characters/Stool/happy.png",
                worried: "Images/Characters/Stool/worried.png",
                hysterical: "Images/Characters/Stool/hysterical.png",
                sad: "Images/Characters/Stool/sad.png",
                crying: "Images/Characters/Stool/crying.png",
                anxious: "Images/Characters/Stool/anxious.png",
                shivering: "Images/Characters/Stool/shivering.png",
                fainting: "Images/Characters/Stool/fainting.png",
                offended: "Images/Characters/Stool/offended.png",
                confused: "Images/Characters/Stool/confused.png"
            }
        },
        Lillypad: {
            name: "Lillypad",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                shy: "Images/Characters/Lillypad/shy.png",
                blushing: "Images/Characters/Lillypad/blushing.png",
                sad: "Images/Characters/Lillypad/sad.png"
            }
        },
        Charm: {
            name: "Charm",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                angry: "Images/Characters/Charm/angry.png",
                snapped: "Images/Characters/Charm/snapped.png",
                thinking: "Images/Characters/Charm/thinking.png",
                crying: "Images/Characters/Charm/crying.png",
                happy: "Images/Characters/Charm/happy.png"
            }
        },
        Chant: {
            name: "Chant",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                angry: "Images/Characters/Chant/angry.png",
                snapped: "Images/Characters/Chant/snapped.png",
                crying: "Images/Characters/Chant/crying.png",
                happy: "Images/Characters/Chant/happy.png"
            }
        },
        Spook: {
            name: "Spook",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                thinking: "Images/Characters/Spook/thinking.png",
                smiling: "Images/Characters/Spook/smiling.png",
                sad: "Images/Characters/Spook/sad.png",
                grief: "Images/Characters/Spook/grief.png"
            }
        },
        Bandit: {
            name: "Bandit",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                grumpy: "Images/Characters/Bandit/grumpy.png",
                sleeping: "Images/Characters/Bandit/sleeping.png"
            }
        },
        System: {
            name: "System",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: null
        },
        Unknown: {
            name: "Unknown",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: null
        },
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function createDialog(config) {
        const dialogue = Object.entries(config).reduce((acc, [name, { label }]) => ({
            ...acc,
            [name]: label
        }), {});
        let dialogueElement = await BeansCuest.fS.Menu.getInput(dialogue, "choice");
        await Object.values(config).find(({ label }) => label === dialogueElement).callback();
    }
    BeansCuest.createDialog = createDialog;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.ITEMS = {
        fishingRod: {
            name: "Fising Rod",
            description: "",
            image: "Images/Items/fising_rod.png",
            handler: handleItemUsage
        },
        moonstone: {
            name: "Moonstone",
            description: "TEST",
            image: "Images/Items/moonstone.png",
            handler: handleItemUsage
        },
        pixieDust: {
            name: "Pixie Dust",
            description: "",
            image: "Images/Items/moonstone.png",
            handler: handleItemUsage
        },
        ladder: {
            name: "Ladder",
            description: "",
            image: "Images/Items/ladder.png",
            handler: handleItemUsage
        },
        note: {
            name: "Note",
            description: "",
            image: "Images/Items/note.png",
            static: true
        },
        sunstone: {
            name: "Sunstone",
            description: "",
            image: "Images/Items/sunstone.png",
            handler: handleItemUsage
        },
        startstone: {
            name: "Starstone",
            description: "",
            image: "Images/Items/starstone.png",
            handler: handleItemUsage
        },
    };
    BeansCuest.ITEM_CHARACTERS = {
        fishingRod: {
            name: "fishingRod",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/fishing_rod.png"
            }
        },
        ladder: {
            name: "ladder",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/ladder.png"
            }
        },
        moonstone: {
            name: "moonstone",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/moonstone.png"
            }
        },
        note: {
            name: "note",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/note.png"
            }
        },
        pixieDust: {
            name: "pixieDust",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/pixieDust.png"
            }
        },
        startstone: {
            name: "startstone",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/startstone.png"
            }
        },
        sunstone: {
            name: "sunstone",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/sunstone.png"
            }
        },
    };
    function handleItemUsage(event) {
        if (event.type === 'pointerdown') {
            const [itemKey, item] = Object.entries(BeansCuest.ITEMS).find(([, item]) => item.name === event.detail);
            if (!BeansCuest.dataForSave[itemKey]) {
                BeansCuest.fS.Inventory.add(item);
            }
        }
    }
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
        },
        black: {
            background: "Images/Backgrounds/black.png",
            name: "black",
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.ALL_NOVELPAGE_NAMES = ["novelpage1", "novelpage2", "novelpage3", "novelpage4", "novelpage5", "novelpage6"];
    BeansCuest.NOVELPAGES = {
        novelpage1: {
            name: "novelpage1",
            background: "Images/Novelpages/novelpage1.png"
        },
        novelpage2: {
            name: "novelpage2",
            background: "Images/Novelpages/novelpage2.png"
        },
        novelpage3: {
            name: "novelpage3",
            background: "Images/Novelpages/novelpage3.png"
        },
        novelpage4: {
            name: "novelpage4",
            background: "Images/Novelpages/novelpage4.png"
        },
        novelpage5: {
            name: "novelpage5",
            background: "Images/Novelpages/novelpage5.png"
        },
        novelpage6: {
            name: "novelpage6",
            background: "Images/Novelpages/novelpage6.png"
        },
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function letCharacterSayText(character, scriptText, position) {
        if (scriptText.emotion) {
            const [x, y] = position;
            const positionVector = BeansCuest.fS.positionPercent(x, y);
            await BeansCuest.showCharacter(character, scriptText.emotion, positionVector);
            await BeansCuest.makeTransition("fade_in", 0.1);
        }
        await BeansCuest.createSingleLineSpeech(character, scriptText.text);
    }
    BeansCuest.letCharacterSayText = letCharacterSayText;
    async function letCharactersHaveDialogue(texts, script) {
        for (let [character, scriptText, position] of texts) {
            await letCharacterSayText(character, scriptText, position ?? script[character.name].defaultPosition);
        }
    }
    BeansCuest.letCharactersHaveDialogue = letCharactersHaveDialogue;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.SOUND_NAMES = ["a", "b", "c"];
    BeansCuest.SOUNDS = {
        a: {
            url: "Audio/Sounds/a.mp3",
            defaultVolume: 1
        },
        b: {
            url: "Audio/Sounds/b.mp3",
            defaultVolume: 1
        },
        c: {
            url: "Audio/Sounds/c.mp3",
            defaultVolume: 1
        },
    };
    BeansCuest.MUSIC_NAMES = ["garden", "woods", "lilypond", "meadows", "mansion", "portal"];
    BeansCuest.MUSICS = {
        garden: {
            defaultVolume: 1,
            url: "Audio/BGM/garden.mp3",
            looping: true
        },
        woods: {
            defaultVolume: 1,
            url: "Audio/BGM/woods.mp3",
            looping: true
        },
        lilypond: {
            defaultVolume: 1,
            url: "Audio/BGM/lilypond.mp3",
            looping: true
        },
        meadows: {
            defaultVolume: 1,
            url: "Audio/BGM/meadows.mp3",
            looping: true
        },
        mansion: {
            defaultVolume: 1,
            url: "Audio/BGM/mansion.mp3",
            looping: true
        },
        portal: {
            defaultVolume: 1,
            url: "Audio/BGM/portal.mp3",
            looping: true
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
        },
        portal: {
            alpha: "Images/Transitions/portal.jpg",
            duration: 1,
            edge: 1
        },
        sceneChange: {
            alpha: "Images/Transitions/sceneChange.jpg",
            duration: 1,
            edge: 1
        },
        novelpage: {
            alpha: "Images/Transitions/novelpage.jpg",
            duration: 1,
            edge: 1
        }
    };
    function makeTransition(name, duration) {
        if (BeansCuest.TRANSITIONS[name]) {
            return BeansCuest.fS.update(duration || BeansCuest.TRANSITIONS[name].duration, BeansCuest.TRANSITIONS[name].alpha, BeansCuest.TRANSITIONS[name].edge);
        }
        return BeansCuest.fS.update(duration || 1);
    }
    BeansCuest.makeTransition = makeTransition;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function showCharacter(character, pose, position) {
        await hideCharacter(character);
        await BeansCuest.fS.Character.show(character, character.pose[pose], position);
    }
    BeansCuest.showCharacter = showCharacter;
    async function hideCharacter(character) {
        await BeansCuest.fS.Character.hide(character);
    }
    BeansCuest.hideCharacter = hideCharacter;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function getItem(item, itemKey) {
        BeansCuest.fS.Inventory.add(item);
        const itemChar = Object.entries(BeansCuest.ITEM_CHARACTERS).find(([key]) => key === itemKey)[1];
        await BeansCuest.fS.Character.animate(itemChar, itemChar.pose.center, BeansCuest.ANIMATIONS.getBigger(1));
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.System, `You aquired ${item.name}`);
        await BeansCuest.fS.Character.animate(itemChar, itemChar.pose.center, BeansCuest.ANIMATIONS.getSmaller(1));
    }
    BeansCuest.getItem = getItem;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.isMenuOpen = false;
    BeansCuest.volume = 1;
    BeansCuest.menuDefinition = {
        credits: {
            label: "(C)redits",
            callback: showCredits,
            code: BeansCuest.f.KEYBOARD_CODE.C
        },
        inventory: {
            label: "(I)nventory",
            callback: openInventory,
            code: BeansCuest.f.KEYBOARD_CODE.I
        },
        load: {
            label: "(L)oad",
            callback: loadGame,
            code: BeansCuest.f.KEYBOARD_CODE.L
        },
        save: {
            label: "(S)ave",
            callback: saveGame,
            code: BeansCuest.f.KEYBOARD_CODE.S
        },
        novelPages: {
            label: "(N)ovel Pages",
            callback: showNovelPages,
            code: BeansCuest.f.KEYBOARD_CODE.N
        },
        volumeDown: {
            label: "Vol (D)own",
            callback: volumeDown,
            code: BeansCuest.f.KEYBOARD_CODE.D
        },
        volumeUp: {
            label: "Vol (U)p",
            callback: volumeUp,
            code: BeansCuest.f.KEYBOARD_CODE.U
        },
        toggleMenu: {
            label: "Toggle (M)enu",
            callback: toggleMenu,
            code: BeansCuest.f.KEYBOARD_CODE.M
        }
    };
    function transformMenu(definition) {
        return Object.entries(definition).reduce((acc, [key, { label }]) => ({ ...acc, [key]: label }), {});
    }
    BeansCuest.transformMenu = transformMenu;
    async function useCallbacks(option) {
        await Object.values(BeansCuest.menuDefinition).find(({ label }) => label === option).callback();
    }
    BeansCuest.useCallbacks = useCallbacks;
    async function toggleMenu() {
        BeansCuest.isMenuOpen ? BeansCuest.gameMenu.close() : BeansCuest.gameMenu.open();
        BeansCuest.isMenuOpen = !BeansCuest.isMenuOpen;
    }
    async function showCredits() {
        BeansCuest.fS.Text.setClass('');
        await BeansCuest.fS.Text.print(`<table class="credits-table">
        <thead>
          <tr>
            <th>   Resources   </th>
            <th>   Credits   </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>   Concept   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Script   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Background Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Character Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Character Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   GUI Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Item Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Programming   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Logo Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Fudge Core   </td>
            <td>   Jirka Dell'Oro-Friedl   </td>
          </tr>
          <tr>
            <td>   Lecturer   </td>
            <td>   Riem Yasin   </td>
          </tr>
        </tbody>
        </table>`);
        return;
    }
    async function openInventory() {
        await BeansCuest.fS.Inventory.open();
    }
    async function saveGame() {
        await BeansCuest.fS.Progress.save();
    }
    async function loadGame() {
        await BeansCuest.fS.Progress.load();
    }
    async function showNovelPages() {
        const allValidPages = BeansCuest.ALL_NOVELPAGE_NAMES.filter((page) => BeansCuest.dataForSave[page]).map((page) => BeansCuest.NOVELPAGES[page].background);
        if (allValidPages.length <= 0) {
            return;
        }
        let currentPage = 0;
        const close = { done: 'X', previous: "⬅️", next: "➡️" };
        let choice;
        do {
            BeansCuest.fS.Text.setClass('novelpage');
            await BeansCuest.fS.Text.print(`<img src="${allValidPages[currentPage]}" />`);
            choice = await BeansCuest.fS.Menu.getInput(close, "choice");
            switch (choice) {
                case "➡️":
                    currentPage = Math.min(currentPage + 1, allValidPages.length - 1);
                    break;
                case "⬅️":
                    currentPage = Math.max(currentPage - 1, 0);
                    break;
            }
            console.log(choice);
        } while (choice != "X");
        BeansCuest.fS.Text.close();
    }
    async function volumeDown() {
        BeansCuest.volume = Math.max(BeansCuest.volume - 0.1, 0);
        BeansCuest.fS.Sound.setMasterVolume(BeansCuest.volume);
    }
    async function volumeUp() {
        BeansCuest.volume = Math.min(BeansCuest.volume + 0.1, 1);
        BeansCuest.fS.Sound.setMasterVolume(BeansCuest.volume);
    }
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(event) {
        if (!Object.values(BeansCuest.menuDefinition).some(({ code }) => code === event.code))
            return;
        await useCallbacks(Object.values(BeansCuest.menuDefinition).find(({ code }) => code === event.code).label);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function showNovelPages(novelpage, previousLocation) {
        BeansCuest.dataForSave[novelpage] = true;
        await BeansCuest.fS.Location.show(BeansCuest.NOVELPAGES[novelpage]);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("novelpage");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.System, "You've unlocked a new novel page!");
        await BeansCuest.fS.Location.show(previousLocation);
        await BeansCuest.makeTransition("novelpage");
    }
    BeansCuest.showNovelPages = showNovelPages;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function playSound(sound) {
        BeansCuest.fS.Sound.play(sound.url, sound.defaultVolume);
    }
    BeansCuest.playSound = playSound;
    async function playBGM(music, duration) {
        await BeansCuest.fS.Sound.fade(music.url, music.defaultVolume, duration || 1, music.looping);
    }
    BeansCuest.playBGM = playBGM;
    async function muteBGM(music, duration) {
        await BeansCuest.fS.Sound.fade(music.url, 0, duration || 1);
    }
    BeansCuest.muteBGM = muteBGM;
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
    let text = {
        Oliver: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    emotion: "happy",
                    text: "Hey Bean, finally!"
                },
                T0001: {
                    emotion: "worried",
                    text: "I was afraid something might have happened to you. I thought you weren't going to show up.",
                },
                T0002: {
                    emotion: "happy",
                    text: "No worries! I'm just happy you're here now. Are you ready to play hide and seek?"
                },
                T0003: {
                    emotion: "happy",
                    text: "Yeah, I do. But I'm getting better at finding you every time so don't underestimate me! Prepare to be found!"
                },
                T0004: {
                    emotion: "proud",
                    text: "We'll see about that! Alright, I'll start counting while you go and conceal yourself. Ready... set... go!"
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time."
                },
                T0001: {
                    text: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls."
                },
                T0002: {
                    text: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning."
                },
                T0003: {
                    text: "Absolutely! I've been improving my hiding skills, you know?"
                },
                T0004: {
                    text: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!"
                }
            }
        }
    };
    async function scene1_1() {
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("sceneChange");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0000, null],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0001, null]
        ], text);
        let dialog = {
            A: {
                callback: optionA,
                label: "Apologize"
            },
            B: {
                callback: optionB,
                label: "Try to be funny"
            }
        };
        await BeansCuest.createDialog(dialog);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in");
    }
    BeansCuest.scene1_1 = scene1_1;
    async function optionA() {
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0000, null]], text);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0002, null],
        ], text);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0004, null],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0004, null],
        ], text);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let script = {
        Oliver: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "1, 2, 3... 10, 11, 12...",
                },
                T0001: {
                    text: "Okay, I'm done counting. Bean, where are you? I know you're hiding somewhere, and I'll find you!"
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    emotion: "curious",
                    text: "it's getting rather dark around here... this seems like the purr-fect spot to hide. oliver never ventures beyond the garden. but what is this weird light?"
                },
                T0001: {
                    emotion: "charmed",
                    text: "wow it looks so beautiful and sparkly! i wonder what it could be… oh looks like a portal!",
                },
                T0002: {
                    emotion: "curious",
                    text: "must be magic or something. i wonder how… OAAAHH",
                },
                T0003: {
                    emotion: "charmed",
                    text: "the light... it's... magical...",
                },
                T0004: {
                    emotion: "happy",
                    text: "i'll return later, fully prepared. for now, i'll show oliver who truly excels at hiding.",
                },
                T0005: {
                    emotion: "scared",
                    text: "Oh no! My paw... it's stuck! AHHH!"
                }
            }
        }
    };
    async function scene1_2() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods2);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0000.text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null]], script);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null]], script);
        let dialog = {
            C1: {
                label: "Investigate",
                callback: optionC1
            },
            C2: {
                label: "Ignore",
                callback: optionC2,
            }
        };
        await BeansCuest.createDialog(dialog);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
    }
    BeansCuest.scene1_2 = scene1_2;
    async function optionC1() {
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null]], script);
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null]
        ], script);
    }
})(BeansCuest || (BeansCuest = {}));
//# sourceMappingURL=source.js.map