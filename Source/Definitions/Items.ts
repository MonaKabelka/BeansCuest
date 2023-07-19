namespace BeansCuest {
    export const ITEMS = {
        fishingRod: {
            name: "Fising Rod",
            description: "",
            image:  "Images/Items/rod.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        moonstone: {
            name: "Moonstone",
            description: "TEST",
            image:  "Images/Items/moonstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        pixieDust: {
            name: "Pixie Dust",
            description: "",
            image:  "Images/Items/moonstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        ladder: {
            name: "Ladder",
            description: "",
            image:  "Images/Items/ladder.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        note: {
            name: "Note",
            description: "",
            image:  "Images/Items/note.png",
            static: true
        } satisfies fS.ItemDefinition,
        sunstone: {
            name: "Sunstone",
            description: "",
            image:  "Images/Items/sunstone.png",
            handler: handleItemUsage
        } satisfies fS.ItemDefinition,
        starstone: {
            name: "Starstone",
            description: "",
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
                center: "Images/Items/note.png"
            }
        },
        pixieDust: {
            name: "pixieDust",
            origin: fS.ORIGIN.CENTER,
            pose: {
                center: "Images/Items/pixieDust.png"
            }
        },
        starstone: {
            name: "startstone",
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