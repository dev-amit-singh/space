// 'use client'

// import { Canvas, useFrame } from "@react-three/fiber"
// import { Points, PointMaterial, Preload } from "@react-three/drei"
// import { useState, useRef, Suspense } from "react"
// import React  from 'react'
// // @ts-ignore
// import * as random from 'maths/random/dist/maath-random.esm';
// import { Group } from "three"

// const StarBackground = (props: any) => {
//     const ref: any = useRef(0);
//     const [sphare] = useState(() => random.insphere(new Float32Array(5000), { radius: 1.2 }));
//    useFrame((state, delta)=>{
//     ref.current.rotation.x +=delta/10;
//     ref.current.rotation.y +=delta/15;
    

//    }) 
//   return (
    
       
//     <group rotation={[0, 0, Math.PI / 4]}>
//         <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled
//         {...props}        
//         >
//             <PointMaterial
//             transparent
//             color='#ffffff'
//             size={0.002}
//             sizeAttenuation={true}
//             depthWrite={false}
//             />

//         </Points>

//     </group>
    
//   )
// }
// const StarCanvas = ()=>(
//     <div className="w-full h-auto fixed inset-0 z-[20]">
//         <Canvas camera={{position: [0, 0, 1]}}>
//             <Suspense fallback={null}>
//                 <StarBackground/>

//             </Suspense>
//         </Canvas>
//     </div>
// ) 

// export default StarCanvas

