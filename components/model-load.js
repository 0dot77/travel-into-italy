import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/**
 *
 * @param {sc} scale
 * @param {path} path
 * @returns model
 */

export default function ModelLoader({ sc, path }) {
  const gltf = useLoader(GLTFLoader, path);
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={sc}
      />
    </>
  );
}
