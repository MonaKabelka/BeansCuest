namespace BeansCuest {
    export type MenuAction = "inventory" | "save" | "load" | "credits" | "volumeUp" | "volumeDown" | "novelPages" | "toggleMenu";
    export type MenuDefinition = Record<MenuAction, {
        label: string,
        callback: () => Promise<void>,
        code: f.KEYBOARD_CODE
    }>;
}