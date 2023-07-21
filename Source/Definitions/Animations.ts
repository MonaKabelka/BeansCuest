namespace BeansCuest {
    function getBigger(duration: number): fS.AnimationDefinition {
        return {
            start: { scaling: new f.Vector2(0, 0), translation: fS.positionPercent(50, 50) },
            end: { scaling: new f.Vector2(1, 1), translation: fS.positionPercent(50, 50) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function getSmaller(duration: number): fS.AnimationDefinition {
        return {
            end: { scaling: new f.Vector2(0, 0), translation: fS.positionPercent(50, 50) },
            start: { scaling: new f.Vector2(1, 1), translation: fS.positionPercent(50, 50) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function portalTripping(duration: number): fS.AnimationDefinition {
        return {
            start: { scaling: new f.Vector2(1, 1), rotation: 0 },
            end: { scaling: new f.Vector2(0, 0), rotation: 1200 },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function flyUp(duration: number, [x, y]: [number, number]): fS.AnimationDefinition {
        console.log(x, y);
        return {
            start: { translation: fS.positionPercent(x, y), scaling: new f.Vector2(1, 1) },
            end: { translation: fS.positionPercent(x, -100), scaling: new f.Vector2(0, 0) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function flyDown(duration: number, [x, y]: [number, number]): fS.AnimationDefinition {
        return {
            end: { translation: fS.positionPercent(x, y), scaling: new f.Vector2(1, 1) },
            start: { translation: fS.positionPercent(x, -100), scaling: new f.Vector2(0, 0) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function lillypadFlee(duration: number, [x, y]: [number, number]): fS.AnimationDefinition {
        return {
            start: { translation: fS.positionPercent(x, y) },
            end: { translation: fS.positionPercent(x, 150) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function lillypadReappear(duration: number, [x, y]: [number, number]): fS.AnimationDefinition {
        return {
            end: { translation: fS.positionPercent(x, y) },
            start: { translation: fS.positionPercent(x, 150) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    export const ANIMATIONS = {
        getBigger,
        getSmaller,
        portalTripping,
        flyUp,
        flyDown,
        lillypadFlee,
        lillypadReappear
    }
}