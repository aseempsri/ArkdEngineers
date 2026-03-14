import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
  inject,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene3d',
  standalone: true,
  template: '',
  styles: [':host { display: block; position: absolute; inset: 0; }'],
})
export class Scene3DComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId = 0;
  private clock = new THREE.Clock();
  private orbMesh!: THREE.Mesh;
  private particlePoints!: THREE.Points;
  private floatingMeshes: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number }[] = [];

  ngAfterViewInit() {
    const container = this.el.nativeElement;
    if (!container) return;

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 8);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060a14);
    this.scene.fog = new THREE.Fog(0x060a14, 8, 30);

    // Lights
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const pl1 = new THREE.PointLight(0x2563eb, 1);
    pl1.position.set(10, 10, 10);
    this.scene.add(pl1);
    const pl2 = new THREE.PointLight(0x06b6d4, 0.5);
    pl2.position.set(-10, -5, -10);
    this.scene.add(pl2);
    const spot = new THREE.SpotLight(0x2563eb, 0.8);
    spot.position.set(0, 10, 0);
    spot.angle = 0.3;
    spot.penumbra = 1;
    this.scene.add(spot);

    // Central orb - sphere with semi-transparent material (simplified without distort)
    const orbGeo = new THREE.SphereGeometry(1.8, 64, 64);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.6,
    });
    this.orbMesh = new THREE.Mesh(orbGeo, orbMat);
    this.scene.add(this.orbMesh);

    // Inner glow sphere
    const glowGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.08,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    this.scene.add(glowMesh);

    // Orbiting rings (torii)
    const torusGeo1 = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
    });
    const torus1 = new THREE.Mesh(torusGeo1, torusMat1);
    torus1.rotation.x = Math.PI / 3;
    this.scene.add(torus1);

    const torusGeo2 = new THREE.TorusGeometry(3.2, 0.015, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.3,
    });
    const torus2 = new THREE.Mesh(torusGeo2, torusMat2);
    torus2.rotation.x = Math.PI / 2.5;
    torus2.rotation.y = Math.PI / 6;
    this.scene.add(torus2);

    // Particle field
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    this.particlePoints = new THREE.Points(particleGeo, particleMat);
    this.scene.add(this.particlePoints);

    // Stars (many small points)
    const starCount = 1000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 20 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    this.scene.add(stars);

    // Grid floor
    const gridHelper = new THREE.GridHelper(40, 40, 0x1e3a5f, 0x0f1f33);
    gridHelper.position.y = -4;
    gridHelper.rotation.x = -Math.PI / 2;
    this.scene.add(gridHelper);

    // Floating geometry (icosahedrons)
    const positions_arr: [number, number, number][] = [
      [-5, 2, -3],
      [5, -1, -4],
      [-3, -2, -5],
      [4, 3, -6],
    ];
    const colors = [0x2563eb, 0x06b6d4, 0x1e40af, 0x0891b2];
    const speeds = [0.8, 1.2, 0.6, 1];

    positions_arr.forEach((pos, i) => {
      const geo = new THREE.IcosahedronGeometry(0.6, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      this.scene.add(mesh);
      this.floatingMeshes.push({
        mesh,
        basePos: new THREE.Vector3(pos[0], pos[1], pos[2]),
        speed: speeds[i],
      });
    });

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.onResize);
    this.animate();
  }

  private onResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer?.setSize(window.innerWidth, window.innerHeight);
  };

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    const t = this.clock.getElapsedTime();

    if (this.orbMesh) {
      this.orbMesh.rotation.y = t * 0.15;
    }
    if (this.particlePoints) {
      this.particlePoints.rotation.y = t * 0.02;
      this.particlePoints.rotation.x = t * 0.01;
    }
    this.floatingMeshes.forEach(({ mesh, basePos, speed }) => {
      mesh.rotation.x = t * 0.3 * speed;
      mesh.rotation.y = t * 0.2 * speed;
      mesh.position.y = basePos.y + Math.sin(t * speed * 2) * 1.5;
      mesh.position.x = basePos.x + Math.sin(t * 0.5 * speed) * 0.5;
    });

    this.renderer?.render(this.scene, this.camera);
  };

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
    cancelAnimationFrame(this.animationId);
    this.renderer?.dispose();
    this.scene?.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose();
        (obj.material as THREE.Material)?.dispose();
      }
    });
  }
}
