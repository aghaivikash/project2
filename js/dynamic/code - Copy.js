var canvas;
var engine;
var scene;
var light;
var camera;
var counter;
var is_popup_open = false;
var laptop_loaded = false;
var laptop_clones = false;
var popup_camera;
var product_name;
var animation;
var second_floor_assets_loaded = false;
/*var create = function (scene) {
    var canvas = new BABYLON.ScreenSpaceCanvas2D(scene, {
        id: "ScreenCanvas",
        size: new BABYLON.Size(300, 100),
        backgroundFill: "#4040408F",
        backgroundRoundRadius: 50,
        children: [
            new BABYLON.Text2D("click me", {
                id: "text",
                marginAlignment: "h: center, v:center",
                fontName: "20pt Arial",
            })
        ]
    });
    canvas.position = new BABYLON.Vector3(0,100,50);
    //return canvas;
};*/

document.addEventListener("DOMContentLoaded", startFunction, false);

function startFunction() {
    if (BABYLON.Engine.isSupported()) {
    	canvas = document.getElementById("renderCanvas");
    	engine = new BABYLON.Engine(canvas, true);
    	engine.enableOfflineSupport = false;
    	scene = new BABYLON.Scene(engine);
    	scene.clearColor = new BABYLON.Color3(0, 0, 0);

    	//Camera
    	camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-1800,230,3200),scene);
         //camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, BABYLON.Vector3.Zero(), scene);
         //camera.setPosition(new BABYLON.Vector3(-1000,230,3200));
    	camera.attachControl(canvas, false);
      //create(scene);
        //camera.upperBetaLimit = Math.PI / 2;
       //camera.lowerRadiusLimit = 4;
    	camera.speed =17;
    	camera.rotation.y = Math.PI/2;
        camera.fov = 0.6;
        camera.noRotationConstraint= true;
        scene.gravity = new BABYLON.Vector3(0, -0.04,0);
        camera.ellipsoid = new BABYLON.Vector3(1,1,1);
        scene.collisionsEnabled = true;
		camera.checkCollisions = true;
		camera.applyGravity = true;

        //......................MY CODE ON 20 MARCH 2017..................
        /*var plane5 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 30, width:30, depth:30}, scene);
            plane5.position = new BABYLON.Vector3(860.2041,135,2568.254);
            //plane5.rotation.x = Math.PI/6;
            //plane5.rotation.y = Math.PI/3;
            //plane5.position = new BABYLON.Vector3(10,5,-200);
            //plane1.checkCollisions = true;
            var material1 = new BABYLON.StandardMaterial("material1", scene);
            material1.emissiveColor = new BABYLON.Color3(1,0,0);
            plane5.material=material1;*/
            var plane6 = BABYLON.MeshBuilder.CreateBox("plane6", {height: 300, width:400, depth:0}, scene);
            plane6.position = new BABYLON.Vector3(-280.2041,260,4130.254);
            //plane5.position = new BABYLON.Vector3(10,5,-200);
            //plane1.checkCollisions = true;
            //var material2 = new BABYLON.StandardMaterial("material1", scene);
            //material2.emissiveTexture = new BABYLON.Texture("assets/sony-tv.jpg", scene);
            //plane6.material=material2;

            
             // Video material
           var videoMat = new BABYLON.StandardMaterial("textVid", scene);
          //videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Jolly LLB.mp4"], scene, false);
           videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Gounder.mp4"], scene, false);
           //videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["Party On My Mind.mp4"], scene, false);
          videoMat.backFaceCulling = false;
          plane6.material=videoMat;
          var tv2 = plane6.clone("tv2");
            tv2.position =new BABYLON.Vector3(-650,295,2450);
            tv2.rotation.z=Math.PI;
            //...................border1.......................
            var border = BABYLON.MeshBuilder.CreateBox("plane1", {height: 302, width:10, depth:0}, scene);
            border.position = new BABYLON.Vector3(-485.2041,260,4130.254);
           var border1 = border.clone("border1");
            border1.position = new BABYLON.Vector3(-75,260,4130.254);

            var border2 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 10, width:420, depth:0}, scene);
            border2.position = new BABYLON.Vector3(-280.2041,415,4130.254);
             var border21 = border2.clone("border21");
             border21.position = new BABYLON.Vector3(-280.2041,105,4130.254);
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/sony-tv21.jpg",scene);
            border2.material=material;
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/sony-tv23.jpg",scene);
            border.material=material1;
            var material2 = new BABYLON.StandardMaterial("material", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/sony-tv24.jpg",scene);
            border1.material=material2;
            var material3 = new BABYLON.StandardMaterial("material", scene);
            material3.emissiveTexture = new BABYLON.Texture("assets/sony-tv22.jpg",scene);
            border21.material=material3;
             //border for tv2..on right side wall..
              var tv2_border = border.clone("tv2_border");
              tv2_border.position = new BABYLON.Vector3(-445,295,2450);
             var tv2_border1 = border1.clone("tv2_border1");
              tv2_border1.position = new BABYLON.Vector3(-855,295,2450);
              var tv2_border2 = border2.clone("tv2_border2");
              tv2_border2.position = new BABYLON.Vector3(-650,450,2450);
              var tv2_border21 = border21.clone("tv2_border21");
              tv2_border21.position = new BABYLON.Vector3(-650,140,2450);


          //..............border................
           /*var border = BABYLON.MeshBuilder.CreateBox("plane1", {height: 102, width:5, depth:0}, scene);
            border.position = new BABYLON.Vector3(-371.5,220,2450);
            var border1 = border.clone("border1");
             border1.position = new BABYLON.Vector3(-528.5,220,2450);

              var border2 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 05, width:162, depth:0}, scene);
            border2.position = new BABYLON.Vector3(-450,272.5,2450);
             var border21 = border2.clone("border21");
             border21.position = new BABYLON.Vector3(-450,167.5,2450);
             var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/sony-tv1.jpg",scene);
            border2.material=material;
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/sony-tv4.jpg",scene);
            border.material=material1;
            var material2 = new BABYLON.StandardMaterial("material", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/sony-tv2.jpg",scene);
            border1.material=material2;
            var material3 = new BABYLON.StandardMaterial("material", scene);
            material3.emissiveTexture = new BABYLON.Texture("assets/sony-tv3.jpg",scene);
            border21.material=material3;
          //........................................
            tv2.freezeWorldMatrix();
            var tv3 = tv2.clone("tv3");
            tv3.position =new BABYLON.Vector3(-650,220,2450);
            // Video material
          /* var videoMat = new BABYLON.StandardMaterial("textVid", scene);
           videoMat.emissiveTexture = new BABYLON.VideoTexture("video", ["assets/Jolly LLB.mp4"], scene, false);
          videoMat.backFaceCulling = false;*/

    /*var mat = new BABYLON.StandardMaterial("mat", scene);
    
    var videoTexture = new BABYLON.VideoTexture("video", ["assets/babylonjs.mp4", "assets/babylonjs.webm"], scene, true, true);

    mat.diffuseTexture = videoTexture;
    tv3.material = mat;*/
    
    //scene.onPointerUp = function () {
        //videoTexture.video.play();
    //}
          // tv3.material = videoMat;
            //tv3.rotation.z=Math.PI;
           // tv3.freezeWorldMatrix();
            //........................code on 21 march 2017..............
             /*var plane9 = BABYLON.MeshBuilder.CreateBox("plane9", {height: 80, width:90, depth:2}, scene);
             plane9.rotation.x=Math.PI/2;
            plane9.position = new BABYLON.Vector3(-410.2041,72,2720.254);*/
            //var light = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(-500.2041,460,3000.254), scene);
            //light.intensity =0.21;
            //light.parent=camera;
            //......................border for tv3..........................30/03/2017.........
            /*var border1a = border.clone("border1a");
            border1a.position = new BABYLON.Vector3(-571.5,220,2450);
            var border11 = border1.clone("border11");
            border11.position = new BABYLON.Vector3(-728.7,220,2450);
            var border2a = border2.clone("border2a");
            border2a.position = new BABYLON.Vector3(-650,272.5,2450);
            var border211 = border21.clone("border211");
            border211.position = new BABYLON.Vector3(-650,167.5,2450);*/
            //........................31/03/2017..............................................................
          var plane71 = BABYLON.MeshBuilder.CreateBox("plane6", {height: 200, width:300, depth:0}, scene);
          plane71.position = new BABYLON.Vector3(1250.2041,265,3500.254);
          plane71.rotation.y = Math.PI/2;
          plane71.material = videoMat;
          var border_71 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 202, width:07, depth:0}, scene);
          border_71.position = new BABYLON.Vector3(1250.2041,265,3653.254);
          border_71.rotation.y =Math.PI/2;
          var border_72 = border_71.clone("border_71");
          border_72.position = new BABYLON.Vector3(1250.2041,265,3347.254);
          var border_73 = BABYLON.MeshBuilder.CreateBox("plane1", {height: 07, width:312.5, depth:0}, scene);
          border_73.position = new BABYLON.Vector3(1250.2041,368.65,3500.254);
          border_73.rotation.y =Math.PI/2;
          var border_74 = border_73.clone("border_74");
          border_74.position = new BABYLON.Vector3(1250.2041,161.35,3500.254);
          border_71.material=material1;
          border_72.material=material2;
          border_73.material=material;    
          border_74.material=material3;
         //.........................................................................   
        
        //Light
        //light = new BABYLON.SpotLight("Spot0", new BABYLON.Vector3(-400.982,230.1909,3212.48975), new BABYLON.Vector3(0, -1, -20), 1.5708, 10, scene);
        //light.intensity = 0.3;
        //light.specularColor = new BABYLON.Color3(0.0,0.4,0.6);
        //light.specularPower = 32;
        //light.parent=camera;
        var light = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0, 0, 0), scene);
        //light.position = new BABYLON.Vector3(-400.982,220.1909,3212);
        light.intensity =0.5;
        light.specularPower = 132;
        light.specular = new BABYLON.Color3(1, 1, 1);
        light.position = camera.position;
        light.parent=camera;
        //...........................now close it.........
       /* var light2 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(-2000,250,3300), scene);
        light2.specular = new BABYLON.Color3(0, 0, 0);
        light2.intensity =0.4;
        light2.specularPower = 52;
        //light.parent=camera;*/
        //....27-03-2017.......................................
        var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 60, 1.5, 1.5, 20,1,scene, false);
        cylinder.position =new BABYLON.Vector3(-975,200,3006);
        //Applying Texture
        var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/steel1.jpg",scene);
            //material.emissiveColor = new BABYLON.Color3(202, 204, 206);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            cylinder.material= material;
            cylinder.checkCollisions = true;
            cylinder.freezeWorldMatrix();
        var cylinder2 = cylinder.clone("cylinder2");
        cylinder2.position =new BABYLON.Vector3(-975,200,2978);
        var cylinder3 = BABYLON.Mesh.CreateCylinder("cylinder", 28, 1.5, 1.5, 20,1,scene, false);
        cylinder3.position =new BABYLON.Vector3(-975,218,2992);
        cylinder3.rotation.x =Math.PI/2;
        //Applying Texture
            cylinder3.material= material;
            cylinder3.checkCollisions = true;
            cylinder3.freezeWorldMatrix();
        var cylinder4 =cylinder3.clone("cylinder4");
        cylinder4.position =new BABYLON.Vector3(-975,182,2992);
        //......clone handle........................................
        var cylinder1 = cylinder.clone("cylinder1");
        cylinder1.position = new BABYLON.Vector3(-975,200,3475);
        var cylinder21 = cylinder2.clone("cylinder21");
        cylinder21.position = new BABYLON.Vector3(-975,200,3447);
        var cylinder31 = cylinder3.clone("cylinder31");
        cylinder31.position = new BABYLON.Vector3(-975,218,3460.5);
        var cylinder41 = cylinder4.clone("cylinder41");
        cylinder41.position = new BABYLON.Vector3(-975,182,3460.5);


     //.......................................................my code........................................................

        /*var light1 = new BABYLON.SpotLight("Spot1", new BABYLON.Vector3(-729.982,178.1909,3212.48975), new BABYLON.Vector3(-5, -2, -20), 1.5708, 10, scene);
        //light1.diffuse = new BABYLON.Color3(1, 0, 0);
        light1.specular = new BABYLON.Color3(1, 1, 1);
       //light1.intensity = 0.45;
       var light2 = new BABYLON.SpotLight("Spot2", new BABYLON.Vector3(-460.982,178.1909,3512.48975), new BABYLON.Vector3(-5, -8, 20), 1.5708, 10, scene);
        //light2.diffuse = new BABYLON.Color3(1, 0, 0);
        light2.specular = new BABYLON.Color3(1, 1, 1);
        light2.intensity = 0.45;
       var light3 = new BABYLON.SpotLight("Spot3", new BABYLON.Vector3(31.982,178.1909,3412.48975), new BABYLON.Vector3(5, -2, -20), 1.5708, 10, scene);
        //light3.diffuse = new BABYLON.Color3(1, 0, 0);
        light3.specular = new BABYLON.Color3(1, 1, 1);
       //light3.intensity = 0.45;
       var light4 = new BABYLON.SpotLight("Spot4", new BABYLON.Vector3(110.982,178.1909,2512.48975), new BABYLON.Vector3(-5, -2, 20), 1.5708, 10, scene);
        //light4.diffuse = new BABYLON.Color3(1, 0, 0);
        light4.specular = new BABYLON.Color3(1, 1, 1);
        light4.intensity = 0.45;
       var light5 = new BABYLON.SpotLight("Spot5", new BABYLON.Vector3(90.982,200.1909,3412.48975), new BABYLON.Vector3(0, 0, -35), 1.5, 8, scene);
        //light5.diffuse = new BABYLON.Color3(1, 0, 0);
       light5.specular = new BABYLON.Color3(1, 1, 1);
       light5.intensity = 0.55;
      var light6 = new BABYLON.SpotLight("Spot6", new BABYLON.Vector3(-1165.982,230.1909,4119.48975), new BABYLON.Vector3(0, -10, -20),1.5, 6, scene);
        light6.diffuse = new BABYLON.Color3(1, 1, 1);
        light6.specular = new BABYLON.Color3(1, 1, 1);
        light6.intensity = 0.45;
        var light7 = new BABYLON.SpotLight("Spot7", new BABYLON.Vector3(700.982,426.1909,3419.48975), new BABYLON.Vector3(-10, -10, 5), 1, 6, scene);
        //light7.diffuse = new BABYLON.Color3(1, 0, 0);
        light7.specular = new BABYLON.Color3(1, 1, 1);
        light7.intensity = 0.45;*/

    	//---------------Importing Babylon File---------------------------------------//
    	engine.loadingUIText = "Loading may take several minutes depending on your internet conncetion and system capabilities";

        engine.displayLoadingUI();

        //Logo
        BABYLON.SceneLoader.ImportMesh("", "assets/", "Aghai_logo.babylon", scene, function (newMeshes){
            var mesh = newMeshes[0];
            mesh.checkCollisions = true;
            mesh.position.y -= 270;
            mesh.freezeWorldMatrix();

            var mesh1 = newMeshes[1];
            mesh1.checkCollisions = true;
            mesh1.position.y -= 270;
            mesh1.freezeWorldMatrix();
        });

    	//Floor
    	BABYLON.SceneLoader.ImportMesh("", "assets/", "floor.babylon", scene, function (newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
			//material.emissiveTexture = new BABYLON.Texture("assets/floor.jpg",scene);
             material.emissiveTexture = new BABYLON.Texture("assets/mall.jpg", scene);
            material.emissiveTexture.uScale = 05;
            material.emissiveTexture.vScale = 05;
            material.alpha=0.6;
			material.checkReadyOnlyOnce = true;
            material.freeze();
			mesh.material= material;
			mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
    	});

        //Reception Counter
        BABYLON.SceneLoader.ImportMesh("","assets/", "round_table.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            var mesh1 = newMeshes[1];
            var mesh2 = newMeshes[2];
            var mesh3 = newMeshes[3];

            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/rt2_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/rt2rt2.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/rt4_NormalsMap.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/rt4.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            mesh2.material = material1;
            mesh2.checkCollisions = true;
            mesh2.freezeWorldMatrix();

            var material2 = new BABYLON.StandardMaterial("material2", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/rt1.jpg", scene);
            material2.checkReadyOnlyOnce = true;
            material2.freeze();
            mesh3.material = material2;
            mesh1.material=material2;
            mesh3.checkCollisions = true;
            mesh3.freezeWorldMatrix();

            /*var material3 = new BABYLON.StandardMaterial("material2", scene);
            material3.emissiveTexture = new BABYLON.Texture("assets/do.jpg", scene);
            material3.checkReadyOnlyOnce = true;
            material3.freeze();
            mesh1.material = material3;
            mesh1.checkCollisions = true;
            mesh1.freezeWorldMatrix();*/
            
            //-------Second Table-------------------------//
            var cmesh = mesh.clone("cmesh");
            cmesh.position.x += 800;
            cmesh.freezeWorldMatrix();

            var cmesh2 = mesh1.clone("cmesh2");
            cmesh2.position.x += 800;
            cmesh2.freezeWorldMatrix();

            var cmesh3 = mesh2.clone("cmesh3");
            cmesh3.position.x += 800;
            cmesh3.freezeWorldMatrix();

            var cmesh4 = mesh3.clone("cmesh4");
            cmesh4.position.x += 800;
            cmesh4.freezeWorldMatrix();
        });

        //IPAD 
        BABYLON.SceneLoader.ImportMesh("","assets/", "ipad.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.position.y -=8;
            mesh.rotation.x = Math.PI/2;
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/ipad.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.rotation.x = Math.PI/6;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

            var ipad2 = mesh.clone("ipad2");
            ipad2.position.x +=150;
            ipad2.position.z +=158;
            //ipad2.rotation.x  =Math.PI/6;
            ipad2.rotation.y = -Math.PI/2;
            ipad2.checkCollisions = true;
            ipad2.freezeWorldMatrix();

            var ipad3 = mesh.clone("ipad3");
            ipad3.position.z +=300;
            ipad3.rotation.y = Math.PI;
            //ipad3.rotation.x  =Math.PI/6;
            ipad3.checkCollisions = true;
            ipad3.freezeWorldMatrix();

            var ipad4 = ipad2.clone("ipad4");
            ipad4.position.x -=320;
            //ipad4.rotation.x  =Math.PI/6;
            ipad4.rotation.y = Math.PI/2;
            ipad4.checkCollisions = true;
            ipad4.freezeWorldMatrix();
            
        });

    	//BackWall
    	BABYLON.SceneLoader.ImportMesh("","assets/", "backwall.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];
    		var material = new BABYLON.StandardMaterial("material", scene);
    		//material.emissiveTexture = new BABYLON.Texture("assets/back_wall.jpg", scene);
            material.emissiveColor = new BABYLON.Color3(251, 242, 255);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

            var planeCollision = BABYLON.MeshBuilder.CreatePlane("planeCollision", {height: 1874, width:1900}, scene);
            planeCollision.rotation.y= Math.PI/2;
            planeCollision.position = new BABYLON.Vector3(1200.05444,-18.5543,3259.61255);
            planeCollision.checkCollisions = true;
            planeCollision.isVisible = false;
            planeCollision.freezeWorldMatrix();
        });

    	//LeftWall
    	BABYLON.SceneLoader.ImportMesh("","assets/", "left_wall_wood.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		//material.emissiveTexture = new BABYLON.Texture("assets/left_wall_wood_color.jpg", scene);
            material.emissiveColor = new BABYLON.Color3(251, 242, 255);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

    		var planeCollision = BABYLON.MeshBuilder.CreateBox("planeCollision", {height: 1874, width:2500, depth:100}, scene);
            planeCollision.position = new BABYLON.Vector3(23.2041,820,4170.254);
            planeCollision.checkCollisions = true;
            planeCollision.isVisible = false;
            planeCollision.freezeWorldMatrix();
    	});

    	//Hidden Wall Collision Outside
    	var front = BABYLON.MeshBuilder.CreateBox("box",{height:1500 ,width: 3450,depth:20},scene);
    	//front.position = new BABYLON.Vector3(-2050,230,3250);
    	front.position = new BABYLON.Vector3(-1900,230,3250);
    	front.rotation.y=Math.PI/2;
    	front.checkCollisions = true;
    	front.isVisible = false;
        front.freezeWorldMatrix();

    	var rightWall = BABYLON.MeshBuilder.CreateBox("box1",{height:1200 ,width: 3350,depth:10},scene);
    	//rightWall.position = new BABYLON.Vector3(-390,230,1690);
    	rightWall.position = new BABYLON.Vector3(-390,230,2650);
        rightWall.checkCollisions = true;
    	rightWall.isVisible = false;
        rightWall.freezeWorldMatrix();
    
    	var leftWall = BABYLON.MeshBuilder.CreateBox("box2",{height:1200 ,width: 3350,depth:10},scene);
    	//leftWall.position = new BABYLON.Vector3(-390,230,4850);
    	leftWall.position = new BABYLON.Vector3(-390,230,3800);
    	leftWall.checkCollisions = true;
    	leftWall.isVisible = false;
        leftWall.freezeWorldMatrix();

    	//RightWall
    	BABYLON.SceneLoader.ImportMesh("","assets/", "right_wall_wood.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		//material.emissiveTexture = new BABYLON.Texture("assets/right_wall_wood_color.jpg", scene);
            material.emissiveColor = new BABYLON.Color3(251, 242, 255);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

    		var planeCollision = BABYLON.MeshBuilder.CreateBox("planeCollision", {height: 1874, width:2500, depth:30}, scene);
            planeCollision.position = new BABYLON.Vector3(23.2041,820,2487.24634);
            planeCollision.checkCollisions = true;
            planeCollision.isVisible = false;
            planeCollision.freezeWorldMatrix();
    	});

    	//Logo Outside Wall
    	BABYLON.SceneLoader.ImportMesh("","assets/", "logo_outside_wall.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/logo_outside_wal.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
    	});
    	//Outside Wall
    	BABYLON.SceneLoader.ImportMesh("","assets/", "outside_wall.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];
    		var mesh1 = newMeshes[1];
    		mesh.position.z-=3;

    		mesh.isPickable = true;
    		mesh1.isPickable = true;
    		
    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/outside_wall.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh1.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            mesh1.freezeWorldMatrix();
    	});

    	//Outside Road
    	BABYLON.SceneLoader.ImportMesh("","assets/", "Outside_road.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/Outside_road.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
    	});

    	//Entrence Wall (Front Wall)
    	BABYLON.SceneLoader.ImportMesh("","assets/", "front_glass.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            //var mesh1 = newMeshes[1];
            //var mesh2 = newMeshes[2];
            //var mesh3 = newMeshes[3];
            mesh.checkCollisions = true;
            mesh.isPickable = true;
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/glass5.jpg", scene);
             material.alpha = 0.2;
           /* var material = new BABYLON.StandardMaterial("material", scene);
            //material.emissiveColor = new BABYLON.Color3(168, 204, 215);
            material.albedoColor=new BABYLON.Color3(1,0,0);
             material.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
             material.reflectionColor = new BABYLON.Color3(168, 204, 215);
            //material.specularColor = new BABYLON.Vector3(1.0,1.0,1.0);
            //material.specularPower = 52;
            //material.alpha = 0.1;*/
            //..........................28-03-2017...........
            //var hdrTexture = new BABYLON.HDRCubeTexture("assets/room.hdr", scene, 512);
            //var glass = new BABYLON.PBRMaterial("glass", scene);
  /*  glass.reflectionTexture = hdrTexture;    
    glass.indexOfRefraction = 0.52;
    glass.alpha = 0.1;
    glass.directIntensity = 0.0;
    glass.environmentIntensity = 0.7;
    glass.cameraExposure = 0.66;
    glass.cameraContrast = 1.66;
    glass.microSurface = 10;
    glass.reflectivityColor = new BABYLON.Color3(255, 255, 255);
    glass.reflectionColor = new BABYLON.Color3(168, 204, 215);
    glass.albedoColor = new BABYLON.Color3(168, 204, 215);*/
    //..............................................
            /*material.reflectionFresnelParameters = new BABYLON.FresnelParameters();
         material.reflectionFresnelParameters.bias = 0.1;

        material.emissiveFresnelParameters = new BABYLON.FresnelParameters();
         material.emissiveFresnelParameters.bias = 0.6;
        material.emissiveFresnelParameters.power = 4;
         material.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
         material.emissiveFresnelParameters.rightColor = BABYLON.Color3.White();*/
            //material.checkReadyOnlyOnce = true;
            //material.freeze();
            mesh.material = material;
            //mesh1.material = material;
            //mesh2.material = material;
            //mesh3.material = material;
            mesh.freezeWorldMatrix();
        });

        //front Wall Hidden Collision
        var planeCollision = BABYLON.MeshBuilder.CreateBox("planeCollision", {height: 1100, width:740, depth:100}, scene);
        planeCollision.position = new BABYLON.Vector3(-1216.8,400,3810.28345);
        planeCollision.rotation.y = Math.PI/2;
        planeCollision.checkCollisions = true;
        //planeCollision.alpha =0.1;
        /*var pbr = new BABYLON.PBRMaterial("pbr", scene);
        pbr.albedoColor = new BABYLON.Color3(1, 0, 0);
        pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
        pbr.reflectionColor = new BABYLON.Color3(168, 204, 215);
        pbr.alpha =0.1;
        planeCollision.material=pbr;*/
        planeCollision.isVisible =false;
        planeCollision.freezeWorldMatrix();

        var planeCollision2 = planeCollision.clone("planeCollision2");
        planeCollision2.position = new BABYLON.Vector3(-1216.8,400,2640.28345);
        planeCollision2.freezeWorldMatrix();

    	//Front_Wall_Poster
        BABYLON.SceneLoader.ImportMesh("","assets/", "poster1.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            var mesh1 = newMeshes[1];
            var mesh2 = newMeshes[2];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/poster124.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh1.material=material;
            mesh2.material=material;
            mesh.checkCollisions = true; 
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "poster2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/poster123.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "poster3.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/poster4.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

    	//Door_entrance_edge
    	BABYLON.SceneLoader.ImportMesh("","assets/", "Door_entrance_edge.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];
    		var mat = new BABYLON.StandardMaterial("mat", scene);
    		mat.emissiveTexture = new BABYLON.Texture("assets/steel.jpg", scene);
    		mat.checkReadyOnlyOnce = true;
            mat.freeze();
    		mesh.material = mat;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
    	});

    	BABYLON.SceneLoader.ImportMesh("","assets/", "Door_entrance_bigedge.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.freezeWorldMatrix();
    	});

    	BABYLON.SceneLoader.ImportMesh("","assets/", "rod_light.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.freezeWorldMatrix();
    	});

    	//Top_ceiling_plane
    	BABYLON.SceneLoader.ImportMesh("","assets/", "Top_ceiling_plane.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/Top_ceiling_plane.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
    		mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
    	});
    	
        //Top_ceiling_lights
    	BABYLON.SceneLoader.ImportMesh("","assets/", "Top_ceiling_lights.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.freezeWorldMatrix();
    	});

    	//Top_ceiling_ring
    	BABYLON.SceneLoader.ImportMesh("","assets/", "Top_ceiling_ring.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/Top_ceiling_ring.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
            mesh.freezeWorldMatrix();
    	});
    		//Top_ceiling_ring2
    	BABYLON.SceneLoader.ImportMesh("","assets/", "top_ceiling_ring2.babylon", scene, function(newMeshes){
    		var mesh = newMeshes[0];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/top_ceiling_ring2.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		mesh.material = material;
            mesh.freezeWorldMatrix();
    	});

        //Left Raiing
        BABYLON.SceneLoader.ImportMesh("","assets/", "top_left_red_rail.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
           
            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/top_left_red_railVRayCompleteMap.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        //right Raiing
        BABYLON.SceneLoader.ImportMesh("","assets/", "top_right_red_rail.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
           
            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/top_right_red_railVRayCompleteMap.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        // --------------------RACKS-------------------------------------------------------------------//
        //Cloths Rack
    	BABYLON.SceneLoader.ImportMesh("","assets/", "clothes_rack.babylon", scene, function(newMeshes){
            var glassRack = newMeshes[0];
            var back = newMeshes[1];
            var mesh2 = newMeshes[2];

    		//Applying Texture
    		var material = new BABYLON.StandardMaterial("material", scene);
    		material.emissiveTexture = new BABYLON.Texture("assets/clothes_rack.jpg", scene);
    		material.checkReadyOnlyOnce = true;
            material.freeze();
    		back.material = material;
    		mesh.checkCollisions = true;

            glassRack.freezeWorldMatrix();
            back.freezeWorldMatrix();
            mesh.freezeWorldMatrix(); 
    	});

        //Cloths RACK Box
        BABYLON.SceneLoader.ImportMesh("","assets/", "clothes_rack_box.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/clothers_rack_box.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        //Assets on ClothsRack
        BABYLON.SceneLoader.ImportMesh("","assets/", "jeans1.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.position.y -=10;

            //Applying Texture 
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/jeans1_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/jeans1.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

            var jeans2 = mesh.clone("jeans2");
            jeans2.position = new BABYLON.Vector3(165.6578,212.0108,2475.544);
            jeans2.freezeWorldMatrix();

            var jeans3 = mesh.clone("jeans3");
            jeans3.position = new BABYLON.Vector3(165.6578,222.0108,2475.544);

            var jeans4 = mesh.clone("jeans4");
            jeans4.position = new BABYLON.Vector3(165.6578,232.0108,2475.544);

            //Second Rack
            var jeans7 = mesh.clone("jeans7");
            jeans7.position = new BABYLON.Vector3(165.6578,322.0108,2475.544);

            var jeans8 = mesh.clone("jeans8");
            jeans8.position = new BABYLON.Vector3(165.6578,332.0108,2475.544);

            var jeans9 = mesh.clone("jeans9");
            jeans9.position = new BABYLON.Vector3(165.6578,342.0108,2475.544);

            //Mid Rack
            var jeans10 = mesh.clone("jeans10");
            jeans10.position = new BABYLON.Vector3(85.6578,282.0108,2475.544);
           
            var jeans11 = mesh.clone("jeans11");
            jeans11.position = new BABYLON.Vector3(85.6578,292.0108,2475.544);

            var jeans12 = mesh.clone("jeans12");
            jeans12.position = new BABYLON.Vector3(85.6578,302.0108,2475.544);

            /*
            //Second Floor
            var jeans13 = mesh.clone("jeans13");
            jeans13.position = new BABYLON.Vector3(20,775,3833);
            jeans13.rotation.y = Math.PI/6;

            var jeans14 = jeans13.clone("jeans14");
            jeans14.position = new BABYLON.Vector3(20,785,3833);
            */

            //-------------------------Blue Jeans---------------------------------------//
            var bjeans1 = mesh.clone("bjeans1");
            bjeans1.position.x += 60;

            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/jeans1_NormalsMap.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/jeans5.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            bjeans1.material = material1;

            var bjeans2 = bjeans1.clone("bjeans2");
            bjeans2.position = new BABYLON.Vector3(225.6578,212.0108,2475.544);

            //Second Rack
            var bjeans3 = bjeans1.clone("bjeans3");
            bjeans3.position = new BABYLON.Vector3(225.6578,322.0108,2475.544);

            var bjeans4 = bjeans1.clone("bjeans4");
            bjeans4.position = new BABYLON.Vector3(225.6578,332.0108,2475.544);

            var bjeans5 = bjeans1.clone("bjeans5");
            bjeans5.position = new BABYLON.Vector3(225.6578,342.0108,2475.544);

            var bjeans6 = bjeans1.clone("bjeans5");
            bjeans6.position = new BABYLON.Vector3(225.6578,352.0108,2475.544);

            //THIRD RACK
            var bjeans7 = bjeans1.clone("bjeans7");
            bjeans7.position = new BABYLON.Vector3(-335.6578,208.0108,2475.544);

            var bjeans8 = bjeans1.clone("bjeans8");
            bjeans8.position = new BABYLON.Vector3(-335.6578,218.0108,2475.544);

            //Mid Rack
            var bjeans8 = bjeans1.clone("bjeans8");
            bjeans8.position = new BABYLON.Vector3(25.6578,282.0108,2475.544);

            var bjeans9 = bjeans1.clone("bjeans9");
            bjeans9.position = new BABYLON.Vector3(25.6578,292.0108,2475.544);

            var bjeans10 = bjeans1.clone("bjeans10");
            bjeans10.position = new BABYLON.Vector3(25.6578,302.0108,2475.544);

            //--------------------------------Gray Jeans-------------------------------------------//
            var gjeans1 = mesh.clone("gjeans1");
            gjeans1.position.x += 120;

            var material3 = new BABYLON.StandardMaterial("material", scene);
            material3.bumpTexture = new BABYLON.Texture("assets/jeans1_NormalsMap.jpg", scene);
            material3.emissiveTexture = new BABYLON.Texture("assets/jeans3.jpg", scene);
            material3.checkReadyOnlyOnce = true;
            material3.freeze();
            gjeans1.material = material3;

            var gjeans2 = gjeans1.clone("gjeans2");
            gjeans2.position = new BABYLON.Vector3(285.6578,212.0108,2475.544);

            var gjeans3 = gjeans1.clone("gjeans3");
            gjeans3.position = new BABYLON.Vector3(285.6578,222.0108,2475.544);

            //tHIRD rACK
            var gjeans6 = gjeans1.clone("gjeans6");
            gjeans6.position = new BABYLON.Vector3(-235.6578,208.0108,2475.544);

            var gjeans7 = gjeans1.clone("gjeans7");
            gjeans7.position = new BABYLON.Vector3(-235.6578,218.0108,2475.544);

            var gjeans8 = gjeans1.clone("gjeans8");
            gjeans8.position = new BABYLON.Vector3(-235.6578,228.0108,2475.544);

            //Mid Rack
            var gjeans9 = gjeans1.clone("gjeans9");
            gjeans9.position = new BABYLON.Vector3(-45.6578,282.0108,2475.544);

            var gjeans10 = gjeans1.clone("gjeans10");
            gjeans10.position = new BABYLON.Vector3(-45.6578,292.0108,2475.544);

            var gjeans11 = gjeans1.clone("gjeans11");
            gjeans11.position = new BABYLON.Vector3(-45.6578,302.0108,2475.544);

            //----------------------------type 4 Jeans--------------------------------//
			//Mid Rack
			var kjeans1 = mesh.clone("kjeans1");
			kjeans1.position = new BABYLON.Vector3(-105.6578,282.0108,2475.544);

            var material4 = new BABYLON.StandardMaterial("material", scene);
            material4.bumpTexture = new BABYLON.Texture("assets/jeans1_NormalsMap.jpg", scene);
            material4.emissiveTexture = new BABYLON.Texture("assets/jeans4.jpg", scene);
            material4.checkReadyOnlyOnce = true;
            material4.freeze();
            kjeans1.material = material4;

            var kjeans3 = kjeans1.clone("kjeans3");
			kjeans3.position = new BABYLON.Vector3(-105.6578,292.0108,2475.544);

			var kjeans4 = kjeans1.clone("kjeans4");
			kjeans4.position = new BABYLON.Vector3(-105.6578,302.0108,2475.544);

			var kjeans5 = kjeans1.clone("kjeans5");
			kjeans5.position = new BABYLON.Vector3(-105.6578,312.0108,2475.544);
        });

        //Shoes Rack
        BABYLON.SceneLoader.ImportMesh("","assets/", "SHOE_RACK.babylon", scene, function(newMeshes){
            var mesh1 = newMeshes[0]
            var mesh = newMeshes[1];
            var glass = newMeshes[2];
            //light.includeOnlyMeshes(mesh,glass);

            //Applying Texture
            var material0 = new BABYLON.StandardMaterial("material", scene);
            //material.emissiveTexture = new BABYLON.Texture("assets/shoe_rack.jpg",scene);
             //material0.emissiveTexture = new BABYLON.Texture("assets/glass5.jpg",scene);
            //material.emissiveColor = new BABYLON.Color3(201, 219, 220); 
            material0.emissiveColor = new BABYLON.Color3(224, 223, 219);
            material0.specularColor = new BABYLON.Vector3(1.0,1.0,1.0); 
            material0.specularPower = 30;
            material0.checkReadyOnlyOnce = true;
            material0.freeze();
            material0.alpha = 0.4;
            mesh1.material = material0;
            mesh1.checkCollisions = true;
            mesh1.freezeWorldMatrix();
        

            var material = new BABYLON.StandardMaterial("material", scene);
            //material.emissiveTexture = new BABYLON.Texture("assets/shoe_rack.jpg",scene);
            // material.emissiveTexture = new BABYLON.Texture("assets/glass5.jpg",scene);
            //material.emissiveColor = new BABYLON.Color3(201, 219, 220); 
            material.emissiveColor = new BABYLON.Color3(64, 164, 223); 
            material.specularPower = 30;
            material.checkReadyOnlyOnce = true;
            material.freeze();
            material.alpha = 0.3;
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            
            var material1 = new BABYLON.StandardMaterial("material", scene);
            //material1.emissiveTexture = new BABYLON.Texture("assets/glass5.jpg",scene);
            material1.emissiveColor = new BABYLON.Color3(201, 219, 220);
            //material1.specularColor = new BABYLON.Vector3(0,0,0);
            material1.specularPower = 30;
            //material1.alpha = 0.1922;
            material1.alpha = 0.1;
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            glass.material= material1;
            glass.freezeWorldMatrix();
        });
    
        //----------------------------------------------------------------------------------------------//
       

        //-----------------------------SHOES-----------------------------------------------------------//
        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe5.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe5VRayNormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe5.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe5c = mesh.clone("shoe5c");
            shoe5c.position = new BABYLON.Vector3(-80.8351,-39.3214,2900.91919);
            shoe5c.rotation.y = Math.PI/4;
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe5VRayNormalsMap.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe5.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe5c.material = material1;
            shoe5c.checkCollisions = true;
            shoe5c.freezeWorldMatrix();
            //shoe5c.isPickable = true;
             var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
    shadowGenerator.getShadowMap().renderList.push(shoe5c);
    //shadowGenerator.useVarianceShadowMap = true;


    //glass.receiveShadows = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe5_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe5VRayNormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe5.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true; 

            var shoe5c_v2 = mesh.clone("shoe5c_v2");
            shoe5c_v2.position = new BABYLON.Vector3(-127.8351,-39.3214,2857.91919);
            shoe5c_v2.rotation.y = Math.PI/2;

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe5VRayNormalsMap.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe5.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe5c_v2.material = material1;
            shoe5c_v2.checkCollisions = true;
            shoe5c_v2.freezeWorldMatrix();
            //shoe5c_v2.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe8_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe8NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe8.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.isPickable = true;
            mesh.freezeWorldMatrix();
            mesh.actionManager = new BABYLON.ActionManager(scene);
           mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));
              
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe8.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe8NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe8.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.isPickable = true;
            mesh.freezeWorldMatrix();
            mesh.actionManager = new BABYLON.ActionManager(scene);
           mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe1.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe1_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe1c = mesh.clone("shoe1c");
            shoe1c.position = new BABYLON.Vector3(-127.834,86.2409,3007.78);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe1_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe1c.material = material1;
            shoe1c.checkCollisions = true;
            //shoe1c.isPickable = true;

            var shoe1c2 = mesh.clone("shoe1c2");
            shoe1c2.position = new BABYLON.Vector3(-197.834,86.2409,3007.78);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe1_B.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe1c2.material = material1;
            shoe1c2.checkCollisions = true;
            //shoe1c2.isPickable = true;

            //Backside
            var shoe1cb = mesh.clone("shoe1cb");
            shoe1cb.position = new BABYLON.Vector3(145.834,86.2409,2970.78);
            shoe1cb.rotation.y = Math.PI/4;

            var shoe1c2b = mesh.clone("shoe1c2b");
            shoe1c2b.position = new BABYLON.Vector3(210.834,86.2409,2970.78);
            shoe1c2b.rotation.y = Math.PI/4;
            shoe1c2b.material = material1;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe1_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe1_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe1c_v2 = mesh.clone("shoe1c_v2");
            shoe1c_v2.position = new BABYLON.Vector3(-127.834,86.2409,3007.78);

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe1_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe1c_v2.material = material1;
            shoe1c_v2.checkCollisions = true;
            //shoe1c_v2.isPickable = true;

            var shoe1c2_v2 = mesh.clone("shoe1c2_v2");
            shoe1c2_v2.position = new BABYLON.Vector3(-197.834,86.2409,3007.78);

            //Applying Texture
            var material2 = new BABYLON.StandardMaterial("material", scene);
            material2.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/shoe1_B.jpg", scene);
            material2.checkReadyOnlyOnce = true;
            material2.freeze();
            shoe1c2_v2.material = material2;
            shoe1c2_v2.checkCollisions = true;
            //shoe1c2_v2.isPickable = true;

            //Backside
            var shoe1cb_v2 = mesh.clone("shoe1cb_v2");
            shoe1cb_v2.position = new BABYLON.Vector3(140.834,86.2409,2970.78);
            shoe1cb_v2.rotation.y = Math.PI/4;

            var shoe1c2b_v2 = mesh.clone("shoe1c2b_v2");
            shoe1c2b_v2.position = new BABYLON.Vector3(210.834,86.2409,2970.78);
            shoe1c2b_v2.rotation.y = Math.PI/4;
            shoe1c2b_v2.material= material1
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Shoe2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe2_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe2_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe2c = mesh.clone("shoe2c");
            shoe2c.position = new BABYLON.Vector3(-318.982,118.1909,3212.48975);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe2_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe2_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe2c.material = material1;
            shoe2c.checkCollisions = true;
            //shoe2c.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Shoe2_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe2_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe2_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe2c_v2 = mesh.clone("shoe2c_v2");
            shoe2c_v2.position = new BABYLON.Vector3(-318.982,118.1909,3212.48975);

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe2_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe2_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe2c_v2.material = material1;
            shoe2c_v2.checkCollisions = true;
            //shoe2c_v2.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe3.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe3_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe3c = mesh.clone("shoe3c");
            shoe3c.position = new BABYLON.Vector3(343.115,136.6947,3287.32178);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe3_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe3c.material = material1;
            shoe3c.checkCollisions = true;
            //shoe3c.isPickable = true;

            var shoe3c2 = mesh.clone("shoe3c2");
            shoe3c2.position = new BABYLON.Vector3(253.115,136.6947,3287.32178);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe3_B.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe3c2.material = material1;
            shoe3c2.checkCollisions = true;
            //shoe3c2.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe3_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe3_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe3c_v2 = mesh.clone("shoe3c_v2");
            shoe3c_v2.position = new BABYLON.Vector3(343.115,136.6947,3287.32178);

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe3_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe3c_v2.material = material1;
            shoe3c_v2.checkCollisions = true;
            //shoe3c_v2.isPickable = true;

            var shoe3c2_v2 = mesh.clone("shoe3c2_v2");
            shoe3c2_v2.position = new BABYLON.Vector3(253.115,136.6947,3287.32178);

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe3_B.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe3c2_v2.material = material1;
            shoe3c2_v2.checkCollisions = true;
            //shoe3c2_v2.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe4.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe4_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe4_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe4_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe4_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe4_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe6.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe6_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe6_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe6_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe6_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe6_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe7.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe7_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe7c = mesh.clone("shoe7c");
            shoe7c.position = new BABYLON.Vector3(-143.6638,-127.9507,2966.38062);
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe7_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe7c.material = material1;
            shoe7c.checkCollisions = true;
            //shoe7c.isPickable = true;

            var shoe7c2 = mesh.clone("shoe7c2");
            shoe7c2.position = new BABYLON.Vector3(-203.6638,-127.9507,2966.38062);
            var material2 = new BABYLON.StandardMaterial("material", scene);
            material2.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/shoe7_B.jpg", scene);
            material2.checkReadyOnlyOnce = true;
            material2.freeze();
            shoe7c2.material = material2;
            shoe7c2.checkCollisions = true;
            //shoe7c2.isPickable = true;   
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "shoe7_v2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/shoe7_C.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;

            var shoe7c_v2 = mesh.clone("shoe7c_v2");
            shoe7c_v2.position = new BABYLON.Vector3(-143.6638,-127.9507,2988.607);

            //Applying Texture
            var material1 = new BABYLON.StandardMaterial("material", scene);
            material1.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material1.emissiveTexture = new BABYLON.Texture("assets/shoe7_A.jpg", scene);
            material1.checkReadyOnlyOnce = true;
            material1.freeze();
            shoe7c_v2.material = material1;
            shoe7c_v2.checkCollisions = true;
            //shoe7c_v2.isPickable = true;

            var shoe7c2_v2 = mesh.clone("shoe7c2_v2");
            shoe7c2_v2.position = new BABYLON.Vector3(-203.6638,-127.9507,2988.607);

            //Applying Texture
            var material2 = new BABYLON.StandardMaterial("material", scene);
            material2.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
            material2.emissiveTexture = new BABYLON.Texture("assets/shoe7_B.jpg", scene);
            material2.checkReadyOnlyOnce = true;
            material2.freeze();
            shoe7c2_v2.material = material2;
            shoe7c2_v2.checkCollisions = true;
            //shoe7c2_v2.isPickable = true;
        });

        //---------------------------------------------------------------------------------------------//
        
        //-----------------------------STAIRS-----------------------------------------------------//
        BABYLON.SceneLoader.ImportMesh("","assets/", "esc_foot_rest.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/esc_foot_rest.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;   
            mesh.freezeWorldMatrix();
        });
 
        BABYLON.SceneLoader.ImportMesh("","assets/", "esc_glass.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveColor = new BABYLON.Color3(201, 219, 220);
            material.specularColor = new BABYLON.Vector3(1.0,1.0,1.0);
            material.specularPower = 30;
            material.alpha = 0.1922;
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material= material;
            mesh.freezeWorldMatrix();      
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "esc_rail.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];

            var material = new BABYLON.StandardMaterial("material", scene);
            material.reflactionTexture = new BABYLON.Texture("assets/esc_rail.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix(); 
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "esc_stairs.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            var material = new BABYLON.StandardMaterial("material", scene);
	        material.emissiveTexture = new BABYLON.Texture("assets/esc_steel.jpg", scene);
            for(var i=0;i<58;i++)
            {
            	var mesh = newMeshes[i];
                mesh.checkCollisions = true;
	            mesh.material = material;
                mesh.isPickable = true;    
            }  
        });

        var stairCollision = BABYLON.MeshBuilder.CreateBox("stairCollision",{height:1400,width:300, depth:40 }, scene);
        stairCollision.checkCollisions = true;
        stairCollision.position = new BABYLON.Vector3(900.0,300.0,3010.0);
        stairCollision.rotation.x = Math.PI/3.3;
        stairCollision.isVisible = false;
        stairCollision.freezeWorldMatrix();
         /*stairCollision.isPickable = true;
            //mesh.freezeWorldMatrix();
          stairCollision.actionManager = new BABYLON.ActionManager(scene);
           stairCollision.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){ 
           animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(894,850,3600)) 
           //animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(0,0,0)) 
        }));*/


        var box = BABYLON.MeshBuilder.CreateBox("stairCollision",{height:80,width:300, depth:150 }, scene);
        box.position = new BABYLON.Vector3(922,675,3640);
        box.checkCollisions = true;
        box.isVisible = false;
        box.freezeWorldMatrix();

        var boxRail = BABYLON.MeshBuilder.CreateBox("boxRail",{height:1400,width:400, depth:50 }, scene);
        boxRail.position = new BABYLON.Vector3(748,190,3103);
        boxRail.rotation.y = Math.PI/2;
        boxRail.rotation.z = Math.PI/3.8;
        boxRail.checkCollisions = true;
        boxRail.isVisible = false;
        boxRail.freezeWorldMatrix();

        boxRail2 = boxRail.clone("boxRail2");
        boxRail2.position.x += 310;
        boxRail2.checkCollisions = false;

        var stairRail = BABYLON.MeshBuilder.CreateBox("stairRail",{height:800, width:750, depth: 300}, scene);
        stairRail.position = new BABYLON.Vector3(630,900,3260);
        stairRail.rotation.y = Math.PI/2;
        stairRail.checkCollisions = true;
        stairRail.isVisible = false;
        stairRail.freezeWorldMatrix();

        stairRail2 = stairRail.clone("stairRail2");
        stairRail2.position.x +=560;
        stairRail2.position.z +=40;
        stairRail2.isVisible= false;

        var boxstair = BABYLON.MeshBuilder.CreateBox("boxstair",{height:610,width: 750,depth:40},scene);
		boxstair.position = new BABYLON.Vector3(880,860,2920);
		boxstair.checkCollisions = true;
		boxstair.isVisible = false;
        boxstair.freezeWorldMatrix();

        BABYLON.SceneLoader.ImportMesh("","assets/", "escalator_base.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            //material.emissiveTexture = new BABYLON.Texture("assets/esc_base.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/aa.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true; 
            mesh.freezeWorldMatrix();  
        });

        //------------------------------------------------------------------------------------------------------------------//
        BABYLON.SceneLoader.ImportMesh("","assets/", "Ceiling_lights_woodLOG1.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            //Applying Texture
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Ceiling_lights_woodLOG1.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        // Floor Side Wall
        BABYLON.SceneLoader.ImportMesh("","assets/", "floor_side_walls.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "2nd floor_base.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
          
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/2nd floor_base.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Lawn_base.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
          
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Lawn_base.jpg", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Lawn_base_Normals.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "grass_mud.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/grass_mud.png", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "grass_1.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/grass1.png", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "grass_2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/grass_2.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });
        //Corner Table
        BABYLON.SceneLoader.ImportMesh("","assets/", "Corner_table.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Corner_table.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        //Assets On Corner Table
        BABYLON.SceneLoader.ImportMesh("","assets/", "handbag.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/handbag.jpg", scene);
            material.bumpTexture = new BABYLON.Texture("assets/handbag_NormalsMap.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.isPickable = false;
            mesh.freezeWorldMatrix();
        });
          // var san1;
        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_1.babylon", scene, function(newMeshes){
            //var mesh = newMeshes[0];
             var san1 = newMeshes[0];
             //san1.position.y += 30;
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_1.jpg", scene);
            //material.emissiveColor = new BABYLON.Color3(1, 0, 0);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            san1.material = material;
            //mesh.isPickable = true;
            san1.checkCollisions = true;
            san1.freezeWorldMatrix();
            //......................................
          /*  var mirror = BABYLON.Mesh.CreateBox("Mirror", 2.0, scene);
            mirror.scaling = new BABYLON.Vector3(200.0, 0.01, 200.0);
            mirror.material = new BABYLON.StandardMaterial("mirror", scene);
            mirror.material.reflectionTexture = new BABYLON.MirrorTexture("mirror", 1024, scene, true);
            mirror.material.reflectionTexture.mirrorPlane = new BABYLON.Plane(0, 90, 0, 90);
            mirror.material.reflectionTexture.renderList = [san1];
            mirror.material.reflectionTexture.level = 3.5;
            mirror.position = new BABYLON.Vector3(-410.2041,90,2720.254);
            //mirror.rotation.x = Math.PI/9;
            //mirror.emissiveColor = new BABYLON.Color3(201, 219, 220);
            //mirror.alpha=0.2;
        var light20 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(-410,100,0), scene);
        //var light20 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0,1,0), scene);
        //light20.specular = new BABYLON.Color3(1, 1, 1);
        light20.intensity =0.3;
        //light20.specularPower = 132;*/
        //
        });
        //.................dlkdjdl............................
        

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_2.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_2_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_2.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            //mesh.isPickable = true;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_3.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_3_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_3.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_4.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            //mesh.isPickable = true;
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_4_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_4.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_5.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_5_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_5.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true; 
            mesh.isPickable = true;
            mesh.freezeWorldMatrix();
            mesh.actionManager = new BABYLON.ActionManager(scene);
           mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_6.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_6_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_6.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
            //mesh.isPickable = true;
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_7.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            //mesh.isPickable = true;
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_7_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_7.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_8.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            //mesh.isPickable = true;
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_8_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_8.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sandal_9.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            mesh.isPickable = false;
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sandal_9_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_9.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "photo_frame.babylon", scene, function(newMeshes){
            var mesh0 = newMeshes[0];
            var mesh = newMeshes[1];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Archmodel.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();

            var material = new BABYLON.StandardMaterial("material", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/lg.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh0.material = material;
            mesh0.checkCollisions = true;
            mesh0.freezeWorldMatrix();
        });

        BABYLON.SceneLoader.ImportMesh("","assets/", "Sofa_small.babylon", scene, function(newMeshes){
            var mesh = newMeshes[0];
            
            var material = new BABYLON.StandardMaterial("material", scene);
            material.bumpTexture = new BABYLON.Texture("assets/Sofa_small_NormalsMap.jpg", scene);
            material.emissiveTexture = new BABYLON.Texture("assets/Sofa_small.jpg", scene);
            material.checkReadyOnlyOnce = true;
            material.freeze();
            mesh.material = material;
            mesh.checkCollisions = true;
            mesh.freezeWorldMatrix();
        });
          //-------------------------------CAMERA Rotation----------------------------------//
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

        //----------------------------------------------------------------------------------//
        window.addEventListener("click", function () {
          	pickResult = scene.pick(scene.pointerX, scene.pointerY, scene.pointerZ);
            if (pickResult.hit) {
                //alert(pickResult.pickedMesh.name);
                if ((pickResult.pickedMesh.name == "mac1" || pickResult.pickedMesh.name == "mac2" || pickResult.pickedMesh.name == "mac3"
                    || pickResult.pickedMesh.name == "Object026" || pickResult.pickedMesh.name == "shoe5"
                    || pickResult.pickedMesh.name == "shoe8v2" || pickResult.pickedMesh.name == "shoe8" || pickResult.pickedMesh.name == "shoe1"
                    || pickResult.pickedMesh.name == "shoe1c" || pickResult.pickedMesh.name == "shoe1c2" || pickResult.pickedMesh.name == "shoe1cb"
                    || pickResult.pickedMesh.name == "shoe1c2b" || pickResult.pickedMesh.name == "shoe1_v2"|| pickResult.pickedMesh.name == "shoe1_v2"
                    || pickResult.pickedMesh.name == "shoe1c_v2" || pickResult.pickedMesh.name == "shoe1c2_v2" || pickResult.pickedMesh.name == "shoe1cb_v2"
                    || pickResult.pickedMesh.name == "shoe1c2b_v2"|| pickResult.pickedMesh.name == "Sandal_3"|| pickResult.pickedMesh.name == "Sandal_4"
                    || pickResult.pickedMesh.name == "Sandal_5" || pickResult.pickedMesh.name == "Sandal_6"
                    || pickResult.pickedMesh.name == "Sandal_7" || pickResult.pickedMesh.name == "Sandal_8"
                    || pickResult.pickedMesh.name == "sandal_1" || pickResult.pickedMesh.name == "Shoe2" || pickResult.pickedMesh.name == "shoe2c"
                    || pickResult.pickedMesh.name == "Shoe2_v2" || pickResult.pickedMesh.name == "shoe2c_v2"
                    || pickResult.pickedMesh.name == "shoe3" || pickResult.pickedMesh.name == "shoe3c"
                    || pickResult.pickedMesh.name == "shoe3c2" || pickResult.pickedMesh.name == "shoe3_v2"
                    || pickResult.pickedMesh.name == "shoe3c_v2" || pickResult.pickedMesh.name == "shoe3c2_v2"
                    || pickResult.pickedMesh.name == "shoe4" || pickResult.pickedMesh.name == "shoe4_v2"
                    || pickResult.pickedMesh.name == "shoe6" || pickResult.pickedMesh.name == "shoe6_v2"
                    || pickResult.pickedMesh.name == "shoe7" || pickResult.pickedMesh.name == "shoe7_v2"
                    || pickResult.pickedMesh.name == "shoe7c" || pickResult.pickedMesh.name == "shoe7c_v2"
                    || pickResult.pickedMesh.name == "shoe7c2" || pickResult.pickedMesh.name == "shoe7c2_v2"|| pickResult.pickedMesh.name == "handbag"
                    || pickResult.pickedMesh.name == "Sandal_9"|| pickResult.pickedMesh.name == "Photo_Frame_Low" 
                    ||pickResult.pickedMesh.name == "tshirt12" ||pickResult.pickedMesh.name == "tshirt13") 
                    && (is_popup_open == false)) {
                    //open the asset in a modal window
                    camera.detachControl(canvas);
                    HandlePopup(pickResult.pickedMesh.name);
                    //pickResult.style.cursor = "pointer";
                }
            }

            if (laptop_loaded == false) {
                //download 2nd floor assets
                BABYLON.SceneLoader.ImportMesh("", "assets/", "laptop.incremental.babylon", scene, function(newMeshes){
                    var mesh = newMeshes[0];
                     //mesh = newMeshes.meshUnderPointer;
                    mesh.rotation.y = -(Math.PI)/2;
                    mesh.position.x -=260;
                    mesh.position.y -= 10;
                    mesh.position.z += 50;
                    mesh.isPickable = true;
                      mesh.actionManager = new BABYLON.ActionManager(scene);
	
	     //ON MOUSE ENTER
	    mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));

                    var cloneFunc = function (mesh) {
                        if (laptop_clones == false) {
                            var mesh2 = mesh.clone("mac2");
                            mesh2.rotation.y = Math.PI*2;
                            mesh2.position  = new BABYLON.Vector3(-640,160.2094,3673.43);
                            mesh2.material = material;
                            mesh2.isPickable=true;
                            mesh2.actionManager = new BABYLON.ActionManager(scene);
           mesh2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));

                            var mesh3 = mesh.clone("mac3");
                            mesh3.rotation.y = Math.PI;
                            mesh3.position  = new BABYLON.Vector3(-640,160.2094,3943.43);
                            mesh3.material = material;
                            mesh3.isPickable=true;
                            mesh3.actionManager = new BABYLON.ActionManager(scene);
           mesh3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));


                            var mesh4 = mesh.clone("mesh4");
                            mesh4.rotation.y = Math.PI*(0.5);
                            mesh4.position.x -= 250;
                            mesh4.isPickable=true;
                            mesh4.actionManager = new BABYLON.ActionManager(scene);
           mesh4.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	      }));
                        }

                        laptop_clones = true;
                    };
                    
                    mesh.position.y = mesh.position.y-65;
                    
                    //Applying Texture
                    var material = new BABYLON.StandardMaterial("material", scene);
                    material.emissiveTexture = new BABYLON.Texture("assets/mac.jpg", scene);
                    material.checkReadyOnlyOnce = true;
           			material.freeze();
                    mesh.material = material;
                    mesh.checkCollisions = true;
                    //input.useHandCursor = true;

                    mesh.registerAfterRender(cloneFunc);
         
                    laptop_loaded = true;
                });
            }
        }); 
		
        /*window.onclick = myFunction;
        function myFunction() {
            alert(camera.position.x+" ,"+camera.position.y+","+camera.position.z);
        }*/
        

    	//-------------------------------------------------------------------------------------------//
        var switchCamera = function (camera) {
            if (scene.activeCamera.rotation) {
                camera.rotation = scene.activeCamera.rotation.clone();
            }
            camera.fov = scene.activeCamera.fov;
            camera.minZ = scene.activeCamera.minZ;
            camera.maxZ = scene.activeCamera.maxZ;

            if (scene.activeCamera.ellipsoid) {
                camera.ellipsoid = scene.activeCamera.ellipsoid.clone();
            }
            camera.checkCollisions = scene.activeCamera.checkCollisions;
            camera.applyGravity = scene.activeCamera.applyGravity;

            camera.speed = scene.activeCamera.speed;

            camera.postProcesses = scene.activeCamera.postProcesses;
            scene.activeCamera.postProcesses = [];
            scene.activeCamera.detachControl(canvas);

            if (scene.activeCamera.dispose) 
                scene.activeCamera.dispose();

            scene.activeCamera = camera;

            scene.activeCamera.attachControl(canvas);

            hideCameraPanel();
        }; 

        //OnScreen Keyboard
    	document.getElementById("left").onclick = function () {
            //if(divStatus == false) {
               // camera.rotation.y -=0.03;
            //}
            animateCameraPosition(camera, camera.position,  new BABYLON.Vector3(894,850,3600))
        };

        document.getElementById("right").onclick = function () {
            if(divStatus == false) {
                camera.rotation.y +=0.03;
            }
        };

        document.getElementById("forward").onclick = function () {
            if(divStatus == false) {
                camera.fov -=0.03;
            }
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
  				if(camera.position.x>-3300 && camera.position.x<651) {
	  				if (camera.position.y<350 && camera.position.z>2320 && camera.position.z<4120)
	                {
	                	camera.position.y = 230;
	                	camera.rotation.x = 0;
	                }
	                if(camera.position.y>660 && camera.position.z>2502 && camera.position.z<4125)  
	                {
	                	camera.position.y = 800;
	                	camera.rotation.x = 0;
	                }
                }  
                if (camera.position.x > 496 && camera.position.x < 1000) {
                    if (camera.position.z > 2503 && camera.position.z < 2754) {
                        if (second_floor_assets_loaded == false) {
                            download2ndfloor();
                            second_floor_assets_loaded = true;
                        }
                    }
                }
                scene.render(); 
        	});
        });

       // Watch for browser canvas resize events
       window.addEventListener("resize", function () {
          engine.resize();
       });
   }
}

function download2ndfloor() {
	BABYLON.SceneLoader.ImportMesh("","assets/", "back_uppper_wall.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];

		//Applying Texture
		var material = new BABYLON.StandardMaterial("material", scene);
		material.emissiveTexture = new BABYLON.Texture("assets/back_uppper_wall.jpg", scene);
		material.checkReadyOnlyOnce = true;
        material.freeze();
		mesh.material = material;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "left_upper_wall.incremental.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];

		//Applying Texture
		var material = new BABYLON.StandardMaterial("material", scene);
		material.emissiveTexture = new BABYLON.Texture("assets/left_upper_wall.jpg", scene);
		material.checkReadyOnlyOnce = true;
        material.freeze();
		mesh.material = material;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "right_upper_wall.incremental.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];

		//Applying Texture
		var material = new BABYLON.StandardMaterial("material", scene);
		material.emissiveTexture = new BABYLON.Texture("assets/right_upper_wall.jpg", scene);
		material.checkReadyOnlyOnce = true;
        material.freeze();
		mesh.material = material;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "upper_ceiling_design.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];

		//Applying Texture
		var material = new BABYLON.StandardMaterial("material", scene);
		material.emissiveTexture = new BABYLON.Texture("assets/upper_ceiling_wall_pt1.jpg", scene);
		material.checkReadyOnlyOnce = true;
        material.freeze();
		mesh.material = material;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "front_upper_wall.incremental.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];
		var mat = new BABYLON.StandardMaterial("mat", scene);
		mat.emissiveTexture = new BABYLON.Texture("assets/front_upper_wall.jpg", scene);
		mat.checkReadyOnlyOnce = true;
        mat.freeze();
		mesh.material = mat;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "upper_ceiling_plane.incremental.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];
		var mat = new BABYLON.StandardMaterial("mat", scene);
		mat.emissiveTexture = new BABYLON.Texture("assets/upper_ceiling_plane.jpg", scene);
		mat.checkReadyOnlyOnce = true;
        mat.freeze();
		mesh.material = mat;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "paintings.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];
		var mat = new BABYLON.StandardMaterial("mat", scene);
		mat.emissiveTexture = new BABYLON.Texture("assets/paintings123.jpg", scene);
		mat.checkReadyOnlyOnce = true;
        mat.freeze();
		mesh.material = mat;
		mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
	});

	//hidden painting collision
	var boxpanting = BABYLON.MeshBuilder.CreateBox("boxpanting",{height:310,width: 510,depth:40},scene);
	boxpanting.position = new BABYLON.Vector3(-1180,1015,3263);
    boxpanting.rotation.y=Math.PI/2;
    boxpanting.checkCollisions = true;
    boxpanting.isVisible = false;
    boxpanting.freezeWorldMatrix();

	BABYLON.SceneLoader.ImportMesh("","assets/", "painting_lights.babylon", scene, function(newMeshes){
		var mesh = newMeshes[0];
		var mesh1 = newMeshes[1];
		var mesh2 = newMeshes[2];
		var mesh3 = newMeshes[3];
		var mesh4 = newMeshes[4];
		var mesh5 = newMeshes[5];
		var mat = new BABYLON.StandardMaterial("mat", scene);
		mat.emissiveTexture = new BABYLON.Texture("assets/painting_lights.jpg", scene);
		mat.checkReadyOnlyOnce = true;
        mat.freeze();
		mesh.material = mat;
		mesh1.material = mat;
		mesh2.material = mat;
		mesh3.material = mat;
		mesh4.material = mat;
		mesh5.material = mat;

		mesh.checkCollisions = true;
        mesh1.checkCollisions = true;
        mesh2.checkCollisions = true;
        mesh3.checkCollisions = true;
        mesh4.checkCollisions = true;
        mesh5.checkCollisions = true;

        mesh.freezeWorldMatrix();
        mesh1.freezeWorldMatrix();
        mesh2.freezeWorldMatrix();
        mesh3.freezeWorldMatrix();
        mesh4.freezeWorldMatrix();
        mesh5.freezeWorldMatrix();
	});

	BABYLON.SceneLoader.ImportMesh("","assets/", "uppper_floor_edge.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];
        
        var material = new BABYLON.StandardMaterial("material", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/uppper_floor_edge.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh.material = material;
        mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "Upper_floor_recep_table.incremental.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];
        var mesh1 = newMeshes[1];
        var mesh2 = newMeshes[2];
        var mesh3 = newMeshes[3];
        var mesh4 = newMeshes[4];
        var mesh5 = newMeshes[5];
        var mesh6 = newMeshes[6];
        var mesh7 = newMeshes[7];
        
        var material = new BABYLON.StandardMaterial("material", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/Upper_floor_recep_table.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh.material = material;
        mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();

        var material1 = new BABYLON.StandardMaterial("material1", scene);
        material1.emissiveColor = new BABYLON.Color3(0.0,0.2,0.4);
        material1.specularColor = new BABYLON.Vector3(1.0,1.0,1.0);
        material1.specularPower = 30;
        material1.alpha = 0.3;
        material1.checkReadyOnlyOnce = true;
        material1.freeze();
        mesh7.material = material1;
        mesh7.freezeWorldMatrix();

        var material = new BABYLON.StandardMaterial("material", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/steel.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh1.material = material;
        mesh2.material = material;
		mesh3.material = material;
        mesh4.material = material;
		mesh5.material = material;
		mesh6.material = material;

        mesh1.freezeWorldMatrix();
        mesh2.freezeWorldMatrix();
        mesh3.freezeWorldMatrix();
        mesh4.freezeWorldMatrix();
        mesh5.freezeWorldMatrix();
        mesh6.freezeWorldMatrix();
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "2nd_floor.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];
        
        var material = new BABYLON.StandardMaterial("material", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/2nd_floor.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh.material = material;
        mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "t_shirt_rack.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];

        var material = new BABYLON.StandardMaterial("material", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/steel.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh.material = material;
        mesh.freezeWorldMatrix();

        //--------------------Second Rack--------------------------------//
        var cmesh = mesh.clone("cmesh");
        cmesh.position= new BABYLON.Vector3(3.8828,770.5736,3864.64087);
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "t_shirt.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];
        
        //Material 
        var material = new BABYLON.StandardMaterial("material", scene);
        material.bumpTexture = new BABYLON.Texture("assets/t1_NormalsMap.jpg", scene);
        material.emissiveTexture = new BABYLON.Texture("assets/tshirt1.jpg", scene);
        material.checkReadyOnlyOnce = true;
        material.freeze();
        mesh.material = material;
        mesh.checkCollisions = true;
        mesh.freezeWorldMatrix();

        //t-shirt1 Raplication
        var cmesh1 = mesh.clone("tshirt12");
        cmesh1.position.z += 30;
        cmesh1.isPickable = true;
        cmesh1.actionManager = new BABYLON.ActionManager(scene);
	
	//ON MOUSE ENTER
	cmesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
	}));
	

        var cmesh2 = mesh.clone("tshirt13");
        cmesh2.position.z += 60;
        cmesh2.isPickable = true;

        var cmesh3 = mesh.clone("cmesh3");
        cmesh3.position.z += 90;

        var cmesh4 = mesh.clone("cmesh4");
        cmesh4.position.z += 120;

        var cmesh5 = mesh.clone("cmesh5");
        cmesh5.position.z += 150;
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "t_shirt2.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];

        var material1 = new BABYLON.StandardMaterial("material1", scene);
        material1.bumpTexture = new BABYLON.Texture("assets/t2_NormalsMap.jpg", scene);
        material1.emissiveTexture = new BABYLON.Texture("assets/tshirt2.jpg", scene);
        material1.checkReadyOnlyOnce = true;
        material1.freeze();
        mesh.material = material1;
        mesh.freezeWorldMatrix();
        
        var material2 = new BABYLON.StandardMaterial("material2", scene);
        material2.bumpTexture = new BABYLON.Texture("assets/t2_NormalsMap.jpg", scene);
        material2.emissiveTexture = new BABYLON.Texture("assets/tshirt3.jpg", scene);
        material2.checkReadyOnlyOnce = true;
        material2.freeze();

        var material3 = new BABYLON.StandardMaterial("material3", scene);
        material3.bumpTexture = new BABYLON.Texture("assets/t2_NormalsMap.jpg", scene);
        material3.emissiveTexture = new BABYLON.Texture("assets/tshirt4.jpg", scene);
        material3.checkReadyOnlyOnce = true;
        material3.freeze();

        var cmesh12 = mesh.clone("cmesh12");
        cmesh12.position.z += 30;

        var cmesh22 = mesh.clone("cmesh22");
        cmesh22.position.z += 60;

        var cmesh32 = mesh.clone("cmesh32");
        cmesh32.position.z += 90;

        var cmesh42 = mesh.clone("cmesh42");
        cmesh42.position.z += 120;

        var cmesh52 = mesh.clone("cmesh52");
        cmesh52.position.z += 150;

        //Second Rack Tshirt Replication
        var scmesh = mesh.clone("scmesh");
        scmesh.material = material2;
        scmesh.position.x -=170;

        var scmesh1 = scmesh.clone("scmesh1");
        scmesh1.position.z += 30;

        var scmesh6 = scmesh.clone("scmesh6");
        scmesh6.position.z += 60;

        var scmesh2 = scmesh.clone("scmesh2");
        scmesh2.position.z += 90;

        var scmesh3 = scmesh.clone("scmesh3");
        scmesh3.position.z += 120;

        var scmesh4 = scmesh.clone("scmesh4");
        scmesh4.position.z += 150;

        var scmesh1 = mesh.clone("scmesh");
        scmesh1.material = material3;
        scmesh1.position.x -=256;

        var scmesh11 = scmesh1.clone("scmesh1");
        scmesh11.position.z += 30;

        var scmesh61 = scmesh1.clone("scmesh6");
        scmesh61.position.z += 60;

        var scmesh21 = scmesh1.clone("scmesh2");
        scmesh21.position.z += 90;

        var scmesh31 = scmesh1.clone("scmesh3");
        scmesh31.position.z += 120;

        var scmesh41 = scmesh1.clone("scmesh4");
        scmesh41.position.z += 150;
    });

    BABYLON.SceneLoader.ImportMesh("","assets/", "hanger.babylon", scene, function(newMeshes){
        var mesh = newMeshes[0];
        var mesh1 = newMeshes[1];

        var cmesh1 = mesh.clone("cmesh1");
        cmesh1.position.z += 30;

        var cmesh2 = mesh.clone("cmesh2");
        cmesh2.position.z += 60;

        var cmesh3 = mesh.clone("cmesh3");
        cmesh3.position.z += 90;

        var cmesh4 = mesh.clone("cmesh4");
        cmesh4.position.z += 120;

        var cmesh5 = mesh.clone("cmesh5");
        cmesh5.position.z += 150;

        //Hangar2 Raplication
        var cmesh12 = mesh1.clone("cmesh12");
        cmesh12.position.z += 30;

        var cmesh22 = mesh1.clone("cmesh22");
        cmesh22.position.z += 60;

        var cmesh32 = mesh1.clone("cmesh32");
        cmesh32.position.z += 90;

        var cmesh42 = mesh1.clone("cmesh42");
        cmesh42.position.z += 120;

        var cmesh52 = mesh1.clone("cmesh52");
        cmesh52.position.z += 150;

        //Second Rack Tshirt Replication
        var scmesh = mesh.clone("scmesh");
        scmesh.position.x -=265;

        var scmesh1 = scmesh.clone("scmesh1");
        scmesh1.position.z += 30;

        var scmesh6 = scmesh.clone("scmesh6");
        scmesh6.position.z += 60;

        var scmesh2 = scmesh.clone("scmesh2");
        scmesh2.position.z += 90;

        var scmesh3 = scmesh.clone("scmesh3");
        scmesh3.position.z += 120;

        var scmesh4 = scmesh.clone("scmesh4");
        scmesh4.position.z += 150;

        //Second Rack Tshirt2 Replication
        var scmesh1 = mesh1.clone("scmesh");
        scmesh1.position.x -=265;

        var scmesh11 = scmesh1.clone("scmesh1");
        scmesh11.position.z += 30;

        var scmesh61 = scmesh1.clone("scmesh6");
        scmesh61.position.z += 60;

        var scmesh21 = scmesh1.clone("scmesh2");
        scmesh21.position.z += 90;

        var scmesh31 = scmesh1.clone("scmesh3");
        scmesh31.position.z += 120;

        var scmesh41 = scmesh1.clone("scmesh4");
        scmesh41.position.z += 150;
    });
}
/*var j = 0;
function addToCart() {
         j++;
        document.getElementById('qty').value = j;
    
	//alert("added to cart!");
}*/

function HandlePopup(objName) {
	product_name = objName;

	if(is_popup_open == true) {
		document.getElementById("popup").style.display="none";
    	scene.activeCamera = camera;
     	scene.activeCamera.attachControl(canvas);  		
		is_popup_open = false;
		//document.getElementById("quant").reset();
	} else if(is_popup_open == false) {
		document.getElementById("popup").style.display="block";
		 //document.getElementById('quant').value=1;
     //i=1;
		 //document.getElementById("quant").reset();
		//objName.reset();
		is_popup_open = true;
		//document.getElementById("quant").reset();
		
		if (BABYLON.Engine.isSupported()) {
			var createScene = function () {
			    var scene = new BABYLON.Scene(engine2);
			    scene.clearColor = new BABYLON.Color3(238, 238, 224);
				meshmodel = new BABYLON.AbstractMesh('CurrModel', scene);
				meshmodel1 = new BABYLON.AbstractMesh('CurrModel1', scene);
				var timeoutID;
				var clicked = false;
			    var currentPosition = { x: 0, y: 0 };
			    var currentRotation = { x: 0, y: 0 };
				//variables to set last angle and curr angle in each frame
				//so we can calculate angleDiff and use it for inertia
				var lastAngleDiff = { x: 0, y: 0 };
				var oldAngle = { x: 0, y: 0 };
				var newAngle = { x: 0, y: 0 };
				//variable to check whether mouse is moved or not in each frame
				//var mousemov = false;
				//framecount reset and max framecount(secs) for inertia
				var framecount = 0;
				var mxframecount = 120; //4 secs at 60 fps
				
				scene.beforeRender = function () {
					//set mousemov as false everytime before the rendering a frame
					mousemov = true;
				}

				scene.afterRender = function () { 
					//we are checking if the mouse is moved after the rendering a frame
					//will return false if the mouse is not moved in the last frame//possible drop of 1 frame of animation, which will not be noticed 
					
					//by the user most of the time
					if (!mousemov && framecount <mxframecount) {
						//console.log(lastAngleDiff);
						//divide the lastAngleDiff to slow or ease the animation
						lastAngleDiff.x = lastAngleDiff.x / 1.1;
						lastAngleDiff.y = lastAngleDiff.y / 1.1;
						//apply the rotation
						meshmodel.rotation.x += lastAngleDiff.x;
						meshmodel.rotation.y += lastAngleDiff.y
						//increase the framecount by 1
						//this doesnt make sense right now as it resets after reaching max and continues in the loop
						//thinking of a way to fix it
						framecount++;
						currentRotation.x = meshmodel.rotation.x;
			            currentRotation.y = meshmodel.rotation.y;
					} else if(framecount>=mxframecount) {
						framecount = 0;
					}
				};
				
			    //Adding a light
			    //var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

			    //Adding an Arc Rotate Camera
			    
			    //camera.attachControl(canvas, false);

			    // Download the asset again
			    if (product_name == "mac1" || product_name == "mac2" || product_name == "mac3") {
			    	popup_camera = new BABYLON.ArcRotateCamera("Camera01", 0, 0.8, 250, BABYLON.Vector3.Zero(), scene);
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "laptop.babylon", scene, function (newMeshes) {
				        // Set the target of the camera to the first imported mesh
				        //camera.target = newMeshes[0];
						meshmodel = newMeshes[0];
			       		meshmodel.position = new BABYLON.Vector3(0,0,50);

			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material111", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/mac.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
			            //meshmodel.checkCollisions = true;
				    });
			    } else if (product_name == "Object026" || product_name == "shoe5") {
			    	popup_camera = new BABYLON.FreeCamera("Camera02", new BABYLON.Vector3(-296.5715856317438 ,196.77120943213862,2877.3444462487864), scene);
			    	//camera.attachControl(canvas2,false);

				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe5_v2.babylon", scene, function (newMeshes) {
						var meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe5VRayNormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/shoe5.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "shoe8" || product_name == "shoe8v2") {
			    	popup_camera = new BABYLON.FreeCamera("Camera03", new BABYLON.Vector3(-80.35,192.53,2878.87), scene);
			    	//camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe8_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
						//meshmodel.position=new BABYLON.Vector3(0,0,0);
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe8NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/shoe8.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "shoe1" || product_name == "shoe1c" ||product_name == "shoe1c2" ||product_name == "shoe1cb" ||product_name == "shoe1c2b" ||product_name == "shoe1_v2" ||product_name == "shoe1c_v2" ||product_name == "shoe1c2_v2" || product_name == "shoe1_v2" || product_name == "shoe1c2b_v2") {
			    	popup_camera = new BABYLON.FreeCamera("Camera04", new BABYLON.Vector3(-31.35,192.53,2918.87), scene);
			    	//camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe1_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/shoe1_A.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if (product_name == "Sandal_1") {
			    	popup_camera = new BABYLON.FreeCamera("Camera105", new BABYLON.Vector3(-308.4284,-60.043,2951.4475),scene);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "sandal_1.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            //material.bumpTexture = new BABYLON.Texture("assets/shoe1_normal.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/sandal_1.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_3") {
			    	popup_camera = new BABYLON.FreeCamera("Camera06", new BABYLON.Vector3(-408.4284,50.043,2051.4475), scene);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_3.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_3_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_3.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_4") {
			    	popup_camera = new BABYLON.FreeCamera("Camera07", new BABYLON.Vector3(-31.35,192.53,2918.87), scene);
			    	//camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_4.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_4_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_4.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_5") {
			    	popup_camera = new BABYLON.FreeCamera("Camera08", new BABYLON.Vector3(-900.38,117.83,2300.60), scene);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_5.babylon", scene, function (newMeshes) {
						 meshmodel = newMeshes[0];
			       	 //meshmodel1.position=new BABYLON.Vector3(0,0,0);
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_5_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_5.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_6") {
			    	popup_camera = new BABYLON.FreeCamera("Camera09", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	//amera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_6.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_6_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_6.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_7") {
			    	popup_camera = new BABYLON.FreeCamera("Camera10", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_7.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];

			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_7_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_7.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if (product_name == "Sandal_8") {
			    	popup_camera = new BABYLON.FreeCamera("Camera11", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_8.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/Sandal_8_NormalsMap.jpg", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_8.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    } else if(product_name == "Shoe2" || product_name == "Shoe2c" || product_name == "Shoe2_v2" || product_name == "Shoe2c_v2"){

			    	popup_camera = new BABYLON.FreeCamera("Camera12", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Shoe2_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe2_normal.jpg", scene);
    					material.emissiveTexture = new BABYLON.Texture("assets/shoe2_C.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "shoe3" || product_name == "shoe3c" || product_name == "shoe3c2" || product_name == "shoe3_v2"
			    	|| product_name == "shoe3c_v2" || product_name == "shoe3c2_v2"){

			    	popup_camera = new BABYLON.FreeCamera("Camera13", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe3_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe3_Normals.jpg", scene);
    					material.emissiveTexture = new BABYLON.Texture("assets/shoe3_C.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "shoe4" || product_name == "shoe4_v2"){
			    	popup_camera = new BABYLON.FreeCamera("Camera14", new BABYLON.Vector3(-837.38,117.83,2480.60), scene);
			    	popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe4_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe4_normal.jpg", scene);
    					material.emissiveTexture = new BABYLON.Texture("assets/shoe4_C.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "shoe6" || product_name == "shoe6_v2"){
			    	popup_camera = new BABYLON.FreeCamera("Camera15", new BABYLON.Vector3(-86.7710017234099 , 120.00, 2425.899441711859), scene);
			    	popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe6_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe6_normal.jpg", scene);
  						material.emissiveTexture = new BABYLON.Texture("assets/shoe6_C.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "shoe7" || product_name == "shoe7_v2"
			    	|| product_name == "shoe7c" || product_name == "shoe7c_v2"
			    	|| product_name == "shoe7c2" || product_name == "shoe7c2_v2"){
			    	popup_camera = new BABYLON.FreeCamera("Camera16", new BABYLON.Vector3(-106.7710017234099 , 100.00, 2425.899441711859), scene);
			    	popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "shoe7_v2.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
						meshmodel.setPivotMatrix(BABYLON.Matrix.Translation(0, 0, 0));
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.bumpTexture = new BABYLON.Texture("assets/shoe7_normal.jpg", scene);
    					material.emissiveTexture = new BABYLON.Texture("assets/shoe7_C.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "handbag"){
			    	popup_camera = new BABYLON.FreeCamera("Camera17", new BABYLON.Vector3(-668.43 , 40.82 , 2000.0595431409838), scene);
			    	//popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "handbag.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/handbag.jpg", scene);
    					material.bumpTexture = new BABYLON.Texture("assets/handbag_NormalsMap.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
			    }else if(product_name == "Sandal_9"){
			    	popup_camera = new BABYLON.FreeCamera("Camera18", new BABYLON.Vector3(-979,35,2256), scene);
			    	//popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "Sandal_9.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
			       	
			            //Applying Texture
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/Sandal_9.jpg", scene);
    					material.bumpTexture = new BABYLON.Texture("assets/Sandal_9_NormalsMap.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
				    });
				}else if(product_name == "Photo_Frame_Low"){
			    	popup_camera = new BABYLON.FreeCamera("Camera19", new BABYLON.Vector3(-800,65,2256), scene);
			    	//popup_camera.attachControl(canvas2,false);
			 		
				    BABYLON.SceneLoader.ImportMesh("", "assets/", "photo_frame.babylon", scene, function (newMeshes) {
						meshmodel = newMeshes[0];
						meshmodel1 = newMeshes[1];
			   
			            var material = new BABYLON.StandardMaterial("material", scene);
			            material.emissiveTexture = new BABYLON.Texture("assets/lg.jpg", scene);
			            meshmodel.material = material;
			            meshmodel.checkCollisions = true;
                        meshmodel.isPickable = false;

			            var material1 = new BABYLON.StandardMaterial("material1", scene);
			            material1.emissiveTexture = new BABYLON.Texture("assets/Archmodel.jpg", scene);
			            meshmodel1.material = material1;
			            meshmodel1.checkCollisions = true;
                        meshmodel1.isPickable = false;
					});
					}else if (product_name == "tshirt12" ||product_name == "tshirt13") {
			    	popup_camera = new BABYLON.FreeCamera("Camera20", new BABYLON.Vector3(320,770.5736,3700.64087), scene);
			    	//popup_camera = new BABYLON.ArcRotateCamera("Camera01", 0, 0.8, 1000, BABYLON.Vector3.Zero(), scene);
				     BABYLON.SceneLoader.ImportMesh("","assets/", "t_shirt.babylon", scene, function(newMeshes){
				        // Set the target of the camera to the first imported mesh
				        //camera.target = newMeshes[0];
						meshmodel = newMeshes[0];
			       		//meshmodel.position = new BABYLON.Vector3(0,0,50);

			            //Applying Texture
			             var material = new BABYLON.StandardMaterial("material", scene);
                         material.bumpTexture = new BABYLON.Texture("assets/t1_NormalsMap.jpg", scene);
                        material.emissiveTexture = new BABYLON.Texture("assets/tshirt1.jpg", scene);
			            meshmodel.material = material;
                        meshmodel.isPickable = false;
			            //meshmodel.checkCollisions = true;
				    });
				}

				canvas2.addEventListener("pointerdown", function (evt) {
	                currentPosition.x = evt.clientX;
	                currentPosition.y = evt.clientY;
	                currentRotation.x = meshmodel.rotation.x;
	                currentRotation.y = meshmodel.rotation.y;
	                clicked = true;
					//console.log(canvas);
			    });

			    canvas2.addEventListener("pointermove", function (evt) {
					if (clicked) {
						//set mousemov as true if the pointer is still down and moved
						mousemov = true;

					}
			        if (!clicked) {
			            return;
			        }
					//set last angle before changing the rotation
					oldAngle.x = meshmodel.rotation.x;
					oldAngle.y = meshmodel.rotation.y;
					//rotate the mesh
			        meshmodel.rotation.y -= (evt.clientX - currentPosition.x) / 300.0;
			        meshmodel.rotation.x -= (evt.clientY - currentPosition.y) / 300.0;
					//set the current angle after the rotation
					newAngle.x = meshmodel.rotation.x;
					newAngle.y = meshmodel.rotation.y;
					//calculate the anglediff
					lastAngleDiff.x = newAngle.x - oldAngle.x;
					lastAngleDiff.y = newAngle.y - oldAngle.y;
					currentPosition.x = evt.clientX;
					currentPosition.y = evt.clientY;
			    });
				
			    canvas2.addEventListener("pointerup", function (evt) {
			        clicked = false;
			    });
			    // Move the light with the camera
			    scene.registerBeforeRender(function () {
			        //light.position = camera.position;
			        //engine2.hideLoadingUI();
		    		if (typeof(meshmodel) != "undefined" && !clicked) {
		    			meshmodel.rotation.y += 0.01;
		    			meshmodel1.rotation.y +=0.01;
		    		}
			    });

			    return scene;
			}

			var meshmodel;
			var meshmodel1;
			var canvas2 = document.getElementById("renderCanvas1");
	    	var engine2 = new BABYLON.Engine(canvas2, true);
	    	engine2.enableOfflineSupport = false;
	    	engine2.displayLoadingUI();

	        var scene2 = createScene();

            scene2.executeWhenReady(function () {
                //canvas.style.opacity = 1;

                /*if (scene.activeCamera && !notAttachControl) {
                    scene.activeCamera.attachControl(canvas);

                    if (newScene.activeCamera.keysUp) {
                        newScene.activeCamera.keysUp.push(90); // Z
                        newScene.activeCamera.keysUp.push(87); // W
                        newScene.activeCamera.keysDown.push(83); // S
                        newScene.activeCamera.keysLeft.push(65); // A
                        newScene.activeCamera.keysLeft.push(81); // Q
                        newScene.activeCamera.keysRight.push(69); // E
                        newScene.activeCamera.keysRight.push(68); // D
                    }
                }

                if (then) {
                    then();
                }*/
                engine2.hideLoadingUI();
            });			        

	        // Register a render loop to repeatedly render the scene
	        engine2.runRenderLoop(function () {
	            scene2.render();
	        });

	        // Watch for browser/canvas resize events
	        window.addEventListener("resize", function () {
	            engine2.resize();
	        });

	        document.getElementById('nametag').innerHTML = product_name;
	        //document.getElementById("quant").reset();

		}
	}
      /*else if(is_popup_open == true) {
		document.getElementById("popup").style.display="none";
    	scene.activeCamera = camera;
     	scene.activeCamera.attachControl(canvas);  		
		is_popup_open = false;
		//document.getElementById("quant").reset();
	} */

};
 var i = 1;
    function buttoninc() {
        i++;
        document.getElementById('quant').value = i;
    }
    function buttondec() {
        //document.getElementById('quant').value = i;
        if (i==1){
        	i=1;
        }else{
        i--;
        }
        document.getElementById('quant').value = i;
    }
    var j=0;
function addToCart() {
	if(i==1){
		j++
	}
	else if(i>1){
		j=j+i;
	}
         //j++;
         //document.getElementById("quant").reset();
        document.getElementById('qty').value = j;
        //document.getElementById("quant").value=1;
        //i=1;
    
	//alert("added to cart!");
}
//................redBox .........................
