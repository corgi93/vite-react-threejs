# soudlx threejs toy


## 웹 애플리케이션에서 threejs
- react-three-fiber
    - 추상화된 hooks를 제공해줌. 
- three , @types/three
    - three라이브러리로 threejs.org에서 제공하는 모든걸 사용할 수 있다! 
    ```
    // OrbitContols를 three에서 가져와서 사용 가능
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    ```
- fiber과 three 라이브러리를 둘 다 이용해서 Nextjs나 Vite, CRA에 얹어서 사용하면 된다.


## 용어 정리
### mesh
mesh = Geometry(형태) + Material(재질) + Texture(질감)

### glTF(GL Transmission Format)
gltf는 3d모델을 저장한느 형식 중 하나. json형식으로 되어있다. 
로드 시키는 건 크게 어렵지 않을듯! 라이브러리에서 제공

--------
## react-three-fiber 
### hooks
- useFrame

- useThree
이 후크를 통해 렌더러, 씬, 카메라 등 상태 모델에 대한 액세스를 제공. 또한 화면 및 뷰포트 좌표에서 캔버스 현재 크기를 제공. three의 대부분을이 훅에서 제어 가능.

```
// THREE 객체 생성하는 걸 이 훅으로 래핑해서 구현
new THREE.x
```

[reference]
- [웹 3D 모델 최적화 기법 소개](https://d2.naver.com/helloworld/6152907)