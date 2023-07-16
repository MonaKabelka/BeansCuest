namespace BeansCuest {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  export let dataForSave = {
    nameProtagonist: ""
  };

  export let mainPosition: [number, number] = [15, 100];
  export let secondaryPosition: [number, number] = [85, 100];

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = fS.Menu.create(transformMenu(menuDefinition), useCallbacks, "in-game-menu");
    gameMenu.close();
    let scenes: fS.Scenes = [
      { scene: scene1_1, name: "Scene 1.1" },
      { scene: scene1_2, name: "Scene 1.2" },
      { scene: scene2_1, name: "Scene 2.1" },
      { scene: scene3_1, name: "Scene 3.1" },
      { scene: scene4_1, name: "Scene 4.1" },
    ];

    fS.Speech.hide();
    fS.Progress.go(scenes);
  }
}