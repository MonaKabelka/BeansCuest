namespace BeansCuest {
    function getBigger(duration: number): fS.AnimationDefinition {
        return {
            start: { scaling: new f.Vector2(0, 0), translation: fS.positionPercent(50,50) },
            end: { scaling: new f.Vector2(1,1), translation: fS.positionPercent(50,50) },
            duration,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    function getSmaller(duration: number): fS.AnimationDefinition {
        return {
            end: { scaling: new f.Vector2(0, 0), translation: fS.positionPercent(50,50) },
            start: { scaling: new f.Vector2(1,1), translation: fS.positionPercent(50,50) },
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

    export const ANIMATIONS = {
        getBigger,
        getSmaller,
        portalTripping
    }
}