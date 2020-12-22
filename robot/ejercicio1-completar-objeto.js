
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,10,0);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 0, 0, 0 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT

		var mesa3=new THREE.Geometry();      

		var mesa2=new THREE.Geometry();
		var mesa=new THREE.Geometry();
	//PC

		
	
//-------------------------------------------------------------------------------------------------------------

    mesa2.vertices.push(new THREE.Vector3(1.5,0.02,-3.5));//0
	mesa2.vertices.push(new THREE.Vector3(-1,0.02,-1));//1
	mesa2.vertices.push(new THREE.Vector3(-2.5,0.02,-2.5));//2
	mesa2.vertices.push(new THREE.Vector3(0,0.02,-5));//3
	
	mesa2.vertices.push(new THREE.Vector3(1.5,3.2,-3.5));//0
	mesa2.vertices.push(new THREE.Vector3(-1,3.2,-1));//1
	mesa2.vertices.push(new THREE.Vector3(-2.5,3.2,-2.5));//2
	mesa2.vertices.push(new THREE.Vector3(0,3.2,-5));//3

	//-------------------------------
	mesa2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa2.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa2.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	mesa2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa2.faces.push( new THREE.Face3( 1, 6, 5 ) );
	var cpu= new THREE.Geometry();
	cpu.vertices.push(new THREE.Vector3(-1,-0.01,-3));//0
	cpu.vertices.push(new THREE.Vector3(-0,-0.01,-3.5));//1
	cpu.vertices.push(new THREE.Vector3(-0.1,-0.01,-3.25));//2
	cpu.vertices.push(new THREE.Vector3(-0.75,-0.01,-1.5));//3
	
	cpu.vertices.push(new THREE.Vector3(-1,-0.90,-3));//0
	cpu.vertices.push(new THREE.Vector3(-0,-0.90,-3.5));//1
	cpu.vertices.push(new THREE.Vector3(-0.1,-0.90,-3.25));//2
	cpu.vertices.push(new THREE.Vector3(-0.75,-0.90,-1.5));//3
	//PC
	cpu.faces.push( new THREE.Face3( 0, 1, 2 ) );
	cpu.faces.push( new THREE.Face3( 0, 3, 2 ) );
	cpu.faces.push( new THREE.Face3( 0, 2, 1 ) );
	cpu.faces.push( new THREE.Face3( 0, 2, 3 ) );
	
	cpu.faces.push( new THREE.Face3( 4, 5, 6 ) );
	cpu.faces.push( new THREE.Face3( 4, 7, 6 ) );
	cpu.faces.push( new THREE.Face3( 4, 6, 5 ) );
	cpu.faces.push( new THREE.Face3( 4, 6, 7 ) );

	cpu.faces.push( new THREE.Face3( 0, 4, 1 ) );
	cpu.faces.push( new THREE.Face3( 1, 5, 4 ) );
	cpu.faces.push( new THREE.Face3( 0, 3, 7 ) );
	cpu.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	cpu.faces.push( new THREE.Face3( 1, 2, 6 ) );
	cpu.faces.push( new THREE.Face3( 1, 5, 6 ) );

	cpu.faces.push( new THREE.Face3( 0, 1, 4 ) );
	cpu.faces.push( new THREE.Face3( 1, 4, 5 ) );
	cpu.faces.push( new THREE.Face3( 0, 7, 3 ) );
	cpu.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	cpu.faces.push( new THREE.Face3( 1, 6, 2 ) );
	cpu.faces.push( new THREE.Face3( 1, 6, 5 ) );

	//PC1
	var colorcpu=new THREE.MeshBasicMaterial({color: 0x24262A});
	var cpuf=new THREE.Mesh(cpu, colorcpu);

    mesa.vertices.push(new THREE.Vector3(1.5,-0.7,-3.5));//0
	mesa.vertices.push(new THREE.Vector3(-1,-0.7,-1));//1
	mesa.vertices.push(new THREE.Vector3(-2.5,-0.7,-2.5));//2
	mesa.vertices.push(new THREE.Vector3(0,-0.7,-5));//3
	
	mesa.vertices.push(new THREE.Vector3(1.5,-5.1,-3.5));//0
	mesa.vertices.push(new THREE.Vector3(-1,-5.1,-1));//1
	mesa.vertices.push(new THREE.Vector3(-2.5,-5.1,-2.5));//2
	mesa.vertices.push(new THREE.Vector3(0,-5.1,-5));//3

    
	//-------------------------------
	mesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	mesa.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa.faces.push( new THREE.Face3( 1, 6, 5 ) );

	///-----------
	/*mesa.vertices.push(new THREE.Vector3(0.8,0.02,-0.5));//0
	mesa.vertices.push(new THREE.Vector3(1,0.02,-1));//1
	mesa.vertices.push(new THREE.Vector3(1.5,0.02,-1.5));//2
	mesa.vertices.push(new THREE.Vector3(0,0.02,-2));//3
	
	mesa.vertices.push(new THREE.Vector3(0.8,-1.8,-0.5));//0
	mesa.vertices.push(new THREE.Vector3(1,-1.8,-1));//1
	mesa.vertices.push(new THREE.Vector3(1.5,-1.8,-1.5));//2
	mesa.vertices.push(new THREE.Vector3(0,-1.8,-2));//3

	//-------------------------------
	mesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	mesa.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa.faces.push( new THREE.Face3( 1, 6, 5 ) );
	
    mesa3.vertices.push(new THREE.Vector3(-0.5,0.02,0.2));//0
	mesa3.vertices.push(new THREE.Vector3(1,0.02,0.7));//1
	mesa3.vertices.push(new THREE.Vector3(1.3,0.02,1.5));//2
	mesa3.vertices.push(new THREE.Vector3(0,0.02,1));//3
	
	mesa3.vertices.push(new THREE.Vector3(-0.5,1.8,0.2));//0
	mesa3.vertices.push(new THREE.Vector3(1,1.8,0.7));//1
	mesa3.vertices.push(new THREE.Vector3(1.3,1.8,1.5));//2
	mesa3.vertices.push(new THREE.Vector3(0,1.8,1));//3

	//-------------------------------
	mesa3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa3.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa3.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa3.faces.push( new THREE.Face3( 0, 2, 3 ) );


    mesa3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa3.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa3.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa3.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa3.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa3.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa3.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa3.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa3.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa3.faces.push( new THREE.Face3( 1, 5, 6 ) );

	
	mesa3.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa3.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa3.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa3.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa3.faces.push( new THREE.Face3( 1, 6, 5 ) );
*/
    var esf= new THREE.SphereGeometry(0.4,18,15);
    var materiales1 = new THREE.MeshBasicMaterial( { color: 0x303B34 } );
    
    //esferas1

    var esfera1 = new THREE.Mesh(esf,materiales1);
	esfera1.position.x=1.0;
	esfera1.position.y=2.5;
	esfera1.position.z=-2.45;
	
	var esfera2 = new THREE.Mesh(esf,materiales1);
	esfera2.position.x=-0.3;
	esfera2.position.y=2.5;
	esfera2.position.z=-1.15;
	
//CPU1.5,3.2,-3.5
    var colormesa=new THREE.MeshBasicMaterial({color: 0x0CF36D });
	 var colormes=new THREE.MeshBasicMaterial({color: 0xE5A001 });
	
	var mesa2f=new THREE.Mesh(mesa2,colormes);
    var mesaf=new THREE.Mesh(mesa,materiales1);

    var mesa3f=new THREE.Mesh(mesa3,materiales1);



	
	//MESA
	
	



	
	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	
//-------------------------------------------------------------------------------------------------------------------	
	
	
	//scene.add(mesa3f);
	
	scene.add(mesa2f);
	scene.add(mesaf);
	scene.add(esfera1);
	scene.add(esfera2);
	scene.add(cpuf);
	
	
	
	
	
	

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
