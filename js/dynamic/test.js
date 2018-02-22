var canvas;
var engine;
var scene;
var light;
var camera;
var flag=false;
var animation;
document.addEventListener("DOMContentLoaded", startFunction, false);
(function (BABYLON) {
      var MyFreeCameraMouseInput = (function () {
        function MyFreeCameraMouseInput() {
          
        }
        
        var _this;
        
        MyFreeCameraMouseInput.prototype.moveForward = function () {
          
          var camera = _this.camera;
          if(flag==false){
            flag=true;
            speed = camera._computeLocalCameraSpeed()/10;
          }
          camera._localDirection.copyFromFloats(0, 0, speed);
          camera.getViewMatrix().invertToRef(camera._cameraTransformMatrix);
          BABYLON.Vector3.TransformNormalToRef(camera._localDirection, camera._cameraTransformMatrix, camera._transformedDirection);
          camera.cameraDirection.addInPlace(camera._transformedDirection);
          
        };
        
        MyFreeCameraMouseInput.prototype.attachControl = function (element, noPreventDefault) {
          _this = this;
          var engine = this.camera.getEngine();
          if (!this._pointerInput) {
            this._pointerInput = function (p, s) {
              if (p.type === BABYLON.PointerEventTypes.POINTERDOWN) {
                
                _this.camera.getScene().registerBeforeRender(_this.moveForward);
                
              }else if (p.type === BABYLON.PointerEventTypes.POINTERUP) {
                
                _this.camera.getScene().unregisterBeforeRender(_this.moveForward);
                
              }
            };
          }
          this._observer = this.camera.getScene().onPointerObservable.add(this._pointerInput, BABYLON.PointerEventTypes.POINTERDOWN | BABYLON.PointerEventTypes.POINTERUP );
        };
        MyFreeCameraMouseInput.prototype.detachControl = function (element) {
          if (this._observer && element) {
            this.camera.getScene().onPointerObservable.remove(this._observer);
            this._observer = null;
          }
        };
        MyFreeCameraMouseInput.prototype.getTypeName = function () {
          return "MyFreeCameraMouseInput";
        };
        MyFreeCameraMouseInput.prototype.getSimpleName = function () {
          return "mouse2";
        };
    
        return MyFreeCameraMouseInput;
      }());
      BABYLON.MyFreeCameraMouseInput = MyFreeCameraMouseInput;
      BABYLON.CameraInputTypes["MyFreeCameraMouseInput"] = MyFreeCameraMouseInput;
    })(BABYLON || (BABYLON = {}));





function startFunction() {
  if (BABYLON.Engine.isSupported()) {
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    engine.enableOfflineSupport = false;
    scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 1,1);
    // cameRA  ......
    //Camera
      camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(3813,619,3678),scene);
      //camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(3718,101,5016),scene);
      //camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(3745,342,1045),scene);
      //camera.setPosition(new BABYLON.Vector3(-1000,230,3200));
      camera.attachControl(canvas, false);
      camera.speed =17;
      camera.rotation.y = Math.PI;
      camera.fov = 0.6;
      camera.noRotationConstraint= true;
      scene.gravity = new BABYLON.Vector3(0, -0.04,0);
      camera.ellipsoid = new BABYLON.Vector3(1,1,1);
      scene.collisionsEnabled = true;
      camera.checkCollisions = true;
      camera.applyGravity = true;
      camera.inputs.add(new BABYLON.MyFreeCameraMouseInput());
    //camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-672,80,-400),scene);
  
    //LIGHT........   
    //var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(-559, 80, -75), scene); 
    //var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(-672,90,-10), scene);
    /*var light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(3729,16,3018), scene);
    light0.intensity = 0.025;
    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.groundColor = new BABYLON.Color3(0, 0, 0);*/
    //light0.specular = new BABYLON.Color3(1, 1, 1);
   //var light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(1985,500,-2441), scene);
  // var light= new BABYLON.PointLight("Omni0", new BABYLON.Vector3(1985,500,-2441), scene); 
   var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1985,500,-2441), scene);
    //light.position = new BABYLON.Vector3(-400.982,220.1909,3212);
    light.intensity =0.5;
    //light.specularPower = 132;
    light.specular = new BABYLON.Color3(1, 1, 1);
    //light.position = camera.position;
    //light.parent=camera;*/
    //..........trail purpose...................
    /* var box1 = new BABYLON.Mesh.CreateBox("box", 5, scene);
        box1.position = new BABYLON.Vector3(-672,140,-10);
        box1.checkCollisions = true;
         var material1 = new BABYLON.StandardMaterial("material", scene);
        material1.emissiveColor = new BABYLON.Color3(0,0.75,0);
        box1.material= material1;*/
        

    //---------------Importing Babylon File---------------------------------------
    engine.loadingUIText = "Loading may take several minutes depending on your internet connection and system capabilities";

        engine.displayLoadingUI();
    /*BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "wall_stand_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.x = -Math.PI;
      //mesh.position = new BABYLON.Vector3(3200,320,900);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });*/

     
   BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "sexy.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
     mesh.rotation.y = 2*Math.PI;
     mesh.rotation.x = 1.7*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,0.41,0.70);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
   BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "bold.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,0.3,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
   BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "flirtatious.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.y = Math.PI;
      mesh.rotation.x = 1.61*Math.PI;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(0.95, 0.95, 0.25);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
   BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "despicable.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.x = Math.PI/3;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(0.25,0.41,0.95);//(65,105,255)
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "glass_text.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.x = 1.5*Math.PI;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/glass.jpg",scene);
      material.alpha = 0.2;
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "go_under1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.x = 3/2*Math.PI;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(0.25,0.41,1);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "heart1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.x = Math.PI/3;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(255,105,180);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "love1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.x = 3/2*Math.PI;
      //mesh.position.z +=450; 
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_2.jpg",scene);
     // material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/floor-tile.jpg",scene);
       material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window4.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_4.jpg",scene);
      material.alpha = 0.7;
      //material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window5.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_5.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window6.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_6.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,0,0);
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Window_glass.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      mesh.position.z = +10;
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/window_6.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,1,1);
      material.alpha=0.2;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "left_pillar.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/left_pillar.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "right_pillar.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/right_pillar.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "big_pillar.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/big_pillar.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "front_corner_pillar1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/front_corner_pillar1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "front_corner_pillar2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/front_corner_pillar2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "front_corner_pillar3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/front_corner_pillar3.jpg",scene);
     // material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "right_corner_pillar1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.y = Math.PI/2;
      mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/right_corner_pillar1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "right_corner_pillar2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.y = Math.PI;
      mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/right_corner_pillar2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "right_corner_pillar3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      mesh.rotation.y = -Math.PI/2;
      mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/right_corner_pillar3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "left_corner_pillar1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
     mesh.rotation.y = -Math.PI/2;
      mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/left_corner_pillar1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "left_corner_pillar2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
     mesh.rotation.y = Math.PI;
    mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/left_corner_pillar2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "left_corner_pillar3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
     mesh.rotation.y = -Math.PI/2;
      mesh.rotation.x = 2*Math.PI;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
     material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/left_corner_pillar3.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    
    //.......... tv.............
    /*
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "tv.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      var mesh1 = newMeshes[1];
      var mesh2= newMeshes[2];
      var mesh3 = newMeshes[3];
       var videoMat1 = new BABYLON.StandardMaterial("textVid", scene);
         // videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Jolly LLB.mp4"], scene, false);
           videoMat1.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Gounder.mp4"], scene, false);
           //videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["Party On My Mind.mp4"], scene, false);
         // videoMat1.backFaceCulling = false;
          mesh.material=videoMat1;
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      /*var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/big_pillar.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();*/
    //});
    /* BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "tv_glass.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];

        var videoMat1 = new BABYLON.StandardMaterial("textVid", scene);
         // videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Jolly LLB.mp4"], scene, false);
           videoMat1.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Gounder.mp4"], scene, false);
           //videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["Party On My Mind.mp4"], scene, false);
         // videoMat1.backFaceCulling = false;
          mesh.material=videoMat1;
          /*var music1 = new BABYLON.Sound("music", "assets/Gounders.mp3",
        scene, null, { loop: true, autoplay: true, spatialSound: true });
        music1.attachToMesh(plane6);
          music1.updateOptions({
         maxDistance:800

           });*/
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      /*var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/big_pillar.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();*/
    //});
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Door_porch.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Door_porch.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "Door.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Door.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_1256.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_1256.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_4.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_4.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
       BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_5.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_1256.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
      //material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
        BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/", "pillar_6.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/pillar_1256.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "Floor1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/Floor1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "Floor2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/Floor2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
       BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "Floor3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/Floor3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
        BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "Floor4.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/Floor4.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });

     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "mud.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/mud.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "mud_holder.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/Floors/mud_holder_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/mud_holder.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "plant_leaves.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/palmLeaf.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Floors/", "plant_stems.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Floors/palmLeaf.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(0,0.4,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer_frame1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/drawer_frame1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer_frame2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/drawer_frame2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawers.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/drawers.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawers_box.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/drawers_box.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "GD_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer4.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer5.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer6.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer7.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer8.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer9.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/drawer/", "drawer10.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/drawer/GD.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/man1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "underwear1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/underwear1_A.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/underwear1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "bra1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/underwear1_A.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/bra1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/man2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man2_bra.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/man2_bra.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man2_bra._buckle-steel.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/steel.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man2_underwear.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/man2_underwear.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/man3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "bra3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/bra3.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "man3_underwear3.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/underwear3_C.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      /*BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/Bras/", "left_bra_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      material.diffuseTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra1.png",scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra_1.jpg",scene);
      //material.opacityTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra_1a.jpg",scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra_1a.jpg",scene);
      material.diffuseTexture.hasAlpha = true;
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     //material.alpha=0.2;
     //mesh.alpha = 0.2;
     material.backFaceCulling = false;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
      
    });*/


 

  var plane = BABYLON.MeshBuilder.CreateBox("plane", {height:60,width: 60}, scene);
  plane.position = new BABYLON.Vector3(2300,500,-3400);
  plane.rotation.y = Math.PI/2;
  var material = new BABYLON.StandardMaterial("material", scene);
  material.opacityTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra_1a.jpg",scene);
  material.diffuseTexture = new BABYLON.Texture("assets/storewireframe/Bras/left_bra1.png",scene);
  material.diffuseTexture.alpha= true;
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;

      //material.checkReadyOnlyOnce = true;
      //material.freeze();
      plane.material= material;
      //mesh.checkCollisions = true;
      //mesh.freezeWorldMatrix();

  
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "Ceiling_spheres.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/Roof_top._ref_bump.jpg", scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/Bras/steel.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;

      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();

    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "Plaster_light_small_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/Plaster_light_small_1_2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "Plaster_light_small_2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/Plaster_light_small_1_2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "Plaster_light1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/Plaster_light1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    //..wall..
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "left_lower_wall.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_wall_upper.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_wall_upper.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_lower_wall1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_lower_wall1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_lower_wall2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_lower_wall2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "left_upper_wall.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/left_upper_wall.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "left_lower_strip.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_strip.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_lower_strip1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_lowerstrip1.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_lower_strip2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_lower_strip2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "right_upperwall.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/right_upperwall.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "right_lower_wall.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/right_lower_wall.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "right_lower_strip.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/right_lower_strip.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "left_side_wall.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/left_side_wall.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "front_porch.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/front_porch.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "left_curve.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/left_curve.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "right_curve.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/right_curve.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/walls/", "wall_hanger093.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/walls/left_lower_wall_N.jpg",scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/walls/right_curve.jpg",scene);
      material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
      //.........ceiling_light.............
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "ceiling_square_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/ceiling_squyare.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "ceiling_square_2.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/ceiling_square_2.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });

     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "left_rect_ceiling_1.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/left_rect_ceiling.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "ceiling_square_lights.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      //var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      //material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/cleft_rect_ceiling.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(1,1,1);
     // material.alpha=0.5;
      //material.checkReadyOnlyOnce = true;
      //material.freeze();
      //mesh.material= material;
      //mesh.checkCollisions = true;
      //mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "ceiling_main.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/ceiling_main.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     //.............ceiling...............
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "ceiling_main_front.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/ceiling_main_front.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "ceiling_main_left.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/ceiling_main_left.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "ceiling_main_right.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/ceiling_main_right.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling/", "ceiling_frame.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling/ceiling_frame.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
     BABYLON.SceneLoader.ImportMesh("", "assets/storewireframe/ceiling_light/", "ceiling_light_RED_edge.babylon", scene, function (newMeshes){
      var mesh = newMeshes[0];
      //mesh.rotation.y = Math.PI/2;
      //mesh.position = new BABYLON.Vector3(74,208,42);
      //Applying Texture
      var material = new BABYLON.StandardMaterial("material", scene);
      //material.bumpTexture = new BABYLON.Texture("assets/storewireframe/ceiling/plaster_light_ALL_N.jpg",scene);
      material.emissiveTexture = new BABYLON.Texture("assets/storewireframe/ceiling_light/Light_Red_edge.jpg",scene);
      //material.emissiveColor= new BABYLON.Color3(0,1,0);
     // material.alpha=0.5;
      material.checkReadyOnlyOnce = true;
      material.freeze();
      mesh.material= material;
      mesh.checkCollisions = true;
      mesh.freezeWorldMatrix();
    });
    var tvbox = BABYLON.MeshBuilder.CreateBox("box", {height: 400,width:500,depth:05}, scene);
    tvbox.position = new BABYLON.Vector3(3816,990,-3425);
    tvbox.rotation.y = Math.PI;
    var videoMat1 = new BABYLON.StandardMaterial("textVid", scene);
         // videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Jolly LLB.mp4"], scene, false);
           videoMat1.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Gounder1.mp4"], scene, false);
           //videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["Party On My Mind.mp4"], scene, false);
          videoMat1.backFaceCulling = false;
          tvbox.material=videoMat1;
         var music1 = new BABYLON.Sound("music", "assets/Gounders.mp3",
        scene, null, { loop: true, autoplay: true, spatialSound: true });
        music1.attachToMesh(tvbox);
          music1.updateOptions({
         maxDistance:1000

           });
          // .......tv frame..............
          var tvframe1 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 410, width:10, depth:07}, scene);
            tvframe1.position = new BABYLON.Vector3(4071,990,-3425);
           var tvframe11 = tvframe1.clone("tvframe11");
            tvframe11.position = new BABYLON.Vector3(3561,990,-3425);
            var tvframe2 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 10, width:520, depth:07}, scene);
            tvframe2.position = new BABYLON.Vector3(3816,790,-3425);
           var tvframe21 = tvframe2.clone("tvframe21");
            tvframe21.position = new BABYLON.Vector3(3816,1190,-3425);
       var plane360 = BABYLON.MeshBuilder.CreateBox("plane360", {height: 60, width:60, depth:02}, scene);
            //plane5.position = new BABYLON.Vector3(860.2041,135,2568.254);
            plane360.position = new BABYLON.Vector3(2216,460,-3600);
            plane360.rotation.y = Math.PI;
            plane360.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
            //plane360.rotation.y = Math.PI/3;
            //plane5.position = new BABYLON.Vector3(10,5,-200);
            //plane1.checkCollisions = true;
            var material360 = new BABYLON.StandardMaterial("material1", scene);
            //material360.emissiveTexture = new BABYLON.Texture("assets/mobpic.jpg",scene);
            material360.emissiveTexture = new BABYLON.Texture("assets/mob1.png",scene);
            //material360.emissiveColor = new BABYLON.Color3(1,0,0);
            //material360.alpha = 0.2;
            plane360.material=material360;

            //plane360.opacity = 02;
            //plane5.alpha = 1;
           // material1.alpha = 0.2;
            //plane5.isVisible = false;
            plane360.actionManager = new BABYLON.ActionManager(scene);
            plane360.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){ 
              plane360.material.emissiveColor = BABYLON.Color3.Blue();
             }));
            plane360.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(ev){
          //mesh.material.emissiveColor = BABYLON.Color3.Black();
          var material360 = new BABYLON.StandardMaterial("material1", scene);
            material360.emissiveTexture = new BABYLON.Texture("assets/mob1.png",scene);
            plane360.material=material360;
             //plane360.material = material360;
          }));
             var animateCameraPosition = function (camera, fromPosition, toPosition)
            {

                var animCamPosition = new BABYLON.Animation("animCam", "position", 15,BABYLON.Animation.ANIMATIONTYPE_VECTOR3,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                                  
                var keysPosition = [];

                keysPosition.push({
                    frame: 0,
                    value: fromPosition
                });

                keysPosition.push({
                    frame: 100,
                    value: toPosition
                });

                animCamPosition.setKeys(keysPosition);
                camera.animations.push(animCamPosition);
                scene.beginAnimation(camera, 0, 100, false);
            };
    document.getElementById("left").onclick = function () {
      /*if(divStatus == false) {
       camera.rotation.y -=0.03;
      }*/
      animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(5887,619,-3787))
      camera.rotation.y = Math.PI/2;
    };

    document.getElementById("right").onclick = function () {
      /*if(divStatus == false) {
        camera.rotation.y +=0.03;
      }*/
      //animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(1573,551,-4049))
      animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(1902,619,-3562))
      camera.rotation.y = -Math.PI/2;
    };

    document.getElementById("forward").onclick = function () {
      /*if(divStatus == false) {
        camera.fov -=0.03;
      }*/
       //animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(2321,531,-1720))
       animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(3813,619,-4744))
       camera.rotation.y = Math.PI;
    };

    document.getElementById("back").onclick = function () {
    alert(camera.position.x+" ,"+camera.position.y+","+camera.position.z);
      //camera.rotation.x +=0.1;
      if(divStatus == false) {
        camera.fov += 0.03;
      }
    };
    
    scene.executeWhenReady(function () {
        if (scene.isReady()){
          engine.hideLoadingUI();

        }

    engine.runRenderLoop(function () {
      camera.rotation.x = 0;
      scene.render();
    });
    });

    // Watch for browser canvas resize events
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }
}

