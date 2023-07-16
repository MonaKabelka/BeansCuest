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
    };
    BeansCuest.mainPosition = [15, 100];
    BeansCuest.secondaryPosition = [85, 100];
    window.addEventListener("load", start);
    function start(_event) {
        BeansCuest.gameMenu = BeansCuest.fS.Menu.create(BeansCuest.transformMenu(BeansCuest.menuDefinition), BeansCuest.useCallbacks, "in-game-menu");
        BeansCuest.gameMenu.close();
        let scenes = [
            { scene: BeansCuest.scene1_1, name: "Scene 1.1" },
            { scene: BeansCuest.scene1_2, name: "Scene 1.2" },
            { scene: BeansCuest.scene2_1, name: "Scene 2.1" },
            { scene: BeansCuest.scene3_1, name: "Scene 3.1" },
            { scene: BeansCuest.scene4_1, name: "Scene 4.1" },
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
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Oliver/happy.png",
                worried: "Images/Characters/Oliver/worried.png",
                proud: "Images/Characters/Oliver/proud.png"
            }
        },
        Bean: {
            name: "Bean",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Bean/happy.png",
                sad: "Images/Characters/Bean/sad.png",
                focused: "Images/Characters/Bean/focused.png",
                curious: "Images/Characters/Bean/curious.png",
                charmed: "Images/Characters/Bean/charmed.png",
                proud: "Images/Characters/Bean/proud.png",
                scared: "Images/Characters/Bean/scared.png",
                confused: "Images/Characters/Bean/confused.png",
                questioning: "Images/Characters/Bean/questioning.png",
                guilty: "Images/Characters/Bean/guilty.png",
                unsure: "Images/Characters/Bean/unsure.png",
                resigned: "Images/Characters/Bean/resigned.png",
                smiling: "Images/Characters/Bean/smiling.png",
                determined: "Images/Characters/Bean/determined.png",
                surprised: "Images/Characters/Bean/surprised.png",
                thinking: "Images/Characters/Bean/thinking.png",
                serious: "Images/Characters/Bean/serious.png",
                laughing: "Images/Characters/Bean/laughing.png",
                begging: "Images/Characters/Bean/begging.png",
                impressed: "Images/Characters/Bean/impressed.png",
                whispering: "Images/Characters/Bean/whispering.png"
            }
        },
        Stool: {
            name: "Stool",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                worried: "Images/Characters/Stool/worried.png",
                explanatory: "Images/Characters/Stool/explanatory.png",
                hysterical: "Images/Characters/Stool/hysterical.png",
                sad: "Images/Characters/Stool/sad.png",
                confused: "Images/Characters/Stool/confused.png",
                happy: "Images/Characters/Stool/happy.png",
                crying: "Images/Characters/Stool/crying.png",
                anxious: "Images/Characters/Stool/anxious.png",
                disappointed: "Images/Characters/Stool/disappointed.png",
                serious: "Images/Characters/Stool/serious.png",
                mocking: "Images/Characters/Stool/mocking.png",
                disgusted: "Images/Characters/Stool/disgusted.png",
                cheering: "Images/Characters/Stool/cheering.png",
                shivers: "Images/Characters/Stool/shivers.png",
                concerned: "Images/Characters/Stool/concerned.png",
                annoyed: "Images/Characters/Stool/annoyed.png",
                impressed: "Images/Characters/Stool/impressed.png",
                whispering: "Images/Characters/Stool/whispering.png",
                questioning: "Images/Characters/Stool/questioning.png"
            }
        },
        System: {
            name: "System",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Unknown: {
            name: "Unknown",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Lillypad: {
            name: "Lillypad",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                hiding: "Images/Characters/Lillypad/hiding.png",
                shy: "Images/Characters/Lillypad/shy.png",
                blushing: "Images/Characters/Lillypad/blushing.png",
                sad: "Images/Characters/Lillypad/sad.png",
                smiling: "Images/Characters/Lillypad/smiling.png",
                scared: "Images/Characters/Lillypad/scared.png"
            }
        },
        Chant: {
            name: "Chant",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Chant/angry.png",
                snapped: "Images/Characters/Chant/snapped.png",
                happy: "Images/Characters/Chant/happy.png"
            }
        },
        Charm: {
            name: "Charm",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Charm/angry.png",
                snapped: "Images/Characters/Charm/snapped.png",
                confused: "Images/Characters/Charm/confused.png"
            }
        },
        Bandit: {
            name: "Bandit",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                muttering: "Images/Characters/Bandit/muttering.png",
                grumpy: "Images/Characters/Bandit/grumpy.png",
                sleepy: "Images/Characters/Bandit/sleepy.png"
            }
        }
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
    async function letCharacterSayText(character, scriptText, position) {
        const [x, y] = position;
        const positionVector = BeansCuest.fS.positionPercent(x, y);
        await BeansCuest.showCharacter(character, scriptText.emotion, positionVector);
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(character, scriptText.text);
    }
    BeansCuest.letCharacterSayText = letCharacterSayText;
    async function letCharactersHaveDialogue(texts, script) {
        for (let [character, scriptText] of texts) {
            await letCharacterSayText(character, scriptText, script[character.name].defaultPosition);
        }
    }
    BeansCuest.letCharactersHaveDialogue = letCharactersHaveDialogue;
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
        return;
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
            defaultPosition: BeansCuest.secondaryPosition,
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
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    emotion: "sad",
                    text: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time."
                },
                T0001: {
                    emotion: "happy",
                    text: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls."
                },
                T0002: {
                    emotion: "happy",
                    text: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning."
                },
                T0003: {
                    emotion: "focused",
                    text: "Absolutely! I've been improving my hiding skills, you know?"
                },
                T0004: {
                    emotion: "happy",
                    text: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!"
                }
            }
        }
    };
    async function scene1_1() {
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0000]], text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0001]], text);
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
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0000]], text);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0001],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0002],
        ], text);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0002],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0004],
        ], text);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let script = {
        Oliver: {
            defaultPosition: BeansCuest.secondaryPosition,
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
            defaultPosition: BeansCuest.mainPosition,
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
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000]], script);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001]], script);
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
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002]], script);
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005]
        ], script);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let askedBothOptions = [false, false];
    let script = {
        Unknown: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "Hellooo? Are you okay? U don't look okay! Are you dead? Have I witnessed a decease??? Oh that's a CAT-ASTROPHE!"
                },
                T0001: {
                    text: "OH you're alive! I'm Stool. Are you alright? I heard a loud noise and then you were just… here. I was SO scared."
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    text: "...urgh... Oliver...?",
                    emotion: "confused"
                },
                T0001: {
                    text: "Where am I? I was playing hide and seek with Oliver, and then everything is just a blur. I hope he's alright!",
                    emotion: "confused"
                },
                T0002: {
                    text: "Wha...?",
                    emotion: "questioning"
                },
                T0003: {
                    text: "To get back home I have to find... stones?",
                    emotion: "confused"
                },
                T0004: {
                    text: "Enchantica? I'm not in the garden? With Oliver? Am I dreaming?",
                    emotion: "questioning"
                },
                T0005: {
                    text: "How is that even pawssible? How are YOU pawssible?",
                    emotion: "confused"
                },
                T0006: {
                    text: "No that's not it. Don't get me wrong but you're a talking mushroom. This is enchanted!",
                    emotion: "guilty"
                },
                T0007: {
                    text: "... Um - nevermind",
                    emotion: "confused"
                },
                T0008: {
                    text: "Can you tell me the best place to start looking for the stones? I want to go home. I hope Oliver is fine...",
                    emotion: "questioning"
                },
                T0009: {
                    text: "It will definitely come in handy if you accompany me! Also, I'm looking forward to some company.",
                    emotion: "happy"
                },
                T0010: {
                    text: "I don't know. I think it would be safer for you to stay here.",
                    emotion: "unsure"
                },
                T0011: {
                    text: "Sigh. Okay you can come with me.",
                    emotion: "resigned"
                },
            }
        },
        Stool: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "I don't know what happened either. I usually just sit here and watch the portal...",
                    emotion: "explanatory",
                },
                T0001: {
                    text: "You know, in Enchantica we sometimes get visitors from other worlds! But suddenly BOOM and I've never seen something strange like you.",
                    emotion: "explanatory",
                },
                T0002: {
                    text: "You look funny!",
                    emotion: "happy",
                },
                T0003: {
                    text: "JUST NOW there was this loud noise! And all the three stones got lost! You know? The stones for the portal.",
                    emotion: "hysterical",
                },
                T0004: {
                    text: "If we won't fix it fast enough the portal might implode! And the could be everywhere in Enchantica!",
                    emotion: "hysterical",
                },
                T0005: {
                    text: "You're quick-witted! The stones to power the portal are the moonstone, the sunstone and the starstone. Without the stones we can never use the portal again!",
                    emotion: "hysterical",
                },
                T0006: {
                    text: "But it's im-paw-sible to find them",
                    emotion: "sad",
                },
                T0007: {
                    text: "Oliver?",
                    emotion: "confused",
                },
                T0008: {
                    text: "We're in Enchantica - to be exact in the Wistful Woods. I lived here for like - …forever. I take care of the portal and the stones.",
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
                    text: "Hmm. I'm not sure, but I have a dare hunch. Maybe you should start at the Lillypond next to the Wistful Woods.",
                    emotion: "questioning",
                },
                T0012: {
                    text: "BUT WAIT - you can't leave me! What if something bad happens again? Will you take me with you? Pleeease?",
                    emotion: "hysterical",
                },
                T0013: {
                    text: "*Shivers* Didn't you hear that? There was a noise! Back there!",
                    emotion: "crying",
                },
                T0014: {
                    text: "Pawsome! Let's go!",
                    emotion: "happy",
                }
            }
        }
    };
    async function scene2_1() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0000.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000]
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "worried", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("portal");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004],
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
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006],
        ], script);
        await optionC();
    }
    async function optionB() {
        askedBothOptions[1] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008],
        ], script);
        await optionC();
    }
    async function optionC() {
        if (!askedBothOptions.every((val) => val)) {
            await showDialog1();
            return;
        }
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012],
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
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009],
        ], script);
        await optionD();
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in");
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let script = {
        Bean: {
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    text: "Are you sure this is the best place to start looking for the first stone?",
                    emotion: "questioning",
                },
                T0001: {
                    text: "I can barely make out features, but it looks something like a... frog?",
                    emotion: "curious",
                },
                T0002: {
                    text: "HELLOOOO??",
                    emotion: "happy",
                },
                T0003: {
                    text: "HELLO!? CAN YOU HELP US? WE'RE SEARCHING FOR SOMETHING AND IT'S URGENT!",
                    emotion: "happy",
                },
                T0004: {
                    text: "Shhh...",
                    emotion: "curious",
                },
                T0005: {
                    text: "Hello there. It's okay, we won't hurt you. We just need some information about something lost. Oh, by the way - I'm Bean.",
                    emotion: "smiling",
                },
                T0006: {
                    text: "Nice to meet you, Lillypad! I'm searching for a lost relict, and I think you might be able to help. By any chance - Have you noticed anything strange lately?",
                    emotion: "happy",
                },
                T0007: {
                    text: "That's catastic!",
                    emotion: "happy",
                },
                T0008: {
                    text: "Well, not entirely catastic... I have no idea how to get there. I hate water!",
                    emotion: "resigned",
                },
                T0009: {
                    text: "Nothing is impawssible, Stool. We will keep looking and keep trying until we find a way!",
                    emotion: "determined",
                },
                T0010: {
                    text: "What was it you wanted to say?",
                    emotion: "questioning",
                },
                T0011: {
                    text: "Don't be shy! I'm listening!",
                    emotion: "smiling",
                },
                T0012: {
                    text: "Fur-real?? That's great!",
                    emotion: "surprised",
                },
                T0013: {
                    text: "No, of course not! Why would you think so?",
                    emotion: "curious",
                },
                T0014: {
                    text: "That's mean. I wish I could swim too. I've been afraid of water all my life. It's really distressing. You have a su-paw-power!",
                    emotion: "smiling",
                },
                T0015: {
                    text: "That would be amazing!",
                    emotion: "happy",
                },
                T0016: {
                    text: "Wow, you're amazing, Lillypad! Thank you so much. I really appreciate your help. I'm a little closer to home now!",
                    emotion: "happy",
                },
                T0017: {
                    text: "Thanks for the kind offer - but I wouldn't feel good knowing you're putting yourself at risk for us. I think I'll search for a solution myself.",
                    emotion: "smiling",
                },
                T0018: {
                    text: "I'll look around there. Thanks very much!",
                    emotion: "smiling",
                },
                T0019: {
                    text: "Thank you Lilypad! You helped us a lot!",
                    emotion: "smiling",
                },
                T0020: {
                    text: "I can't see anything, Stool. We need to find a way to get the relic.",
                    emotion: "focused",
                },
                T0021: {
                    text: "She's probably just diving for something. Let her be.",
                    emotion: "focused",
                },
                T0022: {
                    text: "Maybe we can search for something to help us.",
                    emotion: "smiling",
                },
                T0023: {
                    text: "Have you been sitting in the pond for a long time? - If yes, surely you could help us.",
                    emotion: "smiling",
                },
                T0024: {
                    text: "It's about a lost stone that I need to get back home. I came from another world and just ended up here by accident...",
                    emotion: "smiling",
                },
                T0025: {
                    text: "... Because at home I played hide and seek with my best friend Oliver! But now I'm traveling with Sto-",
                    emotion: "focused",
                },
                T0026: {
                    text: "Oh? What happened?",
                    emotion: "confused",
                },
                T0027: {
                    text: "Oh no! My bad.",
                    emotion: "resigned",
                },
                T0028: {
                    text: "Let's search the area for the stones.",
                    emotion: "thinking",
                },
                T0029: {
                    text: "Stool you are great! That could be the stone! We just have to find something to reach it...",
                    emotion: "happy",
                },
                T0030: {
                    text: "Stool. Hear me out. I hold you by your feet.",
                    emotion: "serious",
                },
                T0031: {
                    text: "You dunk your head under the waterlily leaves and search for something to help us reach the stone.",
                    emotion: "serious",
                },
                T0032: {
                    text: "Well, but it was worth a try. Let's look elsewhere.",
                    emotion: "smiling",
                },
                T0033: {
                    text: "Let's check in between these mossy stones.",
                    emotion: "thinking",
                },
                T0034: {
                    text: "HAHAHA Stool! You have to be more careful!",
                    emotion: "laughing",
                },
                T0035: {
                    text: "Did you hurt yourself?",
                    emotion: "smiling",
                },
                T0036: {
                    text: "Hihi - paw promise! Now let's check somewhere else.",
                    emotion: "happy",
                },
                T0037: {
                    text: "Stool, see the reeds? I think I can see something peeking through...",
                    emotion: "focused",
                },
                T0038: {
                    text: "Uhaaah - but - arh - I'm too big -uhh - to fit between the - arhhhg -... Stool? Can you just take a look?",
                    emotion: "thinking",
                },
                T0039: {
                    text: "Pweaaaase?",
                    emotion: "charmed",
                },
                T0040: {
                    text: "Everything's alright?",
                    emotion: "curious",
                },
                T0041: {
                    text: "A Rod! I think this will work! Let's use this rod to try and hook the stone.",
                    emotion: "happy",
                },
                T0042: {
                    text: "Almost... there... got it!",
                    emotion: "focused",
                },
                T0043: {
                    text: "We've already found one! Finding the other two will be a piece of cake.",
                    emotion: "smiling",
                },
                T0044: {
                    text: "We'll find the stones. It wasn't THAT difficult. Let's keep looking. Soo - where are we heading next? What do you suggest?",
                    emotion: "smiling",
                },
                T0045: {
                    text: "Let's go!",
                    emotion: "happy",
                },
            }
        },
        Stool: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "Well, I don't know why but something draws me here. Oh Bean - can you see that? Right there, in the pond.",
                    emotion: "anxious"
                },
                T0001: {
                    text: "SHH - Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0002: {
                    text: "Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0003: {
                    text: "See?? Maybe this wasn't such a good idea after all.",
                    emotion: "disappointed"
                },
                T0004: {
                    text: "Oh no, what happened to Lillypad?",
                    emotion: "worried"
                },
                T0005: {
                    text: "...Bean...?",
                    emotion: "worried"
                },
                T0006: {
                    text: "I think… you might have overwhelmed it...",
                    emotion: "worried"
                },
                T0007: {
                    text: "Alright - but let's search together. This pond is a bit fishy...",
                    emotion: "anxious"
                },
                T0008: {
                    text: "By the way - do you see this glowy thing at the bottom of the pond?",
                    emotion: "questioning"
                },
                T0009: {
                    text: "I don't like where this is going.",
                    emotion: "anxious"
                },
                T0010: {
                    text: "Absolutely no way.",
                    emotion: "serious"
                },
                T0011: {
                    text: "*Gurgling* I CRN'T REE A THRING! *Splash*",
                },
                T0012: {
                    text: "It's pitch black - I literally can't see anything.",
                    emotion: "serious"
                },
                T0013: {
                    text: "BuT iT wAs WoRtH a TrY.",
                    emotion: "mocking"
                },
                T0014: {
                    text: "But they are so slippy and slimyYYAHHHHHHHH",
                    emotion: "disgusted"
                },
                T0015: {
                    text: "I don't think so. But don't ever make me do that again!",
                    emotion: "crying"
                },
                T0016: {
                    text: "... You know I'm scared, right?",
                    emotion: "anxious"
                },
                T0017: {
                    text: "Okay I'll do it.",
                    emotion: "crying"
                },
                T0018: {
                    text: "Yeah, I think I found something.",
                },
                T0019: {
                    text: "You're doing great, Bean! Keep going!",
                    emotion: "cheering"
                },
                T0020: {
                    text: "Yes! We did it!",
                    emotion: "happy"
                },
                T0021: {
                    text: "Okay now we have one stone to repair the portal. But we'll NEVER find the other two! They could be anywhere!",
                    emotion: "hysterical"
                },
                T0022: {
                    text: "Why are you asking ME??? I don't know! - But...",
                    emotion: "anxious"
                },
                T0023: {
                    text: "...Something tells me we should search by the Mystique Meadows down the hill. I just can't tell why...",
                    emotion: "explanatory"
                },
            }
        },
        Lillypad: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "I-I'm Lillypad.",
                    emotion: "hiding"
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
                    emotion: "blushing"
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
                    emotion: "smiling"
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
                    text: "I saw something in the reeds recently… M- Maybe this can help you.",
                    emotion: "shy"
                },
                T0012: {
                    text: "I-...",
                    emotion: "sad"
                },
            }
        },
    };
    async function scene3_1() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("inScene");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001],
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
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
        ], script);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004],
        ], script);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "hiding", BeansCuest.fS.positionPercent(85, 100));
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
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0000],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0001],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0002],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009],
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
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0023],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0024],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "scared", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0025],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0026],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0027],
        ], script);
        await optionD();
    }
    async function optionC1_1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0004],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0005],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0006],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0007],
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
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0012],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0021],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0022],
        ], script);
        await optionD();
    }
    async function optionC1_1_1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0008],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0009],
        ], script);
        await optionE();
    }
    async function optionC1_1_2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0010],
            [BeansCuest.CHARACTERS.Lillypad, script.Lillypad.texts.T0011],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0028],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0029],
        ], script);
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
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0030],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0031],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("inScene");
        const [x, y] = BeansCuest.secondaryPosition;
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(x, y));
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0032],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013],
        ], script);
        await optionD();
    }
    async function optionD2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0033],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0014],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0034],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0035],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0015],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0036],
        ], script);
        await optionD();
    }
    async function optionD3() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0037],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0038],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0016],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0039],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0017],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0040],
        ], script);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0018.text);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "happy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0041],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0019],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0042],
        ], script);
        await optionE();
    }
    async function optionE() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0020],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0043],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0021],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0044],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0022],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0023],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0045],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let script = {
        Bean: {
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    emotion: "impressed",
                    text: "Wow, this place is amazing!"
                },
                T0001: {
                    emotion: "curious",
                    text: "Did you hear that?"
                },
                T0002: {
                    emotion: "determined",
                    text: "Let's check it out!"
                },
                T0003: {
                    emotion: "smiling",
                    text: "Hello? Pawdon me. I'm searching for a small glowing stone! It's very important..."
                },
                T0004: {
                    emotion: "curious",
                    text: "Is everything alright?"
                },
                T0005: {
                    emotion: "whispering",
                    text: "sometimes, unexpected alliances can turn the tides in our favor."
                },
                T0006: {
                    emotion: "questioning",
                    text: "Charm, Chant, I'm Bean and I would like to help you. Do you have any recollection of the last time you used the pixie dust? Purrhaps a specific place or activity?",
                },
                T0007: {
                    emotion: "whispering",
                    text: "okay..."
                },
                T0008: {
                    emotion: "determined",
                    text: "We should follow Charm's suggestion and start searching on the right side. Let's give it a try and see if we can find any traces of the pixie dust there."
                },
                T0009: {
                    emotion: "focused",
                    text: "Chant's suggestion to check the left side seems promising. We might stumble upon something significant that could help us reunite Charm and Chant with their precious dust."
                },
                T0010: {
                    emotion: "curious",
                    text: "Hmm. Seems like nothings here. Let's check for the other side."
                },
                T0011: {
                    emotion: "curious",
                    text: "Hello. I'm Bean. Why are you so grumpy? Can I help you?"
                },
                T0012: {
                    emotion: "worried",
                    text: "h no, that must've been clawful! I understand that you were just trying to find some peace and quiet, but taking something that doesn't belong to you isn't the best way to solve the problem..."
                },
                T0013: {
                    emotion: "worried",
                    text: "Let's find a way to bring harmony to this meadow without resorting to theft, okay?"
                },
                T0014: {
                    emotion: "determined",
                    text: "Deal!"
                },
                T0015: {
                    emotion: "thinking",
                    text: "Stool, we have to find a way to put an end to Charm and Chant's constant arguing. It's the only way to get the pixie dust back from Bandit."
                },
                T0016: {
                    emotion: "smiling",
                    text: "Good news! We found your pixie dust! There's just one small catch..."
                },
                T0017: {
                    emotion: "resigned",
                    text: "Well... here's the thing, a raccoon has it, and he said he would only give it back if you two stopped arguing."
                },
                T0018: {
                    emotion: "resigned",
                    text: "So, if you really want your pixie dust back, you'll have to make a pact to put an end to your arguments."
                },
                T0019: {
                    emotion: "determined",
                    text: "I have an idea that might help resolve your constant disagreements. Instead of arguing about who gets to use more or less, why don't you share it equally?"
                },
                T0020: {
                    emotion: "determined",
                    text: "By dividing the pixie dust equally, you'll realize that there is more than enough pixie dust to go around."
                }
            }
        },
        Stool: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    emotion: "impressed",
                    text: "Yeah, it's really beautiful."
                },
                T0001: {
                    emotion: "serious",
                    text: "Anyway - we should explore the meadow and see if we can find any clues."
                },
                T0002: {
                    emotion: "shivers",
                    text: "But we have to keep an eye out. This place is full of surprises."
                },
                T0003: {
                    emotion: "concerned",
                    text: "Indeed. Let's give it a wide berth."
                },
                T0004: {
                    emotion: "annoyed",
                    text: "Uh, are you even listening?"
                },
                T0005: {
                    emotion: "whispering",
                    text: "psst, bean, i don't think we should waste our time with those two bickering fairies. they'll just keep going in circles."
                },
                T0006: {
                    emotion: "whispering",
                    text: "bean, let's just start searching."
                },
                T0007: {
                    emotion: "anxious",
                    text: "Bean, I-I think we should tread carefully around this… creature. He seems quite... ruffled, to say the least. Perhaps we should proceed with caution."
                },
                T0008: {
                    emotion: "mocking",
                    text: "cAn I hElP yOu?"
                },
                T0009: {
                    emotion: "crying",
                    text: "And you're asking ME? What can I possibly do to make them stop arguing? It's not like I have any magical powers or wisdom to solve their conflicts."
                },
                T0010: {
                    emotion: "whispering",
                    text: "psst - bean, i think talking won't do much here. we need to come up with something that will make them see the bigger picture."
                }
            }
        },
        Unknown: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "It's not my fault! You were the one who had it last."
                },
                T0001: {
                    text: "ME? I was the one who had it last??? You're crazy!"
                },
                T0002: {
                    text: "I will never speak to you again!"
                },
                T0003: {
                    text: "Are you kitten me? I will never speak to YOU again!"
                },
                T0004: {
                    text: "Not exactly - Charm lost our pixie dust and without the dust we can't fly."
                },
                T0005: {
                    text: "Fuzzy feline furballs and whisker-waggling troublemakers! Can't a raccoon get a decent nap without being bothered by meddling creatures?"
                }
            }
        },
        Charm: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    emotion: "snapped",
                    text: "In fact, Chant lost our pixie dust and doesn't want to admit it."
                },
                T0001: {
                    emotion: "thinking",
                    text: "Hmm I think the last time we used it was back there on the right side."
                },
                T0002: {
                    emotion: "snapped",
                    text: "I do too listen to you. I just don't agree with you!"
                },
                T0003: {
                    emotion: "snapped",
                    text: "Oh, please! You're the one who always wants to hog it all for yourself!"
                },
                T0004: {
                    emotion: "confused",
                    text: "What does that mean? And what is a raccoon?"
                }
            }
        },
        Chant: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    emotion: "angry",
                    text: "I won't admit it because it wasn't my fault!"
                },
                T0001: {
                    emotion: "snapped",
                    text: "No Charm, it was on the left side! You never listen to me."
                },
                T0002: {
                    emotion: "angry",
                    text: "I can't believe you're still inhissting on taking more than your fairy share of the pixie dust!"
                },
                T0003: {
                    emotion: "happy",
                    text: "That's great! Where is it?"
                }
            }
        },
        Bandit: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    emotion: "grumpy",
                    text: "Call me Bandit, and let me tell you, I can't catch a wink of sleep with those bickering fairies around. They go on and on about who gets how much pixie dust, and it's driving me nuts!"
                },
                T0001: {
                    emotion: "grumpy",
                    text: "So, I decided to take matters into my own paws and swipe their precious dust. Maybe that'll finally shut them up and bring some peace to these meadows."
                },
                T0002: {
                    emotion: "sleepy",
                    text: "Look, Bean, I hear what you're saying, but those two just won't quit their bickering. If they can learn to stop arguing and get along, then I'll consider giving the pixie dust back."
                },
                T0003: {
                    emotion: "sleepy",
                    text: "It's a fair deal, don't you think? They need to prove that they can share without fighting, and then we can all move on from this nonsense."
                }
            }
        }
    };
    async function scene4_1() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002],
        ], script);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0000.text);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        const [mX, mY] = BeansCuest.mainPosition;
        const [sX, sY] = BeansCuest.secondaryPosition;
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Charm, "angry", BeansCuest.fS.positionPercent(mX, mY));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0002.text);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Chant, "angry", BeansCuest.fS.positionPercent(sX, sY));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0003.text);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004]
        ], script);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Chant, "snapped", BeansCuest.fS.positionPercent(sX, sY));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0004.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0000]
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0000, BeansCuest.mainPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Chant);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005, BeansCuest.mainPosition);
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
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006, BeansCuest.mainPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0001, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0001, BeansCuest.mainPosition);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0002, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Chant);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007, BeansCuest.mainPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        const dialog = {
            A_1: {
                label: "Search on the right (Charm)",
                callback: optionA_1,
            },
            A_2: {
                label: "Search on the left (Chant)",
                callback: optionA_2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA_1() {
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008, BeansCuest.mainPosition);
        await optionC();
    }
    async function optionA_2() {
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009, BeansCuest.mainPosition);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow2);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010, BeansCuest.mainPosition);
        const [mX, mY] = BeansCuest.mainPosition;
        const [sX, sY] = BeansCuest.secondaryPosition;
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bandit, "muttering", BeansCuest.fS.positionPercent(sX, sY));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0005.text);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bandit);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007, BeansCuest.secondaryPosition);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011, BeansCuest.mainPosition);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0000],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0001],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0012],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0013],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0002],
            [BeansCuest.CHARACTERS.Bandit, script.Bandit.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0015],
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bandit);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.meadow);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Charm, "angry", BeansCuest.fS.positionPercent(mX, mY));
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Chant, "angry", BeansCuest.fS.positionPercent(sX, sY));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0002, BeansCuest.secondaryPosition);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0003, BeansCuest.mainPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0016],
            [BeansCuest.CHARACTERS.Chant, script.Chant.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0017],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0018]
        ], script);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Chant);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Charm, script.Charm.texts.T0004, BeansCuest.secondaryPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Charm);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010, BeansCuest.secondaryPosition);
        const dialog = {
            C_1: {
                label: "Offer a solution",
                callback: optionC_1,
            },
            C_2: {
                label: "Try to settle disputes",
                callback: optionC_2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionB() {
        await optionD();
    }
    async function optionC_1() {
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0019, BeansCuest.mainPosition);
        await BeansCuest.letCharacterSayText(BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0020, BeansCuest.mainPosition);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        const dialog = {
            C_1_1: {
                label: "Offer a solution",
                callback: optionC1_1,
            },
            C1_2: {
                label: "Try to settle disputes",
                callback: optionC1_2,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC_2() {
        await optionD();
    }
    async function optionD() {
        await optionE();
    }
    async function optionC1_1() {
        await optionF();
    }
    async function optionC1_2() {
        await optionE();
    }
    async function optionE() {
        await optionF();
    }
    async function optionF() {
    }
})(BeansCuest || (BeansCuest = {}));
//# sourceMappingURL=source.js.map