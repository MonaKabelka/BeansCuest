namespace BeansCuest {
    type TransitionName = "fade_in" | "pix4" | "pix1";
    type Transition<T extends TransitionName> = {
        alpha: `Images/Transitions/${T}.jpg`,
        edge: number,
        duration: number,
    }
    export let TRANSITIONS: Partial<Record<TransitionName, Transition<TransitionName>>> = {
        pix4: {
            alpha: "Images/Transitions/pix4.jpg",
            duration: 1,
            edge: 1
        },
        pix1: {
            alpha: "Images/Transitions/pix1.jpg",
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