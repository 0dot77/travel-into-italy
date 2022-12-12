import ModelLoader from '../components/model-load';

export default function ModelRender({ modelPath, modelScale }) {
  return (
    <canvas
      linear
      gl={{
        powerPreference: 'high-performance',
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false,
      }}
      className="w-full h-full"
    >
      <ModelLoader
        sc={modelScale}
        path={modelPath}
      />
    </canvas>
  );
}
