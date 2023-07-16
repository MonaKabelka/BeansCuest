namespace BeansCuest {
    export type ItemDefinition = {
        name: string,
        origin: fS.ORIGIN,
        pose: {
            center: `Images/Items/${string}.png`,
        }
    }
    
    export const ITEMS= {
        moonstone: {
            name: "Moonstone",
            description: "TEST",
            image:  "Images/Items/moonstone.png",
            static: true
        },
        sunstone: {
            name: "Sunstone",
            description: "",
            image:  "Images/Items/sunstone.png",
            static: true
        },
        startstone: {
            name: "Starstone",
            description: "",
            image:  "Images/Items/starstone.png",
            static: true
        },
        ladder: {
            name: "Ladder",
            description: "",
            image:  "Images/Items/ladder.png",
            static: true
        },
        fishingRod: {
            name: "Fising Rod",
            description: "",
            image:  "Images/Items/fising_rod.png",
            static: true
        },
    }
}