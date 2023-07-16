namespace BeansCuest {
    export const ALL_NOVELPAGE_NAMES = ["novelpage1", "novelpage2", "novelpage3", "novelpage4", "novelpage5", "novelpage6"] as const;
    export type NovelpageName = (typeof ALL_NOVELPAGE_NAMES)[number];
    type Novelpage = {
        name: NovelpageName,
        background: `Images/Novelpages/${NovelpageName}.png`
    }
    type NovelpageDefinition = Record<NovelpageName, Novelpage>;
    export const NOVELPAGES: NovelpageDefinition = {
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
    }
}