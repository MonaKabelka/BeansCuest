namespace BeansCuest {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  export let dataForSave = {
    fishingRod: false,
    moonstone: false,
    pixieDust: false,
    ladder: false,
    sunstone: false,
    starstone: false,

    novelpage1: false,
    novelpage2: false,
    novelpage3: false,
    novelpage4: false,
    novelpage5: false,
    novelpage6: false,
  };

  export const POSITIONS = {
    1: [50, 50] as [number, number],
    2: {
      1: [25, 50] as [number, number],
      2: [75, 50] as [number, number],
    },
    3: {
      1: [20, 50] as [number, number],
      2: [50, 50] as [number, number],
      3: [80, 50] as [number, number],
    }
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = fS.Menu.create(transformMenu(menuDefinition), useCallbacks, "in-game-menu");
    gameMenu.close();
    let scenes: fS.Scenes = [
      // { scene: scene1_1, name: "Scene 1.1" },
      // { scene: scene1_2, name: "Scene 1.2" },
      // { scene: scene2_1, name: "Scene 2.1" },
      { scene: scene3_1, name: "Scene 3.1" },
      // { scene: scene4_1, name: "Scene 4.1" },
      { scene: scene5, name: "Scene 5" },
      { scene: scene6, name: "Scene 6" }
    ];

    fS.Speech.hide();
    fS.Progress.go(scenes);
  }
}