namespace BeansCuest {
    export const ITEMS = {
        fishingRod: {
            name: "Fishing Rod",
            description: "Old but sturdy",
            image:  "Images/Items/rod.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        moonstone: {
            name: "Moonstone",
            description: "Gives off a cool light",
            image:  "Images/Items/moonstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        pixieDust: {
            name: "Pixie Dust",
            description: "Feels light",
            image:  "Images/Items/pixiedust.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        ladder: {
            name: "Ladder",
            description: "Creaks when used",
            image:  "Images/Items/ladder.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        note: {
            name: "Note",
            description: `<i>"I rhyme on mittens, yet I am nothing to wear</i>"`,
            image:  "Images/Items/notes.png",
            static: true
        } satisfies fS.ItemDefinition,
        sunstone: {
            name: "Sunstone",
            description: "Emits a warm glow",
            image:  "Images/Items/sunstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        starstone: {
            name: "Starstone",
            description: "Sparkles",
            image:  "Images/Items/starstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
    }

    export const ITEM_CHARACTERS: Record<keyof typeof ITEMS, fS.CharacterDefinition> = {
        fishingRod: {
            name: "fishingRod",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/rod.png"
            }
        },
        ladder: {
            name: "ladder",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/ladder.png"
            }
        },
        moonstone: {
            name: "moonstone",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/moonstone.png"
            }
        },
        note: {
            name: "note",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/notes.png"
            }
        },
        pixieDust: {
            name: "pixieDust",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/pixiedust.png"
            }
        },
        starstone: {
            name: "starstone",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/starstone.png"
            }
        },
        sunstone: {
            name: "sunstone",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/sunstone.png"
            }
        },
    }

    function handleItemUsage(event: CustomEvent) {
        if (event.type === 'pointerdown') {
            const [itemKey, item] = Object.entries(ITEMS).find(([,item]) => item.name === event.detail);
            if (!dataForSave[itemKey as Partial<keyof typeof dataForSave>]) {
                fS.Inventory.add(item);
            }
        }
    }
}