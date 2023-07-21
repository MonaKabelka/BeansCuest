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
        starstone: false,
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
            // { scene: scene1_1, name: "Scene 1.1" },
            // { scene: scene1_2, name: "Scene 1.2" },
            { scene: BeansCuest.scene2_1, name: "Scene 2.1" },
            // { scene: scene3_1, name: "Scene 3.1" },
            // { scene: scene4_1, name: "Scene 4.1" },
            { scene: BeansCuest.scene5, name: "Scene 5" },
            { scene: BeansCuest.scene6, name: "Scene 6" }
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
    function portalTripping(duration) {
        return {
            start: { scaling: new BeansCuest.f.Vector2(1, 1), rotation: 0 },
            end: { scaling: new BeansCuest.f.Vector2(0, 0), rotation: 1200 },
            duration,
            playmode: BeansCuest.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    function flyUp(duration, [x, y]) {
        console.log(x, y);
        return {
            start: { translation: BeansCuest.fS.positionPercent(x, y), scaling: new BeansCuest.f.Vector2(1, 1) },
            end: { translation: BeansCuest.fS.positionPercent(x, -100), scaling: new BeansCuest.f.Vector2(0, 0) },
            duration,
            playmode: BeansCuest.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    function flyDown(duration, [x, y]) {
        return {
            end: { translation: BeansCuest.fS.positionPercent(x, y), scaling: new BeansCuest.f.Vector2(1, 1) },
            start: { translation: BeansCuest.fS.positionPercent(x, -100), scaling: new BeansCuest.f.Vector2(0, 0) },
            duration,
            playmode: BeansCuest.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    BeansCuest.ANIMATIONS = {
        getBigger,
        getSmaller,
        portalTripping,
        flyUp,
        flyDown
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
                serious: "Images/Characters/Stool/serious.png",
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
            name: "Fishing Rod",
            description: "Old but sturdy",
            image: "Images/Items/rod.png",
            handler: handleItemUsage
        },
        moonstone: {
            name: "Moonstone",
            description: "Gives off a cool light",
            image: "Images/Items/moonstone.png",
            handler: handleItemUsage
        },
        pixieDust: {
            name: "Pixie Dust",
            description: "Feels light",
            image: "Images/Items/pixiedust.png",
            handler: handleItemUsage
        },
        ladder: {
            name: "Ladder",
            description: "Creaks when used",
            image: "Images/Items/ladder.png",
            handler: handleItemUsage
        },
        note: {
            name: "Note",
            description: `<i>"I rhyme on mittens, yet I am nothing to wear</i>"`,
            image: "Images/Items/notes.png",
            static: true
        },
        sunstone: {
            name: "Sunstone",
            description: "Emits a warm glow",
            image: "Images/Items/sunstone.png",
            handler: handleItemUsage
        },
        starstone: {
            name: "Starstone",
            description: "Sparkles",
            image: "Images/Items/starstone.png",
            handler: handleItemUsage
        },
    };
    BeansCuest.ITEM_CHARACTERS = {
        fishingRod: {
            name: "fishingRod",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/rod.png"
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
                center: "Images/Items/notes.png"
            }
        },
        pixieDust: {
            name: "pixieDust",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/pixiedust.png"
            }
        },
        starstone: {
            name: "starstone",
            origin: BeansCuest.fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/starstone.png"
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
        },
        otherworld: {
            background: "Images/Backgrounds/otherworld.png",
            name: "otherworld"
        },
        wistfulwoods2: {
            background: "Images/Backgrounds/wistfulwoods2.png",
            name: "wistfulwoods2",
        },
        wistfulwoods3: {
            background: "Images/Backgrounds/wistfulwoods3.png",
            name: "wistfulwoods3"
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.ALL_NOVELPAGE_NAMES = ["novelpage1", "novelpage2", "novelpage3", "novelpage4", "novelpage5", "novelpage6"];
    BeansCuest.NOVELPAGES = {
        novelpage1: {
            name: "novelpage1",
            background: "Images/Novelpages/novelpage1.png",
            pageNr: 1
        },
        novelpage2: {
            name: "novelpage2",
            background: "Images/Novelpages/novelpage2.png",
            pageNr: 2
        },
        novelpage3: {
            name: "novelpage3",
            background: "Images/Novelpages/novelpage3.png",
            pageNr: 3
        },
        novelpage4: {
            name: "novelpage4",
            background: "Images/Novelpages/novelpage4.png",
            pageNr: 4
        },
        novelpage5: {
            name: "novelpage5",
            background: "Images/Novelpages/novelpage5.png",
            pageNr: 5
        },
        novelpage6: {
            name: "novelpage6",
            background: "Images/Novelpages/novelpage6.png",
            pageNr: 6
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
    BeansCuest.SOUND_NAMES = ["boo", "collapse", "howling", "item", "novelpage", "pixiedust", "portal", "portalactivates", "snoring", "splash", "creak", "bites"];
    BeansCuest.SOUNDS = {
        boo: {
            url: "Audio/FX/boo.mp3",
            defaultVolume: 0.2
        },
        collapse: {
            url: "Audio/FX/collapse.mp3",
            defaultVolume: 0.5
        },
        howling: {
            url: "Audio/FX/howling.mp3",
            defaultVolume: 0.5
        },
        novelpage: {
            url: "Audio/FX/novelpage.mp3",
            defaultVolume: 0.5
        },
        pixiedust: {
            url: "Audio/FX/pixiedust.mp3",
            defaultVolume: 0.3
        },
        portal: {
            url: "Audio/FX/portal.mp3",
            defaultVolume: 0.4
        },
        portalactivates: {
            url: "Audio/FX/portalactivates.mp3",
            defaultVolume: 0.3
        },
        snoring: {
            url: "Audio/FX/snoring.mp3",
            defaultVolume: 0.8
        },
        item: {
            url: "Audio/FX/item.mp3",
            defaultVolume: 0.3
        },
        splash: {
            url: "Audio/FX/splash.mp3",
            defaultVolume: 0.5
        },
        creak: {
            url: "Audio/FX/creak.mp3",
            defaultVolume: 0.6
        },
        bites: {
            url: "Audio/FX/bites.mp3",
            defaultVolume: 0.6
        },
    };
    BeansCuest.MUSIC_NAMES = ["woods", "woodsportal", "cloud", "lilypond", "mansion", "meadow", "otherworld", "splashscreen", "wistfulwoods", "end"];
    BeansCuest.MUSICS = {
        woods: {
            defaultVolume: 0.2,
            url: "Audio/BGM/woods.mp3",
            looping: true
        },
        woodsportal: {
            defaultVolume: 0.5,
            url: "Audio/BGM/woodsportal.mp3",
            looping: true
        },
        cloud: {
            defaultVolume: 0.3,
            url: "Audio/BGM/cloud.mp3",
            looping: true
        },
        lilypond: {
            defaultVolume: 0.5,
            url: "Audio/BGM/lilypond.mp3",
            looping: true
        },
        mansion: {
            defaultVolume: 0.5,
            url: "Audio/BGM/mansion.mp3",
            looping: true
        },
        meadow: {
            defaultVolume: 0.5,
            url: "Audio/BGM/meadow.mp3",
            looping: true
        },
        otherworld: {
            defaultVolume: 0.5,
            url: "Audio/BGM/otherworld.mp3",
            looping: true
        },
        splashscreen: {
            defaultVolume: 0.5,
            url: "Audio/BGM/splashscreen.mp3",
            looping: true
        },
        wistfulwoods: {
            defaultVolume: 0.15,
            url: "Audio/BGM/wistfulwoods.mp3",
            looping: true
        },
        end: {
            defaultVolume: 0.3,
            url: "Audio/BGM/end.mp3",
            looping: true
        },
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
    function getItemsInInventory() {
        const inventory = document.getElementsByClassName("inventory")[0];
        const inventoryList = inventory.getElementsByTagName("ul")[0];
        return inventoryList.getElementsByTagName("li");
    }
    BeansCuest.getItemsInInventory = getItemsInInventory;
    function getStatusOfStones() {
        const items = getItemsInInventory();
        const stones = [];
        for (let item of items) {
            switch (item.id) {
                case "Moonstone":
                    stones.push({
                        el: item,
                        item: BeansCuest.ITEMS.moonstone
                    });
                    break;
                case "Sunstone":
                    stones.push({
                        el: item,
                        item: BeansCuest.ITEMS.sunstone
                    });
                    break;
                case "Starstone":
                    stones.push({
                        el: item,
                        item: BeansCuest.ITEMS.starstone
                    });
                    break;
            }
        }
        return stones;
    }
    BeansCuest.getStatusOfStones = getStatusOfStones;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function getItem(item, itemKey) {
        BeansCuest.fS.Inventory.add(item);
        const itemChar = Object.entries(BeansCuest.ITEM_CHARACTERS).find(([key]) => key === itemKey)[1];
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Character.animate(itemChar, itemChar.pose.center, BeansCuest.ANIMATIONS.getBigger(1));
        await BeansCuest.playSound(BeansCuest.SOUNDS.item);
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
          <th>Resources</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Story and Screenplay</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Concept</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Background Artworks</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Character Design and Artworks</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Animations</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Novel Pages</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>GUI Design</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Item Artworks</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Development and Styling</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Sound Design</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Logo Design</td>
          <td>Mona Kabelka</td>
        </tr>
        <tr>
          <td>Music</td>
          <td>Geoff Harvey (Pixabay)</td>
        </tr>
        <tr>
          <td>Lecturer</td>
          <td>Riem Yasin</td>
        </tr>
        <tr>
          <td>Fudge Core</td>
          <td>Jirka Dell’Oro-Friedl</td>
        </tr>
      </tbody>
      </table>`);
        return;
    }
    BeansCuest.showCredits = showCredits;
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
            await BeansCuest.fS.Text.print(`<img src="${allValidPages[currentPage]}" /> <p class="unlocked">Unlocked: ${allValidPages.length}/6</p>`);
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
        const { pageNr, ...page } = BeansCuest.NOVELPAGES[novelpage];
        await BeansCuest.fS.Location.show(page);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.playSound(BeansCuest.SOUNDS.bites);
        await BeansCuest.makeTransition("novelpage");
        await BeansCuest.playSound(BeansCuest.SOUNDS.novelpage);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.System, `You've unlocked novel page ${pageNr}!`);
        await BeansCuest.fS.Location.show(previousLocation);
        await BeansCuest.playSound(BeansCuest.SOUNDS.bites);
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
        await BeansCuest.fS.Sound.fade(music.url, music.defaultVolume, duration || 0.5, music.looping);
    }
    BeansCuest.playBGM = playBGM;
    async function muteBGM(music, duration) {
        await BeansCuest.fS.Sound.fade(music.url, 0, duration || 0.5);
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
        await BeansCuest.playBGM(BeansCuest.MUSICS.woods);
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
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.muteBGM(BeansCuest.MUSICS.woods);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let lastText;
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
                    text: "it's getting rather dark around here... this seems like the purr-fect spot to hide. but what is this weird light?"
                },
                T0001: {
                    emotion: "charmed",
                    text: "wow it looks so beautiful and sparkly! i wonder what it could be... oh looks like a portal!",
                },
                T0002: {
                    emotion: "curious",
                    text: "must be magic or something. i wonder how... OAAAHH",
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
                    text: "Oh no! MY PAW... IT'S STUCK! AHHH!"
                }
            }
        }
    };
    async function scene1_2() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods2);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.playBGM(BeansCuest.MUSICS.woodsportal);
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
    }
    BeansCuest.scene1_2 = scene1_2;
    async function optionC1() {
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null]], script);
        lastText = script.Bean.texts.T0002;
        await BeansCuest.playSound(BeansCuest.SOUNDS.portal);
        await optionD();
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null]
        ], script);
        lastText = script.Bean.texts.T0005;
        await BeansCuest.playSound(BeansCuest.SOUNDS.portal);
        await optionD();
    }
    async function optionD() {
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Character.animate(BeansCuest.CHARACTERS.Bean, BeansCuest.CHARACTERS.Bean.pose[lastText.emotion], BeansCuest.ANIMATIONS.portalTripping(2));
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.muteBGM(BeansCuest.MUSICS.woodsportal);
        await BeansCuest.makeTransition("portal");
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let askedBothOptions = [false, false];
    let novelPageUnlocked = true;
    let script = {
        Unknown: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Hello?? Are you okay? You don't look okay! Are you dead? That's a CAT-ASTROPHE!"
                },
                T0001: {
                    text: "OH you're alive! I'm Stool. Are you alright? I heard a loud noise and then you were just... here. I was scared.",
                    emotion: "worried"
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "...urgh... Oliver...?",
                },
                T0001: {
                    text: "Where am I? I was playing hide and seek with Oliver, and then everything is just a blur. I hope he's alright!",
                },
                T0002: {
                    text: "Wha...?",
                },
                T0003: {
                    text: "To get back home I have to find... stones?",
                },
                T0004: {
                    text: "Enchantica? I'm not in the woods? With Oliver? Am I dreaming?",
                },
                T0005: {
                    text: "How is that even paw-ssible? How are YOU paw-ssible?",
                },
                T0006: {
                    text: "No that's not it. Don't get me wrong but you're a talking mushroom. This is enchanted!",
                },
                T0007: {
                    text: "... Um - nevermind",
                },
                T0008: {
                    text: "Can you tell me the best place to start looking for the stones? I want to go home. I hope Oliver is fine... ",
                },
                T0009: {
                    text: "It will definitely come in handy if you accompany me! Also, I'm looking forward to some company.",
                },
                T0010: {
                    text: "I don't know. I think it would be safer for you to stay here.",
                },
                T0011: {
                    text: "Sigh. Okay you can come with me.",
                },
            }
        },
        Stool: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "I don't know what happened either. I usually just sit here - You know, in Enchantica we sometimes get visitors from other worlds!",
                    emotion: "explanatory",
                },
                T0001: {
                    text: "But suddenly BOOM and I've never seen something strange like you.",
                    emotion: "explanatory",
                },
                T0002: {
                    text: "You look funny!",
                    emotion: "happy",
                },
                T0003: {
                    text: "Just now there was this loud noise! And all the three stones got lost! You know? The stones for the portal.",
                    emotion: "hysterical",
                },
                T0004: {
                    text: "If we won't fix it fast enough the portal might implode! And they could be everywhere in Enchantica!",
                    emotion: "hysterical",
                },
                T0005: {
                    text: "You're quick-witted! The stones to power the portal are the <b>moonstone</b>, the <b>sunstone</b> and the <b>starstone</b>. Without the stones we can never use the portal again!",
                    emotion: "explanatory",
                },
                T0006: {
                    text: "But it's im-paw-sible to find them...",
                    emotion: "sad",
                },
                T0007: {
                    text: "Oliver?",
                    emotion: "confused",
                },
                T0008: {
                    text: "We're in Enchantica - to be exact in the Wistful Woods. I lived here for like - ...forever. I take care of the portal and the stones.",
                    emotion: "explanatory",
                },
                T0009: {
                    text: "Me? I knew it! I shouldn't have pushed you like that, I'm SO sorry!",
                    emotion: "worried",
                },
                T0010: {
                    text: "What's a mushroom?",
                    emotion: "confused",
                },
                T0011: {
                    text: "Hmm. I'm not sure, but I have a dare hunch. Maybe you should start at the Lilypond next to the Wistful Woods.",
                    emotion: "explanatory",
                },
                T0012: {
                    text: "BUT WAIT - you can't leave me! What if something bad happens again? Will you take me with you? Please?",
                    emotion: "hysterical",
                },
                T0013: {
                    text: "<i>*Shivers*</i> Didn't you hear that? There was a noise! Back there!",
                    emotion: "crying",
                },
                T0014: {
                    text: "Paw-some! Let's go!",
                    emotion: "happy",
                }
            }
        }
    };
    async function scene2_1() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0000.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null]
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Unknown.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);
        await showDialog1();
    }
    BeansCuest.scene2_1 = scene2_1;
    async function showDialog1() {
        let dialog = {
            A: {
                label: "Stones?",
                callback: optionA,
            },
            B: {
                label: "Enchantica?",
                callback: optionB,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA() {
        askedBothOptions[0] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ], script);
        await optionC();
    }
    async function optionB() {
        askedBothOptions[1] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, null],
        ], script);
        await optionC();
    }
    async function optionC() {
        if (!askedBothOptions.every((val) => val)) {
            await showDialog1();
            return;
        }
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012, null],
        ], script);
        let dialog = {
            C1: {
                label: "Take Stool with you",
                callback: optionC1
            },
            C2: {
                label: "Don't take Stool with you",
                callback: optionC2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        await optionD();
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, null],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0014, null],
        ], script);
        if (novelPageUnlocked)
            await BeansCuest.showNovelPages("novelpage1", BeansCuest.LOCATIONS.wistfulwoods);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.muteBGM(BeansCuest.MUSICS.wistfulwoods);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let novelPageUnlocked = false;
    let script = {
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "So this is the best place to start looking for the first stone.",
                },
                T0001: {
                    text: "I can barely make out features, but it looks something like a... frog?",
                },
                T0002: {
                    text: "HELLOOO??",
                },
                T0003: {
                    text: "HELLO!? CAN YOU HELP US? WE'RE SEARCHING FOR SOMETHING AND IT'S URGENT!",
                },
                T0004: {
                    text: "Shhh..."
                },
                T0005: {
                    text: "Hello there. It's okay, we won't hurt you. We just need some information about something lost. And by the way - I'm Bean."
                },
                T0006: {
                    text: "Nice to meet you, Lillypad! I'm searching for a lost relict, and I think you might be able to help. By any chance - Have you noticed anything strange lately?"
                },
                T0007: {
                    text: "That's cat-astic!"
                },
                T0008: {
                    text: "Well, not entirely cat-astic... I have no idea how to get there. I hate water!"
                },
                T0009: {
                    text: "Nothing is im-paw-ssible, Stool. We will keep looking and keep trying until we find a way!"
                },
                T0010: {
                    text: "What was it you wanted to say?"
                },
                T0011: {
                    text: "Don't be shy! I'm listening!"
                },
                T0012: {
                    text: "Fur-real?? That's great!"
                },
                T0013: {
                    text: "No, of course not! Why would you think so?"
                },
                T0014: {
                    text: "That's mean. I wish I could swim too. I've been afraid of water all my life. It's really distressing. You have a su-paw-power!"
                },
                T0015: {
                    text: "That would be fur-midable!"
                },
                T0016: {
                    text: "Wow, you're amazing, Lillypad! Thank you so much. I really appreciate your help. I'm a little closer to home now!"
                },
                T0017: {
                    text: "Thanks for the kind offer - but I wouldn't feel good knowing you're putting yourself at risk for us. I think I'll search for a solution myself."
                },
                T0018: {
                    text: "I'll look around there. Thanks very much!"
                },
                T0019: {
                    text: "Thank you Lilypad! You helped us a lot!"
                },
                T0020: {
                    text: "I can't see anything, Stool. We need to find a way to get the relic."
                },
                T0021: {
                    text: "She's probably just diving for something. Let her be."
                },
                T0022: {
                    text: "Maybe we can search for something to help us."
                },
                T0023: {
                    text: "Have you been sitting in the pond for a long time? - If yes, surely you could help us."
                },
                T0024: {
                    text: "It's about a lost stone that I need to get back home. I came from another world and just ended up here by accident..."
                },
                T0025: {
                    text: "... Because at home I played hide and seek with my best friend Oliver! But now I'm traveling with Sto-"
                },
                T0026: {
                    text: "Oh? What happened?"
                },
                T0027: {
                    text: "Oh no! That's un-fur-tunate."
                },
                T0028: {
                    text: "Let's search the area for the stones."
                },
                T0029: {
                    text: "Stool you are cat-astic! That could be the stone! We just have to find something to reach it..."
                },
                T0030: {
                    text: "Stool. Hear me out. I hold you by your feet. "
                },
                T0031: {
                    text: "You dunk your head under the waterlily leaves and search for something to help us reach the stone."
                },
                T0032: {
                    text: "Well, but it was worth a try. Let's look elsewhere."
                },
                T0033: {
                    text: "Let's check in between these mossy stones."
                },
                T0034: {
                    text: "HAHAHA Stool! You have to be more careful!"
                },
                T0035: {
                    text: "Did you hurt yourself?"
                },
                T0036: {
                    text: "Hihi - paw promise! Now let's check somewhere else."
                },
                T0037: {
                    text: "Stool, see the reeds? I think I can see something peeking through..."
                },
                T0038: {
                    text: "Uhaaah - but - arh - I'm too big -uhh - to fit between the - arhhhg -... Stool? Can you just take a look?"
                },
                T0039: {
                    text: "Pleaaaase?"
                },
                T0040: {
                    text: "Everything's alright?"
                },
                T0041: {
                    text: "A Rod! I think this will work! Let's use this rod to try and hook the stone."
                },
                T0042: {
                    text: "Almost... there... got it!"
                },
                T0043: {
                    text: "We've already found one! Finding the other two will be a piece of cake."
                },
                T0044: {
                    text: "We'll find the stones. It wasn't THAT difficult. Let's keep looking. Soo - where are we heading next? What do you suggest?"
                },
                T0045: {
                    text: "Let's go!"
                }
            }
        },
        Stool: {
            defaultPosition: BeansCuest.POSITIONS[2][1],
            texts: {
                T0000: {
                    text: "Well, I don't know why but something draws me here.",
                    emotion: "explanatory"
                },
                T0001: {
                    text: "Oh Bean - can you see that? Right there, in the pond.",
                    emotion: "anxious"
                },
                T0002: {
                    text: "SHH - Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0003: {
                    text: "Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0004: {
                    text: "See?? Maybe this wasn't such a good idea after all.",
                    emotion: "offended"
                },
                T0005: {
                    text: "Oh no, what happened to Lillypad?",
                    emotion: "worried"
                },
                T0006: {
                    text: "...Bean...?",
                    emotion: "worried"
                },
                T0007: {
                    text: "I think... you might have overwhelmed it...",
                    emotion: "worried"
                },
                T0008: {
                    text: "Alright - but let's search together. This pond is a bit fishy...",
                    emotion: "anxious"
                },
                T0009: {
                    text: "By the way - do you see this glowy thing at the bottom of the pond?",
                    emotion: "explanatory"
                },
                T0010: {
                    text: "I don't like where this is going.",
                    emotion: "anxious"
                },
                T0011: {
                    text: "Absolutely no way.",
                    emotion: "serious"
                },
                T0012: {
                    text: "<i>*Gurgling*</i> I CRN'T REE A THRING! <i>*Splash*</i>"
                },
                T0013: {
                    text: "It's pitch black - I literally can't see anything.",
                    emotion: "crying"
                },
                T0014: {
                    text: "BuT iT wAs WoRtH a TrY.",
                    emotion: "offended"
                },
                T0015: {
                    text: "But they are so slippy and slimyYYAHHHHHHHH",
                    emotion: "anxious"
                },
                T0016: {
                    text: "I don't think so. But don't ever make me do that again!",
                    emotion: "crying"
                },
                T0017: {
                    text: "... You know I'm scared, right?",
                    emotion: "anxious"
                },
                T0018: {
                    text: "Okay I'll do it.",
                    emotion: "crying"
                },
                T0019: {
                    text: "Yeah, I think I found something."
                },
                T0020: {
                    text: "You're doing great, Bean! Keep going!",
                    emotion: "happy"
                },
                T0021: {
                    text: "Only two more to go...",
                    emotion: "worried"
                },
                T0022: {
                    text: "We have one stone to repair the portal. But we'll NEVER find the other two! They could be anywhere!",
                    emotion: "hysterical"
                },
                T0023: {
                    text: "Why are you asking ME??? I don't know! - But...",
                    emotion: "anxious"
                },
                T0024: {
                    text: "... Something tells me we should search by the Mystique Meadows down the hill. I just can't tell why...",
                    emotion: "explanatory"
                },
                T0025: {
                    text: "You should use the rod to get the stone! <i>Use (i) to open your inventory and select the rod</i>",
                    emotion: "explanatory"
                }
            }
        },
        Lillypad: {
            defaultPosition: BeansCuest.POSITIONS[2][2],
            texts: {
                T0000: {
                    text: "I-I'm Lillypad.",
                    emotion: "shy"
                },
                T0001: {
                    text: "I-I don't know much, but I heard a big splash. And I-I think something fell into the pond and now it might be under the lily pads.",
                    emotion: "shy"
                },
                T0002: {
                    text: "A-Actually...",
                    emotion: "shy"
                },
                T0003: {
                    text: "N...Nothing. Nothing important.",
                    emotion: "shy"
                },
                T0004: {
                    text: "I-... I can swim. And dive...",
                    emotion: "shy"
                },
                T0005: {
                    text: "S-So you're not going to laugh at me?",
                    emotion: "blushing"
                },
                T0006: {
                    text: "Oh... I-I was laughed at by everyone the whole time. That's why I ran away and now I live alone in this pond.",
                    emotion: "sad"
                },
                T0007: {
                    text: "Thank you. I-I may could help you dive down and search for the relict if you'd like.",
                    emotion: "blushing"
                },
                T0008: {
                    text: "Is it this gem you've been looking for?",
                    emotion: "blushing"
                },
                T0009: {
                    text: "It was nothing, really. I- I'm just happy to help. Good luck!",
                    emotion: "blushing"
                },
                T0010: {
                    text: "Too bad. M- Maybe I can help you in some other way.",
                    emotion: "sad"
                },
                T0011: {
                    text: "I saw something in the reeds recently... M- Maybe this can help you.",
                    emotion: "shy"
                },
                T0012: {
                    text: "I-...",
                    emotion: "sad"
                }
            }
        },
    };
    async function scene3_1() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playBGM(BeansCuest.MUSICS.lilypond);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("sceneChange");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null],
        ], script);
        let dialog = {
            A: {
                label: "Draw attention",
                callback: optionA
            },
            B: {
                label: "Sneak up",
                callback: optionB
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    BeansCuest.scene3_1 = scene3_1;
    async function optionA() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
        ], script);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);
        await optionC();
    }
    async function optionC() {
        const [x, y] = script.Lillypad.defaultPosition;
        const positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "shy", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        let dialog = {
            C1: {
                label: "Introduce yourself",
                callback: optionC1
            },
            C2: {
                label: "Don't waste time",
                callback: optionC2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        let dialog = {
            C1_1: {
                label: "Ask Lillypad",
                callback: optionC1_1
            },
            C1_2: {
                label: "Ignore Lillypad",
                callback: optionC1_2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ], script);
        const [x, y] = script.Lillypad.defaultPosition;
        const positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "sad", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0025, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playSound(BeansCuest.SOUNDS.splash);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0026, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0027, null],
        ], script);
        await optionD();
    }
    async function optionC1_1() {
        novelPageUnlocked = true;
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0006, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0007, null],
        ], script);
        let dialog = {
            C1_1_1: {
                label: "Accept help",
                callback: optionC1_1_1
            },
            C1_1_2: {
                label: "Reject help",
                callback: optionC1_1_2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1_2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0012, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playSound(BeansCuest.SOUNDS.splash);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0022, null],
        ], script);
        await optionD();
    }
    async function optionC1_1_1() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0008, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.starstone, "starstone");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0009, null],
        ], script);
        await optionE();
    }
    async function optionC1_1_2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0010, null],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0011, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018, null],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0028, null],
        ], script);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0029, null],
        ], script);
        await createSearchDialog();
    }
    async function createSearchDialog() {
        let dialog = {
            D1: {
                label: "Check waterlilies",
                callback: optionD1
            },
            D2: {
                label: "Check mossy stones",
                callback: optionD2
            },
            D3: {
                label: "Check reeds",
                callback: optionD3
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionD1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0030, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0031, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011, BeansCuest.POSITIONS[1]],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013, BeansCuest.POSITIONS[1]],
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0032, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0014, BeansCuest.POSITIONS[1]],
        ], script);
        await createSearchDialog();
    }
    async function optionD2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0033, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0015, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0034, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0035, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0016, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0036, null],
        ], script);
        await createSearchDialog();
    }
    async function optionD3() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0037, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0038, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0017, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0039, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0018, BeansCuest.POSITIONS[1]],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0040, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0019, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.fishingRod, "fishingRod");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0041, null],
        ], script);
        BeansCuest.dataForSave.fishingRod = true;
        do {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0025, BeansCuest.POSITIONS[1]],
            ], script);
        } while (BeansCuest.fS.Inventory.getAmount(BeansCuest.ITEMS.fishingRod) != 0);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0020, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0042, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.starstone, "starstone");
        await optionE();
    }
    async function optionE() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0021, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0043, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0022, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0044, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0023, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0024, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0045, null],
        ], script);
        if (novelPageUnlocked)
            await BeansCuest.showNovelPages("novelpage2", BeansCuest.LOCATIONS.lilypond);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.muteBGM(BeansCuest.MUSICS.lilypond);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let unlockNovelPages = {
        3: false,
        4: false,
    };
    let script = {
        Bean: {
            defaultPosition: null,
            texts: {
                T0000: {
                    text: "Wow, this place is paw-mazing!"
                },
                T0001: {
                    text: "Did you hear that?"
                },
                T0002: {
                    text: "Let's check it out!"
                },
                T0003: {
                    text: "Hello? Paw-don me. I'm searching for a small glowing stone! It's very important..."
                },
                T0004: {
                    text: "Is everything alright?"
                },
                T0005: {
                    text: "sometimes, unexpected alliances can turn the tides in our favor."
                },
                T0006: {
                    text: "Charm, Chant, I'm Bean and I would like to help you. Do you have any recollection of the last time you used the pixie dust? Purr-haps a specific place or activity?"
                },
                T0007: {
                    text: "okay..."
                },
                T0008: {
                    text: "We should follow Charm's suggestion and start searching on the right side.",
                },
                T0009: {
                    text: "Let's give it a try and see if we can find any traces of the pixie dust there."
                },
                T0010: {
                    text: "Chant's suggestion to check the left side seems promising. We might stumble upon something significant that could help us reunite Charm and Chant with their precious dust."
                },
                T0011: {
                    text: "Hmm. Seems like nothings here. Let's check for the other side."
                },
                T0012: {
                    text: "Hello. I'm Bean. Why are you so grumpy? Can I help you?"
                },
                T0013: {
                    text: "Oh no, that must've been claw-ful! I understand that you were just trying to find some peace and quiet, but taking something that doesn't belong to you isn't the best way to solve the problem..."
                },
                T0014: {
                    text: "Let's find a way to bring harmony to this meadow without resorting to theft, okay?"
                },
                T0015: {
                    text: "Deal!"
                },
                T0016: {
                    text: "Stool, we have to find a way to put an end to Charm and Chant's constant arguing. It's the only way to get the pixie dust back from Bandit."
                },
                T0017: {
                    text: "Good news! We found your pixie dust! There's just one small catch..."
                },
                T0018: {
                    text: "Well... here's the thing, a raccoon has it, and he said he would only give it back if you two stopped arguing."
                },
                T0019: {
                    text: "So, if you really want your pixie dust back, you'll have to make a pact to put an end to your arguments."
                },
                T0020: {
                    text: "I have an idea that might help resolve your constant disagreements. Instead of arguing about who gets to use more or less, why don't you share it equally?"
                },
                T0021: {
                    text: "By dividing the pixie dust equally, you'll realize that there is more than enough pixie dust to go around."
                },
                T0022: {
                    text: "With that out of the way, I'll take care of your pixie dust. I'll be back any minute."
                },
                T0023: {
                    text: "i'll take that. hope you do not mind."
                },
                T0024: {
                    text: "Here's your pixie dust!"
                },
                T0025: {
                    text: "Pixie dust? That sounds claw-some! I truly appreciate your kindness. The pixie dust would be a tremendous help in finding the stone I need for my journey home."
                },
                T0026: {
                    text: "You know - I'm from another world and need to repair a portal to get back."
                },
                T0027: {
                    text: "Thank you, Charm and Chant. I'm honored to accept your offer."
                },
                T0028: {
                    text: "<i>Use (i) to open your inventory and select the Pixie Dust</i>"
                },
                T0029: {
                    text: "Oh, wow! This is amazing! I'm floating! It feels so strange, but in a good way!"
                },
                T0030: {
                    text: "That's incredible! You make it look so effortless."
                },
                T0031: {
                    text: "Don't worry, Stool. I feel like I'm in control, and it's so much fun! It's a whole new perspective from up here."
                },
                T0032: {
                    text: "And hey, look! What's that on the cloud over there?",
                },
                T0033: {
                    text: "It seems to be glowing... Looks like the second relict!"
                },
                T0034: {
                    text: "I can't accept your offer."
                },
                T0035: {
                    text: "The pixie dust is such a valuable and precious gift, and I wouldn't want to take advantage of your kindness."
                },
                T0036: {
                    text: "The most important thing for me was to see you both reconciled and happy. That in itself is a priceless reward."
                },
                T0037: {
                    text: "A glowing something on a cloud? That could be it! Stool, what do you think?"
                },
                T0038: {
                    text: "Charm, Chant, I understand that you both have your own opinions and preferences. But constantly arguing won't get us anywhere."
                },
                T0039: {
                    text: "It's not about winning or being right, it's about finding a solution that works for both of you."
                },
                T0040: {
                    text: "True, these two brawlers don't seem like they want to get interrupted. Let's continue searching.",
                },
                T0041: {
                    text: "What is it?",
                },
                T0042: {
                    text: "Okay, we just need to figure out how to reach it. I think we should search the meadow for something that could help us climb up to the cloud."
                },
                T0043: {
                    text: "Well, Stool, you never know what we might find if we look hard enough. It's worth a try, don't you think?"
                },
                T0044: {
                    text: "Stool, I found something!"
                },
                T0045: {
                    text: "Actually, it's just a regular ladder, but it looks sturdy enough to help us climb up. See? Sometimes luck is on our side."
                },
                T0046: {
                    text: "It seems that way. Now, let's get this ladder set up and make our way to the cloud. We're one step closer to retrieving the stone!",
                },
                T0047: {
                    text: "Wow, Stool! Can you believe it? We're standing on a cloud! It feels so soft and the light up here is absolutely cat-astic."
                },
                T0048: {
                    text: "Don't worry, Stool. Look, the cloud seems stable, and we're safe up here. Let's take a moment to enjoy the view. And look, there's the stone!"
                },
                T0049: {
                    text: "Stool, can you believe it? We've found two of the stones already! We're making progress."
                },
                T0050: {
                    text: "That's purr-fect! Let's make our way to the mansion and see what lies ahead.",
                }
            }
        },
        Stool: {
            defaultPosition: BeansCuest.POSITIONS[3][1],
            texts: {
                T0000: {
                    text: "Yeah, it's really beautiful.",
                    emotion: "charmed"
                },
                T0001: {
                    text: "Anyway - we should explore the meadow and see if we can find any clues.",
                    emotion: "serious"
                },
                T0002: {
                    text: "But we have to keep an eye out. This place is full of surprises.",
                    emotion: "shivering"
                },
                T0003: {
                    text: "Indeed. Let's give it a wiiiide berth.",
                    emotion: "worried"
                },
                T0004: {
                    text: "Uh, are you even listening?",
                    emotion: "offended"
                },
                T0005: {
                    text: "psst, bean, i don't think we should waste our time with those two bickering fairies. they'll just keep going in circles.",
                    emotion: "worried"
                },
                T0006: {
                    text: "bean, let's just start searching.",
                    emotion: "anxious"
                },
                T0007: {
                    text: "Bean, I-I think we should tread carefully around this... creature.",
                    emotion: "anxious"
                },
                T0008: {
                    text: "He seems quite... ruffled, to say the least. Perhaps we should proceed with caution.",
                    emotion: "anxious"
                },
                T0009: {
                    text: "cAn I hElP yOu?",
                    emotion: "offended"
                },
                T0010: {
                    text: "And you're asking ME? What can I possibly do to make them stop arguing? It's not like I have any magical powers or wisdom to solve their conflicts.",
                    emotion: "crying"
                },
                T0011: {
                    text: "psst - bean, i think talking won't do much here. we need to come up with something that will make them see the bigger picture.",
                    emotion: "worried"
                },
                T0012: {
                    text: "Bean, I'm scared! We're floating so high, and I'm worried something might go wrong.",
                    emotion: "crying"
                },
                T0013: {
                    text: "pssst bean i think you said the wrong thing...",
                    emotion: "serious"
                },
                T0014: {
                    text: "There is indeed a peculiar magic emanating from up there. It's highly likely that the glowing object is the relict we seek.",
                    emotion: "explanatory"
                },
                T0015: {
                    text: "The portal could implode soon Bean. Let's hurry. We don't know how much time's left.",
                    emotion: "worried"
                },
                T0016: {
                    text: "Hm. Weird.",
                    emotion: "confused"
                },
                T0017: {
                    text: "I swear the sunstone is somewhere around here. But... Well... Further up. There is a peculiar magic emanating from up there. It's likely that the relict we seek is on that cloud.",
                    emotion: "confused"
                },
                T0018: {
                    text: "Oh sure, Bean. Let's just search this vast meadow for a uni-cat while we're at it. Because finding something like that would be totally realistic!",
                    emotion: "offended"
                },
                T0019: {
                    text: "oh yes, i'm sure we'll stumble upon a rope in a meadow full of flowers.",
                    emotion: "offended"
                },
                T0020: {
                    text: `Let me guess, it's a golden ladder with sparkles and a sign saying "Use Me to Reach the Cloud"?`,
                    emotion: "serious"
                },
                T0021: {
                    text: "You actually found a ladder in the meadow?? I suppose luck does favor the bold.",
                    emotion: "happy"
                },
                T0022: {
                    text: "Let's go! <i>Use (i) to open your inventory and select the Ladder</i>",
                    emotion: "happy"
                },
                T0023: {
                    text: "Bean, I'm not sure about this. It's really high up here. What if the cloud disappears?",
                    emotion: "worried"
                },
                T0024: {
                    text: "But we still have one more stone to find. And time is not on our side. The portal could implode any minute. And we have no clue where the next stone is!",
                    emotion: "anxious"
                },
                T0025: {
                    text: "Well - in fact I have this strong feeling that the next stone is in this mysterious mansion below us in the swamp. See? It's like a faint whisper in my mind.",
                    emotion: "explanatory"
                },
                T0026: {
                    text: "But we don't know for sure, right?",
                    emotion: "crying"
                }
            }
        },
        Chant: {
            defaultPosition: BeansCuest.POSITIONS[3][2],
            texts: {
                T0000: {
                    text: "It's not my fault! You were the one who had it last.",
                },
                T0001: {
                    text: "Are you kitten me? I will never speak to YOU again!"
                },
                T0002: {
                    text: "Not exactly - Charm lost our pixie dust and without the dust we can't fly."
                },
                T0003: {
                    text: "I won't admit it because it wasn't my fault!",
                    emotion: "angry"
                },
                T0004: {
                    text: "No Charm, it was on the left side! You never listen to me.",
                    emotion: "snapped"
                },
                T0005: {
                    text: "I can't believe you're still in-hiss-ting on taking more than your fairy share of the pixie dust!",
                    emotion: "angry"
                },
                T0006: {
                    text: "That's great! Where is it?",
                    emotion: "happy"
                },
                T0007: {
                    text: "...and we won't have to keep track of who used it last or constantly compare our flying skills.",
                    emotion: "happy"
                },
                T0008: {
                    text: "It's all right. I'm sorry too.",
                    emotion: "crying"
                },
                T0009: {
                    text: "You mentioned you're searching for a small glowing stone, right? Well, how about we lend you some of our precious pixie dust to aid in your search?",
                    emotion: "happy"
                },
                T0010: {
                    text: "You're most welcome, Bean. Just sprinkle a little bit of the pixie dust over yourself and feel the magic take hold.",
                    emotion: "happy"
                },
                T0011: {
                    text: "<i>Use (i) to open your inventory and select the Pixie Dust</i>",
                    emotion: "happy"
                },
                T0012: {
                    text: "Indeed, it's like dancing with the wind. Just relax and let the pixie dust guide you.",
                    emotion: "happy"
                },
                T0013: {
                    text: "But Bean, we insist!",
                    emotion: "snapped"
                },
                T0014: {
                    text: "We'll be your eyes in the sky! Your aerial scouts, seeking out that elusive stone!",
                    emotion: "happy"
                },
                T0015: {
                    text: "Whatever.",
                    emotion: "snapped"
                },
                T0016: {
                    text: "Alright, up we go, Charm!",
                    emotion: "happy"
                },
                T0017: {
                    text: "WAIT, WHAT ABOUT THE CLOUD WE JUST PASSED? IT HAD SOMETHING GLOWING ON IT!",
                },
                T0018: {
                    text: "SEE, I TOLD YOU I SAW SOMETHING! I'VE GOT THE EYES OF AN EAGLE, YOU KNOW!"
                },
                T0019: {
                    text: "What was that?"
                },
                T0020: {
                    text: "I think the thing you're searching for is on that cloud. Bean, your selflessness is admirable and we're glad that our arguments are behind us.",
                    emotion: "happy"
                },
                T0021: {
                    text: "I hope we meet again soon! Good luck!",
                    emotion: "happy"
                },
                T0022: {
                    text: "But what if I have something important to do on your day? It's not fair that I have to wait.",
                    emotion: "snapped"
                },
                T0023: {
                    text: "You're just jealous because I can perform more dazzling tricks with the pixie dust!",
                    emotion: "snapped"
                }
            }
        },
        Charm: {
            defaultPosition: BeansCuest.POSITIONS[3][3],
            texts: {
                T0000: {
                    text: "ME? I was the one who had it last??? You're crazy!"
                },
                T0001: {
                    text: "I will never speak to you again!"
                },
                T0002: {
                    text: "In fact, Chant lost our pixie dust and doesn't want to admit it.",
                    emotion: "snapped"
                },
                T0003: {
                    text: "Hmm I think the last time we used it was back there on the right side.",
                    emotion: "thinking"
                },
                T0004: {
                    text: "I do too listen to you. I just don't agree with you!",
                    emotion: "snapped"
                },
                T0005: {
                    text: "Oh, please! You're the one who always wants to hog it all for yourself!",
                    emotion: "snapped"
                },
                T0006: {
                    text: "What does that mean? And what is a raccoon?",
                    emotion: "crying"
                },
                T0007: {
                    text: "Chant, if we share the pixie dust equally, we won't have to waste time arguing about who gets more or who flew higher...",
                    emotion: "thinking"
                },
                T0008: {
                    text: "I'm sorry Chant!",
                    emotion: "crying"
                },
                T0009: {
                    text: "Thanks for not giving up on us!",
                    emotion: "happy"
                },
                T0010: {
                    text: "You're a natural, Bean. Now let me show you how to maneuver in the air. It's all about balance and gentle movements.",
                    emotion: "happy"
                },
                T0011: {
                    text: "Okay, since you won't take the pixie dust, we'll use our flying abilities to search for the glowing stone from above! ",
                    emotion: "thinking"
                },
                T0012: {
                    text: "Why do you have to brag like that again... ",
                    emotion: "angry"
                },
                T0013: {
                    text: "Up we go!",
                    emotion: "happy"
                },
                T0014: {
                    text: "Really? You're just making that up to mess with me, aren't you?"
                },
                T0015: {
                    text: "Yeah, if that eagle had a questionable tendency to bump into trees..."
                },
                T0016: {
                    text: "Nothing."
                },
                T0017: {
                    text: "You've taught us an important lesson. We thank you for that. If there's ever anything else we can do for you on your journey, please don't hesitate to ask. ",
                    emotion: "happy"
                },
                T0018: {
                    text: "How about we take turns using the pixie dust? One day it's my turn, and the next day it's your turn. That way, we both get to enjoy flying.",
                    emotion: "thinking"
                },
                T0019: {
                    text: "And what if I need to practice my flying skills on your day? I shouldn't have to miss out just because it's YOUR turn.",
                    emotion: "angry"
                },
                T0020: {
                    text: "Jealous? Please! I'm just tired of you showing off all the time!",
                    emotion: "snapped"
                }
            }
        },
        Unknown: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: null
        },
        Bandit: {
            defaultPosition: BeansCuest.POSITIONS[2][2],
            texts: {
                T0000: {
                    text: "Fuzzy feline furballs and whisker-waggling troublemakers! Can't a raccoon get a decent nap without being bothered by meddling creatures?"
                },
                T0001: {
                    text: "Call me Bandit, and let me tell you, I can't catch a wink of sleep with those bickering fairies around.",
                    emotion: "grumpy"
                },
                T0002: {
                    text: "They go on and on about who gets how much pixie dust, and it's driving me nuts! So, I decided to take matters into my own paws and swipe their precious dust.",
                    emotion: "grumpy"
                },
                T0003: {
                    text: "Maybe that'll finally shut them up and bring some peace to these meadows.",
                    emotion: "grumpy"
                },
                T0004: {
                    text: "Look, Bean, I hear what you're saying, but those two just won't quit their bickering. If they can learn to stop arguing and get along, then I'll consider giving the pixie dust back.",
                    emotion: "grumpy"
                },
                T0005: {
                    text: "It's a fair deal, don't you think? They need to prove that they can share without fighting, and then we can all move on from this nonsense.",
                    emotion: "grumpy"
                },
                T0006: {
                    text: "zZZzz...",
                    emotion: "sleeping"
                }
            }
        }
    };
    async function scene4_1() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playBGM(BeansCuest.MUSICS.meadow);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow);
        await BeansCuest.makeTransition("sceneChange");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Unknown, script.Chant.texts.T0000, null],
            [BeansCuest.CHARACTERS.Unknown, script.Charm.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);
        let [x, y] = script.Charm.defaultPosition;
        let positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Charm, "angry", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Charm.texts.T0001, null],
        ], script);
        [x, y] = script.Chant.defaultPosition;
        positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Chant, "angry", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Chant.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);
        [x, y] = script.Chant.defaultPosition;
        positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Chant, "snapped", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Chant.texts.T0002, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0002, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null],
        ], script);
        const dialog = {
            A: {
                label: "Help searching the pixie dust",
                callback: optionA,
            },
            B: {
                label: "Don't waste time",
                callback: optionB,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    BeansCuest.scene4_1 = scene4_1;
    async function optionA() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0003, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0004, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0004, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, null],
        ], script);
        const dialog = {
            A1: {
                label: "Search on the right (Charm)",
                callback: optionA1,
            },
            A2: {
                label: "Search on the left (Chant)",
                callback: optionA2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        await optionC();
    }
    async function optionA2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, null],
        ], script);
        await optionC();
    }
    async function optionC() {
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow2);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, null],
        ], script);
        const [x, y] = script.Bandit.defaultPosition;
        const positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bandit, "grumpy", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Bandit.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, BeansCuest.POSITIONS[2][1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, BeansCuest.POSITIONS[2][1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, BeansCuest.POSITIONS[2][1]],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010, BeansCuest.POSITIONS[2][1]],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0005, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0006, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0006, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011, null],
        ], script);
        const dialog = {
            C1: {
                label: "Offer a solution",
                callback: optionC1,
            },
            C2: {
                label: "Try to settle disputes",
                callback: optionC2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0015, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0040, null],
        ], script);
        await optionD();
    }
    async function optionC1() {
        unlockNovelPages[3] = true;
        unlockNovelPages[4] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0007, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0007, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0008, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0008, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0022, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow2);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.playSound(BeansCuest.SOUNDS.snoring);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0006, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0023, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.pixieDust, "pixieDust");
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow);
        await BeansCuest.makeTransition("inScene");
        BeansCuest.dataForSave.pixieDust = true;
        do {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0028, null],
            ], script);
        } while (BeansCuest.fS.Inventory.getAmount(BeansCuest.ITEMS.pixieDust) != 0);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0009, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0009, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0025, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0026, null],
        ], script);
        BeansCuest.dataForSave.pixieDust = false;
        const dialog = {
            C1_1: {
                label: "Accept Pixie Dust",
                callback: optionC1_1,
            },
            C1_2: {
                label: "Reject Pixie Dust",
                callback: optionC1_2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0038, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0039, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0018, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0022, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0019, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0023, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0020, null],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.fS.Character.hide(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.fS.Character.hide(BeansCuest.CHARACTERS.Chant);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0016, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0041, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0017, BeansCuest.POSITIONS[1]],
        ], script);
        await optionE();
    }
    async function optionC1_1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0027, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.pixieDust, "pixieDust");
        BeansCuest.dataForSave.pixieDust = true;
        do {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0010, BeansCuest.POSITIONS[1]],
                [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0011, BeansCuest.POSITIONS[1]],
            ], script);
        } while (BeansCuest.fS.Inventory.getAmount(BeansCuest.ITEMS.pixieDust) != 0);
        await BeansCuest.playSound(BeansCuest.SOUNDS.pixiedust);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in", 0.5);
        BeansCuest.dataForSave.pixieDust = false;
        await BeansCuest.muteBGM(BeansCuest.MUSICS.meadow);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.cloud);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.playBGM(BeansCuest.MUSICS.cloud);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0029, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0010, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0012, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0030, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0031, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0032, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0033, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Chant);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await optionF();
    }
    async function optionC1_2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0034, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0035, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0013, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0036, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0011, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0014, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0012, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0015, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0016, null],
        ], script);
        await BeansCuest.fS.Character.animate(BeansCuest.CHARACTERS.Chant, BeansCuest.CHARACTERS.Chant.pose.happy, BeansCuest.ANIMATIONS.flyUp(1, script.Chant.defaultPosition));
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0013, null],
        ], script);
        await BeansCuest.fS.Character.animate(BeansCuest.CHARACTERS.Charm, BeansCuest.CHARACTERS.Charm.pose.happy, BeansCuest.ANIMATIONS.flyUp(1, script.Charm.defaultPosition));
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0017, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0014, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0037, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0014, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0018, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0015, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0019, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0016, null],
        ], script);
        await BeansCuest.fS.Character.animate(BeansCuest.CHARACTERS.Charm, BeansCuest.CHARACTERS.Charm.pose.happy, BeansCuest.ANIMATIONS.flyDown(1, script.Charm.defaultPosition));
        await BeansCuest.fS.Character.animate(BeansCuest.CHARACTERS.Chant, BeansCuest.CHARACTERS.Chant.pose.happy, BeansCuest.ANIMATIONS.flyDown(1, script.Chant.defaultPosition));
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0020, null],
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0017, null],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0021, null],
        ], script);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await optionE();
    }
    async function optionE() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0042, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0018, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0043, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0019, BeansCuest.POSITIONS[1]],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.getItem(BeansCuest.ITEMS.ladder, "ladder");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0044, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0020, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0045, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0021, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0046, null],
        ], script);
        BeansCuest.dataForSave.ladder = true;
        do {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0022, BeansCuest.POSITIONS[1]],
            ], script);
        } while (BeansCuest.fS.Inventory.getAmount(BeansCuest.ITEMS.ladder) != 0);
        await BeansCuest.muteBGM(BeansCuest.MUSICS.meadow);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.cloud);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.playBGM(BeansCuest.MUSICS.cloud);
        await optionF();
    }
    async function optionF() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0047, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0023, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0048, null],
        ], script);
        await BeansCuest.getItem(BeansCuest.ITEMS.sunstone, "sunstone");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0049, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0024, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0025, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0026, BeansCuest.POSITIONS[1]],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0050, null],
        ], script);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in");
        if (unlockNovelPages[3])
            await BeansCuest.showNovelPages("novelpage3", BeansCuest.LOCATIONS.cloud);
        if (unlockNovelPages[4])
            await BeansCuest.showNovelPages("novelpage4", BeansCuest.LOCATIONS.cloud);
        await BeansCuest.muteBGM(BeansCuest.MUSICS.cloud);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let foundClue = false;
    let unlockedNovelpage = false;
    const script = {
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Stool, do you hear those spooky ghostlike noises? It's definitely coming from the mansion."
                },
                T0001: {
                    text: "I understand your fear, Stool, but we've come so far. We can't turn back now. Remember, we need to be bold and face our fears."
                },
                T0002: {
                    text: "Don't be hiss-terical, Stool. Let's head inside. You can hide behind me."
                },
                T0003: {
                    text: "What is th-..."
                },
                T0004: {
                    text: "Stool, are you okay?"
                },
                T0005: {
                    text: "I-I'm Bean, and this is Stool. We mean no harm. We're searching for something important.",
                },
                T0006: {
                    text: "We're on a mission to find the moonstone. It's one of the relics we need to repair a magical portal to find my way back home."
                },
                T0007: {
                    text: "What's your name by any chance?"
                },
                T0008: {
                    text: "So - the moonstone might be inside the clock? That's great! But how do we open it?"
                },
                T0009: {
                    text: "How do you know that the clock is locked? Have you tried opening it before?"
                },
                T0010: {
                    text: "I'm truly sorry for the pain you've endured all this time. But now, I'm here to help."
                },
                T0011: {
                    text: "There must be a way to open the clock and retrieve both your charm and the moonstone. Let's think this through together."
                },
                T0012: {
                    text: "Seems like nothing happened. Maybe I should try again."
                },
                T0013: {
                    text: "Spook - can I hear the riddle again?"
                },
                T0014: {
                    text: "Maybe I can find something to help me... The rug looks very suspicious..."
                },
                T0015: {
                    text: `Huff, huff - it's a dusty note! It says: "I rhyme on mittens, yet I am nothing to wear."... Maybe this could be a clue?`
                },
                T0016: {
                    text: `The note says: "I rhyme on mittens, yet I am nothing to wear."... Maybe this could be a clue?`
                },
                T0017: {
                    text: "Spook, do you have any clues or hints that could help us solve this riddle?"
                },
                T0018: {
                    text: "It worked! We solved the riddle! The clock is open! And - what's that? A charm?"
                },
                T0019: {
                    text: "I'm glad I could help you. How come you couldn't solve the riddle yourself after all this time?"
                },
                T0020: {
                    text: "Spook, I can sense that there's a deep story behind your inability to solve the riddle yourself."
                },
                T0021: {
                    text: "I'm sorry if there's something troubling you."
                },
                T0022: {
                    text: "If you're comfortable sharing, I'd like to know what happened."
                },
                T0023: {
                    text: "Oh, Spook, I'm so sorry to hear that. How did the curse manifest itself?"
                },
                T0024: {
                    text: "That must have been incredibly difficult for you. I can't imagine the pain you've endured all this time."
                },
                T0025: {
                    text: "Finally! All stones. With all the relics, I can finally repair the portal and return home! To Oliver!"
                },
                T0026: {
                    text: "Spook, what are you planning to do now that you have your charm back?"
                },
                T0027: {
                    text: "I'm glad to hear that."
                },
                T0028: {
                    text: "STOOL? I am so glad you're fine!"
                },
                T0029: {
                    text: "I got the last stone!"
                },
                T0030: {
                    text: "Sure - you weren't scared at all! Let's go!"
                }
            }
        },
        Stool: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Bean, I'm scared! This place gives me the creeps. I don't think we should go inside.",
                    emotion: "shivering"
                },
                T0001: {
                    text: "But what if there are monsters or worse... - D O G S!?",
                    emotion: "anxious",
                },
                T0002: {
                    text: "I'm not prepared for that.",
                    emotion: "crying",
                },
                T0003: {
                    text: "Sure - at least you'll be eaten first...",
                    emotion: "shivering",
                },
                T0004: {
                    text: "let's be as quiet as possible. we don't want to alert anyone inside the house.",
                    emotion: "shivering",
                },
                T0005: {
                    text: "AAAAH! What was that? I can't take it anymore~",
                    emotion: "hysterical",
                },
                T0006: {
                    text: "...",
                    emotion: "confused"
                },
                T0007: {
                    text: "What...? Where am I?",
                    emotion: "confused"
                },
                T0008: {
                    text: "... What happened? Suddenly, everything was black.",
                    emotion: "confused"
                },
                T0009: {
                    text: "You got the moonstone?? Furreal?? Well - that was easy! And I wasn't scared at all! Let's head back to the portal and hope it's not too late!",
                    emotion: "happy"
                }
            }
        },
        Spook: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Who-hoo dares enter my haunted abode? State your purr-pose, intruders!",
                },
                T0001: {
                    text: "Hmm, I heard shattering glass from the grandfather clock. What are you searching in this forsaken place?",
                },
                T0002: {
                    text: "I forgot my name long ago, but you can call me Spook. You're on a noble quest indeed.",
                    emotion: "smiling",
                },
                T0003: {
                    text: "I may be able to assist you, but I have my own reasons to seek answers within these haunted halls.",
                    emotion: "smiling",
                },
                T0004: {
                    text: "The clock holds the secrets you seek, but it's locked, I'm afraid.",
                    emotion: "thinking",
                },
                T0005: {
                    text: "As a ghost, I can wander through the walls, but I cannot manipulate physical objects in the same way.",
                    emotion: "thinking",
                },
                T0006: {
                    text: "There is a deeper reason behind my knowledge. Inside that very clock, lies a charm of my deceased childhood friend.",
                    emotion: "grief",
                },
                T0007: {
                    text: "It holds sentimental value, but alas, I've been unable to retrieve it for an eternity.",
                    emotion: "sad",
                },
                T0008: {
                    text: "Thank you, Bean. To open the clock there's a riddle. The solution to opening the clock lies within its words.",
                    emotion: "smiling",
                },
                T0009: {
                    text: `"I act like a cat, I look like a cat, Yet I am not 'cat'."`,
                    emotion: "thinking",
                },
                T0010: {
                    text: "I do remember reading something in a book long ago. There was a clue that might shed some light on the riddle.",
                    emotion: "thinking",
                },
                T0011: {
                    text: `It said, "I am a small version of the creature that is stating the riddle".`,
                    emotion: "thinking",
                },
                T0012: {
                    text: "It indeed is a charm, Bean. My precious charm. Thank you.",
                    emotion: "grief",
                },
                T0013: {
                    text: "Your question is a valid one.",
                    emotion: "sad",
                },
                T0014: {
                    text: "You see, sometimes when we are too close to a problem or burdened by our own emotions, it becomes challenging to see the solution.",
                    emotion: "grief",
                },
                T0015: {
                    text: "Your willingness to help means more to me than words can express. Let us focus on the present.",
                },
                T0016: {
                    text: "Long ago, I was desperate to revive my dear friend who had passed away. I stumbled upon a riddle spell that promised to bring her back to life.",
                    emotion: "sad"
                },
                T0017: {
                    text: "I attempted the spell with all my hope and love, but instead of bringing her back, it backfired, resulting in a curse upon me.",
                    emotion: "sad"
                },
                T0018: {
                    text: "The curse bound me to a tormenting paradox.",
                    emotion: "grief"
                },
                T0019: {
                    text: "The most important thing to me, the charm that held the memories of my dear friend, was right in front of my eyes, yet I couldn't solve the riddle to retrieve it.",
                    emotion: "sad"
                },
                T0020: {
                    text: "It was a constant reminder of my failure and loss.",
                    emotion: "grief"
                },
                T0021: {
                    text: "Your understanding and willingness to help mean more to me than words can express. Let us focus on the present.",
                    emotion: "smiling"
                },
                T0022: {
                    text: "I've come to realize that the memories I hold dear are more than enough to keep my friend alive in my heart.",
                    emotion: "thinking"
                },
                T0023: {
                    text: "I've learned that it's not the physical charm that truly matters, but the bond and love we shared.",
                    emotion: "thinking"
                },
                T0024: {
                    text: "I've made peace with the past and am ready to embrace the present.",
                    emotion: "smiling"
                },
                T0025: {
                    text: "You've brought light and joy into my afterlife, and I'm grateful for the friendship we've formed.",
                    emotion: "smiling"
                },
                T0026: {
                    text: "As I continue my ethereal existence, I'll cherish the memories we've created together. Farewell, dear friend.",
                    emotion: "smiling"
                }
            }
        },
        Unknown: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: null
        }
    };
    const possibleAnswers = ["kitten", "kittens", "baby cat", "baby cats", "kitty", "kittycat", "babycat", "babycats"];
    async function scene5() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playBGM(BeansCuest.MUSICS.mansion);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.mansion);
        await BeansCuest.makeTransition("sceneChange");
        await BeansCuest.playSound(BeansCuest.SOUNDS.howling);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.mansion2);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
        ], script);
        await BeansCuest.playSound(BeansCuest.SOUNDS.boo);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, null],
        ], script);
        let [x, y] = script.Stool.defaultPosition;
        let positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "fainting", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        [x, y] = script.Spook.defaultPosition;
        positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Spook, "sad", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playSound(BeansCuest.SOUNDS.boo);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Spook.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null],
        ], script);
        [x, y] = script.Spook.defaultPosition;
        positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Spook, "thinking", positionVector);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Spook.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0002, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0004, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0005, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0006, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0007, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0008, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0009, null],
        ], script);
        await allowRiddleAnswer();
    }
    BeansCuest.scene5 = scene5;
    async function allowRiddleAnswer() {
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, "I think my answer will be ");
        const answer = await BeansCuest.fS.Speech.getInput();
        if (possibleAnswers.includes(answer.toLowerCase()))
            await optionA();
        else
            await optionB();
    }
    async function optionA() {
        await BeansCuest.playSound(BeansCuest.SOUNDS.creak);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0012, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0013, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0014, null],
        ], script);
        const dialog = {
            A1: {
                label: "Don't ask what happened",
                callback: optionA1
            },
            A2: {
                label: "Ask what happened",
                callback: optionA2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012, null],
        ], script);
        const dialog = {
            B1: {
                label: "Hear the riddle again",
                callback: optionB1
            },
            B2: {
                label: "Seek for a clue",
                callback: optionB2
            },
            B3: {
                label: "Ask Spook for help",
                callback: optionB3
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionB1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0009, null],
        ], script);
        await allowRiddleAnswer();
    }
    async function optionB2() {
        if (!foundClue) {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014, null],
                [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015, null],
            ], script);
            await BeansCuest.getItem(BeansCuest.ITEMS.note, "note");
            foundClue = true;
        }
        else {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016, null],
            ], script);
        }
        await allowRiddleAnswer();
    }
    async function optionB3() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0010, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0011, null],
        ], script);
        await allowRiddleAnswer();
    }
    async function optionA1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0015, null],
        ], script);
        await optionC();
    }
    async function optionA2() {
        unlockedNovelpage = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0022, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0016, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0017, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0018, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0019, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0020, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0021, null],
        ], script);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.getItem(BeansCuest.ITEMS.moonstone, "moonstone");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0025, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0026, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0022, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0023, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0024, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0027, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0025, null],
            [BeansCuest.CHARACTERS.Spook, script.Spook.texts.T0026, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Spook);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0028, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0029, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0030, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        if (unlockedNovelpage)
            await BeansCuest.showNovelPages("novelpage5", BeansCuest.LOCATIONS.mansion2);
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.muteBGM(BeansCuest.MUSICS.mansion);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let stoneOrder = [];
    const correctOrder = ["Moonstone", "Sunstone", "Starstone"];
    let stones;
    const script = {
        Bean: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "There's the portal! See? I didn't implode! We did it!"
                },
                T0001: {
                    text: "I understand that time is running out, but we need to stay calm and think this through. Can you see the three small notches?"
                },
                T0002: {
                    text: "The stones would fit perfectly. But in which order am I supposed to put them in...?"
                },
                T0003: {
                    text: "Stool, can you repeat the poem?",
                },
                T0004: {
                    text: "Stool, is there anything else you can recall that might guide us in choosing the right order?"
                },
                T0005: {
                    text: "Stool, look! The stones are in the right order! The portal is starting to glow and activate!"
                },
                T0006: {
                    text: "Remember what? Are you alright?"
                },
                T0007: {
                    text: "You were guiding us all along? It really does make sense now!"
                },
                T0008: {
                    text: "That makes sense - in a magic context - I guess? I can't believe you've been guiding us this whole time."
                },
                T0009: {
                    text: "Stool. I really have to leave now. Oliver must be so worried. "
                },
                T0010: {
                    text: "I don't want to leave you behind, but I also don't want to abandon my own world. I'm sorry Stool - I have to leave."
                },
                T0011: {
                    text: "Enchantica is an amazing place, and I've grown to love it. We truly are friends, but my heart longs to return to my world, and my friends there. I can't ignore that."
                },
                T0012: {
                    text: "Thank you, Stool, for everything. You've been an incredible friend and guide."
                },
                T0013: {
                    text: "Enchantica will forever hold a special place in my heart, and I'll cherish the memories we've shared."
                },
                T0014: {
                    text: "Oliver?"
                },
                T0015: {
                    text: "Oh Oliver! I'm so glad to see you!"
                },
                T0016: {
                    text: "Oh, Oliver, I would never want that. You mean the world to me."
                },
                T0017: {
                    text: "Oh, Oliver, you wouldn't believe it!"
                },
                T0018: {
                    text: "Stool, I've made up my mind. I want to stay in Enchantica with you."
                },
                T0019: {
                    text: "I know it's a big decision, Stool, but Enchantica feels like home to me now.",
                },
                T0020: {
                    text: "The magic, the friends I've made, the adventures we've had together — it's all so special. I don't want to leave it all behind."
                },
                T0021: {
                    text: "Of course they will, Stool. And I'll miss them too. But sometimes, we have to follow our hearts and pursue what truly makes us happy."
                },
                T0022: {
                    text: "Enchantica has awakened something in me, something I never knew I had."
                },
                T0023: {
                    text: "I want to explore this world, learn more about its mysteries, and be a part of something extraordinary."
                },
                T0024: {
                    text: "And your friendship means the world to me, and I couldn't imagine this journey without you."
                },
                T0025: {
                    text: "We'll create new memories, uncover hidden treasures, and embrace the magic together."
                },
                T0026: {
                    text: "Stool, look! The stones are aligned! The portal is starting to glow!!"
                },
                T0027: {
                    text: "What is it? Are you feeling alright?"
                },
                T0028: {
                    text: "You mean you were guiding us this whole time? It suddenly all falls into place!"
                },
                T0029: {
                    text: "What do you mean? We've worked so hard to repair it. It should be safe now, shouldn't it?"
                },
                T0030: {
                    text: "Stool, I have to go back now. Oliver must be incredibly worried about me."
                },
                T0031: {
                    text: "I don't want to leave you behind, Stool, but I also can't abandon my own world."
                },
                T0032: {
                    text: "I'm sorry, but I have to make the difficult decision to leave."
                },
                T0033: {
                    text: "Enchantica truly is a remarkable place, and I've grown to love it deeply."
                },
                T0034: {
                    text: "Our friendship means a lot to me, Stool, but my heart yearns to return to my world, to the friends and loved ones I left behind. I can't ignore that calling."
                },
                T0035: {
                    text: "Thank you, Stool, for being an extraordinary friend and guiding me on this incredible journey."
                },
                T0036: {
                    text: "Enchantica has become a part of me, and the memories we've created will forever hold a special place in my heart."
                },
                T0037: {
                    text: "Oliver! Oliver! Where are you?",
                    emotion: "confused"
                },
                T0038: {
                    text: "I'm not at home...? No, this can't be right... Why didn't the portal work? WHAT WENT WRONG?",
                    emotion: "scared"
                },
                T0039: {
                    text: "I followed all the steps, placed the stones in the right order... WHY AM I NOT BACK HOME? And what do I do now?",
                    emotion: "sad"
                },
                T0040: {
                    text: "Stool, I've made my decision. I want to stay in Enchantica with you.",
                },
                T0041: {
                    text: "I understand it's a significant choice, Stool, but Enchantica has become my home."
                },
                T0042: {
                    text: "The enchantment, the friendships I've forged, and the extraordinary adventures we've shared—it's all too precious to leave behind."
                },
                T0043: {
                    text: "OH NO! What's wrong with the portal??"
                },
                T0044: {
                    text: "Maybe this is a sign. Maybe I was meant to stay in Enchantica all along."
                },
                T0045: {
                    text: "Sometimes, fate has its own plans. Maybe this is where I'm meant to be, with you and in this magical world."
                },
            }
        },
        Stool: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "... yet! - It didn't implode yet!",
                    emotion: "anxious"
                },
                T0001: {
                    text: "How am I supposed to know???",
                    emotion: "crying"
                },
                T0002: {
                    text: "... Well - in fact this reminds me of a poem I once stumbled upon. Listen closely:",
                    emotion: "explanatory"
                },
                T0003: {
                    text: `"I am the light in the night, shining bright.<br>
                    I am the midst of the cosmic, giving live.`,
                    emotion: "explanatory"
                },
                T0004: {
                    text: `I am the guide through the dark, sparkling high.<br>
                    Together we make the way, for you to pass through the fray."`,
                    emotion: "explanatory"
                },
                T0005: {
                    text: "But I don't know how this is supposed to help...",
                    emotion: "anxious"
                },
                T0006: {
                    text: "I can't quite pinpoint how I know, but another thing that comes to mind is to think about the natural phenomenon each stone represents.",
                    emotion: "explanatory"
                },
                T0007: {
                    text: "<i>Use (i) to select the three stones in order</i>",
                    emotion: "explanatory"
                },
                T0008: {
                    text: "Are you sure you want to keep that order?",
                    emotion: "worried"
                },
                T0009: {
                    text: "Bean, I... I remember.",
                    emotion: "confused"
                },
                T0010: {
                    text: "I was the guardian of this portal before it was destroyed. Everything is coming back to me now. I don't know how I forgot, but the memories have flooded back.",
                    emotion: "serious"
                },
                T0011: {
                    text: "I was responsible for safeguarding the knowledge of the stones. It all makes sense now.",
                    emotion: "serious"
                },
                T0012: {
                    text: "Each stone represents a different natural phenomenon. The starstone symbolizes the celestial light, the sunstone represents the radiant warmth, and the moonstone embodies the mystic allure of the night.",
                    emotion: "explanatory"
                },
                T0013: {
                    text: "Putting them in the correct order activates the portal.",
                    emotion: "explanatory"
                },
                T0014: {
                    text: "It was my duty, and now, with my memories restored, I feel more confident and determined than ever. From now on I'll watch the portal more carefully.",
                    emotion: "happy"
                },
                T0015: {
                    text: "I know it's a difficult decision, Bean. But remember the incredible experiences we've had, the friendships we've formed, and the lessons we've learned.",
                    emotion: "sad"
                },
                T0016: {
                    text: "Please stay with me... Don't leave me...",
                    emotion: "sad"
                },
                T0017: {
                    text: "But Bean, Enchantica holds so much wonder and potential, and you could continue to explore and discover its secrets. You and me together!",
                    emotion: "sad"
                },
                T0018: {
                    text: "I understand, Bean. It's your choice to make. Just know that Enchantica will always be here.",
                    emotion: "sad"
                },
                T0019: {
                    text: "I will be its guardian, watching over this realm and protecting it with all my heart.",
                    emotion: "sad"
                },
                T0020: {
                    text: "Likewise, Bean. Our paths may diverge for now, but I have no doubt that destiny will bring us together again someday. See you soon, Bean!",
                    emotion: "charmed"
                },
                T0021: {
                    text: "Bean, are you sure? Your world and your life are back there.",
                    emotion: "confused"
                },
                T0022: {
                    text: "But what about your family and friends in your world? Won't they miss you?",
                    emotion: "worried"
                },
                T0023: {
                    text: "Oh Bean! If you're willing to stay, I'll be here by your side, guiding you and sharing in the wonders this world has to offer.",
                    emotion: "charmed"
                },
                T0024: {
                    text: "Bean, something just clicked in my mind...",
                    emotion: "confused"
                },
                T0025: {
                    text: "I remember now. I was the guardian of this very portal before it fell into ruin. The memories have come rushing back to me.",
                    emotion: "serious"
                },
                T0026: {
                    text: "It's incredible how they resurfaced after being buried for so long. I was entrusted with the knowledge of the stones, and it all makes sense now.",
                    emotion: "serious"
                },
                T0027: {
                    text: "Indeed! Each stone symbolizes a different force of nature.",
                    emotion: "explanatory"
                },
                T0028: {
                    text: "The starstone embodies the celestial light, the sunstone represents the radiant warmth, and the moonstone captures the mystical allure of the night.",
                    emotion: "explanatory"
                },
                T0029: {
                    text: "But I can't shake this strange feeling about the portal. Something doesn't feel right.",
                    emotion: "worried"
                },
                T0030: {
                    text: "I can't explain it, but deep down, I sense that there might be something wrong.",
                    emotion: "explanatory"
                },
                T0031: {
                    text: "But for now I am grateful for the opportunity to fulfill my duty once again, and with my memories restored, I feel a renewed sense of purpose.",
                    emotion: "explanatory"
                },
                T0032: {
                    text: "I will watch over the portal diligently from now on.",
                    emotion: "explanatory"
                },
                T0033: {
                    text: "I know it's hard for both of us, Bean. But think about the incredible journey we've had, the bonds we've formed, and the fun we had.",
                    emotion: "sad"
                },
                T0034: {
                    text: "Please reconsider... Stay by my side... Don't leave me...",
                    emotion: "sad"
                },
                T0035: {
                    text: "But Bean, Enchantica is filled with endless wonders and opportunities. We could continue to explore and uncover its secrets together. Think about all the adventures we could have!",
                    emotion: "sad"
                },
                T0036: {
                    text: "I understand, Bean. It's your choice to make, and I respect it.",
                    emotion: "sad"
                },
                T0037: {
                    text: "Just know that Enchantica will always be here, and I will fulfill my duty as its guardian, watching over this realm and protecting it with all my heart.",
                    emotion: "sad"
                },
                T0038: {
                    text: "Indeed, Bean. Although our paths may temporarily diverge, I have a deep belief that fate will reunite us in the future.",
                    emotion: "happy"
                },
                T0039: {
                    text: "Until then, take care and stay true to yourself, my dear friend. Goodbye, for now!",
                    emotion: "happy"
                },
                T0040: {
                    text: "BEAN! SOMETHING'S WRONG! THE PORTAL... IT'S BREAKING DOWN! WE NEED TO..."
                },
                T0041: {
                    text: "Bean, are you absolutely certain? Your world, your life... they're back there.",
                    emotion: "confused"
                },
                T0042: {
                    text: "I don't know, Bean! It's falling apart! We must have done something wrong! Luckily you decided to stay...",
                    emotion: "anxious"
                },
                T0043: {
                    text: "What? But Bean, we didn't plan for this! We were supposed to repair the portal!",
                    emotion: "worried"
                },
            }
        },
        Oliver: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Bean! Bean, where are you?"
                },
                T0001: {
                    text: "Oh, Bean, there you are! I've been searching everywhere for you. I was getting worried.",
                    emotion: "happy"
                },
                T0002: {
                    text: "You really had me going there for a moment. I thought I'd lost you.",
                    emotion: "happy"
                },
                T0003: {
                    text: "Are you okay? You mean the world to me too, Bean. I'm just glad I found you. So, where were you hiding?",
                    emotion: "worried"
                },
                T0004: {
                    text: "BEEEAN? Where are you? You won! I give up! Please show yourself!",
                    emotion: "worried"
                },
            }
        },
        Unknown: {
            defaultPosition: BeansCuest.POSITIONS[1],
            texts: {
                T0000: {
                    text: "Hello? Can I help you?"
                }
            }
        }
    };
    async function scene6() {
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.starstone);
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.moonstone);
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.sunstone);
        await BeansCuest.playBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods);
        await BeansCuest.makeTransition("sceneChange");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, null],
        ], script);
        await decisionDialog1();
    }
    BeansCuest.scene6 = scene6;
    async function decisionDialog1() {
        const dialog = {
            A: {
                label: "Arrange Stones",
                callback: optionA
            },
            B: {
                label: "Hear poem again",
                callback: optionB
            },
            C: {
                label: "Ask Stool for a clue",
                callback: optionC
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA() {
        BeansCuest.dataForSave.moonstone = true;
        BeansCuest.dataForSave.starstone = true;
        BeansCuest.dataForSave.sunstone = true;
        await stoneDecision();
    }
    async function stoneDecision() {
        stones = BeansCuest.getStatusOfStones();
        stones.forEach(({ el, item }) => el.addEventListener("pointerdown", handleStoneSelection(item)));
        do {
            await BeansCuest.letCharactersHaveDialogue([
                [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, null],
            ], script);
        } while (getStoneAmount(stones.map((stone) => stone.item)) > 0);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, `I choose this order: ${stoneOrder.join(', ')}.`);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, null],
        ], script);
        const dialog = {
            A1: {
                label: "Rearrange",
                callback: optionA1,
            },
            A2: {
                label: "Keep the order",
                callback: optionA2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    function getStoneAmount(stones) {
        return stones.reduce((acc, stone) => (acc + BeansCuest.fS.Inventory.getAmount(stone)), 0);
    }
    function handleStoneSelection(stone) {
        return () => {
            stoneOrder.push(stone.name);
        };
    }
    async function optionA1() {
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.moonstone);
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.sunstone);
        BeansCuest.fS.Inventory.add(BeansCuest.ITEMS.starstone);
        stoneOrder = [];
        await stoneDecision();
    }
    async function optionA2() {
        if (JSON.stringify(stoneOrder) === JSON.stringify(correctOrder)) {
            await optionA2_1();
        }
        else {
            await optionA2_2();
        }
    }
    async function optionA2_1() {
        await BeansCuest.playSound(BeansCuest.SOUNDS.portalactivates);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods2);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0014, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        const dialog = {
            A2_1_1: {
                label: "Enter the Portal",
                callback: optionA2_1_1
            },
            A2_1_2: {
                label: "Stay in Enchantica",
                callback: optionA2_1_2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA2_1_1() {
        await BeansCuest.muteBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.playBGM(BeansCuest.MUSICS.splashscreen);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0017, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0018, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0019, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0020, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.playSound(BeansCuest.SOUNDS.portal);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods3);
        await BeansCuest.makeTransition("portal");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0000, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0001, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0002, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0003, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017, null],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Oliver);
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showNovelPages("novelpage6", BeansCuest.LOCATIONS.black);
        await showEnd();
    }
    async function optionA2_1_2() {
        await BeansCuest.muteBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.playBGM(BeansCuest.MUSICS.splashscreen);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0021, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0022, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0022, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0023, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0025, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0004, null],
        ], script);
        await showEnd();
    }
    async function optionA2_2() {
        await BeansCuest.playSound(BeansCuest.SOUNDS.portalactivates);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods2);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0026, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0024, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0027, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0025, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0026, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0028, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0027, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0028, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0029, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0029, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0030, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0031, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0032, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0030, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0033, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0034, null],
        ], script);
        const dialog = {
            A2_2_1: {
                label: "Enter the portal",
                callback: optionA2_2_1
            },
            A2_2_2: {
                label: "Stay in Enchantica",
                callback: optionA2_2_2
            },
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA2_2_1() {
        await BeansCuest.muteBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.playBGM(BeansCuest.MUSICS.splashscreen);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0031, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0032, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0035, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0033, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0034, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0036, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0037, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0035, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0036, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0038, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0039, null],
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("portal");
        await BeansCuest.playSound(BeansCuest.SOUNDS.collapse);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0040, null],
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("inScene");
        BeansCuest.fS.Speech.hide();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0004, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.muteBGM(BeansCuest.MUSICS.splashscreen);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.otherworld);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.playBGM(BeansCuest.MUSICS.otherworld);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0037, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0038, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0039, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0000, null],
        ], script);
        await showEnd();
    }
    async function optionA2_2_2() {
        await BeansCuest.muteBGM(BeansCuest.MUSICS.wistfulwoods);
        await BeansCuest.playBGM(BeansCuest.MUSICS.splashscreen);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0040, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0041, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0041, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0042, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.playSound(BeansCuest.SOUNDS.collapse);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods3);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0043, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0042, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0044, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0043, null],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0045, null],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0004, null],
        ], script);
        await showEnd();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);
        await decisionDialog1();
    }
    async function optionC() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ], script);
        await decisionDialog1();
    }
    async function showEnd() {
        BeansCuest.fS.Character.hideAll();
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        BeansCuest.fS.Text.setClass("end-screen");
        await BeansCuest.fS.Text.print("THE END");
        await BeansCuest.showCredits();
    }
})(BeansCuest || (BeansCuest = {}));
//# sourceMappingURL=source.js.map