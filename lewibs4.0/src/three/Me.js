import React from "react"
import {Canvas} from "react-three-fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Text from "./Text";

function Laser({position}) {
    let multiplier = 1;

    if (position[0] < 0) {
        multiplier = -1;
    }

    return (
        <>
            <mesh position={position} scale={0.2}>
                <sphereBufferGeometry attach="geometry" />
                <meshBasicMaterial attach="material" color="red" />
            </mesh>
            <mesh position={[position[0] + (-0.2 * multiplier), position[1] - 0.1, position[2] + 4]} rotation={[1.6, 0, 0.05 * multiplier]}>
                <coneBufferGeometry args={[0.05, 10, 100]} />
                <meshBasicMaterial attach="material" color="red" />
            </mesh>
        </>
    )
}

function LaserEyes({position}) {
    return (
        <>
            <Laser position={position}/>
            <Laser position={[position[0] * -1, position[1], position[2]]}/>
        </>
    )
}

function Suit({position, scale}) {
    const fbx = useLoader(FBXLoader, "3d/suit/astronaut-helmet/source/Sketchfab Model.fbx");
    return <primitive object={fbx} position={position} scale={scale} />
}

function Body({position, scale, rotation}) {
    //make a cilinder
    return(
        <mesh position={position} scale={scale} rotation={rotation}>
            <cylinderBufferGeometry attach="geometry" args={[0.5, 0.5, 1, 32]} />
            <meshLambertMaterial attach="material" color={0x0b1d71} />
        </mesh>
    )
}

function Head() {
    const [x, setX] = React.useState(-0.1);
    const [y, setY] = React.useState(0);
    const [eyes, setEyes] = React.useState();

    React.useEffect(()=>{
        window.addEventListener('mousemove', (e) => {
            let xPos = e.clientY - (window.innerHeight / 2);
            let yPos = e.clientX - (window.innerWidth / 2);
            setX(xPos / window.innerWidth);
            setY(yPos / window.innerHeight);
        });

        window.addEventListener("mousedown", () => {
            setEyes(<LaserEyes position={[0.5,-0.2,1]} />);
            //wait for a second and then remove the eyes
            setTimeout(() => {
                setEyes();
            }, 100);
        });

        window.addEventListener("mouseup", () => {
            setEyes();
        });
    })

    //THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());
    const materials = useLoader(MTLLoader, "3d/head/head.mtl");
    const obj = useLoader(OBJLoader, "3d/head/head.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <mesh position={[0,0,-3]} rotation={[x, y, 0]}>
            {eyes}
            <primitive object={obj} position={[0,-2,-1.5]} scale={1.7} /> //head
        </mesh>
    );
}

function Car({position, scale, rotation}) {
    const car = useLoader(GLTFLoader, "3d/roadster/roadster.glb");
    console.log(car);
    return <primitive object={car.scene} position={position} scale={scale} rotation={rotation} brightness={5} color={"red"} castShadow/>
}

//normalixe x to be between 0 and 1 
function squish(x, min, max) {
    x = (x - 200) / (1200 - 200);

    //if x is less then min return min
    if (x < min) {
        return min;
    } else if (x > max) {
        return max;
    }

    return x;
}


function Me() {
    return (
        <Canvas camera={{fov:75, near: 0.1, far: 1000, position: [1, -2, 8]}}>
            <Suspense fallback={null}>
                <Head />
                <Suit position={[0,-7,-3.5]} scale={0.15}/>
                <Body position={[0,-3.4,-4]} scale={3.5} rotation={[0.3,0,0]}/>
                <Car rotation={[0,3.1,0]} position={[-5.6, -6, 31]} scale={120}/>
                {/*<Text hAlign="center" position={[0, 2.5, -5.5]} children="LEWIBS" size={squish(window.innerWidth, 0.3, 0.6)} rotation={[-0.4,0,0]}/>*/}
                <Stars />
                <OrbitControls/>
                <directionalLight color={0xF4E99B} position={[0,50,50]} intensity={2} />
            </Suspense>
        </Canvas>
    );
}

export default Me;