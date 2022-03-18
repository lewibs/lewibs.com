import React from "react"
import {Canvas, useFrame, useThree} from "react-three-fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from "three";
import { CameraShake, OrbitControls, Stars } from "@react-three/drei";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
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
                <meshLambertMaterial attach="material" color="red" />
            </mesh>
            <mesh position={[position[0] + (-0.2 * multiplier), position[1] - 0.1, position[2] + 4]} rotation={[1.6, 0, 0.07 * multiplier]}>
                <coneBufferGeometry args={[0.05, 10, 100]} />
                <meshLambertMaterial attach="material" color="red" />
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

function Item() {
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
            setEyes(<LaserEyes position={[0.5,-0.2,2.5]} />);
            //wait for a second and then remove the eyes
            setTimeout(() => {
                setEyes();
            }, 100);
        });

        window.addEventListener("mouseup", () => {
            setEyes();
        });
    })


    THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());
    const materials = useLoader(MTLLoader, "/head/head.mtl");
    const obj = useLoader(OBJLoader, "/head/head.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <mesh position={[0,0,-5]} rotation={[x, y, 0]}>
            {eyes}
            <primitive object={obj} position={[0,-2, 0]} scale={1.7} />
        </mesh>
    );
}

function Me() {
    return (
        <Canvas >
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <Item />
                <Text hAlign="center" position={[0, 3, -7]} children="LEWIBS" size={0.7} rotation={[-0.4,0,0]}/>
                <Stars />
            </Suspense>
        </Canvas>
    );
}

export default Me;