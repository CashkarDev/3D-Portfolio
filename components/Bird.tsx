/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 bird.gltf -t 
Author: NORBERTO-3D (https://sketchfab.com/norberto3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
Title: phoenix bird
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    MatI_Ride_FengHuang_01a: THREE.MeshStandardMaterial
    MatI_Ride_FengHuang_01b: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Take 001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Bird(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/bird.gltf') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

useEffect(()=>{
  actions["Take 001"].play()
},[actions])

  useFrame(({clock,camera})=>{

    group.current.position.y=Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (group.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      group.current.rotation.y = Math.PI;
    } else if (group.current.position.x < camera.position.x -8) {
      // Change direction to forward and reset the bird's rotation
      group.current.rotation.y = 0;
    }
      // Update the X and Z positions based on the direction
      if (group.current.rotation.y === 0) {
        // Moving forward
        group.current.position.x += 0.01;
        group.current.position.z -= 0.01;
      } else {
        // Moving backward
        group.current.position.x -= 0.01;
        group.current.position.z += 0.01;
      }
    });
  return (
    <group ref={group} scale={0.003}  {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[-0.625, 0, -17.137]} rotation={[-Math.PI / 2, 0, 0.053]}>
          <group name="5f59736c86d4457fa045aec4aea6b7e0fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.MatI_Ride_FengHuang_01a} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.MatI_Ride_FengHuang_01b} skeleton={nodes.Object_8.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bird.gltf')
