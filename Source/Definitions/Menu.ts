namespace BeansCuest {
    export type MenuAction = "inventory" | "save" | "load" | "credits" | "volumeUp" | "volumeDown" | "novelPages";
    export type MenuDefinition = Record<MenuAction, {
        label: string,
        callback: () => Promise<void>
    }>;
}