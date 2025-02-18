/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh1_Mesh1015: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Armature|mixamo.com|Layer0' | 'Mesh1_Mesh1.015Action'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function GiantModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/assets3d/giant.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  useEffect(() => {
    // Play the first action in the actions array
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0] as ActionName] as THREE.AnimationAction; // Type assertion added
      action?.play(); // Play the action   
    
    }
    }, [actions]); //

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Mesh1_Mesh1015"
            geometry={nodes.Mesh1_Mesh1015.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Mesh1_Mesh1015.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/giant.glb')
