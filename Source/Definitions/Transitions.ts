namespace BeansCuest {
    type TransitionName = "fade_in" | "inScene" | "portal" | "sceneChange" | "novelpage";
    type Transition<T extends TransitionName> = {
        alpha: `Images/Transitions/${T}.jpg`,
        edge: number,
        duration: number,
    }
    export let TRANSITIONS: Partial<Record<TransitionName, Transition<TransitionName>>> = {
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
    }
    export function makeTransition(name: TransitionName, duration?: number) {
        if (TRANSITIONS[name as keyof typeof TRANSITIONS]) {
            return fS.update(
                duration ? duration : TRANSITIONS[name as keyof typeof TRANSITIONS].duration,
                TRANSITIONS[name as keyof typeof TRANSITIONS].alpha,
                TRANSITIONS[name as keyof typeof TRANSITIONS].edge
            );
        }
        return fS.update(duration ? duration : 1);
    }
}