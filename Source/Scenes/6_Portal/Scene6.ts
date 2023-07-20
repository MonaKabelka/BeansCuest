namespace BeansCuest {
    let stoneOrder: string[] = [];

    const correctOrder = ["Moonstone", "Sunstone", "Starstone"];

    let stones: {
        el: HTMLLIElement;
        item: fS.ItemDefinition;
    }[];

    const script: ScriptDefinition = {
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "There’s the portal! See? I didn’t implode! We did it!"
                },
                T0001: {
                    text: "I understand that time is running out, but we need to stay calm and think this through. Can you see the three small notches?"
                },
                T0002: {
                    text: "The stones would fit perfectly. But in which order am I supposed to put them in…?"
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
                    text: "That makes sense – in a magic context – I guess? I can't believe you've been guiding us this whole time."
                },
                T0009: {
                    text: "Stool. I really have to leave now. Oliver must be so worried. "
                },
                T0010: {
                    text: "I don't want to leave you behind, but I also don't want to abandon my own world. I’m sorry Stool - I have to leave."
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
                    text: "Oh Oliver! I’m so glad to see you!"
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
                }
            }
        },
        Stool: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "… yet! - It didn’t implode yet!",
                    emotion: "anxious"
                },
                T0001: {
                    text: "How am I supposed to know???",
                    emotion: "crying"
                },
                T0002: {
                    text: "… Well - in fact this reminds me of a poem I once stumbled upon. Listen closely:",
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
                    text: "But I don’t know how this is supposed to help…",
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
                    text: "It was my duty, and now, with my memories restored, I feel more confident and determined than ever. From now on I’ll watch the portal more carefully.",
                    emotion: "happy"
                },
                T0015: {
                    text: "I know it's a difficult decision, Bean. But remember the incredible experiences we've had, the friendships we've formed, and the lessons we've learned.",
                    emotion: "sad"
                },
                T0016: {
                    text: "Please stay with me… Don’t leave me…",
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
                }
            }
        },
        Oliver: {
            defaultPosition: POSITIONS[1],
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
                }
            }
        }
    }

    export async function scene6(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.wistfulwoods);
        await makeTransition("sceneChange");

        fS.Inventory.add(ITEMS.moonstone);
        fS.Inventory.add(ITEMS.sunstone);
        fS.Inventory.add(ITEMS.starstone);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [CHARACTERS.Stool, script.Stool.texts.T0005, null],
        ], script);

        await decisionDialog1();
    }

    async function decisionDialog1() {
        const dialog: DialogConfig = {
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
        }

        await createDialog(dialog);
    }

    async function optionA() {
        dataForSave.moonstone = true;
        dataForSave.starstone = true;
        dataForSave.sunstone = true;

        

        await stoneDecision();
    }

    async function stoneDecision() {
        stones = getStatusOfStones();
        stones.forEach(({el, item}) => el.addEventListener("pointerdown", handleStoneSelection(item)));

        do {
            await letCharactersHaveDialogue([
                [CHARACTERS.Stool, script.Stool.texts.T0007, null],
            ], script);
          } while (getStoneAmount(stones.map((stone) => stone.item)) > 0);

          await createSingleLineSpeech(CHARACTERS.Bean, `I choose this order: ${stoneOrder.join(', ')}.`);

          await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0008, null],
        ], script);

        const dialog: DialogConfig = {
            A1: {
                label: "Rearrange",
                callback: optionA1,          
            },
            A2: {
                label: "Keep the order",
                callback: optionA2
            }
        }

        await createDialog(dialog);
    }

    function getStoneAmount(stones: fS.ItemDefinition[]) {
        return stones.reduce((acc, stone) => (acc + fS.Inventory.getAmount(stone)), 0)
    }

    function handleStoneSelection(stone: fS.ItemDefinition) {
        return () => {
            stoneOrder.push(stone.name);
        }
    }

    async function optionA1() {
        fS.Inventory.add(ITEMS.moonstone);
        fS.Inventory.add(ITEMS.sunstone);
        fS.Inventory.add(ITEMS.starstone);

        stoneOrder = [];

        await stoneDecision();
    }

    async function optionA2() {
        if (JSON.stringify(stoneOrder) === JSON.stringify(correctOrder)) {
            await optionA2_1();
        } else {
            await optionA2_2();
        }
    }

    async function optionA2_1() {
        await fS.Location.show(LOCATIONS.wistfulwoods2);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [CHARACTERS.Stool, script.Stool.texts.T0010, null],
            [CHARACTERS.Stool, script.Stool.texts.T0011, null],
            [CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [CHARACTERS.Stool, script.Stool.texts.T0014, null],
            [CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);

        const dialog: DialogConfig = {
            A2_1_1: {
                label: "Enter the Portal",
                callback: optionA2_1_1
            },
            A2_1_2: {
                label: "Stay in Enchantica",
                callback: optionA2_1_2
            }
        }

        await createDialog(dialog);
    }

    async function optionA2_1_1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [CHARACTERS.Stool, script.Stool.texts.T0017, null],
            [CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [CHARACTERS.Stool, script.Stool.texts.T0018, null],
            [CHARACTERS.Stool, script.Stool.texts.T0019, null],
            [CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [CHARACTERS.Stool, script.Stool.texts.T0020, null],
        ], script);

        await fS.Location.show(LOCATIONS.woods);
        await hideCharacter(CHARACTERS.Stool);
        fS.Speech.hide();
        await makeTransition("portal");

        await letCharactersHaveDialogue([
            [CHARACTERS.Oliver, script.Oliver.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [CHARACTERS.Oliver, script.Oliver.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [CHARACTERS.Oliver, script.Oliver.texts.T0002, null],
            [CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [CHARACTERS.Oliver, script.Oliver.texts.T0003, null], 
            [CHARACTERS.Bean, script.Bean.texts.T0017, null],           
        ], script);

        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");

        fS.Text.setClass("end-screen");
        await fS.Text.print("THE END");
        await showNovelPages("novelpage6", LOCATIONS.black);
    }

    async function optionA2_1_2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0018, null],
            [CHARACTERS.Stool, script.Stool.texts.T0021, null],
            [CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [CHARACTERS.Stool, script.Stool.texts.T0022, null],
            [CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [CHARACTERS.Bean, script.Bean.texts.T0022, null],
            [CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [CHARACTERS.Stool, script.Stool.texts.T0023, null],
            [CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [CHARACTERS.Bean, script.Bean.texts.T0025, null],
        ], script);

        await fS.Location.show(LOCATIONS.woods);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Oliver, script.Oliver.texts.T0004, null],
        ], script);

        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");

        fS.Text.setClass("end-screen");
        await fS.Text.print("THE END");
    }

    async function optionA2_2() {

    }

    async function optionB() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);

        await decisionDialog1();
    }

    async function optionC() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ], script);

        await decisionDialog1();
    }
}